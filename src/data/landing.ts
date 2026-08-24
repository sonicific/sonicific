import {
  BadgeCheck,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  Cpu,
  Gauge,
  Layers3,
  LineChart,
  Network,
  Rocket,
  ShieldCheck,
  Target,
  WalletCards,
  Workflow,
} from "lucide-react";

export const proofMetrics = [
  {
    value: "41",
    label: "hồ sơ nhân sự mẫu",
    detail: "Dữ liệu đội ngũ lưu bằng JSON, dễ mở rộng lên 30 - 80 người.",
    icon: BadgeCheck,
  },
  {
    value: "7",
    label: "trưởng phòng chuyên trách",
    detail: "Mỗi mảng có owner rõ ràng để giảm trễ khi phối hợp.",
    icon: Target,
  },
  {
    value: "2",
    label: "chi nhánh vận hành",
    detail: "Hai điểm làm việc tại TP. Hồ Chí Minh cho team tăng trưởng.",
    icon: Building2,
  },
  {
    value: "6",
    label: "ngày hoạt động mỗi tuần",
    detail: "Nhịp vận hành 8:00 - 17:30 từ thứ 2 đến thứ 7.",
    icon: CalendarClock,
  },
];

export const channelStack = [
  "TikTok Shop",
  "Shopify",
  "Etsy",
  "TikTok Beta",
  "Facebook",
  "Twitter",
  "Hotmail",
  "Sock proxy",
  "Phone number",
  "AI tools",
];

export const painPoints = [
  {
    title: "Quy trình rời rạc",
    description:
      "Content, shop, live, affiliate và nguyên liệu MMO dễ bị tách thành nhiều file, nhiều người giữ dữ liệu riêng.",
    icon: Layers3,
  },
  {
    title: "Tốn thao tác lặp",
    description:
      "Nhiều bước kiểm tra tài khoản, nhập liệu, phân loại và đối soát vẫn cần con người làm thủ công.",
    icon: Workflow,
  },
  {
    title: "Khó nhìn thấy hiệu suất",
    description:
      "Khi dữ liệu nằm ở nhiều kênh, đội quản lý khó biết điểm nghẽn nằm ở content, commerce hay tài nguyên.",
    icon: Gauge,
  },
];

export const solutions = [
  {
    title: "Dashboard theo mảng",
    description:
      "Chuẩn hóa dữ liệu vận hành thành các bảng theo dõi cho content, e-commerce, live, banking và nguyên liệu MMO.",
    icon: LineChart,
  },
  {
    title: "Automation + AI workflow",
    description:
      "Tự động hóa thao tác lặp, cảnh báo bất thường và dùng AI để phân loại, gợi ý, tổng hợp dữ liệu nhanh hơn.",
    icon: Bot,
  },
  {
    title: "Owner rõ, nhịp chạy gọn",
    description:
      "Cơ cấu trưởng phòng giúp mỗi luồng có người chịu trách nhiệm, giảm vòng chờ và tăng tốc thử nghiệm.",
    icon: ShieldCheck,
  },
];

export const serviceHighlights = [
  {
    title: "Media Content",
    kicker: "Short video, script, social calendar",
    description:
      "Sản xuất nội dung có nhịp thử nghiệm nhanh, đo hook, retention và tín hiệu chuyển đổi.",
    icon: Target,
  },
  {
    title: "MMO & Social Ops",
    kicker: "TikTok, Facebook, Twitter, tài nguyên",
    description:
      "Vận hành tài khoản, nguyên liệu MMO và dữ liệu trạng thái theo checklist có owner.",
    icon: Network,
  },
  {
    title: "E-commerce Engine",
    kicker: "Shopify, Etsy, TikTok Shop",
    description:
      "Research sản phẩm, listing, chuẩn bị đơn, chăm sóc khách và phối hợp livestream commerce.",
    icon: WalletCards,
  },
  {
    title: "Automation & AI Tools",
    kicker: "Dashboard, bot, workflow nội bộ",
    description:
      "Chuyển thao tác lặp thành tool, cảnh báo, dashboard và trợ lý AI cho từng phòng ban.",
    icon: Bot,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Bắt tín hiệu",
    description:
      "Thu thập mục tiêu, kênh, tài nguyên, rủi ro và dữ liệu sẵn có trước khi chạy.",
    icon: Target,
  },
  {
    step: "02",
    title: "Thiết kế luồng",
    description:
      "Chia owner, tạo checklist, định nghĩa chỉ số và chuẩn hóa dữ liệu đầu vào.",
    icon: Workflow,
  },
  {
    step: "03",
    title: "Sản xuất & vận hành",
    description:
      "Content, commerce, live, sales và kỹ thuật chạy cùng một nhịp thử nghiệm.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Tự động hóa",
    description:
      "Đưa thao tác lặp vào tool, dashboard hoặc AI assistant để giảm chi phí vận hành.",
    icon: Cpu,
  },
  {
    step: "05",
    title: "Đo, sửa, mở rộng",
    description:
      "Theo dõi kết quả, xử lý điểm nghẽn và nhân rộng luồng tốt sang kênh tiếp theo.",
    icon: CheckCircle2,
  },
];

export const caseStudies = [
  {
    title: "Livestream Commerce Lab",
    category: "Livestream & TikTok Shop",
    image: "/assets/activities/livestream-training.png",
    summary:
      "Chuẩn hóa một phiên live từ kịch bản, setup, host, sản phẩm đến báo cáo sau phiên.",
    results: [
      "Run of show rõ hơn",
      "Rút ngắn thời gian chuẩn bị",
      "Dễ đọc retention sau live",
    ],
  },
  {
    title: "E-commerce Operations Day",
    category: "Shopify, Etsy, TikTok Shop",
    image: "/assets/activities/ecommerce-ops.png",
    summary:
      "Tách luồng research, listing, chuẩn bị đơn và chăm sóc khách để đội commerce dễ mở rộng.",
    results: [
      "Listing đồng nhất",
      "Checklist đơn hàng rõ",
      "Tăng tốc thử nghiệm sản phẩm",
    ],
  },
  {
    title: "Automation & AI Workshop",
    category: "Tool nội bộ",
    image: "/assets/activities/automation-ai.png",
    summary:
      "Biến các thao tác kiểm tra, nhập liệu và phân loại thành workflow có dashboard theo dõi.",
    results: [
      "Giảm thao tác lặp",
      "Phân quyền dữ liệu tốt hơn",
      "AI hỗ trợ tổng hợp nhanh",
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Đa kênh nhưng cùng một nhịp",
    description:
      "Sonic không tách content, commerce, live, affiliate và tool thành các đảo riêng.",
    icon: Network,
  },
  {
    title: "Thực chiến vận hành",
    description:
      "Mỗi đề xuất đều đi kèm checklist, owner, dữ liệu theo dõi và vòng cải tiến.",
    icon: Gauge,
  },
  {
    title: "Tư duy automation-first",
    description:
      "Những thao tác lặp được ưu tiên chuyển thành tool, dashboard hoặc AI workflow.",
    icon: Bot,
  },
  {
    title: "Minh bạch nguồn lực",
    description:
      "Nguyên liệu MMO, banking, affiliate và tài khoản xã hội được theo dõi theo trạng thái.",
    icon: ShieldCheck,
  },
];

export const testimonials = [
  {
    quote:
      "Sonic giúp tôi thấy rõ tiến độ của từng phòng ban. Khi biết ai đang làm gì, tôi có thể phối hợp nhanh hơn.",
    name: "Phạm Đức Hùng",
    role: "Giám đốc vận hành",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=Ph%E1%BA%A1m%20D%E1%BB%A5c%20H%C3%B9ng&backgroundType=gradientLinear",
    tone: "teal" as const,
  },
  {
    quote:
      "Sonic giúp các phòng ban phối hợp nhịp nhàng hơn. Mọi người đều biết checklist, owner và dữ liệu trạng thái chung.",
    name: "Phạm Minh Toàn",
    role: "Trưởng phòng Content Media",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=Ph%E1%BA%A1m%20Minh%20To%C3%A0n&backgroundType=gradientLinear",
    tone: "rose" as const,
  },
  {
    quote:
      "Sonic giúp tôi nhìn thấy điểm nghẽn trong vận hành. Khi biết vấn đề nằm ở đâu, tôi có thể tập trung cải thiện đúng chỗ.",
    name: "Trần Hồ Việt",
    role: "Trưởng phòng E-Commerce",
    avatar:
      "https://api.dicebear.com/9.x/personas/svg?seed=Tr%E1%BA%A7n%20H%E1%BB%93%20Vi%E1%BB%87t&backgroundType=gradientLinear",
    tone: "indigo" as const,
  },
];

export const landingFaqs = [
  {
    question: "Sonic Group là công ty MMO production theo nghĩa nào?",
    answer:
      "Sonic tổ chức các đội nội bộ để sản xuất content, vận hành tài khoản xã hội, shop, livestream, affiliate, banking, tài nguyên MMO và tool automation/AI.",
  },
  {
    question: "Các phòng ban phối hợp với nhau ra sao?",
    answer:
      "Các phòng Content, E-commerce, Kinh doanh, Livestream & Social, Affiliate & Banking, Nguyên liệu MMO và Kĩ thuật chạy theo owner, checklist và dữ liệu trạng thái chung.",
  },
  {
    question: "Automation và AI được dùng vào việc gì?",
    answer:
      "Automation và AI được dùng cho các thao tác lặp: kiểm tra dữ liệu, phân loại trạng thái, tổng hợp báo cáo, hỗ trợ content workflow và dashboard vận hành nội bộ.",
  },
  {
    question: "Website này ưu tiên giới thiệu điều gì?",
    answer:
      "Website ưu tiên giới thiệu Sonic như một công ty production: quy mô, cơ cấu, năng lực vận hành, đội ngũ, hoạt động nội bộ và môi trường làm việc.",
  },
  {
    question: "Dữ liệu nhân viên và hoạt động có dễ cập nhật không?",
    answer:
      "Có. Nhân sự được lưu ở employees.json, hoạt động được lưu ở activities.json, giúp chỉnh nội dung mà không cần sửa component giao diện.",
  },
];
