# GIA AN VIÊN — Art Direction + Danh mục Asset & Checklist chuẩn bị

> Chuẩn bị **trước khi** thiết kế/code. Dịch "chất lượng SHUSHI ZERON" sang ngôn ngữ thuần Việt vẽ tay. Đối chiếu `SPEC.md` + `REVERSE-ENGINEERING.md`.
>
> **QUY TRÌNH ASSET (xuyên suốt):** Không vẽ tay từ đầu. Nguồn = **(1) AI image-gen khi cần · (2) element tách từ Pinterest · (3) tự compose/design trong Figma.** → Mọi chỗ ghi "vẽ tay" bên dưới = **tự design trong Figma từ AI + element Pinterest**. ⚠️ **Bản quyền:** element Pinterest thường có bản quyền — nên dùng làm **tham khảo/moodboard** rồi tái tạo bằng AI, hoặc chỉ lấy nguồn **CC0/licensed**, để an toàn cho site thương mại.

---

## A. Phân tích Creative Director / Art Director

### A.1 "Chất lượng" của SHUSHI đến từ đâu → luật Art Direction cho GAV
| Cơ chế cao cấp (SHUSHI) | → Luật AD cho GIA AN VIÊN | Asset đòi hỏi |
|---|---|---|
| Sân khấu tối, rọi đèn vào tác phẩm | Nền sơn mài đen, mỗi cảnh là 1 bức tranh treo tường phòng triển lãm | Tranh có **mép tan vào nền đen** + **ánh kim nội tại** (vàng bắt sáng) |
| Tương phản scale (display khổng lồ / body nhỏ) | Playfair rất lớn vs Be Vietnam Pro nhỏ, kỷ luật | (chỉ cần kỷ luật typography) |
| Ảnh chiaroscuro (tối, sáng điểm) | **Tranh sơn thuỷ chiaroscuro mực** — đậm-nhạt, lưu bạch | Tranh có vùng tối sâu chìm vào đen + điểm sáng vàng chọn lọc |
| Accent <10% | Vàng là "kim loại quý", dùng tiết kiệm; son đỏ <5% | (kỷ luật màu) |
| Motion chậm, đúng chỗ | Reveal loang mực, "mở cuộn", 600–1200ms ease expo | Motif/brush có thể animate (draw, ripple) |
| Chi tiết thủ công (enso, dấu, thư pháp) | **Cả site vẽ tay → thủ công là bản chất, không phải trang trí** | Trục thủ quyển, triện son, Hán-Nôm 家安園, loang mực |

> **Khác biệt cốt lõi:** SHUSHI dùng **ảnh chụp**; GAV thay bằng **tranh vẽ tay**. Đây vừa là thử thách (phải vẽ) vừa là lợi thế (handcraft là thật, không ai clone được).

### A.2 "Thế giới hình ảnh" GAV (kim chỉ nam cho mọi asset)
- **Phong cách tranh:** lai **sơn thuỷ (thuỷ mặc)** × **sơn mài (dát vàng)** — nét mực mềm, mảng tối sâu, điểm dát vàng bắt sáng, nhiều lưu bạch.
- **Ánh sáng:** một nguồn, rọi điểm; phần lớn khung chìm trong đen ấm.
- **Đường nét:** mềm, uốn lượn (sóng nước, mây, sen, vân xoắn). **Cấm** hồi văn vuông, lưới đều, hình học cứng.
- **Bảng màu (tokens SPEC):** nền `#0C0B09` · vàng `#C9A24B`/`#F6E7A8`/`#8A6A2A` · kem `#F4EFE3` · son `#B5341F` (<5%).
- **Do:** bất đối xứng editorial, khoảng đen rộng, một điểm nhấn/khung. **Don't:** stock, gradient blob, lưới card đều, cảm giác "AI/thương mại".

---

## B. Danh mục Asset (mỗi nhóm: mục đích · chất lượng · tone · định dạng · số lượng · nguồn · hướng AI)

### B1 · Typography — **P0, BẮT BUỘC**
- **Mục đích:** phân cấp + giọng thương hiệu. **Chất lượng:** đủ dấu tiếng Việt mọi weight. **Tone:** kem/vàng trên đen. **Định dạng:** WOFF2 (self-host) hoặc Google Fonts. **Nguồn:** font service — **không AI**.
- Display: **Playfair Display** (subset Việt) — 400/600/700 + italic.
- Body: **Be Vietnam Pro** — 300/400/500/600.
- Hán-Nôm 家安園 + scene marker (壹…拾壹): **vẽ tay → SVG** (không phải web font).

### B2 · Logo & Brand marks — **P0**
- **Mục đích:** nhận diện. **Định dạng:** SVG (+ PNG export) + favicon (ICO/PNG/SVG). **Tone:** vàng / kem / đen. **Số lượng:** 1 logo (2–3 biến thể màu: full màu, mono-vàng, mono-kem) + 1 **triện 家安園** + favicon. **Nguồn:** bạn thiết kế (đã có logo asset trước đó) — **không AI**.

### B3 · Hình ảnh / Tranh sơn thuỷ (LÕI) — **P0–P1**
- **Mục đích:** các "cảnh" — linh hồn site. **Chất lượng:** painterly độ phân giải cao, **tách lớp để parallax**, mép tan vào đen, ánh kim nội tại. **Tone:** đen sơn mài + vàng + kem, chiaroscuro mực. **Định dạng:** cảnh tách lớp → **WebP/AVIF @2x trong suốt** (+ PNG fallback); cảnh phẳng → WebP/AVIF @2x. **Nguồn:** **VẼ TAY Figma — KHÔNG AI.**
- **Số lượng (~9–10 cảnh, nhiều lớp):** Hero (3+ lớp) · Triết lý (mảng loang mực) · Kiến trúc (theo lớp) · **3 phông miền** (Nam/Trung/Bắc) · **3 nội thất** (3 khu) · Biểu diễn (1 cảnh + nhạc cụ).
- **AI?** Không. (Cùng lắm dùng AI làm **tư liệu bố cục cá nhân lúc phác**, tuyệt đối không lên web.)

### B4 · Ảnh món ăn (AI cutout) — **P0–P1**
- **Mục đích:** ảnh từng món cho §5 (hero/featured) và §4 (thumbnail menu). **Chất lượng:** photoreal cutout trên nền đen, gold rim, tách nền sạch. **Tone:** tông món trên nền đen, viền vàng. **Định dạng:** PNG trong suốt → WebP/AVIF @2x. **Số lượng:** **29 món** = 9 featured (✓ đã làm) + 20 thumbnail. **Nguồn:** **AI image-gen** + tách nền — xem `FOOD-IMAGE-PROMPTS.md`.

### B5 · Background — **P0**
- **Mục đích:** "vải" sơn mài + phông cảnh. **Chất lượng:** đen ấm có chiều sâu/vignette nhẹ. **Tone:** `#0C0B09`. **Định dạng:** **CSS gradient (code)** + lớp tranh (B3) + lớp grain (B6). **Số lượng:** 1 nền base (code) + phông từng cảnh (= B3). **Nguồn:** code (gradient) + vẽ tay (cảnh).

### B6 · Texture — **P1**
- **Mục đích:** grain sơn mài + **vân dát vàng** (gold crackle) + grain lụa/giấy → độ "thật". **Chất lượng:** mờ, opacity thấp, seamless. **Tone:** grain trung tính + crackle vàng. **Định dạng:** grain → **code (SVG `feTurbulence`/CSS)** hoặc PNG tile; crackle vàng → PNG trong suốt (vẽ tay). **Số lượng:** 1 grain tile + 1–2 lớp crackle vàng. **Nguồn:** grain = code/tool (**AI chấp nhận được** vì không phải artwork); crackle vàng = vẽ tay.
- **Hướng AI (chỉ cho grain):** *"seamless tileable fine film grain, monochrome, very low contrast, subtle, 512×512"* — nhưng **ưu tiên `feTurbulence`/CSS** (sạch hơn, không cần file).

### B7 · Pattern (hoạ tiết) — **P1**
- **Mục đích:** vạch ngăn cảnh, góc, mạch nối cuộn. **Chất lượng:** nét sạch, recolor được, tileable. **Tone:** nét vàng / kem. **Định dạng:** **SVG**. **Số lượng:** ~5–8 đơn vị: sóng nước (divider) · mây/vân · sen · vân xoắn Đông Sơn · sợi chỉ vàng chữ S (bản đồ ba miền) · ornament góc. **Nguồn:** vẽ tay SVG — **không AI** (đây là motif chữ ký). **Cấm hồi văn vuông.**

### B8 · Brush — **P1**
- **Mục đích:** loang mực (ink wash), **vòng tròn mực** (tương đương enso), **trục thủ quyển** đầu/cuối, brush underline. **Chất lượng:** nét cọ thật, có hạt. **Tone:** mực/kem/vàng. **Định dạng:** SVG (nét) + PNG trong suốt (mảng wash có chất liệu). **Số lượng:** ~4–6 (loang mực mép · vòng mực · trục ×2 · underline). **Nguồn:** vẽ tay — **không AI**.

### B9 · Icon — **P1**
- **Mục đích:** icon USP (nguyên liệu/nghệ nhân/không gian/bền vững), social, liên hệ, UI (mũi tên, play, đóng). **Chất lượng:** nét mảnh đều, mạ vàng, đồng bộ. **Tone:** nét vàng. **Định dạng:** **SVG**. **Số lượng:** ~12–18. **Nguồn:** vẽ tay **hoặc** thư viện (Lucide/Tabler) **restyle về nét vàng mảnh**.
- **AI?** Tuỳ chọn cho bản nháp. **Hướng AI:** *"minimalist single-line icon, thin uniform stroke, gold, [chủ thể], flat, no fill"* — nhưng **dùng thư viện + restyle nhanh & sạch hơn**.

### B10 · Video — **P3, KHUYẾN NGHỊ SKIP**
- **Mục đích:** (tuỳ chọn) loop nền không khí. **Khuyến nghị:** **bỏ** ở bản lõi — video đập nhau với mỹ học vẽ tay + nặng; dùng GSAP/CSS/Lottie thay thế. Nếu sau muốn: loop câm 8–12s, MP4(H.265)+WebM + poster, tone tối. **Số lượng:** 0 (đề xuất). **Nguồn:** quay thật nếu cần — **không AI** (AI video sẽ "lộ AI", lạc brand).

### B11 · Micro-animation / Lottie — **P2**
- **Mục đích:** showcase "Signature xoay", scroll cue, motif động (brush draw, sóng nước gợn). **Chất lượng:** mượt, nhẹ. **Tone:** vàng/mực. **Định dạng:** **ưu tiên GSAP/CSS** (kiểm soát, nhẹ); **Lottie (JSON)** chỉ khi cần motion vẽ tay phức tạp (xuất từ After Effects từ frame vẽ tay của bạn). **Số lượng:** vài cái. **Nguồn:** code (GSAP/CSS) + Lottie từ frame vẽ tay. **Không AI.**

### B12 · Tài nguyên 3D — **SKIP (YAGNI)**
- **Khuyến nghị: KHÔNG cần.** Mỹ học 2D vẽ tay; 3D đập brand + nặng. Bỏ. **Nguồn:** n/a.

### B13 · Audio — **P3, tuỳ chọn**
- **Mục đích:** nhạc dân tộc nền (đàn tranh/đàn bầu), **mặc định tắt** + nút bật (a11y). **Định dạng:** MP3/AAC + OGG. **Số lượng:** 0–1. **Nguồn:** nhạc có bản quyền/licensed — **không AI** (cần authentic).

### B14 · Nội dung / Copywriting — **P0**
- **Mục đích:** toàn bộ chữ. **Chất lượng:** tiếng Việt tinh tế, cổ phong nhưng rõ ràng; giọng tĩnh – tự hào – không sáo. **Định dạng:** text / JSON. **Nguồn:** **AI ĐƯỢC nháp** (là chữ, không phải artwork) → bạn tinh chỉnh.
- **Danh mục:** tên+tagline · hero copy · triết lý · kiến trúc copy · 3 lời mở miền · ~3 câu thơ món signature · tên+giá món (**đã có** từ xlsx) · câu chuyện thương hiệu · 4–6 điểm "vì sao chọn" · review (cần thật) · FAQ Q&A · copy đặt bàn · CTA · footer (địa chỉ/giờ/liên hệ/social) · text Hán-Nôm.
- **Hướng AI (nháp copy):** *"viết tiếng Việt, giọng cổ phong tinh tế, trang trọng không sáo rỗng, ngắn gọn gợi cảm giác nghệ thuật–văn hoá–ẩm thực Việt; tránh từ marketing thương mại"* → bạn refine cho chuẩn bản sắc.

### B15 · Dữ liệu (Data) — **P0–P1**
- **Menu** (✓ đã có: 29 món, 4 nhóm, giá) → cấu trúc JSON. **P0**
- **Liên hệ:** địa chỉ, SĐT, email, giờ mở cửa, social, **Google Maps embed**. **P0**
- **Reviews** thật (tên, nơi, ngày, sao, trích). **P1**
- **FAQ** (câu hỏi + trả lời). **P1**
- **Sự kiện & Workshop** (lịch). **P1**
- **Thư viện** (danh sách ảnh/tranh trưng bày). **P1**
- **Reservation endpoint** (Formspree/Basin) — chốt khi build. **P1**

### B16 · Components (dựng lúc code, liệt kê để biết kết cấu)
Header · Hero · StatsBar · SignatureShowcase(xoay) · MenuTabs(theo MIỀN) · StoryBlock · BentoGrid(vì sao chọn) · ReviewCarousel · ReservationOptions · FAQAccordion · MapContact · Footer · custom cursor · scroll-progress/“mở cuộn”.

---

## C. CHECKLIST theo thứ tự ưu tiên

### 🔴 P0 — BẮT BUỘC trước khi thiết kế/code
- [ ] **Fonts** Playfair Display + Be Vietnam Pro (free, Google Fonts)
- [ ] **Logo** Gia An Viên (2–3 biến thể) + **triện 家安園** + favicon (SVG)
- [ ] **Palette tokens** (đã có trong SPEC §1.1)
- [ ] **Copywriting** toàn bộ + text Hán-Nôm (AI nháp → bạn refine)
- [ ] **Menu data → JSON** (nội dung đã có)
- [ ] **Liên hệ**: địa chỉ, SĐT, email, giờ, social, **Maps embed**
- [ ] **Tranh Hero** (tách 3+ lớp) — vì hero là ấn tượng đầu
- [ ] **Background base** (gradient code)

### 🟠 P1 — Cần để site "đủ chất"
- [ ] Tranh các cảnh còn lại: Kiến trúc · **3 phông miền** · **3 nội thất** · Biểu diễn · loang mực Triết lý
- [x] **29 ảnh món (AI cutout)** ✓ xong (9 featured + 20 thumbnail)
- [ ] **Kit motif SVG**: sóng nước · mây · sen · vân xoắn · chỉ vàng chữ S · ornament góc
- [ ] **Kit brush**: loang mực · vòng mực · trục thủ quyển ×2 · underline
- [ ] **Icon set** nét vàng (12–18)
- [ ] **Texture**: grain (code) + vân dát vàng (vẽ tay)
- [ ] Data: Reviews thật · FAQ · Sự kiện/Workshop
- [ ] **Ảnh/tranh Thư viện** (gallery)

### 🟡 P2 — Nâng chất
- [ ] Micro-animation: vòng Signature xoay · brush-draw · scroll cue (GSAP/Lottie)
- [ ] (Tuỳ chọn) 3 minh hoạ món hero mỗi miền
- [ ] Featured dish card art

### ⚪ P3 — Bổ sung sau / tuỳ chọn
- [ ] ~~Video nền~~ (khuyên **SKIP**)
- [ ] Audio nhạc dân tộc (mặc định tắt)
- [ ] ~~3D~~ (khuyên **SKIP**)
- [ ] Motif theo mùa, mở rộng gallery

---
*Đối chiếu: `SPEC.md` (kết cấu 11 cảnh + tokens) · `REVERSE-ENGINEERING.md` (tư duy SHUSHI ZERON).*
