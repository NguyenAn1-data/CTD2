# KẾ HOẠCH CHI TIẾT 6 PHIÊN (DETAILED 6-SESSION AGILE PLAN)
## Dự Án: AI Campus FAQ — Enterprise Data-Driven Decision Making Chatbot
**Môn học / Đồ án:** Quản lý dự án & Phát triển ứng dụng thông minh  
**Mục tiêu:** Xây dựng chatbot FAQ tiếng Anh chuyên sâu về Data-Driven Decision Making (DDDM) cho doanh nghiệp, chuẩn phương pháp Agile/Scrum.

---

### BẢNG MA TRẬN PHÂN CÔNG VAI TRÒ (RAC MATRIX)

| Mã vai trò | Chức danh (Role) | Thành viên phụ trách | Trách nhiệm chính |
| :--- | :--- | :--- | :--- |
| **M1** | Scrum Master / Project Lead | Nguyễn Văn A | Quản lý tiến độ Trello, điều phối họp Daily Scrum, dựng kịch bản Pitching |
| **M2** | Frontend Lead Developer | Trần Thị B | Cấu trúc HTML5 ngữ nghĩa, thiết kế Design System CSS, Responsive |
| **M3** | AI & Data Content Specialist | Lê Văn C | Soạn 10 FAQ C-Suite, chuẩn hóa thuật toán tìm kiếm từ khóa và tags |
| **M4** | Interaction & Speech Engineer | Phạm Thị D | Lập trình Streaming Typewriter, tích hợp Web Speech API, Export Markdown |
| **M5** | QA Engineer & Media Lead | Hoàng Văn E | Kiểm thử Cross-browser, quay & dựng Video Daily Scrum, thiết kế Slide Pitch |

---

## CHI TIẾT KẾ HOẠCH TỪNG PHIÊN (SESSION 1 ĐẾN SESSION 6)

```
[Session 1] Inception & Scope       --> Định hình chủ đề, chọn công cụ AI & lập repo
[Session 2] Agile Planning (NỘP)   --> WBS, Trello Kanban, phân công 5 thành viên (1.5đ)
[Session 3] Data & UI/UX Design    --> 10 FAQ C-Suite, Wireframe & Prototype Glassmorphism
[Session 4] Core Development       --> Code HTML/CSS/JS, Search Engine, Streaming Typewriter
[Session 5] QA & Speech Features   --> Web Speech API, Cross-browser test, Slide Pitching
[Session 6] Final Delivery (NỘP)   --> Video Daily Scrum (5đ), Pitch (2đ), Product (5đ), PRJ (3đ)
```

---

### 🟢 SESSION 1: PROJECT INCEPTION, PROBLEM FRAMING & AI SETUP
* **Mục tiêu phiên (Sprint Goal):** Thống nhất bài toán DDDM trong doanh nghiệp, xác định tập người dùng mục tiêu, thiết lập môi trường làm việc và các công cụ AI trợ giúp.
* **Thời gian thực hiện:** Tuần 1 (3 ngày làm việc nhóm + 2 phiên làm việc độc lập).

#### 1. Các hoạt động cụ thể (Task Breakdown):
* **Task 1.1:** Họp Brainstorming định hình phạm vi: Chọn chủ đề *"Enterprise Data-Driven Decision Making"* với 5 trụ cột: Strategy, Telemetry, Prescriptive AI, Governance/HITL, Financial ROI.
* **Task 1.2:** Nghiên cứu người dùng mục tiêu (Persona): C-Suite (CEO, CFO, CDO), Giám đốc Khối Phân tích Dữ liệu (Head of Analytics), và Quản lý vận hành.
* **Task 1.3:** Khởi tạo kho lưu trữ GitHub và cấu trúc thư mục mã nguồn chuẩn (`index.html`, `style.css`, `faq-data.js`, `app.js`).
* **Task 1.4:** Thiết lập tài khoản và chuẩn bị Prompt Framework cho công cụ AI hỗ trợ (Google Gemini, Claude, Midjourney).

#### 2. Phân công vai trò Session 1:
* **M1 (Lead):** Soạn thảo Project Charter, chủ trì cuộc họp khởi động (Kick-off Meeting).
* **M2 (Frontend):** Khởi tạo khung file dự án trên Git, cấu hình VS Code.
* **M3 (Data):** Khảo sát 15 câu hỏi phổ biến nhất của lãnh đạo doanh nghiệp về DDDM để chọn ra 10 câu tinh hoa.
* **M4 (Interaction):** Nghiên cứu các thư viện mã nguồn mở và Web APIs (Web Speech API, Clipboard API).
* **M5 (QA & Media):** Tạo thư mục lưu trữ media trên Google Drive, thiết lập template ghi chép biên bản cuộc họp.

#### 3. Đầu ra phiên 1 (Deliverables):
* Tệp Project Charter (Mục tiêu, Phạm vi, Ranh giới dự án).
* Bảng khảo sát 3 chân dung khách hàng mục tiêu (User Personas).
* GitHub Repository được khởi tạo với file README.md ban đầu.

---

### 🟢 SESSION 2: AGILE ARCHITECTURE, KANBAN SETUP & DETAILED PLANNING
> ⚠️ **MILESTONE QUAN TRỌNG: NỘP BẢN KẾ HOẠCH CHI TIẾT TẠI CỘT B (1.5 ĐIỂM)**

* **Mục tiêu phiên (Sprint Goal):** Hoàn thiện bản kế hoạch chi tiết 6 phiên, thiết lập bảng Trello Kanban, phân rã User Stories và nộp link kế hoạch đúng hạn.
* **Thời gian thực hiện:** Tuần 2.

#### 1. Các hoạt động cụ thể (Task Breakdown):
* **Task 2.1:** Phân rã cấu trúc công việc (Work Breakdown Structure - WBS) từ cấp độ Epic đến User Story và Task cụ thể.
* **Task 2.2:** Viết 10 User Stories kèm tiêu chí nghiệm thu (Acceptance Criteria - AC) theo chuẩn Agile:
  * *Ví dụ:* `"As a CFO, I want to query the 1-year ROI and working capital formulas so that I can justify the budget to the board."`
* **Task 2.3:** Thiết lập bảng Trello Kanban chuẩn với 5 danh sách: *Product Backlog, Sprint Backlog, In Progress, Code Review/QA, Done*.
* **Task 2.4:** Gán nhãn (Labels), Deadline, Checklist và thành viên chịu trách nhiệm trực tiếp cho từng Card trên Trello.
* **Task 2.5:** Đóng gói đường link và tài liệu Word/PDF để chèn vào cột B của bảng điểm lớp.

#### 2. Phân công vai trò Session 2:
* **M1 (Lead):** Tổng hợp tài liệu `Detailed_Project_Plan.pdf`, kiểm tra link Trello public và nộp bài.
* **M2 (Frontend):** Ước lượng thời gian (Story Points) cho các task giao diện và responsive.
* **M3 (Data):** Ước lượng khối lượng công việc cho bộ dữ liệu 10 FAQ và thuật toán lọc category.
* **M4 (Interaction):** Lập timeline cho tính năng streaming giả lập và xử lý DOM.
* **M5 (QA):** Xây dựng Ma trận kiểm thử (Test Matrix) dự kiến cho Session 5.

#### 3. Đầu ra phiên 2 (Deliverables):
* Link bảng Trello Kanban hoạt động đầy đủ với ít nhất 15 thẻ công việc.
* Văn bản kế hoạch chi tiết 6 phiên kèm RACI Matrix đã nộp trên hệ thống.

---

### 🟢 SESSION 3: UI/UX WIREFRAMING, DATA ARCHITECTURE & 10 FAQ CURATION
* **Mục tiêu phiên (Sprint Goal):** Hoàn thành Wireframe giao diện Dark Mode AI-centric và biên soạn hoàn chỉnh 10 bộ câu hỏi - câu trả lời chất lượng cao.
* **Thời gian thực hiện:** Tuần 3.

#### 1. Các hoạt động cụ thể (Task Breakdown):
* **Task 3.1:** Phác thảo Wireframe trên Figma/giấy: Bố cục 2 cột (Sidebar danh mục bên trái + Main Chat Arena bên phải).
* **Task 3.2:** Xác định bảng màu và phong cách thị giác: Deep space dark theme (`#090d16`), Glassmorphism blur 16px, viền cyan/indigo glow.
* **Task 3.3:** Biên soạn chi tiết 10 chuyên đề FAQ bằng tiếng Anh (sử dụng Claude/Gemini hỗ trợ chuẩn hóa văn phong học thuật và doanh nghiệp):
  * Q1: DDDM Fundamentals & Leadership Empowerment
  * Q2: Traditional BI vs. Decision Intelligence Paradigm
  * Q3: Real-Time Event Streaming Telemetry (<180ms)
  * Q4: Reconciling Legacy ERP & Data Silos
  * Q5: Transitioning Predictive to Prescriptive AI (MILP)
  * Q6: Zero-Trust Security, GDPR/HIPAA/SOC2 Governance
  * Q7: Explainable AI (XAI) & SHAP Attributions
  * Q8: 4-Tier Human-in-the-Loop (HITL) Autonomy Matrix
  * Q9: Benchmarking 1-Year Financial ROI (312% Avg)
  * Q10: 12-Week Modular Enterprise Deployment Blueprint
* **Task 3.4:** Trích xuất các thẻ chỉ số cốt lõi (*Key Metrics Strip*) cho từng câu hỏi (vd: Latency, ROI %, Precision).
* **Task 3.5:** Gán bộ từ khóa tìm kiếm (Tags) và liên kết câu hỏi gợi ý tiếp theo (*Follow-up Chips*).

#### 2. Phân công vai trò Session 3:
* **M1 (Lead):** Review chất lượng nội dung 10 FAQ, đảm bảo chuẩn thuật ngữ kinh tế và công nghệ.
* **M2 (Frontend):** Thiết kế bản mẫu giao diện các thành phần (Header, Sidebar, Message Bubble, Quick Chips).
* **M3 (Data):** Hoàn thành cấu trúc file mã nguồn `faq-data.js` chứa mảng `FAQ_DATA` và `FAQ_CATEGORIES`.
* **M4 (Interaction):** Viết bản thảo hàm tính điểm liên quan từ khóa `searchFAQ(query)`.
* **M5 (QA):** Rà soát lỗi chính tả tiếng Anh và tính nhất quán của dữ liệu.

#### 3. Đầu ra phiên 3 (Deliverables):
* Bản mẫu thiết kế UI/UX (Figma link hoặc ảnh phác thảo bố cục).
* File mã nguồn dữ liệu [faq-data.js](file:///d:/CTD2/faq-data.js) hoàn chỉnh 10 câu hỏi kèm tags và chỉ số.

---

### 🟢 SESSION 4: CORE DEVELOPMENT — FRONTEND & INTELLIGENCE MATCHING
* **Mục tiêu phiên (Sprint Goal):** Lập trình toàn bộ mã nguồn ứng dụng, kết nối bộ dữ liệu FAQ với giao diện người dùng và thuật toán tìm kiếm thông minh.
* **Thời gian thực hiện:** Tuần 4.

#### 1. Các hoạt động cụ thể (Task Breakdown):
* **Task 4.1:** Xây dựng khung HTML5 ngữ nghĩa tại `index.html`: Header, Sidebar danh mục, Welcome Hero với 4 thẻ gợi ý, Chat viewport, Form nhập liệu.
* **Task 4.2:** Viết hệ thống CSS Design System hiện đại tại `style.css`: CSS Custom Properties (Variables), Typography (`Plus Jakarta Sans`, `JetBrains Mono`), hiệu ứng phát sáng neon và hoạt họa mở mượt mà.
* **Task 4.3:** Lập trình logic điều khiển trung tâm tại `app.js`:
  * Cơ chế Render danh sách FAQ theo Category Filter.
  * Bộ lọc tìm kiếm trực tiếp tức thì (*Live Search Filtering* trên Sidebar).
  * Hàm tính điểm tương đồng (`searchFAQ`) khớp câu hỏi tự do của người dùng với 10 chủ đề.
  * Kịch bản xử lý câu hỏi ngoài phạm vi (Fallback Response) với gợi ý liên quan.
* **Task 4.4:** Lập trình hiệu ứng Streaming Typewriter giả lập: Trợ lý AI hiển thị khối phân tích kèm con trỏ nhấp nháy chân thực.
* **Task 4.5:** Bộ phân giải Markdown (`renderMarkdown`): Hỗ trợ hiển thị tiêu đề, danh sách, khối trích dẫn, bảng so sánh BI vs DI, công thức toán học ROI và khối mã nguồn.

#### 2. Phân công vai trò Session 4:
* **M1 (Lead):** Tổ chức cuộc họp Daily Stand-up giữa tuần, giải quyết các vướng mắc kỹ thuật.
* **M2 (Frontend):** Đảm nhiệm chính file `index.html` và `style.css`.
* **M3 (Data):** Tinh chỉnh thuật toán xếp hạng điểm tìm kiếm trong `faq-data.js`.
* **M4 (Interaction):** Đảm nhiệm chính file `app.js` và logic typewriter streaming.
* **M5 (QA):** Chạy thử nghiệm các ca gõ phím khác nhau, ghi lại log lỗi giao diện.

#### 3. Đầu ra phiên 4 (Deliverables):
* Phiên bản Alpha hoạt động ổn định trên máy cục bộ ([file:///d:/CTD2/index.html](file:///d:/CTD2/index.html)).
* Mã nguồn sạch, không lỗi Console trên trình duyệt.

---

### 🟢 SESSION 5: ADVANCED FEATURES, CROSS-PLATFORM QA & VOICE API
* **Mục tiêu phiên (Sprint Goal):** Tích hợp các tính năng nâng cao (Đọc bằng giọng nói, Xuất biên bản, Đổi Theme), tối ưu responsive và chuẩn bị kịch bản truyền thông.
* **Thời gian thực hiện:** Tuần 5.

#### 1. Các hoạt động cụ thể (Task Breakdown):
* **Task 5.1:** Tích hợp Web Speech API (`SpeechSynthesis`): Nút **Read Aloud** đọc to câu trả lời bằng giọng đọc AI tiếng Anh, có thể bật/tắt linh hoạt.
* **Task 5.2:** Tích hợp nút **Copy to Clipboard** với hiệu ứng thông báo "Copied!" tức thì.
* **Task 5.3:** Tích hợp bộ chuyển đổi chế độ giao diện **Dark Mode / Light Mode** lưu trạng thái vào `localStorage`.
* **Task 5.4:** Tính năng **Export Transcript**: Cho phép xuất toàn bộ nội dung phiên hỏi đáp ra file Markdown (`.md`) để làm tài liệu báo cáo.
* **Task 5.5:** Tối ưu hóa giao diện di động (Mobile Responsive): Tích hợp thanh trượt Drawer Sidebar và nút bấm cảm ứng.
* **Task 5.6:** Kiểm thử tương thích trên nhiều nền tảng (*Cross-Browser Testing*): Chrome, Microsoft Edge, Firefox, Safari.
* **Task 5.7:** Soạn thảo kịch bản Pitching tiếng Anh (2–3 phút) và phân vai cho video Daily Scrum.

#### 2. Phân công vai trò Session 5:
* **M1 (Lead):** Soạn Slide thuyết trình 5 trang, hướng dẫn thành viên luyện phát âm tiếng Anh.
* **M2 (Frontend):** Sửa các lỗi CSS responsive trên màn hình dưới 992px và 480px.
* **M3 (Data):** Kiểm tra lại tính chính xác về mặt số liệu trong 10 câu trả lời.
* **M4 (Interaction):** Tinh chỉnh tốc độ đọc giọng nói (`rate = 1.05`) và xử lý ngắt kết nối âm thanh khi reset chat.
* **M5 (QA & Media):** Lập bảng kết quả kiểm thử (Test Report), chuẩn bị thiết bị quay video (Webcam, Mic, ánh sáng).

#### 3. Đầu ra phiên 5 (Deliverables):
* Phiên bản Beta Release hoàn chỉnh 100% tính năng.
* Slide Deck thuyết trình 5 slide chuẩn tiếng Anh.
* Kịch bản thoại chi tiết cho video Daily Scrum.

---

### 🟢 SESSION 6: FINAL SUBMISSION, VIDEO PRODUCTION & REFLECTIVE JOURNAL
> ⚠️ **MILESTONE TỐI THƯỢNG: NỘP ĐẦY ĐỦ 5 ĐẦU MỤC ĐÁNH GIÁ (TỔNG 20 ĐIỂM)**

* **Mục tiêu phiên (Sprint Goal):** Quay video Daily Scrum tiếng Anh, quay/thuyết trình Video Pitch 2-3 phút, đóng gói link sản phẩm, hoàn tất nhật ký phản tư PRJ cá nhân và nộp bài trước hạn chót.
* **Thời gian thực hiện:** Tuần 6 (Đóng gói và nộp bài trước giờ G ít nhất 24 giờ).

#### 1. Các hoạt động cụ thể (Task Breakdown):
* **Task 6.1: Quay Video Họp Daily Scrum bằng tiếng Anh (Tiêu chí 7 - 5.0 điểm):**
  * Ghi hình cuộc họp qua Zoom/MS Teams với đầy đủ 5 thành viên bật camera.
  * Thực hiện theo cấu trúc sách trang 89–95: *Yesterday, Today, Impediments*.
  * Xuất video chất lượng 1080p, tải lên Google Drive / YouTube (chế độ Unlisted) và lấy đường link.
* **Task 6.2: Thực hiện Pitching tiếng Anh 2–3 phút (Tiêu chí 5 - 2.0 điểm):**
  * Thuyết trình trực tiếp trên lớp bằng Slide hoặc quay video demo lồng tiếng chuẩn.
  * Bám sát khung thời lượng: [0:00-0:30] Vấn đề -> [0:30-1:15] Giải pháp -> [1:15-2:00] Demo -> [2:00-2:30] Giá trị ROI.
* **Task 6.3: Đóng gói Sản phẩm Dự án Dùng Được (Tiêu chí 6 - 5.0 điểm):**
  * Kiểm tra đường link sản phẩm ([file:///d:/CTD2/index.html](file:///d:/CTD2/index.html) hoặc link deploy web).
  * Chuẩn bị sẵn file `README.md` hướng dẫn cách chạy ứng dụng 2 bước.
* **Task 6.4: Viết Nhật Ký Phản Tư Cá Nhân PRJ (Tiêu chí 8 - 3.0 điểm):**
  * Từng thành viên trong 5 người tự điền nhật ký phản tư theo mẫu Gibbs' Cycle vào từng Tab riêng trên Google Sheet `[Sheet: PRJ]`.
* **Task 6.5: Tổng Kiểm Tra Bảng Điểm (Final Submission Audit):**
  * Leader rà soát toàn bộ các cột link: Link AI tools, Link Kế hoạch chi tiết, Link Trello, Link Pitch, Link Sản phẩm, Link Video họp, Link PRJ.
  * Cam kết nộp đúng hạn (Tiêu chí 3 - 0.5 điểm).

#### 2. Phân công vai trò Session 6:
* **M1 (Lead):** Điều phối quay video họp, phụ trách thuyết trình chính bài Pitch 2.5 phút, kiểm tra việc nộp bài của cả nhóm.
* **M2 (Frontend):** Đóng gói mã nguồn và kiểm tra live demo trước giờ thuyết trình.
* **M3 (Data):** Tham gia trả lời phần Q&A kỹ thuật của Giảng viên về mô hình DDDM và thuật toán.
* **M4 (Interaction):** Hỗ trợ kỹ thuật trình chiếu, chạy thử âm thanh demo Web Speech.
* **M5 (QA & Media):** Biên tập video họp nhóm tiếng Anh, chèn phụ đề/title, upload video và cung cấp link cho Leader.
* **Tất cả thành viên (M1 -> M5):** Tự viết và nộp bài PRJ cá nhân của mình.

#### 3. Đầu ra phiên 6 (Deliverables):
* Link Video Daily Scrum tiếng Anh (YouTube / Google Drive).
* Link Slide Deck / Video Pitching tiếng Anh 2–3 phút.
* Link sản phẩm chạy thực tế 100% không lỗi.
* 5 bản Nhật ký phản tư cá nhân PRJ trên Google Sheet.
* Biên bản nghiệm thu dự án đạt điểm tối đa (20/20 điểm).

---

## 🛡️ MA TRẬN QUẢN TRỊ RỦI RO (RISK MANAGEMENT MATRIX)

| Rủi ro tiềm ẩn (Risk) | Khả năng | Tác động | Giải pháp phòng ngừa & khắc phục (Mitigation) |
| :--- | :---: | :---: | :--- |
| **1. Trễ hạn nộp bài Session 2 hoặc Session 6** | Thấp | Rất cao | Thiết lập Internal Deadline sớm hơn hạn chót của trường 48h; gán nhắc việc tự động trên Trello. |
| **2. Thành viên phát âm tiếng Anh chưa chuẩn khi họp/pitch** | Trung bình | Trung bình | Soạn sẵn Script nguyên văn (verbatim), luyện tập thử 2 lần trước khi bấm máy ghi hình chính thức. |
| **3. Trình duyệt cũ không hỗ trợ Web Speech API** | Thấp | Thấp | Code hàm `if (!('speechSynthesis' in window))` cảnh báo người dùng nhẹ nhàng và fallback hiển thị text. |
| **4. Lỗi định dạng Markdown khi người dùng hỏi tự do** | Trung bình | Trung bình | Viết parser Markdown tùy chỉnh an toàn có hàm bọc `<pre><code>`, `<p>`, `<table>` và loại trừ ký tự độc hại XSS. |
| **5. Mâu thuẫn trong phân chia công việc** | Thấp | Trung bình | Áp dụng nguyên tắc Scrum minh bạch: Mọi đầu việc hiển thị công khai trên Trello Kanban; họp gỡ vướng mắc mỗi tuần. |
