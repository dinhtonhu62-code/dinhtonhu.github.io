# Portfolio Cá Nhân — Hướng Dẫn Sử Dụng

Website tĩnh (HTML/CSS/JS thuần, không cần build) — chỉ cần mở `index.html` hoặc deploy thẳng lên GitHub Pages.

## Cấu trúc thư mục

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/          (avatar, favicon, og-image, ảnh dự án)
│   └── cv/CV.pdf         (CV của bạn — xem mục 3)
├── robots.txt
├── sitemap.xml
└── .nojekyll             (bắt buộc để GitHub Pages không xử lý Jekyll)
```

## 1. Thay ảnh

| Ảnh | File cần thay | Kích thước khuyến nghị |
|---|---|---|
| Ảnh đại diện (Hero) | `assets/images/avatar.svg` | 400×400px, vuông, nên dùng .jpg/.png |
| Ảnh dự án | `assets/images/projects/project-1.svg` … `project-6.svg` | 600×400px (tỉ lệ 3:2) |
| Favicon | `assets/images/favicon.svg` | 64×64px |
| Ảnh chia sẻ mạng xã hội (OG image) | `assets/images/og-image.svg` | 1200×630px |

Cách thay: đặt file ảnh mới (ví dụ `avatar.jpg`) vào đúng thư mục, sau đó mở `index.html`, tìm dòng có `src="assets/images/avatar.svg"` và đổi thành `src="assets/images/avatar.jpg"`. Làm tương tự cho các ảnh dự án và favicon.

> Lưu ý: ảnh OG nên là `.jpg`/`.png` thật (không phải SVG) vì một số nền tảng mạng xã hội không hiển thị SVG khi share link.

## 2. Thay màu

Toàn bộ màu sắc được khai báo tập trung ở đầu file `css/style.css`, trong phần `:root`:

```css
:root {
  --color-primary: #2563eb;   /* Màu chính */
  --color-secondary: #0f172a; /* Màu phụ / heading */
  --color-bg: #ffffff;        /* Nền */
  --color-accent: #38bdf8;    /* Màu nhấn */
  --color-text: #111827;      /* Màu chữ */
}
```

Chỉ cần đổi giá trị hex ở đây, toàn bộ website (nút bấm, gradient, icon, progress bar...) sẽ tự động cập nhật theo.

## 3. Thay CV

1. Đặt file CV thật của bạn (định dạng PDF) vào thư mục `assets/cv/`.
2. Đặt tên file chính xác là `CV.pdf` (hoặc đổi tên và sửa lại đường dẫn `href="assets/cv/CV.pdf"` ở 2 vị trí trong `index.html`: nút trong Navbar và nút "Download CV" ở Hero).
3. Xoá file hướng dẫn `assets/cv/DAT-CV-CUA-BAN-VAO-DAY.txt` sau khi đã thêm CV thật.

## 4. Thêm dự án mới

Trong `index.html`, tìm khối `<div class="projects__grid" id="projectsGrid">` (Section Featured Projects). Copy nguyên một khối `<article class="project-card"> ... </article>` và sửa lại:

- `data-category="seo"` → đổi thành `seo` / `marketing` / `website` / `content` để khớp với nút filter.
- Ảnh, tiêu đề, mô tả, tags, kết quả đạt được.
- Link `View Project` và `Github`.

Thêm ảnh dự án mới vào `assets/images/projects/` và trỏ đúng đường dẫn trong thẻ `<img>`.

## 5. Deploy lên GitHub Pages

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Sau đó vào GitHub → repo → **Settings → Pages** → chọn **Branch: main / (root)** → Save.
Sau 1–2 phút, site sẽ có tại: `https://<username>.github.io/<repo>/`

> File `.nojekyll` đã có sẵn trong repo — bắt buộc để GitHub Pages không bỏ qua các thư mục bắt đầu bằng dấu gạch dưới hoặc xử lý sai file tĩnh.

## 6. Mua domain

Có thể mua tại: Namecheap, GoDaddy, Google Domains (nay là Squarespace Domains), hoặc nhà cung cấp trong nước như PA Vietnam, Mắt Bão, Nhân Hòa. Giá domain `.com` thường 250.000–350.000đ/năm.

Các bước chung:
1. Tìm domain còn trống (ví dụ `nguyenvana.com`).
2. Thêm vào giỏ hàng, thanh toán.
3. Domain sẽ xuất hiện trong trang quản lý (Dashboard) của nhà cung cấp.

## 7. Kết nối domain với GitHub Pages

**Bước 1 — Tại trang quản lý DNS của domain**, thêm các bản ghi:

Nếu dùng domain gốc (ví dụ `nguyenvana.com`), thêm 4 bản ghi `A` trỏ tới IP của GitHub Pages:
```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

Nếu dùng subdomain (ví dụ `www.nguyenvana.com`), thêm bản ghi `CNAME`:
```
CNAME   www   <username>.github.io.
```

**Bước 2 — Tại GitHub repo**: Settings → Pages → mục **Custom domain**, nhập domain của bạn (ví dụ `www.nguyenvana.com`) → Save. GitHub sẽ tự tạo file `CNAME` trong repo. Bật thêm **Enforce HTTPS** sau khi DNS đã trỏ xong (có thể mất vài giờ để DNS cập nhật).

## 6 mục còn lại cần bạn tự cập nhật nội dung

Trước khi dùng để xin việc, hãy tìm và thay các nội dung mẫu sau trong `index.html`:
- Tên: "Nguyễn Văn A"
- Email: `thanhtuangsm789@gmail.com` (nếu chưa đúng)
- Số điện thoại: `+84 90 000 0000`
- Link LinkedIn: `your-profile`
- Link GitHub: `your-username`
- Domain: `dinhtonhu62-code.github.io/dinhtonhu.github.io` (đã cập nhật trong thẻ meta SEO, OG, canonical, sitemap.xml, robots.txt)
- Nội dung học vấn, kinh nghiệm, dự án, chứng chỉ theo thông tin thật của bạn.
