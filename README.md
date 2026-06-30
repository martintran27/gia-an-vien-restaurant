# Gia An Viên — Landing Page

Website nhà hàng **Gia An Viên** — không gian văn hoá · nghệ thuật · ẩm thực Việt.
Trải nghiệm như mở một bức tranh cuộn dài, phong cách **sơn mài** (đen – vàng – son), hành trình ẩm thực **ba miền Bắc – Trung – Nam**.

## Công nghệ
HTML + CSS + JavaScript thuần — **không build step, không dependency**. Mở `index.html` là chạy.

## Chạy local
```bash
python3 -m http.server 5510
# mở http://localhost:5510
```

## Cấu trúc
```
index.html        cấu trúc trang (16 section)
css/styles.css    design system sơn mài (tokens, typography, motion, responsive)
js/data.js        nội dung — menu 29 món, stats, reviews, FAQ, sự kiện, liên hệ
js/main.js        render + tương tác (menu tabs, signature xoay, FAQ, parallax, cursor)
assets/dishes/    ảnh món (đặt theo slug trong data.js)
```

## Ảnh món
Bỏ ảnh đã tách nền vào `assets/dishes/<slug>.png` (slug xem trong `js/data.js`).
Đổi hằng `EXT` trong `js/main.js` sang `.webp` nếu dùng WebP/AVIF.

## Tài liệu thiết kế
- `SPEC.md` — spec + kết cấu cảnh + design tokens
- `ASSET-CHECKLIST.md` — danh mục asset + thứ tự ưu tiên
- `FOOD-IMAGE-PROMPTS.md` — prompt tạo ảnh món (AI cutout)
- `REVERSE-ENGINEERING.md` — phân tích tham khảo art-direction

---
© Gia An Viên
