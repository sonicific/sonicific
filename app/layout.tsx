import type { Metadata } from "next";
import "./globals.css";
import { contactEmails } from "@/data/contact";
import { themeInitScript } from "@/lib/theme";

export const metadata: Metadata = {
  metadataBase: new URL("https://sonicgroup.site"),
  title: {
    default: "Sonic Group | Quảng cáo số, E-commerce & Sáng tạo",
    template: "%s | Sonic Group",
  },
  description:
    "Sonic Group kết nối quảng cáo số, thương mại điện tử, nghiên cứu thị trường và sáng tạo nội dung để hỗ trợ tăng trưởng tại TP. Hồ Chí Minh.",
  applicationName: "Sonic Group",
  keywords: [
    "Sonic Group",
    "Sonic",
    "Media Content",
    "E-commerce",
    "Automation",
    "Business Center",
    "TP.HCM",
    "digital marketing",
    "content agency",
    "commerce operations",
    "AI workflow",
  ],
  authors: [{ name: "Sonic Group" }],
  creator: "Sonic Group",
  publisher: "Sonic Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sonic Group | Quảng cáo số, E-commerce & Sáng tạo",
    description:
      "Sonic Group kết nối quảng cáo số, thương mại điện tử, nghiên cứu thị trường và sáng tạo nội dung để hỗ trợ tăng trưởng tại TP. Hồ Chí Minh.",
    url: "https://sonicgroup.site",
    siteName: "Sonic Group",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sonic Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonic Group | Quảng cáo số, E-commerce & Sáng tạo",
    description:
      "Sonic Group kết nối quảng cáo số, thương mại điện tử, nghiên cứu thị trường và sáng tạo nội dung để hỗ trợ tăng trưởng tại TP. Hồ Chí Minh.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/icons/favicon.png",
    shortcut: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sonic Group",
  legalName: "CÔNG TY TNHH SONIC GROUP",
  url: "https://sonicgroup.site",
  logo: "https://sonicgroup.site/icons/light.png",
  image: "https://sonicgroup.site/og.png",
  description:
    "Sonic Group triển khai quảng cáo số, thương mại điện tử, nghiên cứu thị trường và sáng tạo nội dung tại TP. Hồ Chí Minh.",
  email: contactEmails.general,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "business development",
      email: contactEmails.business,
    },
    {
      "@type": "ContactPoint",
      contactType: "recruitment and general inquiries",
      email: contactEmails.general,
    },
  ],
  telephone: "+84326266539",
  sameAs: [
    "https://www.linkedin.com/company/sonicific",
    "https://www.facebook.com/profile.php?id=61593149897575",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "239 Đ. Tôn Thất Tùng, Đông Hòa",
    addressLocality: "Hồ Chí Minh",
    addressCountry: "VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          id="sonic-theme-init"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
