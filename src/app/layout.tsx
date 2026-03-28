import type { Metadata } from "next";
import { me, siteMetadata } from "@/lib/portfolio-data";
import shubhamPhoto from "@/images/shubham-photo.jpeg";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: me.name }],
  creator: me.name,
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: me.name,
    images: [
      {
        url: shubhamPhoto.src,
        alt: `${me.name} avatar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [shubhamPhoto.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-surface text-on-surface font-body">{children}</body>
    </html>
  );
}
