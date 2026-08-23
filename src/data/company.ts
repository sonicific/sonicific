import {
  Bot,
  BriefcaseBusiness,
  Building2,
  Coffee,
  Cpu,
  Facebook,
  GlassWater,
  Globe2,
  HeartHandshake,
  Linkedin,
  Mail,
  MapPin,
  Microwave,
  Music2,
  Network,
  PackageCheck,
  Radio,
  Snowflake,
  Sparkles,
  Store,
  Twitter,
  Utensils,
  Video,
  WalletCards,
} from "lucide-react";

export const company = {
  name: "Sonic Group",
  legalName: "CÔNG TY TNHH SONIC MEDIA",
  taxCode: "0319224501",
  slogan: "Connect - Creative - Grow",
  foundedAt: "20/10/2025",
  openingHours: "8:00 - 17:30, thứ 2 đến thứ 7",
  scale: "30 - 80 nhân sự",
  contactEmail: "hi@sonicgroup.site",
  contactPhone: "0888.000.219",
  socialLocation: "Tôn Thất Tùng, Đông Hòa, TP. Hồ Chí Minh",
  websiteUrl: "https://sonicific.com",
  linkedInUrl: "https://www.linkedin.com/company/sonicific",
  facebookUrl: "https://www.facebook.com/profile.php?id=61593149897575",
  branches: [
    {
      name: "Chi nhánh 1",
      address:
        "568/18/2 Lê Trọng Tấn, Phường Tây Thạnh, Thành phố Hồ Chí Minh, Việt Nam",
    },
    {
      name: "Chi nhánh 2",
      address: "239 Đ. Tôn Thất Tùng, Đông Hòa, Hồ Chí Minh 70000, Việt Nam",
    },
  ],
  organization: [
    "1 Chủ tịch",
    "1 Giám đốc",
    "5 Trưởng bộ phận",
    "1 Kế toán",
    "1 Human & Resources",
  ],
};

export const capabilities = [
  {
    title: "Media Content",
    description:
      "Sản xuất short video, kịch bản social, nội dung thương mại và lịch đăng đa nền tảng.",
    icon: Video,
    tone: "bg-teal-50 text-teal-700 ring-teal-100",
  },
  {
    title: "MMO & Social",
    description:
      "Vận hành TikTok, TikTok Beta, TikTok Lite, Facebook, Twitter và các tài nguyên tăng trưởng.",
    icon: Network,
    tone: "bg-rose-50 text-rose-700 ring-rose-100",
  },
  {
    title: "E-commerce",
    description:
      "Phát triển shop Shopify, Etsy, TikTok Shop, nghiên cứu sản phẩm và tối ưu listing.",
    icon: Store,
    tone: "bg-amber-50 text-amber-700 ring-amber-100",
  },
  {
    title: "Livestream",
    description:
      "Thiết kế phiên live, điều phối host, setup studio và đo hiệu suất tương tác.",
    icon: Radio,
    tone: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  },
  {
    title: "Affiliate & Banking",
    description:
      "Theo dõi affiliate, payout, đối soát banking và dữ liệu thanh toán nội bộ.",
    icon: WalletCards,
    tone: "bg-emerald-50 text-emerald-700 ring-emerald-100",
  },
  {
    title: "Automation & AI",
    description:
      "Xây tool automation, dashboard vận hành, trợ lý AI và workflow giảm thao tác lặp.",
    icon: Bot,
    tone: "bg-violet-50 text-violet-700 ring-violet-100",
  },
  {
    title: "Nguyên liệu MMO",
    description:
      "Quản lý hotmail, sock proxy, phone number và kiểm soát chất lượng tài nguyên.",
    icon: PackageCheck,
    tone: "bg-slate-100 text-slate-700 ring-slate-200",
  },
];

export const departments = [
  {
    name: "E-Comerce",
    summary:
      "Vận hành Shopify, TikTok Shop, listing, research sản phẩm và trải nghiệm khách hàng.",
    icon: Store,
  },
  {
    name: "Content Media",
    summary:
      "Sản xuất video, kịch bản, social content, livestream asset và nhịp đăng đa nền tảng.",
    icon: Video,
  },
  {
    name: "Business Center",
    summary:
      "Phụ trách tăng trưởng, affiliate, marketing, đối tác, vận hành thương mại và báo cáo.",
    icon: BriefcaseBusiness,
  },
  {
    name: "Tech & Research",
    summary:
      "Xây dashboard, automation, AI workflow, phân tích dữ liệu và hạ tầng vận hành.",
    icon: Cpu,
  },
  {
    name: "Human & Resources",
    summary:
      "Chăm sóc con người, tuyển dụng, hành chính, phúc lợi và trải nghiệm làm việc.",
    icon: HeartHandshake,
  },
];

export const amenities = [
  { label: "Tủ lạnh", icon: Snowflake },
  { label: "Nước uống", icon: GlassWater },
  { label: "Trà", icon: Sparkles },
  { label: "Cafe", icon: Coffee },
  { label: "Lò vi sóng", icon: Microwave },
  { label: "Bàn ăn", icon: Utensils },
];

export const socials = [
  { label: "TikTok", href: "https://www.tiktok.com/", icon: Music2 },
  { label: "LinkedIn", href: company.linkedInUrl, icon: Linkedin },
  { label: "Facebook", href: company.facebookUrl, icon: Facebook },
  { label: "Twitter", href: "https://twitter.com/", icon: Twitter },
  { label: "Website", href: company.websiteUrl, icon: Globe2 },
  { label: "Email", href: `mailto:${company.contactEmail}`, icon: Mail },
];

export const faqs = [
  {
    question: "Sonic Group hoạt động trong những mảng nào?",
    answer:
      "Sonic Group tập trung vào video, post-production, advertising, e-commerce, social content, livestream, affiliate, operations và tool automation/AI.",
  },
  {
    question: "Công ty hiện có những phòng ban nào?",
    answer:
      "Hiện Sonic tổ chức theo 5 phòng ban chính: E-Comerce, Content Media, Business Center, Tech & Research và Human & Resources.",
  },
  {
    question: "Công ty làm việc vào thời gian nào?",
    answer:
      "Thời gian làm việc là 8:00 - 17:30 từ thứ 2 đến thứ 7 tại hai chi nhánh ở TP. Hồ Chí Minh.",
  },
  {
    question: "Ứng viên liên hệ tuyển dụng bằng cách nào?",
    answer: `Ứng viên có thể gửi hồ sơ qua email ${company.contactEmail} hoặc liên hệ Zalo/Telegram ${company.contactPhone}.`,
  },
];

export const branchIcon = MapPin;
export const officeIcon = Building2;
