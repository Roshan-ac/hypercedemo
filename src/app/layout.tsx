import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./_Components/Navbar/Navbar";

const dmSans = localFont({
  src: [
    {
      path: "./fonts/DmSans.woff",
      weight: "700", // Specify exact weight if possible
      style: "bold",
    },
    {
      path: "./fonts/DmSans.woff",
      weight: "500", // Specify exact weight if possible
      style: "medium",
    },
    {
      path: "./fonts/DmSans.woff",
      weight: "400", // Specify exact weight if possible
      style: "normal",
    },
    // Add more weights/styles if you have different font files
  ],
  variable: "--font-dm-sans", // Use a more descriptive variable name
});

export const meta: Metadata = {
  title: "Hyperce",
  description: "Hyperce Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      
      <body
        className={`${dmSans.variable} font-sans antialiased`} // Add font-sans
      >
          <Navbar />
          {children}
      </body>
    </html>
  );
}
