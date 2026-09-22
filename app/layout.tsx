import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sonicgroup.site"),
  title: {
    default: "Sonic Group | Media, E-commerce & Automation",
    template: "%s | Sonic Group",
  },
  description:
    "Sonic Group là doanh nghiệp chuyên về media content, commerce, automation và vận hành thương mại tại TP.HCM, giúp xây dựng hệ thống sáng tạo và tăng trưởng hiệu quả.",
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
    title: "Sonic Group | Media, E-commerce & Automation",
    description:
      "Sonic Group kết nối sáng tạo nội dung, thương mại điện tử và công nghệ để xây dựng một hệ vận hành tăng trưởng bền vững tại TP.HCM.",
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
    title: "Sonic Group | Media, E-commerce & Automation",
    description:
      "Sonic Group kết nối sáng tạo nội dung, thương mại điện tử và công nghệ để xây dựng một hệ vận hành tăng trưởng bền vững tại TP.HCM.",
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
    "Sonic Group là đơn vị chuyên về media content, e-commerce, commerce operations và automation tại TP.HCM.",
  email: "hi@sonicgroup.site",
  telephone: "+84888000219",
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
    <html lang="vi">
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
