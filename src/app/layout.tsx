import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import { DM_Sans } from "next/font/google";
import Footer from "../components/footer/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "200", "300", "500", "600", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hyperce Demo",
  description: "Hyperce Demo Ecommerce app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}