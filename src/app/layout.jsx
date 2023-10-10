import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Three Brothers",
  description: "Three Brothers Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/3brotherslogo.png" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
