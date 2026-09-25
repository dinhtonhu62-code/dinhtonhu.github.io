/* ==========================================================================
   ĐA NGÔN NGỮ (VI / EN) — dùng chung cho toàn bộ site
   Cách dùng: gắn data-i18n="key" (text thuần) hoặc data-i18n-html="key"
   (có chứa thẻ HTML như <br>, <strong>) lên phần tử cần dịch.
   ========================================================================== */

const I18N = {
  /* ---- Navbar (dùng chung mọi trang) ---- */
  "nav.home": { vi: "Trang chủ", en: "Home" },
  "nav.about": { vi: "Giới thiệu", en: "About" },
  "nav.skills": { vi: "Kỹ năng", en: "Skills" },
  "nav.experience": { vi: "Kinh nghiệm", en: "Experience" },
  "nav.projects": { vi: "Dự án", en: "Projects" },
  "nav.certificates": { vi: "Chứng chỉ", en: "Certificates" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },
  "nav.downloadCV": { vi: "Tải CV", en: "Download CV" },
  "nav.backToProjects": { vi: "Quay lại danh sách dự án", en: "Back to projects" },
  "nav.backToExperience": { vi: "Quay lại kinh nghiệm làm việc", en: "Back to experience" },
  "lang.label": { vi: "Ngôn ngữ", en: "Language" },

  /* ---- Hero ---- */
  "hero.greeting": { vi: "Xin chào, tôi là", en: "Hello, I'm" },
  "hero.role.marketing": { vi: "AI Marketing Specialist", en: "AI Marketing Specialist" },
  "hero.role.content": { vi: "Content Creator", en: "Content Creator" },
  "hero.role.seo": { vi: "SEO On-page", en: "SEO On-page" },
  "hero.bio": {
    vi: "Sinh viên ngành Marketing tại Đại học Nguyễn Tất Thành với kinh nghiệm thực tế qua các vị trí Content Creator, chăm sóc khách hàng và thực tập Marketing. Thành thạo sản xuất nội dung TikTok, chạy quảng cáo Facebook/Meta Ads, tối ưu SEO On-page.",
    en: "Marketing student at Nguyen Tat Thanh University with hands-on experience as a Content Creator, customer care associate and Marketing intern. Skilled in producing TikTok content, running Facebook/Meta Ads, and On-page SEO optimization."
  },
  "hero.viewProjects": { vi: "Xem Dự Án", en: "View Projects" },
  "hero.scrollHint": { vi: "Cuộn xuống", en: "Scroll down" },

  /* ---- About ---- */
  "about.tag": { vi: "Giới thiệu", en: "About" },
  "about.title": { vi: "Về Tôi", en: "About Me" },
  "about.desc": {
    vi: "Tôi là sinh viên ngành Marketing, yêu thích Content Marketing, TikTok và SEO On-page. Qua các vị trí thực tập và part-time, tôi đã tích lũy kinh nghiệm lên kế hoạch nội dung, chạy quảng cáo Facebook/Meta Ads và tối ưu SEO cho website. Mục tiêu ngắn hạn của tôi là hoàn thiện đầy đủ các kỹ năng cần thiết để trở thành nhân sự đóng góp giá trị, và trong 5 năm tới đảm nhận vai trò lãnh đạo, quản lý các chiến dịch marketing quy mô lớn.",
    en: "I'm a Marketing student passionate about Content Marketing, TikTok and On-page SEO. Through internships and part-time roles, I've built experience planning content, running Facebook/Meta Ads and optimizing website SEO. My short-term goal is to master the skills needed to become a valuable contributor, and within 5 years take on a leadership role managing large-scale marketing campaigns."
  },
  "about.education.title": { vi: "Học vấn", en: "Education" },
  "about.education.text": { vi: "Marketing (GPA 3.3/4.0)<br />Đại học Nguyễn Tất Thành", en: "Marketing (GPA 3.3/4.0)<br />Nguyen Tat Thanh University" },
  "about.experience.title": { vi: "Kinh nghiệm", en: "Experience" },
  "about.experience.text": { vi: "2023 — Nay<br />Marketing &amp; Content", en: "2023 — Present<br />Marketing &amp; Content" },
  "about.goal.title": { vi: "Mục tiêu nghề nghiệp", en: "Career Goal" },
  "about.goal.text": { vi: "Trở thành<br />Marketing Leader", en: "Becoming a<br />Marketing Leader" },
  "about.location.title": { vi: "Địa điểm", en: "Location" },
  "about.location.text": { vi: "Quận Gò Vấp<br />Tp. Hồ Chí Minh", en: "Go Vap District<br />Ho Chi Minh City" },

  /* ---- Tools / Skills ---- */
  "skills.tag": { vi: "Kỹ năng & Công cụ", en: "Skills & Tools" },
  "skills.title": { vi: "Công Cụ", en: "Tools" },
  "skills.soft.title": { vi: "Kỹ năng mềm", en: "Soft Skills" },
  "skills.soft.communication": { vi: "Giao tiếp", en: "Communication" },
  "skills.soft.teamwork": { vi: "Làm việc nhóm", en: "Teamwork" },
  "skills.soft.timeManagement": { vi: "Quản lý thời gian", en: "Time Management" },
  "skills.marketing.title": { vi: "Marketing & SEO", en: "Marketing & SEO" },
  "skills.content.title": { vi: "Nội dung & Thiết kế", en: "Content & Design" },
  "skills.ai.title": { vi: "Công cụ AI", en: "AI Tools" },

  /* ---- Experience (trang chủ) ---- */
  "experience.tag": { vi: "Kinh nghiệm", en: "Experience" },
  "experience.title": { vi: "Kinh Nghiệm Làm Việc", en: "Experience" },
  "experience.viewDetail": { vi: "Xem chi tiết", en: "View details" },
  "experience.type.fulltime": { vi: "Toàn thời gian", en: "Full-time" },
  "experience.type.parttime": { vi: "Bán thời gian", en: "Part-time" },
  "experience.type.internship": { vi: "Thực tập", en: "Internship" },

  "exp.sonha.role": { vi: "Marketing Executive", en: "Marketing Executive" },
  "exp.sonha.li1": { vi: "Triển khai SEO website: keyword research, Keyword Gap, On-page SEO, content optimization và internal linking; theo dõi hiệu suất bằng Google Search Console và các công cụ SEO.", en: "Implemented website SEO: keyword research, Keyword Gap analysis, on-page SEO, content optimization and internal linking; tracked performance with Google Search Console and other SEO tools." },
  "exp.sonha.li2": { vi: "Tối ưu nội dung và landing page, góp phần tăng 14,1% organic clicks trung bình/ngày và cải thiện CTR từ 1,9% lên 2,9% trong 50 ngày so với giai đoạn 50 ngày trước đó.", en: "Optimized content and landing pages, contributing to a 14.1% increase in average daily organic clicks and improving CTR from 1.9% to 2.9% over 50 days compared to the prior 50-day period." },
  "exp.sonha.li3": { vi: "Tối ưu nhóm từ khóa ngành thang máy; từ khóa \"thang máy tải hàng\" tăng 350% organic clicks (2 → 9) và cải thiện vị trí trung bình 7,5 → 6,5.", en: "Optimized elevator-industry keyword clusters; the keyword \"cargo elevator\" grew organic clicks by 350% (2 → 9) and improved average ranking position from 7.5 to 6.5." },
  "exp.sonha.li4": { vi: "Xây dựng và tối ưu nội dung SEO cho trang sản phẩm, dịch vụ và bài viết website; theo dõi Clicks, Impressions, CTR và Ranking để đánh giá hiệu quả.", en: "Built and optimized SEO content for product, service and blog pages; tracked Clicks, Impressions, CTR and Ranking to evaluate effectiveness." },
  "exp.sonha.li5": { vi: "Hỗ trợ triển khai nội dung Facebook và theo dõi hiệu suất, với 25,3K views (+163,3%), 399 link clicks (+204,6%) và 77 interactions (+54%) trong kỳ báo cáo.", en: "Supported Facebook content execution and performance tracking, with 25.3K views (+163.3%), 399 link clicks (+204.6%) and 77 interactions (+54%) during the reporting period." },

  "exp.cc.role": { vi: "Content Creator Part-time", en: "Content Creator (Part-time)" },
  "exp.cc.li1": { vi: "Nghiên cứu xu hướng TikTok và xây dựng kế hoạch nội dung, sản xuất 10–15 video/tháng, có video đạt hơn 10.000 lượt xem tự nhiên.", en: "Researched TikTok trends and built content plans, producing 10–15 videos/month, with some videos reaching over 10,000 organic views." },
  "exp.cc.li2": { vi: "Theo dõi và phân tích hiệu suất nội dung để tối ưu tỷ lệ tương tác.", en: "Tracked and analyzed content performance to optimize engagement rate." },
  "exp.cc.li3": { vi: "Hỗ trợ xây dựng nhận diện thương hiệu trên TikTok.", en: "Supported building brand identity on TikTok." },

  "exp.care.role": { vi: "Chăm sóc khách hàng Part-time", en: "Customer Care (Part-time)" },
  "exp.care.li1": { vi: "Theo dõi hiệu suất bán hàng trên TikTok Shop, phân tích phản hồi khách hàng để đề xuất cải thiện nội dung và sản phẩm.", en: "Tracked sales performance on TikTok Shop and analyzed customer feedback to propose content and product improvements." },
  "exp.care.li2": { vi: "Hỗ trợ tối ưu tỷ lệ chuyển đổi thông qua tư vấn khách hàng.", en: "Helped optimize conversion rate through customer consultation." },
  "exp.care.li3": { vi: "Phối hợp với bộ phận Content và Livestream.", en: "Collaborated with the Content and Livestream teams." },

  "exp.huseco.role": { vi: "Thực tập sinh Marketing", en: "Marketing Intern" },
  "exp.huseco.li1": { vi: "Lên kế hoạch và viết bài cho Fanpage của công ty trên nền tảng Facebook, chạy quảng cáo Facebook Ads cho fanpage giúp tăng 10k follower.", en: "Planned and wrote posts for the company's Facebook Fanpage, and ran Facebook Ads that helped grow the fanpage by 10k followers." },
  "exp.huseco.li2": { vi: "Thiết kế, quay chụp cho sản phẩm của công ty.", en: "Designed and shot photo/video content for the company's products." },
  "exp.huseco.li3": { vi: "Phối hợp với bộ phận Sales để nội dung thống nhất với các chiến dịch marketing của công ty.", en: "Collaborated with the Sales team to keep content aligned with the company's marketing campaigns." },

  /* ---- Projects ---- */
  "projects.tag": { vi: "Dự án", en: "Projects" },
  "projects.title": { vi: "Dự Án Nổi Bật", en: "Featured Projects" },
  "projects.filter.all": { vi: "Tất cả", en: "All" },
  "projects.filter.seo": { vi: "SEO", en: "SEO" },
  "projects.filter.website": { vi: "Website", en: "Website" },
  "projects.website": { vi: "Website", en: "Website" },
  "projects.viewDetail": { vi: "Xem chi tiết", en: "View details" },
  "projects.result": { vi: "Kết quả", en: "Result" },

  "proj.aiassisted.desc": { vi: "Thiết kế và xây dựng website iUnlock (dịch vụ mở khoá iCloud) bằng Next.js với sự hỗ trợ của Claude AI — từ lên ý tưởng, viết prompt, chỉnh sửa code đến tối ưu giao diện.", en: "Designed and built the iUnlock website (an iCloud unlock service) with Next.js, with Claude AI's assistance — from ideation and prompt writing to code editing and UI optimization." },
  "proj.aiassisted.result": { vi: "Hoàn thiện website dịch vụ nhiều trang, responsive đầy đủ, deploy thành công trên Vercel", en: "Completed a multi-page service website, fully responsive, successfully deployed on Vercel" },

  "proj.eyedia.desc": { vi: "Nghiên cứu bộ từ khoá ngành \"mắt kính\", tối ưu SEO On-page cho 40+ bài viết, tối ưu Title, Meta Description, Heading và xây dựng Social Entity trên Facebook, TikTok.", en: "Researched eyewear-industry keywords, optimized On-page SEO for 40+ articles, optimized Title/Meta Description/Heading tags and built Social Entity presence on Facebook and TikTok." },
  "proj.eyedia.result": { vi: "Bài viết Facebook nằm trong Top tìm kiếm của Google với từ khoá thương hiệu", en: "A Facebook post ranked in Google's top search results for a branded keyword" },

  "proj.cozyknit.desc": { vi: "Xây dựng và quản trị website bằng WordPress, tối ưu tốc độ tải trang.", en: "Built and managed a WordPress website, optimizing page load speed." },
  "proj.cozyknit.result": { vi: "Website hoạt động ổn định, tốc độ tải trang được tối ưu", en: "Website runs stably with optimized page load speed" },

  /* ---- Certificates ---- */
  "certificates.tag": { vi: "Chứng chỉ", en: "Certificates" },
  "certificates.title": { vi: "Chứng Chỉ", en: "Certificates" },

  /* ---- Footer / Contact ---- */
  "footer.tag": { vi: "Liên hệ", en: "Contact" },
  "footer.ctaTitle": { vi: "Cùng Nhau Kiến Tạo Điều Gì Đó", en: "Let's Create Something Together" },
  "footer.ctaLead": { vi: "Dù là AI, chiến lược nội dung hay công nghệ sáng tạo, tôi luôn hào hứng hợp tác trong những dự án ý nghĩa.", en: "Whether it's AI, content strategy, or creative technology, I'm always excited to collaborate on meaningful projects." },
  "footer.sendEmail": { vi: "Gửi Email", en: "Send Email" },
  "footer.status": { vi: "Hiện đang tìm kiếm cơ hội trong lĩnh vực AI, Công nghệ Sáng tạo và Digital Marketing.", en: "Currently open to AI, Creative Technology, and Digital Marketing opportunities." },
  "footer.rights": { vi: "Đã đăng ký bản quyền.", en: "All rights reserved." },

  /* ---- Experience detail pages (dùng chung khung) ---- */
  "expdetail.tag": { vi: "Kinh nghiệm", en: "Experience" },
  "expdetail.jobDesc": { vi: "Mô tả công việc", en: "Job Description" },
  "expdetail.workDone": { vi: "Công việc thực hiện", en: "What I Did" },
  "expdetail.allExperience": { vi: "Tất cả kinh nghiệm", en: "All experience" },
  "expdetail.prevExperience": { vi: "Kinh nghiệm trước", en: "Previous experience" },
  "expdetail.nextExperience": { vi: "Kinh nghiệm tiếp theo", en: "Next experience" },
  "expdetail.gallery": { vi: "Hình ảnh thực tế", en: "Real-world Visuals" },
  "expdetail.galleryPending": { vi: "Ảnh sẽ được cập nhật sớm", en: "Photos coming soon" },
  "expdetail.notableResults": { vi: "Kết quả nổi bật", en: "Notable Results" },

  /* ---- Content Creator (Anya Store) ---- */
  "cc.jobDesc": { vi: "Tại Anya Store, tôi phụ trách sản xuất và phát triển nội dung TikTok cho thương hiệu, từ nghiên cứu xu hướng đến lên kế hoạch nội dung và theo dõi hiệu suất để tối ưu tỷ lệ tương tác.", en: "At Anya Store, I was responsible for producing and developing TikTok content for the brand, from trend research to content planning and performance tracking to optimize engagement." },
  "cc.tiktokTitle": { vi: "Bài đăng nổi bật trên TikTok", en: "Featured TikTok Posts" },
  "cc.tiktokDesc": { vi: "Một số video sản phẩm tôi đã lên kế hoạch và sản xuất cho Anya Store. Xem thêm tại kênh TikTok chính thức của cửa hàng.", en: "Some of the product videos I planned and produced for Anya Store. See more on the store's official TikTok channel." },
  "cc.viewChannel": { vi: "Xem kênh TikTok @anyastore.vn", en: "View TikTok channel @anyastore.vn" },
  "cc.post1": { vi: "Bài đăng 1", en: "Post 1" },
  "cc.post2": { vi: "Bài đăng 2", en: "Post 2" },
  "cc.post3": { vi: "Bài đăng 3", en: "Post 3" },

  /* ---- Customer Care (Anya Store) ---- */
  "care.tagLabel": { vi: "Chăm sóc khách hàng", en: "Customer Care" },
  "care.jobDesc": { vi: "Trong vai trò chăm sóc khách hàng tại Anya Store, tôi theo dõi hiệu suất bán hàng trên TikTok Shop, tư vấn và hỗ trợ khách hàng nhằm tối ưu tỷ lệ chuyển đổi, đồng thời phối hợp chặt chẽ với bộ phận Content và Livestream.", en: "As a customer care associate at Anya Store, I tracked sales performance on TikTok Shop, consulted and supported customers to optimize conversion rate, and worked closely with the Content and Livestream teams." },
  "care.li1": { vi: "Theo dõi hiệu suất bán hàng trên TikTok Shop", en: "Tracked sales performance on TikTok Shop" },
  "care.li2": { vi: "Phân tích phản hồi khách hàng để đề xuất cải thiện nội dung và sản phẩm", en: "Analyzed customer feedback to propose content and product improvements" },
  "care.li3": { vi: "Hỗ trợ tối ưu tỷ lệ chuyển đổi thông qua tư vấn khách hàng", en: "Helped optimize conversion rate through customer consultation" },
  "care.li4": { vi: "Phối hợp với bộ phận Content và Livestream", en: "Collaborated with the Content and Livestream teams" },

  /* ---- Huseco (Marketing Intern) ---- */
  "huseco.tagContent": { vi: "Content", en: "Content" },
  "huseco.jobDesc": { vi: "Trong thời gian thực tập tại Huseco, tôi phụ trách nội dung Fanpage, chạy quảng cáo Facebook Ads và hỗ trợ sản xuất hình ảnh sản phẩm, phối hợp cùng bộ phận Sales để đảm bảo nội dung marketing thống nhất.", en: "During my internship at Huseco, I managed Fanpage content, ran Facebook Ads, and helped produce product visuals, working with the Sales team to keep marketing content consistent." },
  "huseco.li1": { vi: "Lên kế hoạch và viết bài cho Fanpage của công ty trên nền tảng Facebook", en: "Planned and wrote posts for the company's Facebook Fanpage" },
  "huseco.li2": { vi: "Chạy quảng cáo Facebook Ads cho fanpage, tăng 10k follower", en: "Ran Facebook Ads for the fanpage, growing it by 10k followers" },
  "huseco.li3": { vi: "Thiết kế, quay chụp cho sản phẩm của công ty", en: "Designed and shot photo/video content for the company's products" },
  "huseco.li4": { vi: "Phối hợp với bộ phận Sales để nội dung thống nhất với các chiến dịch marketing của công ty", en: "Collaborated with the Sales team to keep content aligned with the company's marketing campaigns" },
  "huseco.fbTitle": { vi: "Bài viết nổi bật trên Fanpage", en: "Featured Fanpage Posts" },
  "huseco.fbDesc": { vi: "Một số bài viết tôi đã lên kế hoạch và sản xuất nội dung cho Fanpage NOVA Health (thương hiệu máy lọc nước Huseco). Xem thêm tại Fanpage chính thức.", en: "Some posts I planned and produced for the NOVA Health Fanpage (Huseco's water filter brand). See more on the official Fanpage." },
  "huseco.viewFanpage": { vi: "Xem Fanpage NOVA Health", en: "View NOVA Health Fanpage" },
  "huseco.post1": { vi: "Bài viết 1", en: "Post 1" },
  "huseco.post2": { vi: "Bài viết 2", en: "Post 2" },
  "huseco.post3": { vi: "Bài viết 3", en: "Post 3" },

  /* ---- Sơn Hà Elevator ---- */
  "sonha.jobDesc": { vi: "Tại Sơn Hà Elevator, tôi phụ trách triển khai SEO cho website công ty trong ngành thang máy — từ nghiên cứu từ khoá, tối ưu on-page, đến theo dõi hiệu suất bằng Google Search Console — đồng thời hỗ trợ nội dung Facebook để tăng độ nhận diện thương hiệu.", en: "At Son Ha Elevator, I implemented SEO for the company's website in the elevator industry — from keyword research and on-page optimization to performance tracking with Google Search Console — while also supporting Facebook content to build brand awareness." },
  "sonha.result1": { vi: "Organic clicks trung bình/ngày +14,1%", en: "Average daily organic clicks +14.1%" },
  "sonha.result2": { vi: "CTR tăng từ 1,9% lên 2,9% trong 50 ngày", en: "CTR increased from 1.9% to 2.9% within 50 days" },
  "sonha.result3": { vi: "Từ khoá \"thang máy tải hàng\": +350% clicks (2 → 9)", en: "\"Cargo elevator\" keyword: +350% clicks (2 → 9)" },
  "sonha.result4": { vi: "Vị trí trung bình cải thiện 7,5 → 6,5", en: "Average ranking position improved 7.5 → 6.5" },
  "sonha.result5": { vi: "Facebook: 25,3K views (+163,3%)", en: "Facebook: 25.3K views (+163.3%)" },
  "sonha.result6": { vi: "399 link clicks (+204,6%), 77 interactions (+54%)", en: "399 link clicks (+204.6%), 77 interactions (+54%)" },
  "sonha.vizSubtitle": { vi: "SEO & Digital Marketing Performance", en: "SEO & Digital Marketing Performance" },
  "sonha.vizTitle": { vi: "Dự án thực tế", en: "Real Project" },
  "sonha.g1.eyebrow": { vi: "01. SEO Performance", en: "01. SEO Performance" },
  "sonha.g1.title": { vi: "Google Search Console", en: "Google Search Console" },
  "sonha.g1.img1": { vi: "Ảnh 1<br />Google Search Console – Performance Overview", en: "Image 1<br />Google Search Console – Performance Overview" },
  "sonha.g1.img2": { vi: "Ảnh 2<br />Google Search Console – Search Queries", en: "Image 2<br />Google Search Console – Search Queries" },
  "sonha.g1.captionTitle": { vi: "Google Search Console", en: "Google Search Console" },
  "sonha.g1.captionDesc": { vi: "SEO performance & keyword monitoring", en: "SEO performance & keyword monitoring" },
  "sonha.g2.eyebrow": { vi: "02. Keyword & Page Optimization", en: "02. Keyword & Page Optimization" },
  "sonha.g2.title": { vi: "Keyword Research & On-page SEO", en: "Keyword Research & On-page SEO" },
  "sonha.g2.desc": { vi: "Conducted keyword research, competitor analysis and on-page optimization to identify content opportunities and improve organic search visibility.", en: "Conducted keyword research, competitor analysis and on-page optimization to identify content opportunities and improve organic search visibility." },
  "sonha.g2.img1": { vi: "Ảnh 1<br />Keyword Gap / Competitor Analysis", en: "Image 1<br />Keyword Gap / Competitor Analysis" },
  "sonha.g2.img2": { vi: "Ảnh 2<br />Google Search Console – Pages", en: "Image 2<br />Google Search Console – Pages" },
  "sonha.g2.img3": { vi: "Ảnh 3<br />Trang website / nội dung SEO đã tối ưu", en: "Image 3<br />Website page / optimized SEO content" },
  "sonha.g3.eyebrow": { vi: "03. SEO Case Study", en: "03. SEO Case Study" },
  "sonha.g3.title": { vi: "Keyword Growth", en: "Keyword Growth" },
  "sonha.g3.desc": { vi: "Optimized SEO content and website pages around elevator-related search intent and monitored performance through Google Search Console.", en: "Optimized SEO content and website pages around elevator-related search intent and monitored performance through Google Search Console." },
  "sonha.kw1": { vi: "Keyword Growth — \"thang máy tải hàng\"", en: "Keyword Growth — \"cargo elevator\"" },
  "sonha.kw2": { vi: "Keyword Growth — \"thang máy gia đình\"", en: "Keyword Growth — \"home elevator\"" },
  "sonha.kw3": { vi: "Keyword Growth — \"sửa chữa thang máy\"", en: "Keyword Growth — \"elevator repair\"" },
  "sonha.kw4": { vi: "Keyword Growth — \"thang máy tải khách\"", en: "Keyword Growth — \"passenger elevator\"" },
  "sonha.kw5": { vi: "Keyword Growth — \"thang máy người khuyết tật\"", en: "Keyword Growth — \"elevator for disabled access\"" },
  "sonha.pending": { vi: "Số liệu Before/After đang được cập nhật", en: "Before/After data coming soon" },
  "sonha.g4.eyebrow": { vi: "04. SEO Opportunity", en: "04. SEO Opportunity" },
  "sonha.g4.keyword": { vi: "Keyword: \"thang máy gia đình không phòng máy\"", en: "Keyword: \"machine-room-less home elevator\"" },
  "sonha.g4.desc": { vi: "High search visibility with significant room for improvement in ranking and CTR, identified as an SEO content optimization opportunity.", en: "High search visibility with significant room for improvement in ranking and CTR, identified as an SEO content optimization opportunity." },
  "sonha.g5.eyebrow": { vi: "05. Social Media", en: "05. Social Media" },
  "sonha.g5.title": { vi: "Facebook Content Performance", en: "Facebook Content Performance" },
  "sonha.g5.img1": { vi: "Ảnh 1<br />Facebook Analytics – tổng quan hiệu suất", en: "Image 1<br />Facebook Analytics – performance overview" },
  "sonha.g5.img2": { vi: "Ảnh 2<br />Facebook content / visual", en: "Image 2<br />Facebook content / visual" },
  "sonha.g5.img3": { vi: "Ảnh 3<br />Facebook content / visual", en: "Image 3<br />Facebook content / visual" },
  "sonha.g5.desc": { vi: "Supported Facebook content execution and performance tracking.", en: "Supported Facebook content execution and performance tracking." },

  /* ---- Project detail pages (dùng chung khung) ---- */
  "projdetail.tag": { vi: "Dự án", en: "Project" },
  "projdetail.overview": { vi: "Tổng quan dự án", en: "Project Overview" },
  "projdetail.workDone": { vi: "Công việc thực hiện", en: "What I Did" },
  "projdetail.result": { vi: "Kết quả đạt được", en: "Results Achieved" },
  "projdetail.allProjects": { vi: "Tất cả dự án", en: "All projects" },
  "projdetail.nextProject": { vi: "Dự án tiếp theo", en: "Next project" },
  "projdetail.prevProject": { vi: "Dự án trước", en: "Previous project" },
  "projdetail.viewWebsite": { vi: "Xem website", en: "View website" },
  "projdetail.gallery": { vi: "Hình ảnh thực tế", en: "Real-world Visuals" },

  /* ---- Eyedia project ---- */
  "eyedia.overview": { vi: "Eyedia là thương hiệu kính mắt phong cách Y2K chuẩn bị ra mắt fanpage và website bán hàng. Trong dự án này, tôi phụ trách mảng SEO On-page: nghiên cứu bộ từ khoá ngành hàng, tối ưu nội dung cho toàn bộ hệ thống bài viết và xây dựng nền tảng nhận diện thương hiệu trên mạng xã hội để hỗ trợ SEO tổng thể.", en: "Eyedia is a Y2K-style eyewear brand preparing to launch its fanpage and sales website. In this project, I handled On-page SEO: researching industry keywords, optimizing content across the entire article system, and building a social media presence to support overall SEO." },
  "eyedia.li1": { vi: "Thiết kế website trên Google Site", en: "Designed the website on Google Sites" },
  "eyedia.li2": { vi: "Nghiên cứu bộ từ khoá ngành \"mắt kính\"", en: "Researched keywords in the \"eyewear\" industry" },
  "eyedia.li3": { vi: "Tối ưu SEO On-page cho 40+ bài viết", en: "Optimized On-page SEO for 40+ articles" },
  "eyedia.li4": { vi: "Tối ưu Title, Meta Description, Heading", en: "Optimized Title, Meta Description, and Headings" },
  "eyedia.li5": { vi: "Xây dựng Social Entity trên Facebook và TikTok", en: "Built Social Entity presence on Facebook and TikTok" },
  "eyedia.result": { vi: "Tối ưu nội dung giúp bài viết Facebook nằm trong Top tìm kiếm Google với từ khoá thương hiệu.", en: "Content optimization helped a Facebook post rank in Google's top search results for a branded keyword." },

  /* ---- Cozy Knit project ---- */
  "cozyknit.overview": { vi: "Cozy Knit là thương hiệu len đan thủ công với slogan \"Ấm áp trong từng sợi len\". Tôi phụ trách xây dựng và quản trị toàn bộ website bằng WordPress, đảm bảo giao diện mượt mà và tốc độ tải trang được tối ưu cho trải nghiệm mua sắm của khách hàng.", en: "Cozy Knit is a handmade knitwear brand with the slogan \"Warmth in every thread\". I was responsible for building and managing the entire website with WordPress, ensuring a smooth interface and optimized page load speed for customers' shopping experience." },
  "cozyknit.li1": { vi: "Xây dựng và quản trị website bằng WordPress", en: "Built and managed the website with WordPress" },
  "cozyknit.li2": { vi: "Tối ưu tốc độ tải trang", en: "Optimized page load speed" },
  "cozyknit.result": { vi: "Website hoạt động ổn định, tốc độ tải trang được tối ưu.", en: "The website runs stably with optimized page load speed." },

  /* ---- AI-Assisted Website Development ---- */
  "ai.overview": { vi: "AI-Assisted Website Development là case-study ghi lại quá trình tôi thiết kế và xây dựng website iUnlock (iunlockvn.com) — nền tảng cung cấp dịch vụ mở khoá iCloud minh bạch, an toàn cho chủ sở hữu hợp pháp thiết bị Apple, với sự hỗ trợ của Claude AI trong quá trình phát triển. Website hướng đến người dùng có nhu cầu mở khoá iCloud hợp pháp, cần một dịch vụ rõ ràng về giá cả và quy trình xử lý.", en: "AI-Assisted Website Development is a case study documenting how I designed and built the iUnlock website (iunlockvn.com) — a platform offering transparent, safe iCloud unlock services for legitimate owners of Apple devices, with Claude AI's assistance during development. The website targets users with legitimate iCloud unlock needs who want a service with clear pricing and process." },
  "ai.responsibilities": { vi: "Phân tích yêu cầu dự án, thiết kế cấu trúc website, thiết kế UI/UX, viết Prompt cho Claude AI, chỉnh sửa giao diện Next.js/CSS/TypeScript, tối ưu Responsive, tối ưu SEO, kiểm thử và triển khai lên Vercel.", en: "Analyzed project requirements, designed the website structure, designed the UI/UX, wrote prompts for Claude AI, edited the Next.js/CSS/TypeScript interface, optimized responsiveness and SEO, tested, and deployed to Vercel." },

  "ai.heroTag": { vi: "Case Study", en: "Case Study" },
  "ai.heroSubtitle": { vi: "Website iUnlock &bull; Content Strategy &bull; AI Prompt Strategy", en: "iUnlock Website &bull; Content Strategy &bull; AI Prompt Strategy" },
  "ai.liveDemo": { vi: "Live Demo", en: "Live Demo" },
  "ai.bannerCaption": { vi: "Trang chủ website iUnlock", en: "iUnlock website homepage" },

  "ai.tagOverview": { vi: "Tổng quan", en: "Overview" },
  "ai.overviewTitle": { vi: "Project Overview", en: "Project Overview" },
  "ai.projectType.title": { vi: "Project Type", en: "Project Type" },
  "ai.projectType.text": { vi: "Business / Service Website", en: "Business / Service Website" },
  "ai.duration.title": { vi: "Duration", en: "Duration" },
  "ai.role.title": { vi: "Role", en: "Role" },
  "ai.role.text": { vi: "Designer &amp; Developer", en: "Designer &amp; Developer" },
  "ai.platform.title": { vi: "Platform", en: "Platform" },
  "ai.deployment.title": { vi: "Deployment", en: "Deployment" },
  "ai.deployment.text": { vi: "Next.js Application", en: "Next.js Application" },
  "ai.techStack.title": { vi: "Tech Stack", en: "Tech Stack" },
  "ai.techStack.text": { vi: "Next.js, TypeScript, Prisma, Neon Postgres", en: "Next.js, TypeScript, Prisma, Neon Postgres" },

  "ai.tagRole": { vi: "Vai trò", en: "Role" },
  "ai.responsibilitiesTitle": { vi: "My Responsibilities", en: "My Responsibilities" },
  "ai.resp1": { vi: "Phân tích yêu cầu dự án", en: "Analyzed project requirements" },
  "ai.resp2": { vi: "Thiết kế cấu trúc website", en: "Designed the website structure" },
  "ai.resp3": { vi: "Chỉnh sửa giao diện Next.js", en: "Edited the Next.js interface" },
  "ai.resp4": { vi: "Chỉnh sửa CSS", en: "Edited the CSS" },
  "ai.resp5": { vi: "Chỉnh sửa logic TypeScript", en: "Edited the TypeScript logic" },
  "ai.resp6": { vi: "Tối ưu Responsive", en: "Optimized responsiveness" },
  "ai.resp7": { vi: "Tối ưu SEO", en: "Optimized SEO" },
  "ai.resp8": { vi: "Kiểm thử và hoàn thiện giao diện", en: "Tested and refined the interface" },
  "ai.resp9": { vi: "Deploy lên Vercel", en: "Deployed to Vercel" },

  "ai.tagProcess": { vi: "Quy trình", en: "Process" },
  "ai.processTitle": { vi: "Development Process", en: "Development Process" },
  "ai.process1": { vi: "Research", en: "Research" },
  "ai.process2": { vi: "Planning", en: "Planning" },
  "ai.process3": { vi: "Wireframe", en: "Wireframe" },
  "ai.process4": { vi: "Prompt Engineering", en: "Prompt Engineering" },
  "ai.process5": { vi: "Claude AI Generate Code", en: "Claude AI Generate Code" },
  "ai.process6": { vi: "Manual Code Review", en: "Manual Code Review" },
  "ai.process7": { vi: "UI Refinement", en: "UI Refinement" },
  "ai.process8": { vi: "Responsive Optimization", en: "Responsive Optimization" },
  "ai.process9": { vi: "Testing", en: "Testing" },
  "ai.process10": { vi: "Deployment", en: "Deployment" },

  "ai.tagFeatures": { vi: "Tính năng", en: "Features" },
  "ai.featuresTitle": { vi: "Website Features", en: "Website Features" },
  "ai.feature1": { vi: "Responsive", en: "Responsive" },
  "ai.feature2": { vi: "Dark Theme UI", en: "Dark Theme UI" },
  "ai.feature3": { vi: "Glow Background Effect", en: "Glow Background Effect" },
  "ai.feature4": { vi: "Floating Particles Animation", en: "Floating Particles Animation" },
  "ai.feature5": { vi: "Smooth Scroll", en: "Smooth Scroll" },
  "ai.feature6": { vi: "SEO Friendly", en: "SEO Friendly" },
  "ai.feature7": { vi: "Fast Loading", en: "Fast Loading" },
  "ai.feature8": { vi: "Contact Popover", en: "Contact Popover" },
  "ai.feature9": { vi: "Mobile Menu", en: "Mobile Menu" },
  "ai.feature10": { vi: "Pricing Table", en: "Pricing Table" },
  "ai.feature11": { vi: "Blog / Tin tức", en: "Blog / News" },
  "ai.feature12": { vi: "Contact Form", en: "Contact Form" },

  "ai.tagTech": { vi: "Công nghệ", en: "Technology" },
  "ai.techTitle": { vi: "Technology Stack", en: "Technology Stack" },

  "ai.tagChallenges": { vi: "Khó khăn", en: "Challenges" },
  "ai.challengesTitle": { vi: "Challenges", en: "Challenges" },
  "ai.challenge1": { vi: "Code AI sinh ra ban đầu chưa tối ưu, cần chỉnh sửa lại cấu trúc component.", en: "The AI-generated code was initially unoptimized and needed restructuring of components." },
  "ai.challenge2": { vi: "Kết nối Prisma với Neon Postgres ban đầu gặp một số lỗi cấu hình.", en: "Connecting Prisma with Neon Postgres initially ran into some configuration errors." },
  "ai.challenge3": { vi: "Responsive trên một số thiết bị chưa hoàn chỉnh ngay từ đầu.", en: "Responsiveness on some devices wasn't complete from the start." },
  "ai.challenge4": { vi: "Hiệu ứng động (particles, glow background) cần tối ưu để không ảnh hưởng tốc độ tải trang.", en: "Animated effects (particles, glow background) needed optimization to avoid hurting page load speed." },
  "ai.challenge5": { vi: "Cấu trúc component cần tối ưu để dễ bảo trì và mở rộng.", en: "The component structure needed optimization for easier maintenance and scaling." },

  "ai.tagSolutions": { vi: "Giải pháp", en: "Solutions" },
  "ai.solutionsTitle": { vi: "Solutions", en: "Solutions" },
  "ai.solution1": { vi: "Tối ưu prompt nhiều lần, bổ sung ràng buộc kỹ thuật cụ thể hơn cho Next.js.", en: "Refined the prompt through multiple iterations, adding more specific technical constraints for Next.js." },
  "ai.solution2": { vi: "Refactor lại cấu hình Prisma và biến môi trường kết nối Neon Postgres.", en: "Refactored the Prisma configuration and environment variables for the Neon Postgres connection." },
  "ai.solution3": { vi: "Refactor component cho gọn gàng, tách nhỏ theo chức năng.", en: "Refactored components to be cleaner, splitting them by function." },
  "ai.solution4": { vi: "Tối ưu hiệu ứng động, giảm tải cho các thiết bị cấu hình thấp.", en: "Optimized animated effects to reduce load on lower-spec devices." },
  "ai.solution5": { vi: "Chỉnh responsive thủ công, kiểm tra trực tiếp trên nhiều kích thước.", en: "Manually adjusted responsiveness, testing directly across multiple screen sizes." },
  "ai.solution6": { vi: "Cải thiện giao diện theo nguyên tắc UX: rõ ràng, nhất quán, dễ thao tác.", en: "Improved the interface following UX principles: clarity, consistency, ease of use." },

  "ai.tagShowcase": { vi: "Hình ảnh", en: "Visuals" },
  "ai.showcaseTitle": { vi: "Website Showcase", en: "Website Showcase" },
  "ai.showcase.homepage": { vi: "Trang chủ (Homepage)", en: "Homepage" },
  "ai.showcase.blog": { vi: "Bài viết Tin tức", en: "News Article" },
  "ai.showcase.contact": { vi: "Trang Liên hệ", en: "Contact Page" },
  "ai.showcase.seoAdmin": { vi: "Trang quản lý &amp; tối ưu SEO", en: "SEO Management &amp; Optimization Page" },

  "ai.tagAchievements": { vi: "Thành quả", en: "Achievements" },
  "ai.achievementsTitle": { vi: "Key Achievements", en: "Key Achievements" },
  "ai.achievement1": { vi: "Thiết kế hoàn chỉnh website dịch vụ iUnlock", en: "Fully designed the iUnlock service website" },
  "ai.achievement2": { vi: "Tích hợp cơ sở dữ liệu Neon Postgres qua Prisma", en: "Integrated the Neon Postgres database via Prisma" },
  "ai.achievement3": { vi: "Responsive trên Desktop, Tablet và Mobile", en: "Responsive across Desktop, Tablet and Mobile" },
  "ai.achievement4": { vi: "Áp dụng Prompt Engineering để tăng tốc phát triển", en: "Applied Prompt Engineering to speed up development" },
  "ai.achievement5": { vi: "Tối ưu SEO cơ bản", en: "Implemented basic SEO optimization" },
  "ai.achievement6": { vi: "Deploy thành công trên Vercel", en: "Successfully deployed on Vercel" },

  "ai.tagReflection": { vi: "Suy ngẫm", en: "Reflection" },
  "ai.reflectionTitle": { vi: "Reflection", en: "Reflection" },
  "ai.reflectionQuote": {
    vi: "Tôi sử dụng Claude AI như một công cụ hỗ trợ tăng năng suất trong quá trình xây dựng website iUnlock, nhưng toàn bộ quá trình phân tích yêu cầu, thiết kế giao diện, viết prompt, kiểm tra chất lượng, chỉnh sửa mã nguồn và tối ưu trải nghiệm người dùng đều do tôi thực hiện. AI giúp tôi rút ngắn thời gian dựng khung component Next.js ban đầu, nhưng chính tôi mới là người quyết định cấu trúc thông tin, phong cách thiết kế, màu sắc, và cách các thành phần tương tác với nhau. Mỗi đoạn code do AI tạo ra đều được tôi đọc lại, kiểm tra và chỉnh sửa để đảm bảo đúng với định hướng thương hiệu và trải nghiệm mong muốn. Dự án này giúp tôi hiểu rõ hơn cách khai thác AI như một cộng sự kỹ thuật hiệu quả, đồng thời củng cố tư duy thiết kế, kỹ năng front-end và quy trình làm việc chuyên nghiệp của bản thân.",
    en: "I used Claude AI as a productivity tool while building the iUnlock website, but the entire process of analyzing requirements, designing the interface, writing prompts, checking quality, editing source code and optimizing the user experience was done by me. AI helped me shorten the time to scaffold the initial Next.js components, but I was the one who decided the information architecture, design style, colors, and how components interact with each other. Every piece of AI-generated code was reviewed and edited by me to make sure it matched the brand direction and the intended experience. This project helped me better understand how to use AI as an effective technical collaborator, while also strengthening my design thinking, front-end skills and professional workflow."
  }
};

/* ---------- Lấy / lưu ngôn ngữ hiện tại ---------- */
function getLang() {
  try {
    return localStorage.getItem("lang") || "vi";
  } catch (err) {
    return "vi";
  }
}

function setLang(lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch (err) {
    /* ignore */
  }
}

/* ---------- Áp dụng bản dịch cho toàn trang ---------- */
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = I18N[el.dataset.i18n];
    if (entry && entry[lang]) el.textContent = entry[lang];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const entry = I18N[el.dataset.i18nHtml];
    if (entry && entry[lang]) el.innerHTML = entry[lang];
  });

  document.documentElement.lang = lang === "en" ? "en" : "vi";

  document.querySelectorAll(".lang-toggle__select").forEach((select) => {
    select.value = lang;
  });
}

/* ---------- Dropdown chuyển đổi ngôn ngữ ---------- */
function initLanguageToggle() {
  const selects = document.querySelectorAll(".lang-toggle__select");
  if (!selects.length) return;

  selects.forEach((select) => {
    select.addEventListener("change", () => {
      const lang = select.value;
      setLang(lang);
      applyTranslations(lang);
    });
  });
}

/* Áp dụng ngay khi file được nạp để tránh nháy sai ngôn ngữ trước khi DOM sẵn sàng */
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(getLang());
  initLanguageToggle();
});
