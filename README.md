# Modern Web Starter Structure (HTML / CSS / JS)

Cấu trúc khung chuẩn phân chia theo từng tầng trách nhiệm (Separation of Concerns), phục vụ phát triển ứng dụng lâu dài.

## Cấu trúc thư mục

```text
├── index.html                   # HTML skeleton chính
│
└── assets/
    ├── css/
    │   ├── main.css             # Entry point import toàn bộ CSS
    │   ├── base/                # Reset, typography, styles nền tảng
    │   ├── layout/              # Header, footer, sidebar, grid container
    │   ├── components/          # Button, card, modal, form...
    │   ├── pages/               # Styles riêng theo từng trang (home, about, ...)
    │   └── utils/               # Variables, helper classes
    │
    ├── js/
    │   ├── app.js               # Main script entry point (type="module")
    │   ├── api/                 # Gọi API, fetch, service endpoints
    │   ├── components/          # Logic các component (modal, dropdown, ...)
    │   ├── layout/              # Logic header, sidebar, navigation
    │   ├── pages/               # Logic riêng cho từng trang
    │   └── utils/               # Constants, helper functions
    │
    ├── icons/                   # Favicon, SVG icons
    ├── images/                  # Hình ảnh dự án
    └── fonts/                   # Web fonts (.woff2, .ttf)
```

