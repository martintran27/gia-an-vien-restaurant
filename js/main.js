/* Gia An Viên — tương tác + render từ data.js. Vanilla JS, không lib ngoài. */
(() => {
  "use strict";
  const D = window.GAV || {};
  const EXT = ".png"; // đổi sang ".webp" khi bạn xuất ảnh webp
  const dishImg = (slug) => `assets/dishes/${slug}${EXT}`;
  const fmtPrice = (n) => (n * 1000).toLocaleString("vi-VN") + "₫";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const onImgErr = 'onerror="this.classList.add(\'img-missing\');this.removeAttribute(\'src\')"';

  /* ---------- RENDER ---------- */
  function renderStats() {
    const g = $("[data-stats]"); if (!g) return;
    g.innerHTML = (D.stats || []).map((s) => `<div class="stat reveal"><b>${s.n}</b><span>${s.l}</span></div>`).join("");
  }

  function renderSignature() {
    const stage = $("[data-sig-stage]"), dots = $("[data-sig-dots]"), pts = $("[data-sig-points]");
    const items = D.signature || [];
    if (pts) pts.innerHTML = (D.sigPoints || []).map((p) => `<li class="reveal"><h4>${p.h}</h4><p>${p.p}</p></li>`).join("");
    if (!stage || !items.length) return;
    stage.innerHTML = `<img src="${dishImg(items[0].slug)}" alt="${items[0].name}" ${onImgErr}/><span class="sig-cap">${items[0].cap}</span>`;
    const img = stage.querySelector("img"), cap = stage.querySelector(".sig-cap");
    dots.innerHTML = items.map((_, i) => `<button role="tab" aria-selected="${i === 0}" aria-label="Món ${i + 1}"></button>`).join("");
    const btns = [...dots.children];
    let i = 0, timer;
    const go = (n) => {
      i = (n + items.length) % items.length;
      img.style.opacity = 0;
      setTimeout(() => {
        img.src = dishImg(items[i].slug); img.alt = items[i].name; img.classList.remove("img-missing");
        cap.textContent = items[i].cap; img.style.opacity = 1;
      }, 300);
      btns.forEach((b, k) => b.setAttribute("aria-selected", k === i));
    };
    btns.forEach((b, k) => b.addEventListener("click", () => { go(k); restart(); }));
    const restart = () => { if (reduce) return; clearInterval(timer); timer = setInterval(() => go(i + 1), 3800); };
    restart();
  }

  function renderMenu() {
    const tabs = $("[data-menu-tabs]"), list = $("[data-menu-list]"), feat = $("[data-menu-feature]");
    const regions = D.regions || []; if (!tabs || !regions.length) return;
    tabs.innerHTML = regions.map((r, i) => `<button role="tab" aria-selected="${i === 0}" data-region="${i}">${r.label}</button>`).join("");
    const setFeature = (dish) => {
      feat.innerHTML = `<img class="feat-img" src="${dishImg(dish.slug)}" alt="${dish.name}" ${onImgErr}/>
        <h4>${dish.name}</h4><p>${dish.desc}</p><div class="price">${fmtPrice(dish.price)}</div>`;
    };
    const showRegion = (idx) => {
      const r = regions[idx];
      list.innerHTML = r.dishes.map((d, k) => `
        <li class="dish reveal" data-dish="${idx}-${k}">
          <img class="thumb" src="${dishImg(d.slug)}" alt="" ${onImgErr}/>
          <div><h4>${d.name}${d.badge ? `<span class="badge">${d.badge}</span>` : ""}</h4><p>${d.desc}</p></div>
          <div class="price">${fmtPrice(d.price)}</div>
        </li>`).join("");
      list.querySelectorAll(".dish").forEach((li) => li.addEventListener("mouseenter", () => {
        const [a, b] = li.dataset.dish.split("-"); setFeature(regions[a].dishes[b]);
      }));
      [...tabs.children].forEach((b, k) => b.setAttribute("aria-selected", k === idx));
      setFeature(r.dishes[0]);
      observeReveals(list);
    };
    [...tabs.children].forEach((b, k) => b.addEventListener("click", () => showRegion(k)));
    showRegion(0);
  }

  function renderWhy() {
    const g = $("[data-why]"); if (!g) return;
    g.innerHTML = (D.why || []).map((c) => `<div class="card reveal"><div class="ic">${c.ic}</div><h4>${c.h}</h4><p>${c.p}</p></div>`).join("");
  }

  function renderReviews() {
    const t = $("[data-reviews]"); if (!t) return;
    t.innerHTML = (D.reviews || []).map((r) => `
      <div class="rv-card reveal"><div class="stars">${"★".repeat(r.stars)}</div>
      <blockquote>“${r.quote}”</blockquote>
      <div class="who"><b>${r.name}</b><span>${r.place}</span></div></div>`).join("");
  }

  function renderEvents() {
    const u = $("[data-events]"); if (!u) return;
    u.innerHTML = (D.events || []).map((e) => `
      <li class="ev reveal"><span class="date">${e.date}</span>
      <div><h4>${e.title}</h4><p>${e.desc}</p></div><span class="tag">${e.tag}</span></li>`).join("");
  }

  function renderGallery() {
    const g = $("[data-gallery]"); if (!g) return;
    g.innerHTML = Array.from({ length: 6 }, () => `<div class="cell reveal">Thư viện · art Figma</div>`).join("");
  }

  function renderReserveOpts() {
    const u = $("[data-reserve-opts]"); if (!u) return;
    const opts = [["Phòng Riêng", "Tối đa 12 khách"], ["Quầy Đầu Bếp", "Tối đa 8 khách"], ["Sân Vườn", "Tối đa 20 khách"]];
    u.innerHTML = opts.map((o) => `<li><h4>${o[0]}</h4><span>${o[1]}</span></li>`).join("");
  }

  function renderFaq() {
    const w = $("[data-faq]"); if (!w) return;
    const faqs = D.faq || [
      ["Quy định trang phục tại Gia An Viên?", "Trang phục lịch sự (smart casual). Chúng tôi khuyến khích sự thoải mái, thanh lịch."],
      ["Làm thế nào để đặt bàn?", "Bạn có thể đặt qua biểu mẫu trên trang, hoặc gọi trực tiếp số điện thoại của nhà hàng."],
      ["Nhà hàng có phục vụ thực khách dị ứng / ăn chay?", "Có. Vui lòng ghi chú khi đặt bàn để bếp chuẩn bị phù hợp."],
      ["Có bãi đỗ xe không?", "Có khu vực đỗ xe cho khách. Vui lòng liên hệ để được hướng dẫn."],
      ["Đặt bàn nhóm lớn hoặc sự kiện riêng?", "Chúng tôi nhận đặt tiệc riêng và sự kiện. Liên hệ để được tư vấn."],
      ["Các phương thức thanh toán?", "Tiền mặt, thẻ và chuyển khoản."],
    ];
    w.innerHTML = faqs.map((f) => `<div class="faq-item"><button class="faq-q">${f[0]}</button><div class="faq-a"><p>${f[1]}</p></div></div>`).join("");
    w.querySelectorAll(".faq-item").forEach((it) => it.querySelector(".faq-q").addEventListener("click", () => {
      const open = it.classList.contains("open");
      w.querySelectorAll(".faq-item").forEach((o) => { o.classList.remove("open"); o.querySelector(".faq-a").style.maxHeight = null; });
      if (!open) { it.classList.add("open"); const a = it.querySelector(".faq-a"); a.style.maxHeight = a.scrollHeight + "px"; }
    }));
  }

  function renderContact() {
    const c = D.contact || {}, w = $("[data-contact]");
    if (w) w.innerHTML = `
      <div class="ci"><span class="ic">⌖</span><div><b>Địa chỉ</b><span>${c.address || ""}</span></div></div>
      <div class="ci"><span class="ic">☏</span><div><b>Điện thoại</b><span>${c.phone || ""}</span></div></div>
      <div class="ci"><span class="ic">✉</span><div><b>Email</b><span>${c.email || ""}</span></div></div>
      <div class="ci"><span class="ic">◷</span><div><b>Giờ mở cửa</b><span>${(c.hours || []).join("<br>")}</span></div></div>`;
    const h = $("[data-footer-hours]"); if (h) h.innerHTML = `<h3>Giờ mở cửa</h3>${(c.hours || []).map((x) => `<p>${x}</p>`).join("")}`;
    const ct = $("[data-footer-contact]"); if (ct) ct.innerHTML = `<h3>Liên hệ</h3><p>${c.phone || ""}</p><p>${c.email || ""}</p>`;
  }

  /* ---------- MOTION ---------- */
  let revealObs;
  function observeReveals(root = document) {
    if (reduce) { root.querySelectorAll(".reveal").forEach((e) => e.classList.add("in")); return; }
    if (!revealObs) revealObs = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    root.querySelectorAll(".reveal:not(.in)").forEach((e) => revealObs.observe(e));
  }

  function parallax() {
    if (reduce) return;
    const items = [...document.querySelectorAll("[data-parallax]")];
    let ticking = false;
    const update = () => {
      const vh = innerHeight;
      items.forEach((it) => {
        const r = it.getBoundingClientRect();
        const prog = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
        const sp = parseFloat(it.dataset.speed || "0.1");
        it.style.transform = `translate3d(${prog * sp * 140}px,${prog * sp * 40}px,0)`;
      });
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    update();
  }

  function cursor() {
    if (reduce || matchMedia("(hover:none)").matches) return;
    const c = $(".cursor"); if (!c) return;
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
    addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; });
    const loop = () => { cx += (x - cx) * 0.18; cy += (y - cy) * 0.18; c.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`; requestAnimationFrame(loop); };
    loop();
    document.addEventListener("mousedown", () => c.classList.add("tap"));
    document.addEventListener("mouseup", () => c.classList.remove("tap"));
    document.querySelectorAll("a,button,.dish,input,select,textarea").forEach((t) => {
      t.addEventListener("mouseenter", () => c.classList.add("tap"));
      t.addEventListener("mouseleave", () => c.classList.remove("tap"));
    });
  }

  function chrome() {
    const header = $(".site-header"), thread = $(".scroll-thread span");
    const onScroll = () => {
      const y = scrollY;
      header && header.classList.toggle("scrolled", y > 40);
      if (thread) { const h = document.documentElement; thread.style.height = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "vh"; }
    };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();

    const toggle = $("[data-nav-toggle]"), nav = $("[data-nav]");
    toggle && toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav && nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

    const yr = $("[data-year]"); if (yr) yr.textContent = new Date().getFullYear();
  }

  function reserveForm() {
    const f = $("[data-reserve-form]"); if (!f) return;
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = $("[data-form-msg]");
      if (f.company.value) return; // honeypot
      if (!f.checkValidity()) { f.reportValidity(); return; }
      // ponytail: chưa nối backend — thay bằng Formspree/Basin/serverless khi có endpoint.
      msg.textContent = "Cảm ơn bạn! Yêu cầu đã được ghi nhận, chúng tôi sẽ liên hệ sớm.";
      f.reset();
    });
  }

  /* ---------- INIT ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderStats(); renderSignature(); renderMenu(); renderWhy(); renderReviews();
    renderEvents(); renderGallery(); renderReserveOpts(); renderFaq(); renderContact();
    chrome(); reserveForm(); cursor(); parallax();
    observeReveals();
  });
})();
