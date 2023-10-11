import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Three Brothers - Cafe Design & Carpentry Experts in Egypt",
  description:
    "Three Brothers: Your Trusted Cafe Design and Carpentry Experts in Egypt. Transforming your coffee shop dreams into reality with innovative cafe designs and expert carpentry services. Explore our website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/3brotherslogo.png" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
