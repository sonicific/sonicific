import type { JobPosting } from "../types";

export const jobPostings: JobPosting[] = [
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    department: "Phòng Kĩ thuật",
    location: "Chi nhánh 1 · TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    deadline: "2026-09-20",
    excerpt:
      "Phát triển dashboard và công cụ nội bộ có giao diện nhanh, rõ và dễ sử dụng.",
    salary: "18–28 triệu",
    featured: true,
    responsibilities: [
      "Xây dựng và cải tiến giao diện cho dashboard, workflow nội bộ.",
      "Phối hợp với đội vận hành để chuyển yêu cầu thực tế thành trải nghiệm đơn giản.",
      "Đảm bảo chất lượng responsive, accessibility và hiệu năng giao diện.",
    ],
    requirements: [
      "Có kinh nghiệm với React, TypeScript và hệ thống component.",
      "Hiểu cách tổ chức state, gọi API và xử lý dữ liệu trên giao diện.",
      "Chủ động trao đổi, thích giải quyết vấn đề vận hành thực tế.",
    ],
    benefits: [
      "Thưởng theo hiệu quả và review lương định kỳ.",
      "Thiết bị làm việc, đồ uống và khu vực ăn trưa tại văn phòng.",
      "Được thử nghiệm AI và automation trong sản phẩm nội bộ.",
    ],
  },
  {
    id: "content-creator-short-video",
    title: "Content Creator · Short Video",
    department: "Phòng Content",
    location: "Chi nhánh 2 · TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    deadline: "2026-09-15",
    excerpt:
      "Lên ý tưởng, viết kịch bản và phối hợp sản xuất nội dung ngắn đa nền tảng.",
    salary: "12–18 triệu",
    featured: true,
    responsibilities: [
      "Nghiên cứu xu hướng và phát triển ý tưởng nội dung theo từng kênh.",
      "Viết kịch bản ngắn, brief hình ảnh và phối hợp với editor.",
      "Theo dõi hiệu suất để cải thiện hook, nhịp và thông điệp.",
    ],
    requirements: [
      "Có portfolio nội dung TikTok, Reels hoặc YouTube Shorts.",
      "Viết rõ, có tư duy hình ảnh và nhạy với xu hướng.",
      "Sẵn sàng thử nghiệm và học từ dữ liệu.",
    ],
    benefits: [
      "Ngân sách thử nghiệm nội dung theo tháng.",
      "Lộ trình phát triển thành Content Lead.",
      "Môi trường phối hợp trực tiếp với Commerce và Livestream.",
    ],
  },
  {
    id: "ecommerce-operations-executive",
    title: "E-commerce Operations Executive",
    department: "Phòng E-commerce",
    location: "Chi nhánh 1 · TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    deadline: "2026-09-25",
    excerpt:
      "Vận hành listing, đơn hàng và trải nghiệm khách hàng trên Shopify, Etsy, TikTok Shop.",
    salary: "13–20 triệu",
    responsibilities: [
      "Chuẩn hóa và cập nhật listing theo checklist chất lượng.",
      "Theo dõi đơn hàng, phối hợp xử lý vấn đề và chăm sóc khách hàng.",
      "Tổng hợp dữ liệu vận hành và đề xuất cải tiến quy trình.",
    ],
    requirements: [
      "Tỉ mỉ, có tư duy dữ liệu và khả năng quản lý nhiều đầu việc.",
      "Đọc hiểu tiếng Anh tốt; ưu tiên kinh nghiệm E-commerce.",
      "Sử dụng tốt bảng tính và công cụ quản lý công việc.",
    ],
    benefits: [
      "Được đào tạo hệ thống vận hành đa nền tảng.",
      "Thưởng theo kết quả của nhóm.",
      "Cơ hội tham gia xây dựng automation cho công việc hằng ngày.",
    ],
  },
  {
    id: "livestream-host",
    title: "Livestream Host",
    department: "Phòng Livestream & Social",
    location: "Chi nhánh 2 · TP. Hồ Chí Minh",
    type: "Theo ca",
    deadline: "2026-09-12",
    excerpt:
      "Dẫn dắt phiên live thương mại, tương tác với người xem và phối hợp cùng đội vận hành.",
    salary: "Theo năng lực + KPI",
    responsibilities: [
      "Chuẩn bị nội dung cùng biên tập và tham gia rehearsal trước phiên live.",
      "Giới thiệu sản phẩm tự nhiên, giữ nhịp và xử lý tương tác trực tiếp.",
      "Cùng đội ngũ xem lại dữ liệu sau phiên để cải thiện hiệu quả.",
    ],
    requirements: [
      "Tự tin trước máy quay, giọng nói rõ và năng lượng tích cực.",
      "Có khả năng ứng biến và ghi nhớ thông tin sản phẩm.",
      "Ưu tiên ứng viên từng livestream bán hàng hoặc sáng tạo nội dung.",
    ],
    benefits: [
      "Studio và thiết bị livestream đầy đủ.",
      "Được coaching kịch bản, giọng nói và kỹ năng chuyển đổi.",
      "Lịch làm việc linh hoạt theo ca đã thống nhất.",
    ],
  },
];

export const jobDepartments = [
  "Tất cả",
  ...Array.from(new Set(jobPostings.map((job) => job.department))),
];
