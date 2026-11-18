/* ==========================================================================
   PRODUCTS & CATEGORIES DATA (Dữ liệu sản phẩm & Chi tiết)
   Có thể tùy chỉnh thông tin, hình ảnh, bài viết chi tiết tại đây
   ========================================================================== */

const categories = [
  { id: "nem-cao-su-thien-nhien", name: "Nệm cao su thiên nhiên" },
  { id: "nem-foam", name: "Nệm Foam" },
  { id: "nem-lo-xo", name: "Nệm lò xo" },
  { id: "nem-lam-mat", name: "Nệm làm mát" }
];

const accessoryCategories = [
  { id: "chan-ga", name: "Chăn ga" },
  { id: "goi-cao-su", name: "Gối cao su" },
  { id: "long-vu", name: "Lông vũ" },
  { id: "goi-gon", name: "Gối gòn" }
];

const products = [
  {
    id: 1,
    name: "Nệm cao su TBAY Titan Grey – Sạch êm, kháng khuẩn, nâng đỡ vượt trội",
    category: "Nệm cao su thiên nhiên",
    categoryId: "nem-cao-su-thien-nhien",
    image: "./assets/images/products/product-3.jpg",
    hoverImage: "./assets/images/products/product-1.jpg",
    thumbnails: [
      "./assets/images/products/product-3.jpg",
      "./assets/images/products/product-1.jpg",
      "./assets/images/products/product-2.jpg",
      "./assets/images/products/product-4.jpg"
    ],
    originalPrice: 23000000,
    salePrice: 18070000,
    priceRange: "18.070.000₫ – 23.000.000₫",
    discount: 21,
    rating: 5.0,
    reviews: 32,
    sold: 2,
    description: "Nệm cao su thiên nhiên TBAY Titan Grey kết hợp than hoạt tính giúp kháng khuẩn, khử mùi và nâng đỡ trọn vẹn giấc ngủ.",
    sizes: ["140x200", "160x200", "180x200", "200x200", "220x200"],
    thickness: ["10cm", "15cm"],
    gift: "Bộ quà tặng trị giá 1.864.000₫",
    isBestSeller: true,
    hasFlashSale: false,
    relatedIds: [2, 3, 4, 5],
    details: {
      targetAudience: {
        title: "Nệm cao su TBAY Titan Grey – Sạch êm, kháng khuẩn, nâng đỡ vượt trội",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Dành cho người yêu thích sự êm ái thoáng mát, người lớn tuổi có vấn đề về cột sống, và các gia đình quan tâm đặc biệt tới sức khỏe đường hô hấp nhờ tính năng than hoạt tính kháng khuẩn tối ưu.",
        image: "./assets/images/details/do-day-Hybrid-plus-01.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Nệm được bảo hành 1 đổi 1 trong vòng 15 năm trong trường hợp bị xẹp lún hoặc lỗi do nhà sản xuất, đảm bảo mang lại sự an tâm và hài lòng tới khách hàng.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Công nghệ than hoạt tính kết hợp cao su thiên nhiên",
        description: "Khử mùi hôi hiệu quả, hút ẩm và kháng khuẩn, tạo môi trường ngủ trong lành và êm ái suốt cả đêm dài.",
        layers: [
          {
            name: "Lớp cao su thiên nhiên pha than hoạt tính",
            desc: "Độ đàn hồi vượt bậc, dẻo dai bảo vệ xương sống cổ và lưng khi ngủ.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          }
        ],
        coolingCover: {
          name: "Áo nệm kháng khuẩn dệt sợi cao cấp",
          desc: "Thoáng khí, thấm hút mồ hôi tốt mang lại sự mát mẻ dễ chịu."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 2,
    name: "Nệm cao su thiên nhiên TBAY Latex Premium – Siêu đàn hồi, êm ái từng đường cong",
    category: "Nệm cao su thiên nhiên",
    categoryId: "nem-cao-su-thien-nhien",
    image: "./assets/images/products/product-1.jpg",
    hoverImage: "./assets/images/products/product-2.jpg",
    thumbnails: ["./assets/images/products/product-1.jpg"],
    originalPrice: 11990000,
    salePrice: 9490000,
    priceRange: "5.060.000₫ – 18.140.000₫",
    discount: 21,
    rating: 5.0,
    reviews: 48,
    sold: 15,
    description: "Nệm cao su thiên nhiên TBAY Latex Premium từ 100% mủ cao su tự nhiên, độ đàn hồi hoàn hảo bảo vệ hệ xương khớp.",
    sizes: ["140x200", "160x200", "180x200", "200x200"],
    thickness: ["10cm", "15cm", "20cm"],
    gift: "Bộ quà tặng trị giá 1.500.000₫",
    isBestSeller: true,
    hasFlashSale: true,
    relatedIds: [4, 5, 3, 1],
    details: {
      targetAudience: {
        title: "Nệm cao su thiên nhiên TBAY Latex Premium – Siêu đàn hồi, êm ái từng đường cong",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Sự lựa chọn hoàn hảo cho người thích cảm giác nằm nệm cao su tự nhiên nguyên chất, người cần giảm đau nhức xương khớp và người muốn một sản phẩm có độ bền trên 15 năm.",
        image: "./assets/images/details/do-day-Hybrid-plus-01.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Nệm được bảo hành 1 đổi 1 trong vòng 15 năm trong trường hợp bị xẹp lún hoặc lỗi do nhà sản xuất, đảm bảo mang lại sự an tâm và hài lòng tới khách hàng.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "100% Cao su tự nhiên tinh khiết",
        description: "Thiết kế hàng ngàn lỗ thông hơi tròn hai mặt, tạo sự lưu thông không khí tối ưu không gây hầm bí.",
        layers: [
          {
            name: "Lõi cao su đúc nguyên khối",
            desc: "Nâng đỡ đồng đều mọi vùng cơ thể từ đầu, vai, lưng đến chân.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          }
        ],
        coolingCover: {
          name: "Vỏ áo gấm xốp cao cấp",
          desc: "Mềm mịn, thấm hút mồ hôi và kháng khuẩn."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 3,
    name: "Nệm Foam Latex TBAY Hybrid Plus – Nâng tầm giấc ngủ với công nghệ 5IN1, nâng đỡ từng vùng chuyên sâu",
    category: "Nệm Foam",
    categoryId: "nem-foam",
    image: "./assets/images/products/product-2.jpg",
    hoverImage: "./assets/images/products/product-1.jpg",
    thumbnails: [
      "./assets/images/products/product-2.jpg",
      "./assets/images/products/product-1.jpg",
      "./assets/images/products/product-3.jpg"
    ],
    originalPrice: 15840000,
    salePrice: 11870000,
    priceRange: "7.720.000₫ – 15.840.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 28,
    sold: 9,
    description: "Nệm Foam Latex Hybrid Plus kết hợp lõi Foam chịu lực cao cấp cùng bề mặt cao su thiên nhiên êm ái, nâng tầm giấc ngủ sang trọng.",
    sizes: ["140x200", "160x200", "180x200", "200x200"],
    thickness: ["12cm", "15cm", "20cm", "28cm"],
    gift: "Bộ quà tặng trị giá 1.864.000₫",
    isBestSeller: true,
    hasFlashSale: true,
    relatedIds: [4, 5, 2, 1],
    details: {
      targetAudience: {
        title: "Nệm Foam Latex TBAY Hybrid Plus – Nâng tầm giấc ngủ với công nghệ 5IN1, nâng đỡ từng vùng chuyên sâu",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Với độ dày 28cm, nệm Foam Latex TBAY Hybrid Plus là sự lựa chọn hoàn hảo cho những ai yêu thích trải nghiệm nằm nệm cao và sang trọng. Đồng thời muốn tìm kiếm một chiếc nệm êm ái để đảm bảo giấc ngủ sâu trọn vẹn mỗi đêm.",
        image: "./assets/images/details/do-day-Hybrid-plus-01.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Nệm được bảo hành 1 đổi 1 trong vòng 15 năm trong trường hợp bị xẹp lún hoặc lỗi do nhà sản xuất, đảm bảo mang lại sự an tâm và hài lòng tới khách hàng.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Công nghệ 5IN1 thế hệ mới – Êm ái trọn vẹn ở mọi tư thế ngủ",
        description: "Nệm Foam Latex TBAY Hybrid Plus được cải tiến thiết kế với kết cấu đa tầng, tích hợp các tính năng ưu Việt mang lại trải nghiệm giấc ngủ với độ đàn hồi hoàn hảo, không quá lún hay khó chịu đau mỏi suốt đêm.",
        layers: [
          {
            name: "Tầng 1: Lớp cao su thiên nhiên",
            desc: "Sở hữu đặc tính cao su đàn hồi, dẻo dai vượt trội giúp bảo vệ định hình tư thế ngủ khỏe. Đặc biệt nhờ ứng dụng công nghệ xử lý mùi cao su hiệu quả. Kết hợp cùng thiết kế hàng ngàn lỗ thoáng khí, tăng cường độ thông thoáng và duy trì sự mát mẻ trên bề mặt nệm.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          },
          {
            name: "Tầng 2: Lớp High-Resilience Foam 3 Zone",
            desc: "Lớp High – Resilience Foam 3 Zone cải tiến với công nghệ đa tầng nâng đỡ tối ưu 3 vùng cơ thể Đầu – Lưng – Chân. Trong đó lớp HR foam trắng với độ mềm nhất định nâng đỡ cho vùng đầu và chân để tạo cảm giác thoải mái khi ngủ. Lớp HR foam xanh ở giữa với độ cứng tối ưu nâng đỡ vùng lưng hiệu quả.",
            image: "./assets/images/details/hybrid-plus-03-800x800.webp"
          },
          {
            name: "Tầng 3: Lớp High-Resilience Foam cao cấp",
            desc: "Cải tiến tầng giữa lớp HR foam (High-Resilience Foam) cao cấp mang đến cảm giác như cơ thể được ôm sát từng đường cong, giúp phân tán áp lực đồng đều, giảm áp lực tại các điểm tiếp xúc như cổ, vai, lưng và hông."
          },
          {
            name: "Tầng 4: Lớp High-Resilience Foam cao cấp",
            desc: "Cuối cùng, lớp foam cao cấp ở đáy nệm nâng đỡ cơ thể một cách hiệu quả, X2 độ êm ái, mang lại một giấc ngủ sâu và phục hồi năng lượng tốt hơn sau ngày dài.",
            image: "./assets/images/details/hybrid-plus-artboard-4-800x800.webp"
          }
        ],
        coolingCover: {
          name: "Áo nệm làm mát ứng dụng công nghệ hiện đại",
          desc: "Áo nệm được ứng dụng công nghệ làm mát Aircool -5 độ C kết hợp lõi nệm cao su cùng thiết kế lỗ tròn thoáng khí mang đến sự mát mẻ, êm ái ngay lần đầu chạm lưng."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 4,
    name: "Nệm cao su thiên nhiên TBAY Legend – Chuyên gia nâng đỡ vùng lưng",
    category: "Nệm cao su thiên nhiên",
    categoryId: "nem-cao-su-thien-nhien",
    image: "./assets/images/products/product-4.jpg",
    hoverImage: "./assets/images/products/product-3.jpg",
    thumbnails: ["./assets/images/products/product-4.jpg"],
    originalPrice: 10300000,
    salePrice: 7720000,
    priceRange: "7.720.000₫ – 12.230.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 19,
    sold: 8,
    description: "Cấu trúc bọt hở thoáng khí tối đa, tối ưu trọng lực cơ thể giúp ngủ sâu không đau nhức mỏi lưng.",
    sizes: ["140x200", "160x200", "180x200", "200x200"],
    thickness: ["10cm", "15cm"],
    gift: "Bộ quà tặng trị giá 1.000.000₫",
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [2, 3, 1, 5],
    details: {
      targetAudience: {
        title: "Nệm cao su thiên nhiên TBAY Legend – Chuyên gia nâng đỡ vùng lưng",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Được nghiên cứu chuyên sâu cho người hay đau lưng, thoái hóa cột sống hoặc nhân viên văn phòng ngồi nhiều.",
        image: "./assets/images/details/do-day-Hybrid-plus-01.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Nệm được bảo hành 1 đổi 1 trong vòng 15 năm trong trường hợp bị xẹp lún hoặc lỗi do nhà sản xuất, đảm bảo mang lại sự an tâm và hài lòng tới khách hàng.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Công nghệ nâng đỡ cột sống chuyên sâu",
        description: "Độ vững chãi lý tưởng giúp giữ cột sống luôn ở trạng thái thẳng tự nhiên trong suốt giấc ngủ.",
        layers: [
          {
            name: "Lớp cao su định hình sinh học",
            desc: "Giúp giải phóng áp lực vùng hông và lưng dưới hoàn hảo.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          }
        ],
        coolingCover: {
          name: "Vỏ bọc Nano Silver kháng khuẩn",
          desc: "Kháng bụi mịn và nấm mốc."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 5,
    name: "Nệm Foam TBAY Standard – Nệm foam êm ái nâng đỡ",
    category: "Nệm Foam",
    categoryId: "nem-foam",
    image: "./assets/images/products/product-1.jpg",
    hoverImage: "./assets/images/products/product-4.jpg",
    thumbnails: ["./assets/images/products/product-1.jpg"],
    originalPrice: 8500000,
    salePrice: 6375000,
    priceRange: "2.760.000₫ – 7.060.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 14,
    sold: 11,
    description: "Chất liệu Foam cao cấp tỷ trọng cao chống xẹp lún hiệu quả, nâng niu trọn vẹn từng giấc ngủ êm ái.",
    sizes: ["140x200", "160x200", "180x200"],
    thickness: ["10cm", "15cm"],
    gift: "Bộ quà tặng trị giá 800.000₫",
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [3, 4, 2, 1],
    details: {
      targetAudience: {
        title: "Nệm Foam TBAY Standard – Nệm foam êm ái nâng đỡ",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Lựa chọn kinh tế và tiện lợi cho người trẻ, gia đình trẻ, căn hộ chung cư cần một chiếc nệm êm ái nhẹ nhàng dễ vận chuyển.",
        image: "./assets/images/details/do-day-Hybrid-plus-01.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Nệm được bảo hành chính hãng 10 năm chống xẹp lún.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Lõi Foam cao cấp tỷ trọng cao",
        description: "Chống xẹp lún, phân tán lực đồng đều tạo cảm giác êm ái nhẹ nhàng khi ngủ.",
        layers: [
          {
            name: "Lõi Foam ép nhiệt tiêu chuẩn",
            desc: "Độ đàn hồi dẻo dai và không rung lắc khi trở mình.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          }
        ],
        coolingCover: {
          name: "Vỏ vải gấm dệt hoa văn tinh tế",
          desc: "Độ bền cao, dễ dàng vệ sinh."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 6,
    name: "Nệm lò xo túi độc lập TBAY Ruby – Đẳng cấp khách sạn 5 sao",
    category: "Nệm lò xo",
    categoryId: "nem-lo-xo",
    image: "./assets/images/products/product-3.jpg",
    hoverImage: "./assets/images/products/product-2.jpg",
    thumbnails: ["./assets/images/products/product-3.jpg"],
    originalPrice: 14500000,
    salePrice: 10875000,
    priceRange: "10.875.000₫ – 14.500.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 22,
    sold: 6,
    description: "Hệ thống lò xo túi độc lập không gây rung lắc cho người nằm cạnh, vải gấm cao cấp nhập khẩu sang trọng.",
    sizes: ["160x200", "180x200", "200x200"],
    thickness: ["25cm", "30cm"],
    gift: "Bộ quà tặng trị giá 2.000.000₫",
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [3, 1, 2, 4],
    details: {
      targetAudience: {
        title: "Nệm lò xo túi độc lập TBAY Ruby – Đẳng cấp khách sạn 5 sao",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Dành cho các cặp vợ chồng muốn giấc ngủ hoàn toàn yên tĩnh không bị ảnh hưởng bởi cử động của người bên cạnh, và những ai yêu thích độ nảy êm ái sang trọng.",
        image: "./assets/images/details/do-day-Hybrid-plus-01.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Nệm được bảo hành 12 năm hệ thống khung lò xo và chống xẹp lún.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Lò xo túi độc lập chống truyền rung động",
        description: "Mỗi con lò xo được đặt trong từng túi vải riêng biệt giúp nâng đỡ từng điểm trên cơ thể.",
        layers: [
          {
            name: "Hệ thống lò xo túi thép chống gỉ",
            desc: "Gia cường chịu tải cực tốt, độ bền trên 15 năm.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          }
        ],
        coolingCover: {
          name: "Lớp Pillow Top êm ái",
          desc: "Bọc vải gấm nhung cao cấp tạo cảm giác sang trọng như resort 5 sao."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 7,
    name: "Nệm cao su than hoạt tính TBAY Charcoal Pure – Kháng khuẩn, khử mùi",
    category: "Nệm cao su thiên nhiên",
    categoryId: "nem-cao-su-thien-nhien",
    image: "./assets/images/products/product-1.jpg",
    hoverImage: "./assets/images/products/product-3.jpg",
    thumbnails: ["./assets/images/products/product-1.jpg"],
    originalPrice: 16500000,
    salePrice: 12375000,
    priceRange: "12.375.000₫ – 16.500.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 26,
    sold: 14,
    description: "Công nghệ kết hợp bột than hoạt tính gáo dừa vào cao su thiên nhiên giúp thanh lọc không khí, hút ẩm và kháng khuẩn kép.",
    sizes: ["140x200", "160x200", "180x200"],
    thickness: ["10cm", "15cm"],
    gift: "Bộ quà tặng trị giá 1.200.000₫",
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [1, 2, 3, 4]
  },
  {
    id: 8,
    name: "Nệm Foam Massage TBAY 7'Zone – Định hình cột sống chuyên sâu",
    category: "Nệm Foam",
    categoryId: "nem-foam",
    image: "./assets/images/products/product-2.jpg",
    hoverImage: "./assets/images/products/product-4.jpg",
    thumbnails: ["./assets/images/products/product-2.jpg"],
    originalPrice: 9200000,
    salePrice: 6900000,
    priceRange: "6.900.000₫ – 9.200.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 31,
    sold: 19,
    description: "Bề mặt lượn sóng massage 7 vùng giải tỏa căng cơ vai gáy, kích thích tuần hoàn máu cho giấc ngủ sâu không mệt mỏi.",
    sizes: ["140x200", "160x200", "180x200"],
    thickness: ["10cm", "15cm"],
    gift: "Bộ quà tặng trị giá 900.000₫",
    isBestSeller: false,
    hasFlashSale: true,
    relatedIds: [3, 5, 2, 1]
  },
  {
    id: 9,
    name: "Nệm lò xo túi độc lập TBAY Diamond Grand – Êm ái chuẩn hoàng gia",
    category: "Nệm lò xo",
    categoryId: "nem-lo-xo",
    image: "./assets/images/products/product-3.jpg",
    hoverImage: "./assets/images/products/product-1.jpg",
    thumbnails: ["./assets/images/products/product-3.jpg"],
    originalPrice: 18900000,
    salePrice: 14175000,
    priceRange: "14.175.000₫ – 18.900.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 18,
    sold: 5,
    description: "Hệ thống lò xo túi liên hoàn độc lập kết hợp lớp Pillow Top lông vũ bồng bềnh, tạo trải nghiệm nghỉ dưỡng 6 sao tại gia.",
    sizes: ["160x200", "180x200", "200x200"],
    thickness: ["28cm", "32cm"],
    gift: "Bộ quà tặng trị giá 2.500.000₫",
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [6, 3, 1, 2]
  },
  {
    id: 10,
    name: "Nệm làm mát băng tuyết TBAY Ice Cool – Mát lạnh tức thì, ngủ ngon ngày hè",
    category: "Nệm làm mát",
    categoryId: "nem-lam-mat",
    image: "./assets/images/products/product-4.jpg",
    hoverImage: "./assets/images/products/product-2.jpg",
    thumbnails: ["./assets/images/products/product-4.jpg"],
    originalPrice: 13200000,
    salePrice: 9900000,
    priceRange: "9.900.000₫ – 13.200.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 42,
    sold: 23,
    description: "Sợi dệt Polyethylene làm mát tản nhiệt siêu tốc, duy trì bề mặt nệm luôn mát hơn 3–5°C so với môi trường.",
    sizes: ["140x200", "160x200", "180x200"],
    thickness: ["12cm", "15cm", "20cm"],
    gift: "Bộ quà tặng trị giá 1.500.000₫",
    isBestSeller: true,
    hasFlashSale: true,
    relatedIds: [3, 2, 8, 12]
  },
  {
    id: 11,
    name: "Nệm cao su thiên nhiên TBAY Organic Standard – Thuần khiết 100% tự nhiên",
    category: "Nệm cao su thiên nhiên",
    categoryId: "nem-cao-su-thien-nhien",
    image: "./assets/images/products/product-1.jpg",
    hoverImage: "./assets/images/products/product-3.jpg",
    thumbnails: ["./assets/images/products/product-1.jpg"],
    originalPrice: 11500000,
    salePrice: 8625000,
    priceRange: "8.625.000₫ – 11.500.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 35,
    sold: 16,
    description: "Nệm cao su thuần khiết không pha tạp hóa chất, chứng nhận độ bền đàn hồi vượt bậc trên 15 năm.",
    sizes: ["140x200", "160x200", "180x200"],
    thickness: ["10cm", "15cm"],
    gift: "Bộ quà tặng trị giá 1.200.000₫",
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [2, 4, 1, 7]
  },
  {
    id: 12,
    name: "Nệm Foam làm mát TBAY Cool Gel Flex – Thông thoáng khí gấp 3 lần",
    category: "Nệm làm mát",
    categoryId: "nem-lam-mat",
    image: "./assets/images/products/product-2.jpg",
    hoverImage: "./assets/images/products/product-1.jpg",
    thumbnails: ["./assets/images/products/product-2.jpg"],
    originalPrice: 10800000,
    salePrice: 8100000,
    priceRange: "8.100.000₫ – 10.800.000₫",
    discount: 25,
    rating: 5.0,
    reviews: 29,
    sold: 12,
    description: "Hạt Cool Gel mát lạnh được cấy trực tiếp vào cấu trúc phân tử bọt foam, chống hầm bí tuyệt đối cho khí hậu nhiệt đới.",
    sizes: ["140x200", "160x200", "180x200"],
    thickness: ["10cm", "15cm", "20cm"],
    gift: "Bộ quà tặng trị giá 1.000.000₫",
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [10, 3, 5, 8]
  },
  {
    id: 101,
    name: "Bộ Ga Giường Mền TBAY ECTC 01 – Lụa Thoáng Mát, Thấm Hút Mồ Hôi Tốt",
    categoryType: "accessory",
    category: "Chăn ga",
    categoryId: "chan-ga",
    image: "./assets/images/accessories/acc-ectc-01.jpg",
    hoverImage: "./assets/images/accessories/acc-ectc-02.jpg",
    thumbnails: [
      "./assets/images/accessories/acc-ectc-01.jpg",
      "./assets/images/accessories/acc-ectc-02.jpg"
    ],
    originalPrice: 1230000,
    salePrice: 680000,
    priceRange: "680.000₫ – 1.420.000₫",
    discount: 45,
    rating: 5.0,
    reviews: 12,
    sold: 35,
    description: "Bộ sản phẩm Chăn ga gối TBAY được kết hợp từ vải Cotton và vải lụa mang đến cảm giác êm ái và mát mẻ trong suốt quá trình sử dụng. Công nghệ may thêu hiện đại cho ra những sản phẩm có họa tiết vô cùng sống động.",
    models: [
      { name: "Bộ ga - 1m6 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga)", price: 680000, oldPrice: 1230000 },
      { name: "Bộ ga - 1m8 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga)", price: 730000, oldPrice: 1300000 },
      { name: "Mền Lẻ - 2m2 x 2m", price: 890000, oldPrice: 1400000 },
      { name: "Trọn bộ - 1m6 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga + 1 mền)", price: 1350000, oldPrice: 2100000 },
      { name: "Trọn bộ - 1m8 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga + 1 mền)", price: 1420000, oldPrice: 2200000 }
    ],
    isBestSeller: true,
    hasFlashSale: false,
    relatedIds: [102, 107, 108, 109],
    details: {
      targetAudience: {
        title: "Bộ Ga Giường Mền TBAY ECTC 01 – Lụa Thoáng Mát, Thấm Hút Mồ Hôi Tốt",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Thích hợp cho mọi gia đình mong muốn nâng tầm không gian phòng ngủ với chất liệu vải Cotton lụa mềm mượt, thấm hút mồ hôi vượt trội kể cả trong những ngày hè oi bức.",
        image: "./assets/images/accessories/acc-ectc-01.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Bảo hành 1 đổi 1 trong 30 ngày nếu có lỗi đường may hoặc phai màu từ nhà sản xuất.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Cotton Lụa Tencel cao cấp",
        description: "Bề mặt trơn mịn, không nhăn, không xù lông và cực kỳ an toàn cho làn da nhạy cảm của trẻ nhỏ.",
        layers: [
          {
            name: "Sợi dệt Microfiber lụa mật độ cao",
            desc: "Giữ màu bền đẹp qua hàng trăm lần giặt máy.",
            image: "./assets/images/accessories/acc-ectc-02.jpg"
          }
        ],
        coolingCover: {
          name: "Đường may bo chun chắc chắn",
          desc: "Ôm khít các dòng nệm từ 10cm đến 30cm mà không bị xê dịch."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 102,
    name: "Bộ Ga Giường Mền TBAY ECTC 02 – Lụa Thoáng Mát, Thấm Hút Mồ Hôi Tốt",
    categoryType: "accessory",
    category: "Chăn ga",
    categoryId: "chan-ga",
    image: "./assets/images/accessories/acc-ectc-02.jpg",
    hoverImage: "./assets/images/accessories/acc-ectc-01.jpg",
    thumbnails: [
      "./assets/images/accessories/acc-ectc-02.jpg",
      "./assets/images/accessories/acc-ectc-01.jpg"
    ],
    originalPrice: 1230000,
    salePrice: 680000,
    priceRange: "680.000₫ – 1.420.000₫",
    discount: 45,
    rating: 5.0,
    reviews: 18,
    sold: 42,
    description: "Họa tiết hoa văn dịu nhẹ mang đến không gian phòng ngủ lãng mạn, ngọt ngào và thư giãn tuyệt đối cho giấc ngủ ngon.",
    models: [
      { name: "Bộ ga - 1m6 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga)", price: 680000, oldPrice: 1230000 },
      { name: "Bộ ga - 1m8 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga)", price: 730000, oldPrice: 1300000 },
      { name: "Mền Lẻ - 2m2 x 2m", price: 890000, oldPrice: 1400000 },
      { name: "Trọn bộ - 1m6 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga + 1 mền)", price: 1350000, oldPrice: 2100000 },
      { name: "Trọn bộ - 1m8 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga + 1 mền)", price: 1420000, oldPrice: 2200000 }
    ],
    isBestSeller: true,
    hasFlashSale: false,
    relatedIds: [101, 107, 108, 110],
    details: {
      targetAudience: {
        title: "Bộ Ga Giường Mền TBAY ECTC 02 – Lụa Thoáng Mát, Thấm Hút Mồ Hôi Tốt",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Thiết kế tông màu ngọt ngào, tinh tế phù hợp cho các cặp đôi, phòng cưới hoặc những ai yêu thích vẻ đẹp thanh lịch tươi mới.",
        image: "./assets/images/accessories/acc-ectc-02.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Bảo hành 1 đổi 1 trong 30 ngày nếu có lỗi đường may hoặc phai màu từ nhà sản xuất.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Cotton Lụa hoa văn cao cấp",
        description: "Chất liệu lụa thoáng khí, êm dịu nâng niu giấc ngủ suốt đêm dài.",
        layers: [
          {
            name: "Họa tiết in nhiệt công nghệ cao",
            desc: "Sắc nét, không phai màu, không bong tróc.",
            image: "./assets/images/accessories/acc-ectc-01.jpg"
          }
        ],
        coolingCover: {
          name: "Chất vải kháng khuẩn khử mùi",
          desc: "Luôn thơm tho và dễ chịu."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 107,
    name: "Gối cao su thiên nhiên TBAY Oval – Nâng đỡ đốt sống cổ hoàn hảo",
    categoryType: "accessory",
    category: "Gối cao su",
    categoryId: "goi-cao-su",
    image: "./assets/images/products/product-1.jpg",
    hoverImage: "./assets/images/products/product-2.jpg",
    thumbnails: ["./assets/images/products/product-1.jpg"],
    originalPrice: 650000,
    salePrice: 450000,
    priceRange: "450.000₫ – 520.000₫",
    discount: 30,
    rating: 5.0,
    reviews: 38,
    sold: 120,
    description: "100% cao su tự nhiên với thiết kế hình oval truyền thống, hàng ngàn lỗ thông khí giúp chống đau mỏi vai gáy.",
    models: [
      { name: "Kích thước tiêu chuẩn 40 x 60cm", price: 450000, oldPrice: 650000 },
      { name: "Kích thước lớn 45 x 65cm", price: 520000, oldPrice: 720000 }
    ],
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [108, 109, 110, 101],
    details: {
      targetAudience: {
        title: "Gối cao su thiên nhiên TBAY Oval – Nâng đỡ đốt sống cổ hoàn hảo",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Dành cho người thường xuyên mỏi cổ, đau vai gáy sau khi thức dậy hoặc những ai quen với dáng gối oval truyền thống.",
        image: "./assets/images/products/product-1.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Bảo hành 3 năm độ đàn hồi cao su tự nhiên không xẹp lún.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "100% Cao su thiên nhiên",
        description: "Độ đàn hồi vượt trội, kháng khuẩn chống nấm mốc tự nhiên.",
        layers: [
          {
            name: "Lỗ thông khí kép tổ ong",
            desc: "Giữ vùng đầu luôn thoáng mát, không bị toát mồ hôi trộm khi ngủ.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          }
        ],
        coolingCover: {
          name: "Vỏ gối cotton co giãn",
          desc: "Dễ tháo giặt, an toàn cho da nhạy cảm."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 108,
    name: "Gối cao su lượn sóng TBAY Contour – Chống ngáy, trị mỏi vai gáy",
    categoryType: "accessory",
    category: "Gối cao su",
    categoryId: "goi-cao-su",
    image: "./assets/images/products/product-3.jpg",
    hoverImage: "./assets/images/products/product-4.jpg",
    thumbnails: ["./assets/images/products/product-3.jpg"],
    originalPrice: 750000,
    salePrice: 550000,
    priceRange: "550.000₫ – 620.000₫",
    discount: 26,
    rating: 5.0,
    reviews: 52,
    sold: 145,
    description: "Thiết kế gợn sóng định hình ôm sát đường cong đốt sống cổ, giúp đường thở thông thoáng và giảm chứng ngủ ngáy.",
    models: [
      { name: "Kích thước tiêu chuẩn 38 x 58cm", price: 550000, oldPrice: 750000 },
      { name: "Kích thước lớn 42 x 62cm", price: 620000, oldPrice: 850000 }
    ],
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [107, 109, 110, 102],
    details: {
      targetAudience: {
        title: "Gối cao su lượn sóng TBAY Contour – Chống ngáy, trị mỏi vai gáy",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Thiết kế y khoa đặc biệt dành cho người ngủ ngáy, người thoái hóa đốt sống cổ C1-C7, người cần tư thế ngủ chuẩn.",
        image: "./assets/images/products/product-3.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Bảo hành 3 năm độ đàn hồi cao su tự nhiên không xẹp lún.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Cấu trúc định hình lượn sóng kép",
        description: "Có 2 độ cao khác nhau ở 2 đầu giúp bạn dễ dàng chọn tư thế nằm phù hợp nhất.",
        layers: [
          {
            name: "Cao su đúc định hình công thái học",
            desc: "Nâng đỡ đốt sống cổ và giúp đường thở luôn thẳng hàng.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          }
        ],
        coolingCover: {
          name: "Vỏ gối dệt kim thoáng mát",
          desc: "Thấm hút mồ hôi tối đa."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 109,
    name: "Gối lông vũ cao cấp TBAY Luxury – Siêu êm ái, bồng bềnh tựa mây",
    categoryType: "accessory",
    category: "Lông vũ",
    categoryId: "long-vu",
    image: "./assets/images/products/product-2.jpg",
    hoverImage: "./assets/images/products/product-1.jpg",
    thumbnails: ["./assets/images/products/product-2.jpg"],
    originalPrice: 900000,
    salePrice: 690000,
    priceRange: "690.000₫ – 890.000₫",
    discount: 23,
    rating: 5.0,
    reviews: 19,
    sold: 64,
    description: "Lông vũ nhân tạo Microfiber tinh khiết siêu mềm mại, độ bồng bềnh hoàn hảo như khách sạn 5 sao cao cấp.",
    models: [
      { name: "Gối đơn 50 x 70cm (1 cái)", price: 690000, oldPrice: 900000 },
      { name: "Cặp gối 50 x 70cm (2 cái)", price: 1250000, oldPrice: 1700000 }
    ],
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [110, 107, 108, 101],
    details: {
      targetAudience: {
        title: "Gối lông vũ cao cấp TBAY Luxury – Siêu êm ái, bồng bềnh tựa mây",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Dành cho những ai thích trải nghiệm nằm gối siêu mềm, bồng bềnh và nhẹ tênh như khách sạn sang trọng.",
        image: "./assets/images/products/product-2.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Bảo hành 1 năm không vón cục khi sử dụng đúng hướng dẫn.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Sợi lông vũ nhân tạo Microfiber tinh khiết",
        description: "Mềm mịn gấp 10 lần gối thông thường, không gây dị ứng mùi lông chim tự nhiên.",
        layers: [
          {
            name: "Lớp ruột lông vũ tơi xốp",
            desc: "Khả năng phục hồi hình dáng nhanh sau mỗi lần tựa đầu.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          }
        ],
        coolingCover: {
          name: "Vỏ cotton kháng lông vũ 100%",
          desc: "Ngăn chặn tuyệt đối sợi lông lọt ra ngoài."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 110,
    name: "Gối gòn Microfiber TBAY Soft Touch – Êm mềm kháng khuẩn, chống xẹp lún",
    categoryType: "accessory",
    category: "Gối gòn",
    categoryId: "goi-gon",
    image: "./assets/images/products/product-4.jpg",
    hoverImage: "./assets/images/products/product-3.jpg",
    thumbnails: ["./assets/images/products/product-4.jpg"],
    originalPrice: 350000,
    salePrice: 220000,
    priceRange: "220.000₫ – 390.000₫",
    discount: 37,
    rating: 5.0,
    reviews: 45,
    sold: 210,
    description: "Sợi gòn bông Microfiber siêu mịn màng, chống bụi bẩn và nấm mốc, giặt máy thoải mái không lo vón cục.",
    models: [
      { name: "Gối nằm 45 x 65cm", price: 220000, oldPrice: 350000 },
      { name: "Gối ôm 35 x 100cm", price: 280000, oldPrice: 420000 },
      { name: "Combo 2 gối nằm + 1 gối ôm", price: 650000, oldPrice: 1050000 }
    ],
    isBestSeller: false,
    hasFlashSale: false,
    relatedIds: [109, 107, 108, 102],
    details: {
      targetAudience: {
        title: "Gối gòn Microfiber TBAY Soft Touch – Êm mềm kháng khuẩn, chống xẹp lún",
        subTitle: "SẢN PHẨM PHÙ HỢP CHO AI",
        description: "Sản phẩm tiện lợi, giá thành tiết kiệm phù hợp cho sinh viên, gia đình và trẻ nhỏ.",
        image: "./assets/images/products/product-4.jpg"
      },
      warranty: {
        title: "CHẾ ĐỘ BẢO HÀNH",
        description: "Bảo hành 1 đổi 1 trong 30 ngày nếu phát hiện lỗi kỹ thuật.",
        image: "./assets/images/details/mo-ta-bao-hanh-15-nam-nem-cao-su.webp"
      },
      features: {
        title: "ĐẶC ĐIỂM NỔI BẬT CỦA SẢN PHẨM",
        subtitle: "Bông gòn tinh khiết kháng khuẩn",
        description: "Khử khuẩn nhiệt độ cao, an toàn tuyệt đối cho hệ hô hấp.",
        layers: [
          {
            name: "Sợi gòn xoắn 3 chiều",
            desc: "Giúp gối luôn bồng bềnh và không bị vón cục.",
            image: "./assets/images/details/hybrid_plus_02-1536x1536.webp"
          }
        ],
        coolingCover: {
          name: "Vỏ cotton trắng tinh khôi",
          desc: "Thoáng mát, có khóa kéo tiện tháo bớt gòn điều chỉnh độ cao."
        }
      },
      certifications: {
        title: "THÔNG TIN SẢN PHẨM",
        certTitle: "1. CHỨNG NHẬN CHẤT LƯỢNG",
        certImage: "./assets/images/details/BANNER-CHUNG-NHAN.webp",
        reasonImage: "./assets/images/details/banner-10-ly-do-nen-chon-mua-ntv.jpg"
      }
    }
  },
  {
    id: 103,
    name: "Bộ Ga Chun Cotton Tencel TBAY Silk 03 – Mát Lạnh Mùa Hè",
    categoryType: "accessory",
    category: "Chăn ga",
    categoryId: "chan-ga",
    image: "./assets/images/accessories/acc-ectc-01.jpg",
    hoverImage: "./assets/images/accessories/acc-ectc-02.jpg",
    thumbnails: ["./assets/images/accessories/acc-ectc-01.jpg"],
    originalPrice: 1150000,
    salePrice: 790000,
    priceRange: "790.000₫ – 1.150.000₫",
    discount: 31,
    rating: 5.0,
    reviews: 18,
    sold: 45,
    description: "Chất vải sợi gỗ sồi Tencel tự nhiên kháng khuẩn, mềm mịn và bóng mượt như lụa tơ tằm."
  },
  {
    id: 104,
    name: "Bộ Drap Cotton Satin TBAY Royal 04 – Đẳng Cấp Hoàng Gia",
    categoryType: "accessory",
    category: "Chăn ga",
    categoryId: "chan-ga",
    image: "./assets/images/accessories/acc-ectc-02.jpg",
    hoverImage: "./assets/images/accessories/acc-ectc-01.jpg",
    thumbnails: ["./assets/images/accessories/acc-ectc-02.jpg"],
    originalPrice: 1350000,
    salePrice: 920000,
    priceRange: "920.000₫ – 1.350.000₫",
    discount: 32,
    rating: 5.0,
    reviews: 24,
    sold: 52,
    description: "Mật độ sợi dệt dày dặn 600TC mang lại độ bền cao, không xù lông và giữ màu tươi sáng sau nhiều lần giặt."
  },
  {
    id: 105,
    name: "Ruột Chăn Hè Siêu Nhẹ TBAY AirBreeze – Thoáng Khí Êm Mềm",
    categoryType: "accessory",
    category: "Chăn ga",
    categoryId: "chan-ga",
    image: "./assets/images/accessories/acc-ectc-01.jpg",
    hoverImage: "./assets/images/accessories/acc-ectc-02.jpg",
    thumbnails: ["./assets/images/accessories/acc-ectc-01.jpg"],
    originalPrice: 850000,
    salePrice: 590000,
    priceRange: "590.000₫ – 850.000₫",
    discount: 30,
    rating: 5.0,
    reviews: 16,
    sold: 38,
    description: "Lớp chăn mỏng nhẹ điều hòa nhiệt độ tối ưu, thích hợp nằm phòng máy lạnh quanh năm."
  },
  {
    id: 106,
    name: "Gối Ôm Cao Su Thiên Nhiên TBAY Bolster – Đàn Hồi Vượt Trội",
    categoryType: "accessory",
    category: "Gối cao su",
    categoryId: "goi-cao-su",
    image: "./assets/images/products/product-1.jpg",
    hoverImage: "./assets/images/products/product-3.jpg",
    thumbnails: ["./assets/images/products/product-1.jpg"],
    originalPrice: 890000,
    salePrice: 620000,
    priceRange: "620.000₫ – 890.000₫",
    discount: 30,
    rating: 5.0,
    reviews: 33,
    sold: 72,
    description: "100% cao su tự nhiên đúc nguyên khối, ôm trọn cơ thể giúp giấc ngủ thêm ấm áp và thư giãn."
  },
  {
    id: 111,
    name: "Gối Lông Vũ Tự Nhiên TBAY Goose Down – Thượng Hạng Khách Sạn",
    categoryType: "accessory",
    category: "Lông vũ",
    categoryId: "long-vu",
    image: "./assets/images/products/product-2.jpg",
    hoverImage: "./assets/images/products/product-4.jpg",
    thumbnails: ["./assets/images/products/product-2.jpg"],
    originalPrice: 1450000,
    salePrice: 1050000,
    priceRange: "1.050.000₫ – 1.450.000₫",
    discount: 28,
    rating: 5.0,
    reviews: 21,
    sold: 29,
    description: "Chất liệu lông vũ tự nhiên đã qua khử trùng nhiệt cao, cực kỳ êm ái, bồng bềnh và nhẹ tênh."
  },
  {
    id: 112,
    name: "Tấm Bảo Vệ Nệm Kháng Nước TBAY Waterproof Protector",
    categoryType: "accessory",
    category: "Chăn ga",
    categoryId: "chan-ga",
    image: "./assets/images/accessories/acc-ectc-02.jpg",
    hoverImage: "./assets/images/accessories/acc-ectc-01.jpg",
    thumbnails: ["./assets/images/accessories/acc-ectc-02.jpg"],
    originalPrice: 650000,
    salePrice: 420000,
    priceRange: "420.000₫ – 650.000₫",
    discount: 35,
    rating: 5.0,
    reviews: 48,
    sold: 130,
    description: "Màng chống thấm TPU thở được, ngăn chất lỏng và mồ hôi thấm vào ruột nệm, giữ nệm luôn sạch như mới."
  }
];

// Gán vào global window để dùng ở mọi nơi
if (typeof window !== 'undefined') {
  window.categories = categories;
  window.accessoryCategories = accessoryCategories;
  window.products = products;
}

