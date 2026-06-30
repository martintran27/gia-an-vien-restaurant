# GIA AN VIÊN — Yêu cầu ảnh món ăn + Prompt (photoreal / 3D)

> Mục tiêu: ảnh món **photoreal dark-luxury** kiểu SHUSHI ZERON nhưng **đạo cụ thuần Việt** + tông **đen sơn mài / vàng** của GAV. Viết prompt **bằng tiếng Anh** (model ăn prompt Anh tốt nhất).
>
> **Bộ ảnh phải đồng nhất:** dùng CHUNG khối "STYLE BLOCK" cho mọi món → cả set trông như một, cao cấp, không "lộ AI". Khác biệt duy nhất giữa các prompt là phần mô tả MÓN.

---

## 0. Quy tắc art-direction (để không lạc khỏi thế giới sơn mài vẽ tay)
- **Nền:** mỗi món **TÁCH NỀN** (isolated/cutout) trên nền đen phẳng → món **trôi / ghép / animate** tự do trên site (đúng như demo: vòng Signature xoay, parallax từng món). Site cũng nền đen nên cutout ghép vào liền mạch.
- **Ánh sáng:** 1 nguồn, chếch trên-trái, **viền sáng vàng ấm** (gold rim), chiaroscuro, bóng đổ sâu.
- **Đạo cụ VIỆT** (không Nhật): gốm Bát Tràng, bát chiết yêu, đĩa men, đĩa sơn mài, lá sen, lá chuối, ấm trà, đũa tre. **Cấm:** sake, đũa Nhật, lá phong, sushi (trừ khi đúng món).
- **Palette:** đen `#0C0B09` · vàng `#C9A24B/#F6E7A8` · điểm son `#B5341F` (rất ít). Bão hoà thấp trừ chính món.
- Sau khi generate: chỉnh màu nhẹ trong Figma cho khớp token + thêm viền vàng nếu cần.

## 1. STYLE BLOCK (dán vào cuối MỌI prompt)
**Photoreal CUTOUT (khuyên dùng — để tách nền):**
```
[mô tả MÓN], a single plated portion as the ONLY subject, isolated on a seamless pure black background,
no table, no surface, no extra props, no scene, studio product shot, centered, the whole dish in sharp focus,
dramatic top-left key light, warm golden rim light tracing the edges, subtle steam, soft contact shadow
directly beneath the vessel, photorealistic, hyper-detailed, 100mm macro, f/5.6, black and gold palette,
clean crisp cut-out-ready edges, no text, no logo, no people --ar 1:1 --style raw --v 6
```
> Khác bản cũ: **bỏ mặt bàn / đạo cụ / scene**, để món **đơn độc trên nền đen phẳng** → cắt nền sạch. `f/5.6` cho cả món nét (dễ cắt). Bản "có nền/scene" chỉ dùng cho **phông section full-bleed**, KHÔNG dùng cho asset món.
**Biến thể 3D (nếu muốn thử):** thay phần `100mm macro, f/5.6 ... photorealistic` bằng:
```
hyperrealistic 3D render, octane/redshift, cinematic studio lighting, subsurface scattering, ultra-detailed CGI food, product-shot
```

## 1b. Tách nền — 2 cách
- **A. Cutout thật (khuyên dùng):** generate trên nền đen phẳng → công cụ xoá nền (**Photoshop "Remove Background"**, Photoroom, remove.bg, BiRefNet, plugin Figma) → xuất **PNG trong suốt** → web **WebP/AVIF có alpha**. Bóng/glow thêm bằng CSS (`filter: drop-shadow`).
- **B. "Float trên đen" (nhanh):** giữ ảnh trên nền đen, đặt vào site bằng `mix-blend-mode: screen/lighten`. CHỈ hợp **món sáng**; món có mảng tối sẽ biến mất → dùng cách A.
- **Steam & bát hoa văn khó cắt:** súp/lẩu nhiều hơi nước rất khó cắt sạch → cắt **bát+món (bỏ steam)** rồi thêm hơi nước bằng CSS/overlay; **hoặc** dùng **cách B** cho các món nhiều steam.
- **Quy tắc props cho cutout:** chỉ giữ **MÓN + bát/đĩa của nó**; bỏ props rời (nắp, khay rau, chén nước chấm riêng, đũa lẻ) để mép cắt gọn.

## 2. NEGATIVE / tránh (dán vào ô negative hoặc thêm `--no ...`)
```
cartoon, illustration, flat, oversaturated, plastic look, fake, CGI (nếu muốn photoreal), low quality,
blurry, deformed, extra utensils, hands, watermark, text, busy/bright background, white background,
daylight, neon, Japanese props, sushi (trừ món cuốn), messy,
table, surface, side dishes, multiple plates, scene, background props
```

## 3. Danh sách ảnh cần — theo ưu tiên
| Tier | Món | Tỉ lệ | Kích thước gốc | Dùng cho |
|---|---|---|---|---|
| **P0** | 3 món hero §5: Súp Vi Cá Yến Sào Tiến Vua · Lẩu Chim Trĩ Nấm Tràm · Cá Tầm Nướng Rừng Tràm | 4:5 dọc | ~1600×2000+ | tranh/card lớn Signature |
| **P1** | 3 món signature phụ: Hải Sâm Xào Nấm Đông Cô · Chè Yến Sào Thượng Tiên · Tráng Miệng Ngọc Lục Bảo | 4:5 / 1:1 | ~1400px | vignette §5 |
| **P1** | 3 hero miền: Chả Cá Lăng Lã Vọng (Bắc) · Nem Công Chả Phượng Xứ Huế (Trung) · Bánh Xèo Tôm Sú (Nam) | 4:5 / 1:1 | ~1400px | điểm nhấn §4 mỗi miền |
| **P1 (đã chốt)** | Thumbnail 20 món còn lại (menu list) — xem §4b | 1:1 vuông | ~1000px | menu kiểu demo, mỗi dòng có ảnh |

**Xuất web sau cùng:** **PNG trong suốt → WebP/AVIF @2x có alpha** (đã tách nền, xem §1b). Khai báo `width/height`, hero `fetchpriority=high`, còn lại `loading=lazy`.

**Mẹo đồng nhất:** generate cùng một **style reference / seed** (Midjourney `--sref`, hoặc lặp y nguyên STYLE BLOCK) cho cả set; mỗi món tạo 4 bản, chọn 1.

---

## 4. Prompt theo từng món (mô tả MÓN + STYLE BLOCK)

> Vì model có thể không biết tên món Việt, prompt **mô tả hình hài** món, không dựa vào tên.

**P0 — Súp Vi Cá Yến Sào Tiến Vua** (súp ngự cao cấp)
```
A luxurious royal Vietnamese thick golden consommé soup, glossy amber broth with delicate translucent
bird's-nest strands and fine shredded toppings, served in an ornate dark celadon bowl with gold rim,
a wisp of steam, [STYLE BLOCK]
```

**P0 — Lẩu Chim Trĩ Nấm Tràm** (lẩu chim trĩ, nấm tràm)
```
A dramatic Vietnamese hot pot, dark simmering herbal broth in a black cast-iron pot, thin slices of
game-bird (pheasant) meat, wild tràm mushrooms, fresh green herbs and scallions arranged around it,
gentle rising steam, glowing embers feel, [STYLE BLOCK]
```

**P0 — Cá Tầm Nướng Rừng Tràm** (cá tầm nướng)
```
A grilled sturgeon fillet, charred caramelized edges, brushed with glossy glaze, garnished with fresh
dill and chili, resting on a banana leaf over a black lacquer plate, smoky atmosphere, [STYLE BLOCK]
```

**P1 — Hải Sâm Xào Nấm Đông Cô** (hải sâm xào nấm đông cô)
```
Braised glossy dark sea cucumber pieces stir-fried with whole shiitake mushrooms and baby bok choy,
rich brown glaze, on a handmade Bát Tràng ceramic plate, [STYLE BLOCK]
```

**P1 — Chè Yến Sào Thượng Tiên** (chè yến sào)
```
An elegant Vietnamese sweet bird's-nest dessert soup, clear golden syrup with translucent bird's-nest
strands and red goji berries, in a fine white-and-gold porcelain bowl, delicate, [STYLE BLOCK]
```

**P1 — Tráng Miệng Ngọc Lục Bảo** (tráng miệng "ngọc lục bảo")
```
A jewel-like emerald-green Vietnamese dessert, glistening jade pandan jelly and lotus seeds with a touch
of edible gold leaf, minimal artful plating on a dark ceramic plate, [STYLE BLOCK]
```

**P1 — Chả Cá Lăng Lã Vọng** (Bắc)
```
Hanoi turmeric-marinated fish (chả cá), golden sizzling fish chunks in a small cast-iron skillet with
plenty of fresh dill and scallions, peanuts and rice vermicelli on the side, vivid turmeric gold tones,
[STYLE BLOCK]
```

**P1 — Nem Công Chả Phượng Xứ Huế** (Trung)
```
An ornate Vietnamese Huế royal-court appetizer platter, artfully arranged colorful spring rolls and
delicate pâté shaped with imperial elegance, fine garnish, refined symmetrical plating on celadon,
[STYLE BLOCK]
```

**P1 — Bánh Xèo Tôm Sú** (Nam)
```
A crispy golden Vietnamese sizzling crepe (bánh xèo) folded over tiger prawns, bean sprouts and pork,
a few fresh herbs on the same plate, crisp golden texture,
[STYLE BLOCK]
```

**P2 — Thumbnail (mọi món, 1:1):** dùng cùng prompt món nhưng đổi đuôi:
```
... close-up top-down product shot, centered single portion, soft chiaroscuro, black background, --ar 1:1 --style raw
```

---

## 4b. 20 món còn lại — thumbnail menu (Bắc 7 · Trung 7 · Nam 6) — ĐÃ CHỐT
Prompt = **[dòng mô tả món]** + **STYLE BLOCK thumbnail** bên dưới (giữ nguyên cho cả 20 để đồng bộ với 9 ảnh hero).

**STYLE BLOCK (thumbnail 1:1):**
```
, single portion, the only subject, isolated on a seamless pure black background, no props, no scene, centered,
sharp focus, dramatic top-left key light, warm golden rim light, soft shadow beneath, photorealistic, hyper-detailed,
black and gold palette, clean cut-out-ready edges, no text --ar 1:1 --style raw --v 6
```

**Miền Bắc (7):**
1. Nem Cua Bể Hoàng Gia — `golden crispy fried Vietnamese sea-crab spring rolls, cut to reveal crab and vermicelli filling`
2. Bún Chả Kinh Kỳ — `Hanoi bún chả, char-grilled pork patties and pork belly slices in a bowl of amber dipping broth, with white rice vermicelli and herbs`
3. Thịt Lợn Nướng Lá Mắc Mật — `grilled sliced pork belly with crispy crackling skin, marinated with mac mat leaves, herbs`
4. Vịt Nướng Vân Đình — `Vietnamese roast duck, glossy golden crispy skin, chopped into pieces and arranged, herbs`
5. Gà Ri Hấp Lá Chanh — `steamed free-range yellow-skin chicken pieces with kaffir lime leaves, glistening skin`
6. Chả Mực Hạ Long Giã Tay — `golden pan-fried Ha Long squid cakes, crispy edges, chewy texture, with herbs`
7. Bò Một Nắng Nướng Mắc Khén — `grilled sun-dried beef strips seasoned with mac khen wild pepper, smoky char, chili dipping salt`

**Miền Trung (7):**
8. Bò Lúc Lắc Hạt Điều Cung Đình — `Vietnamese shaking beef, seared beef cubes tossed with cashew nuts, onion and bell peppers, glossy sauce`
9. Nem Lụi Nướng Than Hoa — `charcoal-grilled Vietnamese lemongrass pork skewers, with rice paper and fresh herbs`
10. Cao Lầu Phố Hội — `Hoi An cao lau, thick chewy noodles topped with sliced char siu pork, crispy rice crackers and greens, little broth`
11. Cơm Hến Ngự Bình — `Hue baby clam rice, steamed rice topped with tiny clams, herbs, peanuts and crispy crackers`
12. Gà Đồi Nướng Mật Ong — `honey-glazed grilled free-range chicken, caramelized golden skin, herbs`
13. Súp Bào Ngư Nước Cốt Gà — `luxurious abalone soup in golden chicken consommé, sliced abalone, elegant bowl, subtle steam`
14. Tré Rơm Tiến Vua — `Vietnamese tré, fermented shredded pork with galangal and herbs, wrapped in straw, sliced on a plate`

**Miền Nam (6):**
15. Lẩu Gà Nòi Hầm Ớt Hiểm — `spicy Vietnamese game-chicken hot pot, red broth with bird's-eye chili, chicken pieces and herbs, steam, in a pot`
16. Bò Tơ Trụng Nước Dừa — `thinly sliced young beef poached in coconut water, with herbs and rice paper, coconut-broth pot`
17. Chả Giò Cua Cà Mau Rế Giòn — `golden crispy lattice net spring rolls filled with Ca Mau crab, arranged with herbs`
18. Cua Lột Chiên Giòn Sốt Me — `crispy fried soft-shell crab glazed with glossy tamarind sauce, chili and herbs`
19. Canh Chua Cua Biển Bông Điên Điển — `Vietnamese sour soup with sea crab, yellow dien dien flowers, okra and tomato, in a bowl, steam`
20. Gỏi Củ Hũ Dừa Tôm Càng Xanh — `Vietnamese coconut-pith salad with poached river prawns, shredded vegetables, herbs and crackers, fresh colorful`

## 5. Tip theo model
- **Midjourney v6:** `--style raw --ar 4:5`; giữ STYLE BLOCK; dùng `--sref <ảnh ref>` để đồng nhất cả set; `--no sushi, hands, text`.
- **Flux / SDXL:** prompt mô tả + negative ở ô riêng; thêm "food photography, 85mm, f2.8, studio".
- **DALL·E 3 / GPT-image / Nano Banana:** viết tự nhiên hơn, nhấn "dark moody Michelin food photography, black and gold, single light source".
- **Cao cấp nhất:** nếu đủ điều kiện, **chụp ảnh thật** cho 3 món hero (P0) — photoreal AI cho phần còn lại. Ảnh chụp thật vẫn "đắt" và an toàn brand hơn.

---
*Đối chiếu: `SPEC.md` §4/§5 · `ASSET-CHECKLIST.md` B3/B4. Quyết định này đổi "minh hoạ món vẽ tay" → "ảnh món photoreal"; các CẢNH sơn thuỷ vẫn vẽ tay.*
