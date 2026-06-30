# Gia An Viên — Landing Page Spec (Sơn mài / Tranh cuộn)

> Spec thiết kế + brief sản xuất asset. **Chưa có code.** Asset = **AI image-gen (khi cần) + element tách từ Pinterest, tự compose trong Figma** (KHÔNG vẽ tay từ đầu). Session sau mới dựng web khi đã có asset.

## Bối cảnh

`gav v2` = **Gia An Viên** — nhà hàng đồng thời là không gian văn hoá – nghệ thuật Việt. Trang landing phải cho cảm giác **bước vào một triển lãm / mở một bức tranh cuộn dài (thủ quyển)**; mỗi phần nội dung là một "cảnh" tan vào nhau, không phải các thẻ (card) rời rạc.

**Ràng buộc cốt lõi (đã chốt):**
- **Asset = AI gen (khi cần) + element Pinterest, tự compose trong Figma** — KHÔNG vẽ tay từ đầu. *(Mọi chỗ ghi "vẽ tay" trong tài liệu = tự dàn dựng trong Figma, không phải vẽ thủ công.)*
- Tông nền **tối — sơn mài** (nền đen sơn mài, dát vàng).
- Ẩn dụ cuộn tranh: **cuộn dọc, mở ngang trong từng cảnh** (parallax layer trôi ngang).
- Bảng màu: **vàng ánh kim, trắng, đen**. Đường nét **mềm, uốn lượn** (sóng nước, mây, sen) — **tránh** hồi văn vuông cứng và lưới đều.
- Tránh cảm giác "quá AI / quá hiện đại / quá thương mại".

---

## 1. Ngôn ngữ thị giác — Sơn mài

### 1.1 Bảng màu (design tokens)
| Token | Hex | Vai trò |
|---|---|---|
| `--then-900` | `#0C0B09` | Nền chính (đen sơn mài ấm, KHÔNG dùng #000) |
| `--then-800` | `#15120C` | Nền cảnh xen kẽ |
| `--then-700` | `#1F1A12` | Bề mặt nổi (surface), khung, thẻ |
| `--kim-core` | `#C9A24B` | Vàng nền (gold base) |
| `--kim-hi` | `#F6E7A8` | Điểm sáng vàng (highlight foil) |
| `--kim-lo` | `#8A6A2A` | Bóng vàng (shadow foil) |
| `--giay` | `#F4EFE3` | Chữ chính / "lưu bạch" (kem giấy dó) |
| `--giay-soft` | `rgba(244,239,227,.72)` | Chữ phụ |
| `--son` | `#B5341F` | **Tuỳ chọn**: triện son / con dấu / nút CTA — dùng <5% |

- **Vàng "ánh kim" = gradient, không phẳng:** `linear-gradient(135deg,#8A6A2A,#F6E7A8 45%,#C9A24B 70%,#8A6A2A)`; shimmer rất nhẹ khi cuộn (chỉ `background-position`/`opacity`). Texture dát vàng (vân nứt) đến từ asset vẽ tay.
- **Tương phản / a11y:** body text dùng `--giay` trên nền đen (đạt AA dư sức). **Vàng chỉ cho chữ lớn / tiêu đề / hoạ tiết**, không cho body text nhỏ.

### 1.2 Chất liệu
- Lớp **grain/lụa** rất nhẹ phủ toàn trang (CSS/SVG noise, opacity thấp).
- **Vân dát vàng, vệt mực, mép tranh** → asset vẽ tay (PNG/SVG trong suốt).

### 1.3 Typography
- **Display:** Playfair Display (hỗ trợ dấu tiếng Việt) — tiêu đề cảnh, hero.
- **Body:** Be Vietnam Pro — nội dung.
- **Thư pháp Hán-Nôm 家安園:** **vẽ tay → SVG**, KHÔNG dùng web font. Dùng như con triện / accent dọc.
- **Scene marker:** đánh số cảnh editorial — "Cảnh 壹 … 拾壹" hoặc "01 — 11", nhãn nhỏ đầu mỗi cảnh.
- **Type scale (clamp):** display `clamp(2.75rem,1.5rem+6vw,7rem)` · h2 `clamp(1.75rem,1rem+3vw,3.25rem)` · body `clamp(1rem,.95rem+.3vw,1.15rem)` · kicker 0.8rem giãn chữ, chữ hoa nhỏ.

### 1.4 Hoạ tiết — mềm, uốn lượn
- **Ưu tiên:** sóng nước, mây/vân, sen, vân xoắn Đông Sơn, dáng núi non.
- **Hạn chế:** hồi văn vuông, lưới đều, hình học cứng.
- Vị trí: vạch ngăn giữa cảnh (đường sóng nước thay kẻ thẳng), ốc trục cuộn đầu/cuối trang, hoạ tiết góc. **Tất cả vẽ tay.**

---

## 2. Kết cấu "tranh cuộn" (Handscroll)

- **Một mạch cuộn DỌC = thủ quyển đã mở**, từ trên xuống. 11 phần = 11 **cảnh** tan vào nhau bằng chuyển cảnh **loang mực / sương vàng**.
- **Trong mỗi cảnh:** parallax nhiều lớp — lớp tranh nền **trôi NGANG** khi cuộn dọc, lớp giữa, lớp chữ ở trước.
- **Ốc trục:** đỉnh & chân trang tạo hình trục gỗ/ngà của thủ quyển.
- **Lưu bạch:** chừa nhiều khoảng đen rộng giữa cảnh; KHÔNG lấp đầy mọi pixel.
- **Sợi chỉ vàng** (tuỳ chọn) chạy dọc liền mạch nối các cảnh.
- Bố cục editorial bất đối xứng, phá lưới (bento/editorial).

---

## 3. Spec 11 cảnh

1. **Hero — Đại cảnh Gia An Viên.** Toàn màn hình: đại cảnh sơn thuỷ/toàn cảnh nhà hàng trên nền sơn mài. Triện 家安園 + logo + tên + tagline + gợi ý "cuộn để mở tranh". *Motion:* tiêu đề vàng shimmer khi load; cuộn → tranh trôi ngang "mở" sang cảnh 2. *Asset:* tranh hero **3+ lớp** (trời/núi xa · kiến trúc giữa · tiền cảnh), logo+triện SVG. Lớp rộng 2400–3200px.
2. **Triết lý thương hiệu.** Editorial: trích dẫn cỡ lớn, accent Hán-Nôm dọc, nền loang mực, nhiều lưu bạch. *Motion:* chữ hiện theo dòng; mực trôi nhẹ. *Asset:* mảng loang mực, thư pháp (SVG).
3. **Kiến trúc & Cảnh quan.** Kiến trúc thuần Việt + cảnh quan; đan xen ảnh–chữ, có thể pan ngang mặt đứng. *Asset:* nét/tranh kiến trúc theo lớp, phần tử cảnh quan.
4. **Hành trình Ẩm thực ba miền — 3 chương cuộn dọc, NAM → TRUNG → BẮC.** Mỗi lần kéo xuống mở ra MỘT miền (mỗi miền ~1 viewport; chuyển miền bằng loang mực/sương vàng; scroll-snap nhẹ tuỳ chọn, tôn trọng `prefers-reduced-motion`). Hành trình đi ngược lên: **Nam (trên) → Trung (giữa) → Bắc (dưới)**. Mỗi miền = **1 phông sơn thuỷ** (trôi ngang parallax) + **danh sách món** (thumbnail nhỏ tách nền + tên + giá vàng nhỏ, vạch ngăn sóng nước). Chỉ thị miền hiện tại + sợi chỉ vàng chữ S tiến dần lên Bắc. *Asset:* 3 phông miền (Nam: sông nước miệt vườn/chợ nổi · Trung: Đại Nội Huế/Hội An đèn lồng · Bắc: phố cổ/núi Bắc Bộ) theo lớp; hoạ tiết chữ S + vạch sóng nước (SVG). **Nội dung món: Phụ lục A.**
5. **Món ăn Signature ← nhóm "Đặc trưng riêng" (6 món "tiến vua").** Gallery editorial bất đối xứng. **Vẽ tranh đầy đủ ~3 món hero** (đề xuất: *Súp Vi Cá Yến Sào Tiến Vua* 550k làm flagship cỡ lớn · *Lẩu Chim Trĩ Nấm Tràm* 495k · *Cá Tầm Nướng Rừng Tràm* 485k); **3 món còn lại** (Hải Sâm 385k · Chè Yến Sào 299k · Tráng Miệng Ngọc Lục Bảo 145k) dạng vignette nhỏ/typographic. Mỗi món: tên Playfair + 1 dòng thơ + giá vàng nhỏ, khung vàng. *Asset:* ~3 tranh món hero (theo lớp), khung dĩa vàng (SVG). **Nội dung: Phụ lục A.**
6. **Không gian nhà hàng (3 khu).** 3 gian Bắc–Trung–Nam; 3 cảnh nội thất vẽ tay. *Asset:* 3 tranh nội thất (theo lớp).
7. **Biểu diễn nghệ thuật truyền thống.** "Đêm diễn" — tối nhất, ánh đèn vàng sân khấu; nhạc dân tộc, bụi sáng vàng. *Asset:* tranh cảnh diễn, nhạc cụ, quầng sáng.
8. **Lịch sự kiện & Workshop.** Danh sách/timeline như **mục lục trên cuộn**, vạch ngăn sóng nước (không bảng ô). Ít tranh, nhiều typography. *Asset:* hoạ tiết vạch ngăn.
9. **Thư viện hình ảnh.** "Phòng triển lãm": lưới editorial/masonry giãn cách hữu cơ, lightbox. *Asset:* ảnh/tranh trưng bày, khung vàng.
10. **Đặt bàn.** Form như **thiệp mời**, vàng trên sơn mài. Trường: tên, SĐT, ngày/giờ, số khách, chọn khu (1/3 gian), ghi chú. Nút = **triện son** (`--son`). Front-end only → Formspree/Basin/mailto/serverless (chốt khi build); validate client-side; **honeypot**. *Asset:* khung thiệp, con triện (SVG).
11. **Footer.** Trục cuối khép cuộn: triện, liên hệ, địa chỉ, giờ mở cửa, social, bản đồ — vàng trên đen. *Asset:* hoạ tiết trục cuối, triện nhỏ.

---

## 4. Chuyển động & tương tác

- **Cuộn dọc native**; smooth-scroll (Lenis, ~3–5kb) tuỳ chọn, tinh tế — **KHÔNG scroll-jacking**.
- **Mở ngang = parallax** layer trôi ngang theo vị trí cuộn (GSAP ScrollTrigger scrub *hoặc* CSS scroll-driven timeline).
- **Hiện cảnh:** loang mực / mờ vàng (chỉ `transform`/`opacity`/`clip-path`); 600–1200ms, ease-out-expo.
- **`prefers-reduced-motion`:** tắt parallax + reveal, hiện cảnh tĩnh.
- **Semantic HTML:** `header/nav`, `main`, `section[aria-labelledby]`, `footer`; lightbox & form điều hướng bằng bàn phím.

---

## 5. Brief sản xuất asset (vẽ tay Figma) + kỹ thuật xuất web

**Nguyên tắc định dạng:**
- **Nét đơn sắc / hoạ tiết phẳng / triện / thư pháp / logo** → **SVG**.
- **Tranh painterly (nhiều tông, chất liệu)** → **AVIF + WebP @2x**, PNG fallback; cấp @1x và @2x.
- **Cảnh nhiều lớp để parallax** → xuất **từng lớp riêng**, nền trong suốt.
- **Màu:** xuất **sRGB**; canh tông vàng trên nền `#0C0B09`.
- **Kích thước parallax:** lớp nền rộng hơn viewport (≈2400–3200px).
- **Đặt tên:** `cảnh##-lớp##-tên` (vd `01-hero-l01-troi.webp`).
- **CLS:** mọi ảnh khai báo `width`/`height`; hero `fetchpriority=high` + eager, còn lại `loading=lazy`.

| Cảnh | Asset cần (vẽ tay) | Định dạng |
|---|---|---|
| 1 Hero | tranh đại cảnh 3+ lớp · logo · triện 家安園 | lớp: WebP/AVIF @2x trong suốt · logo/triện: SVG |
| 2 Triết lý | mảng loang mực · thư pháp accent | SVG (mực có thể PNG @2x) |
| 3 Kiến trúc | nét/tranh kiến trúc theo lớp · cảnh quan | SVG (nét) / WebP @2x (tranh) |
| 4 Ba miền | 3 phông miền (Nam/Trung/Bắc) theo lớp · chữ S + vạch sóng nước | phông: WebP/AVIF @2x · SVG ornament |
| 5 Signature | ~3 tranh món hero (theo lớp) · khung dĩa vàng | WebP @2x · SVG khung |
| 6 3 khu | 3 tranh nội thất theo lớp | WebP/AVIF @2x trong suốt |
| 7 Biểu diễn | tranh cảnh diễn · nhạc cụ · quầng sáng | WebP @2x · SVG/PNG |
| 8 Sự kiện | hoạ tiết vạch ngăn sóng nước | SVG |
| 9 Thư viện | ảnh/tranh trưng bày · khung vàng | ảnh: WebP/AVIF @2x · khung SVG |
| 10 Đặt bàn | khung thiệp · con triện son | SVG |
| 11 Footer | hoạ tiết trục cuối · triện nhỏ | SVG |

---

## 6. Tech stack (cho session BUILD sau)

- **Pattern:** một file `index.html` + **Tailwind (CDN)** + deploy **Vercel**, front-end only.
- **Thêm (CDN):** Lenis (smooth scroll) + **GSAP ScrollTrigger** cho parallax; *hoặc* **CSS scroll-driven animation** để bớt JS. Bám **ngân sách JS < 80kb gz** (microsite) — vượt thì rút về CSS scroll-timeline.
- **Font:** Playfair Display + Be Vietnam Pro (Google Fonts), `font-display:swap`, subset Latin+Vietnamese, preload 1 weight critical.
- **Bảo mật form:** validate 2 phía, honeypot, rate-limit ở endpoint.

---

## 7. Guardrails — tránh "AI / thương mại"

- KHÔNG: ảnh stock hero, gradient blob, lưới card đều, mẫu "tiêu đề giữa + CTA".
- Khi build: **placeholder trung tính** (khung viền, ô vàng, vệt mực) — **không bao giờ** chèn artwork AI; chờ tranh vẽ tay.
- Bố cục bất đối xứng, phá lưới, lưu bạch rộng. Motion làm rõ việc "mở cuộn", không gây nhiễu.
- **Dữ liệu:** chỉ Miền/Tên món/Đơn giá lên web; số liệu tài chính nội bộ (doanh thu, số lượng, tăng trưởng) KHÔNG public (xem Phụ lục A).

---

## 8. Kiểm chứng (cho session build sau)

- Visual regression 320/768/1024/1440 ở các trạng thái cuộn.
- A11y: bàn phím, reduced-motion, tương phản vàng/kem trên đen đạt AA.
- Lighthouse/CWV theo ngân sách. Cross-browser cuộn Chrome/Firefox/Safari.

---

## Phụ lục A — Thực đơn (nội dung §4 & §5)

> ⚠️ **Nguồn:** `FINANCE [STARUP] (1).xlsx` → sheet *Doanh Thu*. Chỉ **3 cột công khai: Miền · Tên món · Đơn giá**. Các cột doanh thu / số lượng / tăng trưởng / tổng là **tài chính nội bộ — KHÔNG đưa lên web.** Giá dưới đây đơn vị **nghìn ₫** (vd 550 = 550.000₫).

**Đặc trưng riêng → §5 Signature (6 món):**
| Món | Giá | Thể hiện |
|---|---|---|
| Súp Vi Cá Yến Sào Tiến Vua | 550 | tranh hero (flagship) |
| Lẩu Chim Trĩ Nấm Tràm | 495 | tranh hero |
| Cá Tầm Nướng Rừng Tràm | 485 | tranh hero |
| Hải Sâm Xào Nấm Đông Cô | 385 | vignette / typographic |
| Chè Yến Sào Thượng Tiên | 299 | vignette / typographic |
| Tráng Miệng Ngọc Lục Bảo | 145 | vignette / typographic |

**§4 Ba miền — thứ tự cuộn NAM → TRUNG → BẮC** (mỗi miền: phông tranh + danh sách chữ):

- **Miền Nam (7):** Lẩu Gà Nòi Hầm Ớt Hiểm 345 · Bò Tơ Trụng Nước Dừa 285 · Bánh Xèo Tôm Sú 195 · Chả Giò Cua Cà Mau Rế Giòn 225 · Cua Lột Chiên Giòn Sốt Me 245 · Canh Chua Cua Biển Bông Điên Điển 215 · Gỏi Củ Hũ Dừa Tôm Càng Xanh 245
- **Miền Trung (8):** Nem Công Chả Phượng Xứ Huế 300 · Bò Lúc Lắc Hạt Điều Cung Đình 295 · Nem Lụi Nướng Than Hoa 155 · Cao Lầu Phố Hội 175 · Cơm Hến Ngự Bình 135 · Gà Đồi Nướng Mật Ong 345 · Súp Bào Ngư Nước Cốt Gà 245 · Tré Rơm Tiến Vua 145
- **Miền Bắc (8):** Nem Cua Bể Hoàng Gia 225 · Bún Chả Kinh Kỳ 145 · Chả Cá Lăng Lã Vọng 345 · Thịt Lợn Nướng Lá Mắc Mật 265 · Vịt Nướng Vân Đình 325 · Gà Ri Hấp Lá Chanh 295 · Chả Mực Hạ Long Giã Tay 295 · Bò Một Nắng Nướng Mắc Khén 355

*(Gợi ý nếu sau muốn nâng 1 món/miền thành tranh hero: Nam — Bánh Xèo Tôm Sú; Trung — Nem Công Chả Phượng Xứ Huế; Bắc — Chả Cá Lăng Lã Vọng.)*

---

## Bàn giao & bước kế tiếp

1. **Người dùng** vẽ + xuất asset Figma theo brief §5 (đặt tên `cảnh##-lớp##-tên`), bỏ vào `assets/` trong thư mục dự án.
2. Session sau: dựng web theo §3/§4/§6, thay placeholder bằng asset thật, chạy kiểm chứng §8.
