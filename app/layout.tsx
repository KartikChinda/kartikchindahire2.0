import type { Metadata } from "next";
import "./globals.css";
import SmoothScrolling from "./libs/SmoothScrolling";

export const metadata: Metadata = {
  title: "Kartik Chinda",
  description: "This is the portfolio for Kartik Chinda, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* <SmoothScrolling>{children}</SmoothScrolling> */}
        {children}
      </body>
    </html>
  );
}
