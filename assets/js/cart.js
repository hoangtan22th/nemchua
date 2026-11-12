/* ==========================================================================
   CART & CHECKOUT LOGIC (TBAY GROUP)
   Quản lý giỏ hàng qua localStorage (key: tbay_cart)
   Quy tắc:
   - Thêm vào giỏ hàng: nếu sản phẩm đã tồn tại (cùng ID + tùy chọn) -> cộng dồn số lượng.
   - Cập nhật số lượng, xóa sản phẩm, tính tạm tính và tổng cộng.
   - Hỗ trợ mã ưu đãi.
   - Xử lý Đặt hàng -> lưu đơn vào tbay_last_order -> chuyển trang Order Complete.
   - Hoàn toàn không dùng icon trong cấu trúc trang giỏ hàng/thanh toán.
   ========================================================================== */

(function () {
  'use strict';

  const CART_STORAGE_KEY = 'tbay_cart';
  const ORDER_STORAGE_KEY = 'tbay_last_order';
  const COUPON_STORAGE_KEY = 'tbay_coupon';

  // Dữ liệu mẫu ban đầu khớp với mockup khi người dùng chưa từng thêm sản phẩm
  const DEFAULT_DEMO_CART = [
    {
      id: 2,
      name: "Nệm cao su thiên nhiên TBAY Latex Premium – Siêu đàn hồi, êm ái, nâng đỡ từng đường cong trên cơ thể",
      image: "./assets/images/products/product-1.jpg",
      price: 9490000,
      originalPrice: 11990000,
      quantity: 1,
      size: "160X200",
      thickness: "10",
      gift: "LỰA CHỌN 1"
    }
  ];

  /* --- Các hàm tiện ích --- */
  function getCart() {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw === null) {
      // Khởi tạo mặc định lần đầu
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(DEFAULT_DEMO_CART));
      return [...DEFAULT_DEMO_CART];
    }
    try {
      return JSON.parse(raw) || [];
    } catch (e) {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadge();
  }

  function formatVND(num) {
    if (typeof num !== 'number') num = parseInt(num) || 0;
    return num.toLocaleString('vi-VN') + '₫';
  }

  function updateCartBadge() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + (parseInt(item.quantity) || 1), 0);
    document.querySelectorAll('.header__cart-badge').forEach(badge => {
      badge.textContent = totalQty;
    });
  }

  function showToast(message) {
    let toast = document.getElementById('cartToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cartToast';
      toast.className = 'cart-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <span>${message}</span>
      <a href="./cart.html" class="cart-toast__link">Xem giỏ hàng</a>
    `;
    toast.classList.add('is-active');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove('is-active');
    }, 3500);
  }

  /* --- Thêm vào giỏ hàng (Cộng dồn nếu đã tồn tại) --- */
  function addToCart(item) {
    const cart = getCart();
    const qtyToAdd = parseInt(item.quantity) || 1;

    // Tìm sản phẩm trùng khớp: cùng ID, cùng kích thước, độ dày, quà tặng (hoặc mẫu)
    const existingIndex = cart.findIndex(it => {
      const matchId = String(it.id) === String(item.id);
      const matchSize = (it.size || '').trim().toLowerCase() === (item.size || '').trim().toLowerCase();
      const matchThickness = (it.thickness || '').trim().toLowerCase() === (item.thickness || '').trim().toLowerCase();
      const matchGift = (it.gift || '').trim().toLowerCase() === (item.gift || '').trim().toLowerCase();
      return matchId && matchSize && matchThickness && matchGift;
    });

    if (existingIndex > -1) {
      // Đã tồn tại -> CỘNG DỒN SỐ LƯỢNG
      cart[existingIndex].quantity = (parseInt(cart[existingIndex].quantity) || 1) + qtyToAdd;
    } else {
      // Thêm mới
      cart.push({
        id: item.id,
        name: item.name || 'Sản phẩm TBAY',
        image: item.image || './assets/images/products/product-1.jpg',
        price: parseInt(item.price) || 0,
        originalPrice: parseInt(item.originalPrice) || 0,
        quantity: qtyToAdd,
        size: item.size || '',
        thickness: item.thickness || '',
        gift: item.gift || ''
      });
    }

    saveCart(cart);
    showToast(`Đã thêm "${item.name}" vào giỏ hàng!`);
  }

  /* --- Cập nhật số lượng --- */
  function updateQuantity(index, newQty) {
    const cart = getCart();
    if (!cart[index]) return;
    if (newQty <= 0) {
      removeFromCart(index);
      return;
    }
    cart[index].quantity = newQty;
    saveCart(cart);
    if (document.getElementById('cartTableBody')) {
      renderCartPage();
    }
  }

  /* --- Xóa sản phẩm --- */
  function removeFromCart(index) {
    const cart = getCart();
    if (index >= 0 && index < cart.length) {
      cart.splice(index, 1);
      saveCart(cart);
      if (document.getElementById('cartTableBody')) {
        renderCartPage();
      }
    }
  }

  /* --- Mã ưu đãi --- */
  function getAppliedCoupon() {
    try {
      return JSON.parse(sessionStorage.getItem(COUPON_STORAGE_KEY));
    } catch (e) {
      return null;
    }
  }

  function applyCoupon(code) {
    const normalized = (code || '').trim().toUpperCase();
    if (!normalized) {
      return { success: false, message: 'Vui lòng nhập mã giảm giá.' };
    }

    if (normalized === 'TBAY10' || normalized === 'GIAMGIA10') {
      const coupon = { code: normalized, discountPercent: 10, discountAmount: 0 };
      sessionStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupon));
      return { success: true, message: 'Áp dụng mã giảm giá 10% thành công!' };
    }

    if (normalized === 'TBAY500' || normalized === 'GIAM500K') {
      const coupon = { code: normalized, discountPercent: 0, discountAmount: 500000 };
      sessionStorage.setItem(COUPON_STORAGE_KEY, JSON.stringify(coupon));
      return { success: true, message: 'Áp dụng mã giảm giá 500.000₫ thành công!' };
    }

    return { success: false, message: 'Mã ưu đãi không hợp lệ hoặc đã hết hạn.' };
  }

  /* --- Tính toán tổng tiền --- */
  function calculateTotals() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, it) => sum + (it.price * (it.quantity || 1)), 0);
    const coupon = getAppliedCoupon();
    let discount = 0;

    if (coupon) {
      if (coupon.discountPercent > 0) {
        discount = Math.round((subtotal * coupon.discountPercent) / 100);
      } else if (coupon.discountAmount > 0) {
        discount = Math.min(coupon.discountAmount, subtotal);
      }
    }

    const total = Math.max(0, subtotal - discount);
    return { subtotal, discount, total, coupon };
  }

  /* ==================== 1. RENDER MỨC 1: SHOPPING CART ==================== */
  function renderCartPage() {
    const tbody = document.getElementById('cartTableBody');
    const layout = document.getElementById('cartLayout');
    const emptyBox = document.getElementById('cartEmptyBox');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    const discountRow = document.getElementById('cartDiscountRow');
    const discountVal = document.getElementById('cartDiscountVal');

    if (!tbody) return;

    const cart = getCart();

    if (cart.length === 0) {
      if (layout) layout.style.display = 'none';
      if (emptyBox) emptyBox.style.display = 'block';
      return;
    }

    if (layout) layout.style.display = 'grid';
    if (emptyBox) emptyBox.style.display = 'none';

    tbody.innerHTML = cart.map((item, idx) => {
      const itemSubtotal = (item.price || 0) * (item.quantity || 1);
      const metaParts = [];
      if (item.size) metaParts.push(`<div>KÍCH THƯỚC: ${item.size}</div>`);
      if (item.thickness) metaParts.push(`<div>ĐỘ DÀY: ${item.thickness}</div>`);
      if (item.gift) metaParts.push(`<div>QUÀ TẶNG: ${item.gift}</div>`);

      return `
        <tr data-index="${idx}">
          <td class="cart-table__td--product">
            <div class="cart-item-info">
              <button type="button" class="cart-item-remove-btn" data-action="remove" data-index="${idx}" title="Xóa sản phẩm">×</button>
              <div class="cart-item-thumb">
                <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="cart-item-desc">
                <a href="./details.html?id=${item.id}" class="cart-item-name">${item.name}</a>
                <div class="cart-item-meta">
                  ${metaParts.join('')}
                </div>
              </div>
            </div>
          </td>
          <td class="cart-table__td--price">
            <span class="cart-table__price">${formatVND(item.price)}</span>
          </td>
          <td class="cart-table__td--qty">
            <div class="cart-qty-ctrl">
              <button type="button" class="cart-qty-btn" data-action="minus" data-index="${idx}">-</button>
              <input type="text" class="cart-qty-input" value="${item.quantity}" readonly>
              <button type="button" class="cart-qty-btn" data-action="plus" data-index="${idx}">+</button>
            </div>
          </td>
          <td class="cart-table__td--subtotal">
            <span class="cart-table__subtotal">${formatVND(itemSubtotal)}</span>
          </td>
        </tr>
      `;
    }).join('');

    // Sự kiện xóa và tăng giảm số lượng
    tbody.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.currentTarget.dataset.action;
        const index = parseInt(e.currentTarget.dataset.index);
        const cartItem = cart[index];
        if (!cartItem) return;

        if (action === 'remove') {
          removeFromCart(index);
        } else if (action === 'minus') {
          updateQuantity(index, cartItem.quantity - 1);
        } else if (action === 'plus') {
          updateQuantity(index, cartItem.quantity + 1);
        }
      });
    });

    // Cập nhật tổng tiền
    const totals = calculateTotals();
    if (subtotalEl) subtotalEl.textContent = formatVND(totals.subtotal);
    if (totalEl) totalEl.textContent = formatVND(totals.total);

    if (discountRow && discountVal) {
      if (totals.discount > 0) {
        discountRow.style.display = 'table-row';
        discountVal.textContent = '-' + formatVND(totals.discount);
      } else {
        discountRow.style.display = 'none';
      }
    }
  }

  /* ==================== 2. RENDER MỨC 2: CHECKOUT DETAILS ==================== */
  function renderCheckoutPage() {
    const listContainer = document.getElementById('checkoutOrderList');
    const subtotalEl = document.getElementById('checkoutSubtotal');
    const totalEl = document.getElementById('checkoutTotal');
    const discountRow = document.getElementById('checkoutDiscountRow');
    const discountVal = document.getElementById('checkoutDiscountVal');
    const form = document.getElementById('checkoutForm');

    if (!listContainer) return;

    const cart = getCart();
    if (cart.length === 0) {
      window.location.href = './cart.html';
      return;
    }

    listContainer.innerHTML = cart.map(item => {
      const itemSubtotal = (item.price || 0) * (item.quantity || 1);
      const metaParts = [];
      if (item.size) metaParts.push(`<div>KÍCH THƯỚC: ${item.size}</div>`);
      if (item.thickness) metaParts.push(`<div>ĐỘ DÀY: ${item.thickness}</div>`);
      if (item.gift) metaParts.push(`<div>QUÀ TẶNG: ${item.gift}</div>`);

      return `
        <tr>
          <td>
            <div class="checkout-order-item-title">
              ${item.name} <span class="checkout-order-item-qty">× ${item.quantity}</span>
            </div>
            <div class="checkout-order-item-meta">
              ${metaParts.join('')}
            </div>
          </td>
          <td class="checkout-order-item-price">
            ${formatVND(itemSubtotal)}
          </td>
        </tr>
      `;
    }).join('');

    const totals = calculateTotals();
    if (subtotalEl) subtotalEl.textContent = formatVND(totals.subtotal);
    if (totalEl) totalEl.textContent = formatVND(totals.total);

    if (discountRow && discountVal) {
      if (totals.discount > 0) {
        discountRow.style.display = 'table-row';
        discountVal.textContent = '-' + formatVND(totals.discount);
      } else {
        discountRow.style.display = 'none';
      }
    }

    // Toggle thông tin ngân hàng khi chọn phương thức thanh toán
    const bankRadio = document.querySelector('input[name="payment_method"][value="bacs"]');
    const codRadio = document.querySelector('input[name="payment_method"][value="cod"]');
    const bankBox = document.getElementById('bankDescBox');
    const codBox = document.getElementById('codDescBox');

    function togglePaymentDesc() {
      if (bankRadio && bankRadio.checked) {
        if (bankBox) bankBox.style.display = 'block';
        if (codBox) codBox.style.display = 'none';
      } else {
        if (bankBox) bankBox.style.display = 'none';
        if (codBox) codBox.style.display = 'block';
      }
    }

    bankRadio?.addEventListener('change', togglePaymentDesc);
    codRadio?.addEventListener('change', togglePaymentDesc);
    togglePaymentDesc();

    // Xử lý submit đặt hàng
    form?.addEventListener('submit', (e) => {
      e.preventDefault();

      const firstName = document.getElementById('billingFirstName')?.value.trim();
      const lastName = document.getElementById('billingLastName')?.value.trim();
      const address = document.getElementById('billingAddress')?.value.trim();
      const phone = document.getElementById('billingPhone')?.value.trim();
      const note = document.getElementById('billingNote')?.value.trim();
      const paymentMethod = document.querySelector('input[name="payment_method"]:checked')?.value || 'cod';

      if (!firstName || !lastName || !address || !phone) {
        alert('Vui lòng điền đầy đủ các thông tin bắt buộc có dấu (*)');
        return;
      }

      // Tạo mã đơn hàng ngẫu nhiên 5 chữ số như mockup (vd: 95754)
      const orderCode = String(Math.floor(10000 + Math.random() * 90000));
      const today = new Date();
      const dateFormatted = today.getFullYear() + '-' +
        String(today.getMonth() + 1).padStart(2, '0') + '-' +
        String(today.getDate()).padStart(2, '0');

      const paymentTitle = paymentMethod === 'bacs' ? 'Chuyển khoản ngân hàng' : 'Trả tiền mặt khi nhận hàng';

      const orderData = {
        orderCode: orderCode,
        date: dateFormatted,
        customer: {
          firstName,
          lastName,
          fullName: `${lastName} ${firstName}`,
          address,
          phone,
          note
        },
        items: [...cart],
        subtotal: totals.subtotal,
        discount: totals.discount,
        total: totals.total,
        paymentMethod: paymentTitle
      };

      // Lưu đơn hàng vào localStorage
      localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orderData));

      // Xóa giỏ hàng sau khi đặt thành công
      saveCart([]);

      // Chuyển tới Bước 3: Order Complete
      window.location.href = `./order-complete.html?orderId=${orderCode}`;
    });
  }

  /* ==================== 3. RENDER MỨC 3: ORDER COMPLETE ==================== */
  function renderOrderCompletePage() {
    const cardEl = document.getElementById('orderCompleteCard');
    const tableBody = document.getElementById('completeTableBody');
    const addressBox = document.getElementById('completeAddressBox');
    const subtotalEl = document.getElementById('completeSubtotal');
    const totalEl = document.getElementById('completeTotal');
    const paymentMethodEl = document.getElementById('completePaymentMethod');
    const orderCodeEl = document.getElementById('completeOrderCode');
    const orderDateEl = document.getElementById('completeOrderDate');
    const orderTotalEl = document.getElementById('completeCardTotal');
    const orderPaymentEl = document.getElementById('completeCardPayment');

    if (!cardEl) return;

    let order = null;
    try {
      order = JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY));
    } catch (e) {
      order = null;
    }

    // Nếu không có dữ liệu đơn vừa đặt, lấy dữ liệu demo hiển thị
    if (!order) {
      order = {
        orderCode: '95754',
        date: '2026-11-12',
        customer: {
          fullName: 'tester tester',
          address: 'tester',
          phone: '0909123456',
          note: ''
        },
        items: [...DEFAULT_DEMO_CART],
        subtotal: 9490000,
        discount: 0,
        total: 9490000,
        paymentMethod: 'Trả tiền mặt khi nhận hàng'
      };
    }

    // Hiển thị Card bên phải
    if (orderCodeEl) orderCodeEl.textContent = order.orderCode;
    if (orderDateEl) orderDateEl.textContent = order.date;
    if (orderTotalEl) orderTotalEl.textContent = formatVND(order.total);
    if (orderPaymentEl) orderPaymentEl.textContent = order.paymentMethod;

    // Hiển thị Bảng Chi tiết bên trái
    if (tableBody && order.items) {
      tableBody.innerHTML = order.items.map(item => {
        const itemSubtotal = (item.price || 0) * (item.quantity || 1);
        const metaParts = [];
        if (item.size) metaParts.push(`<div>Kích Thước: ${item.size}</div>`);
        if (item.thickness) metaParts.push(`<div>Độ Dày: ${item.thickness}</div>`);
        if (item.gift) metaParts.push(`<div>extra_product_field: ${item.gift}</div>`);

        return `
          <tr>
            <td>
              <div class="complete-item-name">
                ${item.name} <span class="checkout-order-item-qty">× ${item.quantity}</span>
              </div>
              <div class="complete-item-meta">
                ${metaParts.join('')}
              </div>
            </td>
            <td class="complete-table-price">
              ${formatVND(itemSubtotal)}
            </td>
          </tr>
        `;
      }).join('');
    }

    if (subtotalEl) subtotalEl.textContent = formatVND(order.subtotal);
    if (totalEl) totalEl.textContent = formatVND(order.total);
    if (paymentMethodEl) paymentMethodEl.textContent = order.paymentMethod;

    // Hiển thị Địa chỉ thanh toán
    if (addressBox && order.customer) {
      addressBox.innerHTML = `
        <strong>${order.customer.fullName}</strong>
        <div>${order.customer.address}</div>
        <div>${order.customer.phone}</div>
        ${order.customer.note ? `<div style="margin-top: 6px; font-style: italic; color: #64748b;">Ghi chú: ${order.customer.note}</div>` : ''}
      `;
    }
  }

  /* ==================== 4. GẮN SỰ KIỆN TRANG CHI TIẾT SẢN PHẨM ==================== */
  function bindDetailsAddToCart() {
    const addCartBtn = document.querySelector('.details__btn-add-cart, .btn-add-cart');
    const buyNowBtn = document.querySelector('.details__btn-buy-now, .btn-buy-now');

    if (!addCartBtn && !buyNowBtn) return;

    function getSelectedDetailsData() {
      const urlParams = new URLSearchParams(window.location.search);
      const paramId = parseInt(urlParams.get('id')) || 3;
      const allProducts = typeof products !== 'undefined' ? products : [];
      const product = allProducts.find(p => p.id === paramId) || allProducts[0] || {};

      const title = document.querySelector('.details__title, .details-title')?.textContent.trim() || product.name || 'Nệm TBAY';
      const img = document.getElementById('mainProductImg')?.src || product.image || './assets/images/products/product-1.jpg';
      
      // Giá
      let price = product.salePrice || 9490000;
      let originalPrice = product.originalPrice || 11990000;
      const activePriceEl = document.getElementById('modelActivePrice');
      if (activePriceEl) {
        const textVal = activePriceEl.textContent.replace(/[^\d]/g, '');
        if (textVal) price = parseInt(textVal);
      }

      // Kích thước / Mẫu
      let size = '';
      const activeSizeBtn = document.querySelector('#sizeOptions .active, #sizeOptions .details__option-btn--active');
      if (activeSizeBtn) size = activeSizeBtn.dataset.val || activeSizeBtn.textContent.trim();
      if (!size) {
        const modelLabel = document.getElementById('selectedModelLabel');
        if (modelLabel) size = modelLabel.textContent.trim();
      }
      if (!size && product.sizes && product.sizes.length > 0) {
        size = product.sizes[0];
      }
      if (!size) size = '160X200';

      // Độ dày
      let thickness = '';
      const activeThicknessBtn = document.querySelector('#thicknessOptions .active, #thicknessOptions .details__option-btn--active');
      if (activeThicknessBtn) thickness = activeThicknessBtn.dataset.val || activeThicknessBtn.textContent.trim();
      if (!thickness && product.thickness && product.thickness.length > 0) {
        thickness = product.thickness[0];
      }
      if (!thickness) thickness = '10';

      // Quà tặng
      let gift = product.gift || 'LỰA CHỌN 1';

      // Số lượng
      const qtyInput = document.getElementById('qtyInput');
      const qty = parseInt(qtyInput?.value) || 1;

      return {
        id: product.id || paramId,
        name: title,
        image: img,
        price: price,
        originalPrice: originalPrice,
        size: size,
        thickness: thickness,
        gift: gift,
        quantity: qty
      };
    }

    addCartBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      const itemData = getSelectedDetailsData();
      addToCart(itemData);
    });

    buyNowBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      const itemData = getSelectedDetailsData();
      addToCart(itemData);
      window.location.href = './checkout.html';
    });
  }

  /* ==================== 5. KHỞI TẠO TỔNG QUAN ==================== */
  document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();

    // Trang Cart
    if (document.getElementById('cartTableBody')) {
      renderCartPage();

      // Sự kiện nhập coupon
      const couponBtn = document.getElementById('cartApplyCouponBtn');
      const couponInput = document.getElementById('cartCouponInput');
      const couponMsg = document.getElementById('cartCouponMsg');

      couponBtn?.addEventListener('click', () => {
        const res = applyCoupon(couponInput?.value);
        if (couponMsg) {
          couponMsg.textContent = res.message;
          couponMsg.className = 'cart-coupon-message ' + (res.success ? 'cart-coupon-message--success' : 'cart-coupon-message--error');
        }
        if (res.success) {
          renderCartPage();
        }
      });
    }

    // Trang Checkout
    if (document.getElementById('checkoutOrderList')) {
      renderCheckoutPage();
    }

    // Trang Order Complete
    if (document.getElementById('orderCompleteCard')) {
      renderOrderCompletePage();
    }

    // Trang Chi tiết sản phẩm
    bindDetailsAddToCart();
  });

  // Xuất API toàn cục để các script khác có thể gọi nếu cần
  window.TBAYCart = {
    getCart,
    saveCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    formatVND,
    updateCartBadge,
    showToast
  };
})();

