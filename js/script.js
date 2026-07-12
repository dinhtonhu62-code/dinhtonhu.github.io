/* ==========================================================================
   PORTFOLIO SCRIPT — vanilla JS ES6, không dùng thư viện ngoài
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initCustomCursor();
  initScrollProgress();
  initNavbar();
  initTypingEffect();
  initScrollReveal();
  initSkillBars();
  initProjectFilter();
  initBackToTop();
  initContactForm();
  initParallax();
  initMediaGallery();
  initPromptCopy();
  document.getElementById("year").textContent = new Date().getFullYear();
});

/* ---------- Loader ---------- */
function initLoader() {
  const loader = document.getElementById("loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("is-hidden"), 400);
  });
}

/* ---------- Custom cursor (dot + ring theo con trỏ chuột) ---------- */
function initCustomCursor() {
  const dot = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring || window.matchMedia("(hover: none)").matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  // Vòng tròn theo sau con trỏ với hiệu ứng lag mượt (lerp)
  function animateRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = document.querySelectorAll("a, button, .project-card, .skill-card, .about-card, .cert-card");
  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-hovering"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-hovering"));
  });
}

/* ---------- Thanh tiến trình cuộn trang ---------- */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgressBar");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${percent}%`;
  });
}

/* ---------- Navbar: đổi nền khi cuộn, menu mobile, active link ---------- */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll("[data-nav]");
  const sections = document.querySelectorAll("main section[id]");

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 40);
    highlightActiveLink();
  });

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.innerHTML = isOpen
      ? '<svg class="icon" aria-hidden="true"><use href="#icon-x"></use></svg>'
      : '<svg class="icon" aria-hidden="true"><use href="#icon-menu"></use></svg>';
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#icon-menu"></use></svg>';
    });
  });

  function highlightActiveLink() {
    let currentId = sections[0]?.id;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) currentId = section.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
    });
  }
}

/* ---------- Hiệu ứng gõ chữ (typing effect) ở Hero ---------- */
function initTypingEffect() {
  const el = document.getElementById("typedText");
  if (!el) return;

  const roles = ["Nhân viên Marketing", "Content Creator", "SEO On-page"];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }
    el.textContent = currentRole.substring(0, charIndex);

    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }
  type();
}

/* ---------- Fade-in khi cuộn tới (IntersectionObserver) ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------- Progress bar cho từng kỹ năng, chạy khi vào khung nhìn ---------- */
function initSkillBars() {
  const bars = document.querySelectorAll(".progress-bar__fill");
  if (!bars.length) return;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = `${fill.dataset.percent}%`;
          obs.unobserve(fill);
        }
      });
    },
    { threshold: 0.4 }
  );
  bars.forEach((bar) => observer.observe(bar));
}

/* ---------- Lọc dự án theo danh mục ---------- */
function initProjectFilter() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      const filter = btn.dataset.filter;
      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("is-hidden", !match);
      });
    });
  });
}

/* ---------- Nút Back To Top ---------- */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  btn.classList.add("is-floating");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("is-visible", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Form liên hệ: validate + gửi (demo, không backend) ---------- */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("formStatus");
  const fields = {
    name: { input: document.getElementById("name"), error: document.getElementById("nameError") },
    email: { input: document.getElementById("email"), error: document.getElementById("emailError") },
    message: { input: document.getElementById("message"), error: document.getElementById("messageError") },
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    if (fields.name.input.value.trim().length < 2) {
      setFieldError(fields.name, "Vui lòng nhập họ tên hợp lệ.");
      isValid = false;
    } else {
      clearFieldError(fields.name);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(fields.email.input.value.trim())) {
      setFieldError(fields.email, "Vui lòng nhập email hợp lệ.");
      isValid = false;
    } else {
      clearFieldError(fields.email);
    }

    if (fields.message.input.value.trim().length < 10) {
      setFieldError(fields.message, "Nội dung cần tối thiểu 10 ký tự.");
      isValid = false;
    } else {
      clearFieldError(fields.message);
    }

    if (!isValid) {
      status.textContent = "Vui lòng kiểm tra lại thông tin bên trên.";
      status.className = "form-status is-error";
      return;
    }

    // DEMO: chưa kết nối backend thật.
    // Để nhận email thật, tích hợp Formspree/EmailJS — xem hướng dẫn trong README.md
    status.textContent = "Cảm ơn bạn! Tin nhắn đã được ghi nhận, tôi sẽ phản hồi sớm nhất.";
    status.className = "form-status is-success";
    form.reset();
  });

  function setFieldError(field, message) {
    field.input.closest(".form-group").classList.add("has-error");
    field.error.textContent = message;
  }

  function clearFieldError(field) {
    field.input.closest(".form-group").classList.remove("has-error");
    field.error.textContent = "";
  }
}

/* ---------- Hiệu ứng parallax nhẹ cho khối ảnh ở Hero ---------- */
function initParallax() {
  const blob = document.querySelector(".hero__blob");
  const avatar = document.querySelector(".hero__avatar");
  if (!blob || !avatar || window.matchMedia("(hover: none)").matches) return;

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    blob.style.transform = `translate(${x}px, ${y}px)`;
    avatar.style.transform = `translate(${x * 0.4}px, ${y * 0.4}px)`;
  });
}

/* ---------- Thư viện ảnh: bấm vào ảnh để xem phóng to (lightbox) ---------- */
function initMediaGallery() {
  const items = document.querySelectorAll(".media-gallery__item");
  const lightbox = document.getElementById("lightbox");
  if (!items.length || !lightbox) return;

  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  }

  function close() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
  }

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      open(img.src, img.alt);
    });
  });

  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* ---------- Nút Copy cho khối Prompt (trang case-study) ---------- */
function initPromptCopy() {
  const buttons = document.querySelectorAll(".prompt-code__copy");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const codeEl = document.getElementById(btn.dataset.copyTarget);
      if (!codeEl) return;
      try {
        await navigator.clipboard.writeText(codeEl.textContent.trim());
      } catch (err) {
        return;
      }
      const originalLabel = btn.dataset.labelDefault || btn.textContent.trim();
      btn.classList.add("is-copied");
      btn.textContent = "Đã copy!";
      setTimeout(() => {
        btn.classList.remove("is-copied");
        btn.textContent = originalLabel;
      }, 1800);
    });
  });
}
