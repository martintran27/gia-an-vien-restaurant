# Thiết kế NỀN — spec

File Figma: **Gia An Viên — Nền & Phông** → https://www.figma.com/design/pSXxgX58m0KrDydUjMrwlz

## Cách làm: design 1 artboard dài, xuất theo từng vùng

- **Design:** 1 artboard duy nhất `1440 × 7694` (đúng chiều dài web desktop). Vẽ liền mạch từ trên xuống.
- **Đọc artboard:**
  - `◆` vàng = khúc cần vẽ **phông** (HERO, TRIẾT LÝ, KIẾN TRÚC, KHÔNG GIAN, BIỂU DIỄN).
  - `○` kem = khúc **chỉ nền trơn**, không cần vẽ.
  - 2 vạch dọc = **cột nội dung 1200px** (chữ web đè lên đây — đừng để chi tiết quan trọng vào giữa).
  - Vạch ngang ghi `y=…` = đúng vị trí khúc đó trên web.
- **Xuất cho web:** KHÔNG xuất nguyên tấm 1440×7694. **Cắt từng vùng `◆` thành 1 ảnh riêng**, export `@2x` PNG, đặt vào `assets/`, gắn vào slot `.scene-ph.full` / `.scene-art` của section tương ứng. Các khúc `○` để CSS lo (màu nền `#0C0B09` + grain + vignette đã có sẵn trong code, `position:fixed`, phủ kín mọi độ dài).

## Bản đồ section (desktop 1440)

| y | Section (id) | Cần phông? |
|----|--------------|-----------|
| 0 | HERO `#trang-chu` | ◆ chừa trái cho tiêu đề |
| 900 | STATS | ○ |
| 1033 | TRIẾT LÝ `#triet-ly` | ◆ loang mực nhỏ (bên phải) |
| 1313 | KIẾN TRÚC `#kien-truc` | ◆ full-bleed |
| 1853 | SIGNATURE `#signature` | ○ |
| 2240 | MENU 3 MIỀN `#thuc-don` | ○ |
| 3130 | KHÔNG GIAN `#khong-gian` | ◆ 3 gian B/T/N |
| 3670 | BIỂU DIỄN `#bieu-dien` | ◆ tông đêm |
| 4210 | VÌ SAO CHỌN | ○ |
| 4748 | ĐÁNH GIÁ | ○ |
| 5078 | SỰ KIỆN `#su-kien` | ○ |
| 5440 | THƯ VIỆN `#thu-vien` | ○ gallery |
| 5980 | ĐẶT BÀN `#dat-ban` | ○ |
| 6592 | FAQ | ○ |
| 6949 | LIÊN HỆ `#lien-he` | ○ |
| 7326 | FOOTER | ○ |

## Sau này THÊM / BỚT section thì sao?

Vì web xuất **theo từng vùng `◆`** chứ không phải 1 ảnh dài:
- **Bớt section:** xoá section trong HTML → ảnh phông của nó đi theo. Không ảnh nào khác lệch.
- **Thêm section:** vẽ thêm 1 vùng phông, export, gắn vào slot mới.
- **Lưu ý duy nhất với cách design 1-canvas:** khi web đổi chiều dài, các con số `y=` thay đổi → đo lại (mở web ở 1440, chạy lại phép đo) rồi nudge vạch + resize artboard. Đây là cái giá của việc design liền 1 tấm; nếu thấy phiền thì design mỗi vùng `◆` thành 1 ô rời, lúc đó y bao nhiêu cũng không cần quan tâm.

> Mobile (375) dài ~11.901px, khác hẳn desktop — nên các khúc `○` để CSS lo, chỉ vùng `◆` mới cần ảnh, và ảnh đặt `object-fit:cover` để co giãn theo mọi độ cao.
