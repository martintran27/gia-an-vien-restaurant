# Reverse Engineering — SHUSHI ZERON → tư duy thiết kế cho GIA AN VIÊN

> Bóc tách site tham khảo `demowebsite.mp4` (SHUSHI ZERON, sushi cao cấp Đà Nẵng) **để mượn TƯ DUY, không mượn GIAO DIỆN.** Mục tiêu: GAV đạt cùng đẳng cấp cảm xúc nhưng nhận diện thuần Việt, vẽ tay, không đụng hàng.

## 0. "DNA" của site — vì sao nó liên quan trực tiếp tới GAV
SHUSHI ZERON là **dark luxury editorial Á Đông**. Nó dùng đúng bộ khung mà SPEC GAV đã chốt: nền tối, serif tương phản cao hai tông, nhiều khoảng trống, motion cuộn có chủ đích, một "showcase signature" xoay, menu chia nhóm, accent kim loại + đỏ kỷ luật. **Khác biệt duy nhất là lớp da văn hoá:** SHUSHI = Nhật (enso, lá phong, kanji, **ảnh chụp**); GAV = Việt (sóng nước, sen, Hán-Nôm, **tranh vẽ tay**). → Site này *xác nhận* hướng dark-sơn-mài của ta là đúng.

---

## 1. Triết lý thiết kế
- **Cảm xúc truyền tải:** tĩnh, nghi lễ, tôn kính nghề — cảm giác "thưởng thức nghệ thuật" chứ không "đặt đồ ăn".
- **Định vị:** fine-dining Nhật authentic, thủ công, cao cấp, độc bản.
- **Vì sao thấy cao cấp (6 cơ chế):**
  1. Nền đen sâu + tương phản mạnh → sân khấu/gallery, mỗi món được "rọi đèn".
  2. Serif tương phản cao + khoảng trắng rộng + **không nhồi nhét** → tự tin.
  3. Ảnh chiaroscuro (tối, ánh sáng điểm) → điện ảnh, đắt tiền.
  4. Accent vàng/đỏ **dưới 10% diện tích** → kỷ luật = sang.
  5. Motion chậm, ít, đúng chỗ → "không vội" = cao cấp.
  6. Chi tiết thủ công (enso brush, con dấu, thư pháp, chữ ký bếp trưởng) → tín hiệu *human craft*, không phải template.

## 2. Cấu trúc trải nghiệm (UX Flow)
Trình tự 11 lớp và **nhiệm vụ từng lớp**:
1. Hero — *Hook*: gây ấn tượng + định vị 1 câu.
2. Stats (4.9 / 100% / EXPERT / 500+) — *Trust tức thì*.
3. Our Signature (showcase xoay) — *Desire*: khơi khát khao qua nghệ thuật chế biến.
4. Menu (tabs) — *Detail*: sản phẩm cụ thể.
5. Câu chuyện — *Emotion*: kết nối thương hiệu.
6. Why Choose Us (bento) — *Reason*: lý do lý trí để tin.
7. Reviews (carousel) — *Proof*: bằng chứng xã hội.
8. Reservation — *Action*: chuyển đổi.
9. FAQ (accordion) — *Gỡ rào cản* trước khi quyết.
10. Location (map) — *Đường đến*.
11. Footer — đóng + điều hướng + newsletter.

**Logic xếp thứ tự:** Hook → Trust → Desire → Detail → Emotion → Reason → Proof → Action → An tâm → Đến nơi. Đây là phễu cảm xúc → lý trí → hành động kinh điển; mỗi section "trả lời" câu hỏi mà section trước vừa gợi ra.

## 3. Bố cục (Layout)
- **Grid:** 12-col ngầm, nhưng trình bày **bất đối xứng editorial** — chữ một bên, hình bên kia, **đảo chiều** giữa các section để tạo nhịp (zig-zag).
- **Khoảng trắng (ở đây là "khoảng đen"):** rất rộng — "lưu bạch", mỗi section được thở.
- **Tỷ lệ chữ/ảnh:** tiêu đề display rất lớn (≈5–7rem) tương phản body nhỏ → **scale contrast** mạnh = dấu hiệu cao cấp.
- **Nhịp thị giác:** lặp khối `kicker nhỏ (uppercase, giãn chữ) → title lớn → body → CTA/link` ở mọi section → nhịp nhất quán.
- **Điểm nhấn:** mỗi khung có 1 điểm đỏ hoặc 1 từ tô vàng/đỏ; số đếm section (01–06); con trỏ tuỳ biến vòng đỏ.

## 4. Visual Direction
- **Hình ảnh:** food photography tối, điện ảnh, ánh sáng điểm, nền đen.
- **Minh hoạ:** enso (vòng brush mực), nét brush, bình sake.
- **Texture:** grain giấy nhẹ, vệt mực, khói mờ, viền vàng mảnh.
- **Màu:** đen ấm (nền) · đỏ son Nhật (accent chính) · vàng champagne (accent phụ) · trắng ngà (chữ).
- **Typography:** serif Didone tương phản cao (kiểu Playfair Display) cho display, thường **hai tông** (trắng + đỏ / trắng + vàng) + italic nhấn; sans sạch cho body; kicker uppercase giãn chữ; **kanji dọc** làm accent.
- **Ngôn ngữ thiết kế:** "bảo tàng tối" — kỷ luật, nghi lễ, thủ công.

## 5. Animation & Motion
- **Load:** hero fade + slide-up theo tầng; enso vẽ nét; lá trôi nhẹ.
- **Scroll:** reveal theo tầng (title → body → cards stagger); parallax ảnh/lá/brush khác tốc độ.
- **Parallax:** nhiều lớp (ảnh, lá phong, vòng brush) trôi lệch nhau.
- **Transition:** chuyển section mượt; **custom cursor** (vòng đỏ) bám chuột.
- **Điểm nhấn lớn nhất — "Our Signature":** vòng tròn vàng + món **xoay/đổi** (spin có motion blur) như mâm xoay trưng bày.
- **Timing:** chậm (≈600–1000ms), ease mượt (expo/cubic-bezier). Chuyển động nhanh/giật = rẻ; chậm + ease = đắt.
- **Vì sao motion tạo cảm giác cao cấp:** *ít nhưng đúng chỗ*, luôn tôn nội dung, **không scroll-jack** gây khó chịu; tốc độ chậm = "tự tin, không vội".

## 6. Thành phần UI
- **Header:** trong suốt, logo trái · nav giữa · switch ngôn ngữ VI/EN + CTA pill "ĐẶT BÀN NGAY" phải; sticky, nền tối dần khi cuộn.
- **Hero:** split (chữ trái / ảnh phải), 2 CTA, kanji dọc.
- **CTA:** pill bo tròn — đỏ filled (primary) + viền (secondary), kèm mũi tên.
- **Card:** nền tối, viền/icon vàng mảnh, hover **nâng + glow** (Why Choose Us bento, review cards, menu items).
- **Gallery/Menu:** tabs theo nhóm + list + **featured card** bên phải (ảnh lớn, sao, gợi ý sake); review carousel ngang.
- **Footer:** 4 cột (brand+social / liên kết nhanh / giờ mở cửa / đặt bàn + newsletter).
- **Component lặp lại:** khối `kicker+title+body+CTA`; card vàng-trên-đen; con dấu/seal đỏ; điểm đỏ; số đếm section; con trỏ vòng đỏ.

## 7. Asset Library (để tái tạo loại site này)
- **texture:** grain giấy, vệt mực, khói nhẹ.
- **illustration:** enso brush ring, nét brush mực.
- **icon:** bộ line mảnh mạ vàng (sao, lá, dao bếp, kim cương, đèn, cốc…).
- **pattern:** rất ít — chủ yếu để trống (đây là điểm "đắt").
- **brush:** enso, brush underline.
- **background:** ảnh food tối, ảnh không gian/bình sake tối, lá phong rải.
- **decoration:** lá phong đỏ, con dấu đỏ, viền vàng góc, kanji dọc, chấm pagination.
- **image style:** chiaroscuro, nền đen, ánh sáng điểm, bão hoà thấp trừ đỏ/vàng của món.

## 8. Thiết kế từng section (mục đích · thành phần · bố cục · animation · cảm xúc · liên kết)
| Section | Mục đích | Thành phần | Bố cục | Animation | Cảm xúc | Nối tiếp |
|---|---|---|---|---|---|---|
| Hero | Hook + định vị | logo nav, title 2 tông, 2 CTA, ảnh+enso+kanji | split trái/phải | fade/slide-up, enso vẽ, parallax | choáng ngợp, tò mò | "có đáng tin không?" |
| Stats | Trust nhanh | 4 số + nhãn | hàng ngang 4 cột | count-up khi vào | yên tâm | "tay nghề thế nào?" |
| Signature | Desire | kicker+title, vòng xoay món, 4 USP | chữ trái · ring giữa · USP phải | ring + món xoay, USP stagger | thèm muốn | "có món gì?" |
| Menu | Detail | tabs, list món+giá, featured card | tabs trên · list trái · card phải | tab switch, card update | khám phá | "thương hiệu này là ai?" |
| Story | Emotion | title 2 tông, chữ ký bếp trưởng, ảnh sake | chữ trái / ảnh phải | reveal dòng, ảnh parallax | đồng cảm | "vì sao chọn họ?" |
| Why Choose Us | Reason | 6 card USP icon vàng | bento 3×2 | stagger + hover lift/glow | tin tưởng | "người khác nói gì?" |
| Reviews | Proof | rating 4.9, card review (avatar/sao/quote) | carousel ngang | auto-scroll/drag | an tâm | "đặt thôi" |
| Reservation | Action | 3 loại trải nghiệm, 3 stat, headline, 2 CTA | trái options · giữa stats · phải CTA | reveal + CTA glow | quyết định | "còn băn khoăn gì?" |
| FAQ | Gỡ rào cản | accordion câu hỏi | accordion trái / title phải | expand mượt | nhẹ nhõm | "đến đâu?" |
| Location | Đường đến | map nhúng, info liên hệ | chữ trái · map giữa · info phải | map reveal | thực tế | đóng |
| Footer | Đóng + điều hướng | brand, social, links, giờ, newsletter | 4 cột | — | gọn gàng | — |

## 9. Front-end (nếu code lại)
- **Công nghệ:** HTML/CSS/JS thuần *hoặc* Astro/Next; **GSAP + ScrollTrigger** (reveal, pin, scrub, parallax) + **Lenis** (smooth scroll) + Swiper (review carousel) + custom-cursor JS.
- **GSAP nào:** `ScrollTrigger` (scrub parallax, batch reveal, pin section Signature), `gsap.timeline()` cho hero load, `ScrollTrigger.matchMedia()`/`gsap.matchMedia()` cho responsive, `SplitText` (tuỳ chọn) cho reveal chữ theo dòng.
- **CSS nào:** custom properties (tokens), `clamp()` type scale, CSS grid + flex, `mask`/`clip-path` cho reveal, `backdrop-filter` cho header, `mix-blend-mode` cho điểm nhấn vàng.
- **Component:** Header, Hero, StatsBar, SignatureShowcase(xoay), MenuTabs, StoryBlock, BentoGrid, ReviewCarousel, ReservationOptions, FAQAccordion, MapContact, Footer.
- **Responsive:** desktop split → mobile stack; **tắt parallax + custom cursor trên touch**; menu tabs → accordion/scroll ngang; type scale `clamp()`; **`prefers-reduced-motion`** tắt motion.

## 10. Khác gì một landing page AI thông thường
1. Bố cục bất đối xứng có chủ đích — **không** "hero giữa + 3 card đều".
2. Chi tiết thủ công (enso, con dấu, thư pháp, ảnh art-direction riêng) — **không** stock/AI generic.
3. Kỷ luật màu & khoảng trắng — **dám để trống**, accent <10%.
4. Motion có ý đồ kể chuyện — không "hiệu ứng cho có".
5. Hệ thống nhất quán (kicker/title/seal/điểm đỏ lặp lại) → cảm giác "do người có gu thiết kế", không phải lắp ráp template.

---

## 11. BẢNG DỊCH sang GIA AN VIÊN (mượn tư duy, không mượn da)
| SHUSHI ZERON (Nhật) | → GIA AN VIÊN (Việt) |
|---|---|
| enso — vòng brush mực | vòng thủ quyển / sóng nước / vầng trăng mực |
| lá phong đỏ momiji | cánh sen · lá tre · hoa đào (Bắc) · bông điên điển (Nam) |
| kanji dọc 本物の味 | **thư pháp Hán-Nôm dọc 家安園** (đã có trong SPEC) |
| đỏ son Nhật | **triện son đỏ** accent <5% (đã có) + **vàng dát** chủ đạo |
| ảnh food chiaroscuro | **tranh sơn thuỷ vẽ tay** ← khác biệt cốt lõi, không dùng ảnh |
| "Our Signature" xoay món | **§5 Signature** xoay 3 món "tiến vua" |
| Menu tabs theo loại | **§4 menu theo MIỀN** Nam→Trung→Bắc (đã chốt) |
| stats / reviews / why-choose-us | giữ cơ chế uy tín, đổi giọng + thư pháp Việt |
| dark luxury Nhật | **dark sơn mài Việt** (đã chốt) |

**Bổ sung đề xuất cho SPEC** (site này có, brief GAV chưa liệt kê — nên thêm vì chúng tăng uy tín & chuyển đổi):
- **Stats bar** sau Hero (số năm, số khách, số nghệ nhân…).
- **"Vì sao chọn Gia An Viên"** dạng bento (nguyên liệu, nghệ nhân, không gian, bền vững).
- **Reviews carousel** (cảm nhận thực khách).
- **FAQ accordion** (trang phục, đặt tiệc, gửi xe, thanh toán…).
- **Location + map** trước Footer.

## 12. Có "bắt chước 100%" được không?
- **Code / layout / typography / motion: ~90–95%.** Toàn bộ cấu trúc, lưới, serif hai tông, bảng màu, và animation (GSAP + ScrollTrigger + Lenis, custom cursor, showcase xoay, bento hover, review carousel) đều dựng lại được gần như y hệt.
- **Không thể & KHÔNG NÊN 100%:**
  1. Ảnh chụp food + enso + lá phong là **asset bản quyền riêng** — không tái tạo y nguyên.
  2. Đó là **nhận diện thương hiệu Nhật khác** — clone là sai pháp lý/đạo đức và **lạc brand** với một nhà hàng văn hoá Việt.
  3. GAV dùng **tranh sơn thuỷ vẽ tay**, không dùng ảnh — nên "lớp da" *bắt buộc* phải khác.
- **Việc đúng:** port **khung xương + 12 lớp tư duy** ở trên (đặc biệt bảng §11), rồi khoác lớp da Việt vẽ tay. Kết quả: **cùng đẳng cấp cảm xúc, nhận diện độc bản, không đụng hàng.**

---
*Nguồn: `demowebsite.mp4` (37s, 40 frame). Đối chiếu & bổ sung cho `SPEC.md`.*
