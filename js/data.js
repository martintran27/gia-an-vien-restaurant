/* Nội dung Gia An Viên — chỉnh sửa thoải mái ở đây.
   price: đơn vị nghìn ₫ (385 = 385.000₫). slug = tên file ảnh trong assets/dishes/ */
window.GAV = {
  stats: [
    { n: "4.9", l: "Đánh giá trung bình" },
    { n: "29", l: "Món tinh tuyển" },
    { n: "3", l: "Miền hương vị" },
    { n: "5★", l: "Trải nghiệm" },
  ],

  /* §5 — 3 món hero xoay trong vòng */
  signature: [
    { name: "Súp Vi Cá Yến Sào Tiến Vua", slug: "sup-vi-ca", cap: "Tiến Vua · 550.000₫" },
    { name: "Lẩu Chim Trĩ Nấm Tràm", slug: "lau-chim-tri", cap: "Sơn hào · 495.000₫" },
    { name: "Cá Tầm Nướng Rừng Tràm", slug: "ca-tam-nuong", cap: "Rừng Tràm · 485.000₫" },
  ],
  sigPoints: [
    { h: "Nguyên liệu tuyển chọn", p: "Nhập mỗi ngày, chuẩn vị từng vùng đất." },
    { h: "Bàn tay nghệ nhân", p: "Đầu bếp dày dạn, tận tâm với từng món." },
    { h: "Trải nghiệm chính thống", p: "Hồn cốt ẩm thực Việt giữa lòng phố thị." },
    { h: "Không gian độc đáo", p: "Thiết kế cho những khoảnh khắc đáng nhớ." },
  ],

  /* §4 — thực đơn theo nhóm/miền */
  regions: [
    { id: "dac-trung", label: "Đặc trưng", dishes: [
      { name: "Súp Vi Cá Yến Sào Tiến Vua", price: 550, slug: "sup-vi-ca", badge: "signature", desc: "Súp ngự cao cấp, yến sào và vi cá trong nước dùng vàng óng." },
      { name: "Lẩu Chim Trĩ Nấm Tràm", price: 495, slug: "lau-chim-tri", badge: "signature", desc: "Chim trĩ hầm cùng nấm tràm, hương rừng đậm đà." },
      { name: "Cá Tầm Nướng Rừng Tràm", price: 485, slug: "ca-tam-nuong", desc: "Cá tầm nướng riu, lớp da vàng giòn, thơm thảo mộc." },
      { name: "Hải Sâm Xào Nấm Đông Cô", price: 385, slug: "hai-sam-xao", desc: "Hải sâm sốt nâu bóng, nấm đông cô, cải ngọt." },
      { name: "Chè Yến Sào Thượng Tiên", price: 299, slug: "che-yen-sao", desc: "Chè yến thanh khiết, kỷ tử, ngọt dịu tao nhã." },
      { name: "Tráng Miệng Ngọc Lục Bảo", price: 145, slug: "trang-mieng-ngoc-luc-bao", desc: "Thạch ngọc bích, hạt sen, điểm vàng tinh tế." },
    ]},
    { id: "bac", label: "Miền Bắc", dishes: [
      { name: "Chả Cá Lăng Lã Vọng", price: 345, slug: "cha-ca-lang", badge: "đầu bếp khuyên dùng", desc: "Cá lăng nghệ vàng, thì là, hành, sôi trên chảo gang." },
      { name: "Nem Cua Bể Hoàng Gia", price: 225, slug: "nem-cua-be", desc: "Nem cua bể vàng giòn, nhân đầy đặn." },
      { name: "Bún Chả Kinh Kỳ", price: 145, slug: "bun-cha", desc: "Chả nướng than hoa, nước chấm chuẩn Hà thành." },
      { name: "Thịt Lợn Nướng Lá Mắc Mật", price: 265, slug: "thit-lon-mac-mat", desc: "Ba chỉ nướng lá mắc mật, da giòn thơm." },
      { name: "Vịt Nướng Vân Đình", price: 325, slug: "vit-nuong-van-dinh", desc: "Vịt nướng da vàng óng, đặc sản Vân Đình." },
      { name: "Gà Ri Hấp Lá Chanh", price: 295, slug: "ga-ri-la-chanh", desc: "Gà ri da vàng, hấp lá chanh thơm nức." },
      { name: "Chả Mực Hạ Long Giã Tay", price: 295, slug: "cha-muc-ha-long", desc: "Chả mực giã tay, giòn sần sật." },
      { name: "Bò Một Nắng Nướng Mắc Khén", price: 355, slug: "bo-mot-nang", desc: "Bò một nắng nướng mắc khén, khói thơm." },
    ]},
    { id: "trung", label: "Miền Trung", dishes: [
      { name: "Nem Công Chả Phượng Xứ Huế", price: 300, slug: "nem-cong-cha-phuong", badge: "đầu bếp khuyên dùng", desc: "Mâm cung đình Huế, bày biện tinh xảo." },
      { name: "Bò Lúc Lắc Hạt Điều Cung Đình", price: 295, slug: "bo-luc-lac", desc: "Bò áp chảo, hạt điều, sốt bóng." },
      { name: "Nem Lụi Nướng Than Hoa", price: 155, slug: "nem-lui", desc: "Nem lụi sả nướng than, cuốn bánh tráng." },
      { name: "Cao Lầu Phố Hội", price: 175, slug: "cao-lau", desc: "Sợi cao lầu dai, thịt xíu, rau Trà Quế." },
      { name: "Cơm Hến Ngự Bình", price: 135, slug: "com-hen", desc: "Cơm hến xứ Huế, đậm đà dân dã." },
      { name: "Gà Đồi Nướng Mật Ong", price: 345, slug: "ga-doi-mat-ong", desc: "Gà đồi nướng mật ong, da caramel." },
      { name: "Súp Bào Ngư Nước Cốt Gà", price: 245, slug: "sup-bao-ngu", desc: "Bào ngư trong nước cốt gà vàng." },
      { name: "Tré Rơm Tiến Vua", price: 145, slug: "tre-rom", desc: "Tré lên men, gói rơm, thơm riềng tỏi." },
    ]},
    { id: "nam", label: "Miền Nam", dishes: [
      { name: "Bánh Xèo Tôm Sú", price: 195, slug: "banh-xeo-tom-su", badge: "đầu bếp khuyên dùng", desc: "Bánh xèo vàng giòn, tôm sú, rau rừng." },
      { name: "Lẩu Gà Nòi Hầm Ớt Hiểm", price: 345, slug: "lau-ga-noi", desc: "Gà nòi hầm cay nồng ớt hiểm." },
      { name: "Bò Tơ Trụng Nước Dừa", price: 285, slug: "bo-to-nuoc-dua", desc: "Bò tơ trụng nước dừa ngọt thanh." },
      { name: "Chả Giò Cua Cà Mau Rế Giòn", price: 225, slug: "cha-gio-cua", desc: "Chả giò rế, cua Cà Mau, giòn rụm." },
      { name: "Cua Lột Chiên Giòn Sốt Me", price: 245, slug: "cua-lot-sot-me", desc: "Cua lột chiên giòn, sốt me chua ngọt." },
      { name: "Canh Chua Cua Biển Bông Điên Điển", price: 215, slug: "canh-chua-cua", desc: "Canh chua cua biển, bông điên điển miền Tây." },
      { name: "Gỏi Củ Hũ Dừa Tôm Càng Xanh", price: 245, slug: "goi-cu-hu-dua", desc: "Gỏi củ hũ dừa, tôm càng xanh tươi mát." },
    ]},
  ],

  why: [
    { ic: "❀", h: "Tinh hoa nghề bếp", p: "Mỗi món là một tác phẩm, qua bàn tay nghệ nhân nhiều năm." },
    { ic: "◈", h: "Nguyên liệu thượng hạng", p: "Tuyển chọn từ những vùng nguyên liệu danh tiếng." },
    { ic: "❖", h: "Trải nghiệm chính thống", p: "Hương vị Việt nguyên bản, không pha tạp." },
    { ic: "☾", h: "Không gian tĩnh tại", p: "Thiết kế cho sự riêng tư và an nhiên." },
    { ic: "❧", h: "Kết hợp tinh tế", p: "Thực đơn rượu trà tuyển chọn theo từng món." },
    { ic: "✦", h: "Phục vụ tận tâm", p: "Chăm chút từng chi tiết của buổi tối của bạn." },
  ],

  reviews: [
    { stars: 5, quote: "Một trải nghiệm vượt cả mong đợi, từ không gian đến từng món ăn.", name: "Michael Chen", place: "Singapore · 2025" },
    { stars: 5, quote: "Hương vị ba miền được kể như một câu chuyện. Tinh tế đến từng chi tiết.", name: "Lê Văn Quốc Minh", place: "Hà Nội · 2025" },
    { stars: 5, quote: "Như bước vào một bảo tàng ẩm thực. Sẽ quay lại.", name: "Emma Yamamoto", place: "Tokyo · 2025" },
    { stars: 5, quote: "Sang trọng mà vẫn đậm hồn Việt. Đáng từng đồng.", name: "Võ Thị Hồng Nhung", place: "Đà Nẵng · 2025" },
  ],

  events: [
    { date: "15.07", title: "Đêm Ca Trù & Ẩm Thực Bắc Bộ", desc: "Thưởng thức ca trù cùng thực đơn miền Bắc.", tag: "Biểu diễn" },
    { date: "22.07", title: "Workshop Gói Nem Cung Đình", desc: "Học gói nem công chả phượng cùng bếp trưởng.", tag: "Workshop" },
    { date: "05.08", title: "Đêm Đàn Tranh & Tiệc Tiến Vua", desc: "Set menu tiến vua, nhạc cụ dân tộc.", tag: "Sự kiện" },
  ],

  contact: {
    address: "Trung tâm thành phố (cập nhật địa chỉ)",
    phone: "+84 (0) 000 000 000",
    email: "datban@giaanvien.vn",
    hours: ["Thứ 2 - Thứ 6: 11:00 - 22:00", "Thứ 7 - CN: 10:30 - 23:00"],
    social: ["Facebook", "Instagram", "Zalo"],
  },
};
