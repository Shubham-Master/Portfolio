import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health",
  description: "Health endpoint",
  robots: {
    index: false,
    follow: false,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
