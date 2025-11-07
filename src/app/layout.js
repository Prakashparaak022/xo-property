import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/assets/css/loader.css";
import "@/assets/css/animations.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KNMG Property – Luxury Real Estate Brokerage in Dubai | Buy • Invest",
  description:
    "Experience Dubai’s finest properties with KNMG Property. From luxury homes to exclusive off-plan projects, our experts guide you every step of the way, making your real estate journey seamless and rewarding.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ToastContainer theme="colored" />
        {children}
      </body>
    </html>
  );
}
