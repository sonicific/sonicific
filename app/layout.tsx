import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sonic Group",
  description:
    "Sonic Group kết nối media, commerce và automation thành một hệ vận hành gọn, nhanh, có dữ liệu.",
  metadataBase: new URL("https://sonicific.com"),
  openGraph: {
    title: "Sonic Group",
    description:
      "Sonic Group kết nối media, commerce và automation thành một hệ vận hành gọn, nhanh, có dữ liệu.",
    type: "website",
    url: "https://sonicific.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
