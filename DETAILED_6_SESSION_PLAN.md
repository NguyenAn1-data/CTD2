# AI CAMPUS FAQ — PROJECT PLAN & TOOL DECLARATION
**Project:** AI Campus FAQ — Enterprise Data-Driven Decision Making (DDDM) Chatbot  
**PM Tool:** Trello Kanban | **Team Size:** 5 Members | **Timeline:** 6 Sessions

---

## 🤖 1. AI TOOLS DECLARATION (Tiêu chí 1 – 1.0 Điểm)

| Công cụ AI | Mục đích sử dụng | Prompt mẫu ngắn gọn |
| :--- | :--- | :--- |
| **1. Google Gemini** | Lập trình giao diện HTML/CSS, logic JavaScript, thuật toán tìm kiếm và hiệu ứng gõ chữ (Typewriter). | *"Scaffold a dark-mode FAQ chatbot in HTML/CSS/JS with instant search and typewriter streaming."* |
| **2. Claude / ChatGPT** | Biên soạn nội dung chuyên sâu 10 câu hỏi FAQ về Data-Driven Decision Making và công thức tính ROI. | *"Write 10 executive FAQ questions and answers on enterprise data-driven decision making and financial ROI."* |
| **3. Midjourney** | Lấy cảm hứng phối màu giao diện tối (Deep Space Dark Theme, ánh sáng tím & xanh neon). | *"Futuristic AI decision dashboard UI, dark space background, glowing cyan and violet accents."* |

> **Kiểm soát chất lượng:** Toàn bộ code và nội dung do AI tạo ra đều được nhóm kiểm tra, chạy thử và sửa lỗi thủ công 100%.

---

## 📊 2. PROJECT MANAGEMENT TOOL (Tiêu chí 4 – 2.0 Điểm)

* **Công cụ:** **Trello (Kanban Board)**
* **Link Trello:** `https://trello.com/b/AICampus-DDDM-Chatbot`
* **Quy trình 5 cột:** `Backlog` $\rightarrow$ `Sprint Backlog` $\rightarrow$ `In Progress` $\rightarrow$ `Testing / QA` $\rightarrow$ `Done`
* **Quy tắc:** Mỗi thành viên nhận tối đa 2 việc cùng lúc; cập nhật tiến độ mỗi ngày trên Trello.

---

## 🗓️ 3. KẾ HOẠCH 6 SESSION ĐƠN GIẢN (Tiêu chí 2 – 1.5 Điểm)

### Session 1: Khởi động dự án & Chuẩn bị
* **Mục tiêu:** Thống nhất chủ đề và thiết lập môi trường làm việc.
* **Công việc:**
  * Chọn chủ đề: Chatbot hỗ trợ ra quyết định dựa trên dữ liệu cho doanh nghiệp (10 FAQ).
  * Tạo kho lưu trữ GitHub và cấu trúc thư mục (`index.html`, `style.css`, `app.js`, `faq-data.js`).
  * Tạo bảng Trello, mời 5 thành viên vào nhóm.
* **Đầu ra:** GitHub repo sẵn sàng, bảng Trello đã khởi tạo.

---

### Session 2: Lập kế hoạch chi tiết & Phân công (NỘP BÀI CỘT B)
* **Mục tiêu:** Hoàn thiện kế hoạch nộp đúng hạn Session 2 (1.5 điểm).
* **Công việc:**
  * Viết 10 User Stories (ví dụ: *"Là giám đốc, tôi muốn xem công thức tính ROI để duyệt ngân sách"*).
  * Tạo ít nhất 15 thẻ công việc (Cards) trên Trello, gán người làm (M1 đến M5) và hạn chót.
  * Xuất file Kế hoạch chi tiết và nộp link Trello vào Cột B bảng điểm.
* **Đầu ra:** Bảng Trello hoạt động đầy đủ, link kế hoạch đã nộp.

---

### Session 3: Thiết kế giao diện & Soạn nội dung 10 FAQ
* **Mục tiêu:** Có bản vẽ giao diện và bộ dữ liệu 10 câu hỏi hoàn chỉnh.
* **Công việc:**
  * Vẽ phác thảo giao diện: Menu chủ đề bên trái, khung chat bên phải.
  * Dùng Claude/Gemini soạn thảo 10 câu hỏi và câu trả lời chuyên sâu bằng tiếng Anh.
  * Lưu dữ liệu vào file `faq-data.js` (kèm từ khóa tìm kiếm và các chỉ số nổi bật).
* **Đầu ra:** File `faq-data.js` hoàn chỉnh 10 FAQ, bản phác thảo giao diện.

---

### Session 4: Lập trình sản phẩm cốt lõi
* **Mục tiêu:** Web chạy được trên máy tính với tính năng tìm kiếm và phản hồi.
* **Công việc:**
  * Viết mã `index.html` (khung trang web) và `style.css` (giao diện tối Dark Mode, kính mờ).
  * Viết mã `app.js`: Tự động tìm câu trả lời khi người dùng gõ từ khóa (`searchFAQ`).
  * Làm hiệu ứng trợ lý AI phản hồi từng dòng như đang gõ chữ thật.
* **Đầu ra:** Trang web chạy trực tiếp bằng file `index.html` không có lỗi.

---

### Session 5: Thêm tính năng nâng cao & Kiểm thử
* **Mục tiêu:** Hoàn thiện sản phẩm 100% và chuẩn bị nội dung thuyết trình.
* **Công việc:**
  * Thêm nút **Đọc bằng giọng nói (Read Aloud)** qua Web Speech API.
  * Thêm nút **Copy câu trả lời**, nút **Đổi giao diện Sáng/Tối (Theme)**, và nút **Xuất file ghi chú**.
  * Kiểm tra hiển thị tốt trên điện thoại và các trình duyệt (Chrome, Edge).
  * Soạn sẵn kịch bản nói tiếng Anh 2–3 phút cho bài Pitching.
* **Đầu ra:** Bản web hoàn thiện 100%, kịch bản Pitching và kịch bản họp nhóm.

---

### Session 6: Ghi hình, Pitching & Nộp toàn bộ dự án (TỔNG 20 ĐIỂM)
* **Mục tiêu:** Nộp đầy đủ các mục để lấy trọn vẹn điểm số.
* **Công việc:**
  1. **Quay video họp nhóm Daily Scrum tiếng Anh (5.0đ):** Cả nhóm họp Zoom/Teams (nói tiếng Anh theo mẫu sách trang 89-95), share màn hình Trello.
  2. **Pitching sản phẩm 2-3 phút (2.0đ):** Thuyết trình trực tiếp trên lớp hoặc nộp video pitch.
  3. **Nộp link sản phẩm dùng được (5.0đ):** Link GitHub Pages hoặc link file chạy thực tế.
  4. **Viết nhật ký phản tư PRJ cá nhân (3.0đ):** Mỗi bạn tự điền 1 bản theo mẫu vào sheet lớp.
  5. **Nộp đúng hạn (0.5đ):** Trưởng nhóm kiểm tra đủ tất cả link trước giờ G.
* **Đầu ra:** Nộp đủ 5 link và hoàn thành đồ án xuất sắc.
