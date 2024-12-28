import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sessionwrapper from "@/components/Sessionwrapper";
import Footer from "@/components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GlobalPay - Make payments anywhere anytime",
  description: "GlobalPay makes payments accessible all over the globe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sessionwrapper>
        <div className="nav sticky top-0 z-50">

          <Navbar />
        </div>
          {children}
          <Footer />
        </Sessionwrapper>
      </body>
    </html>
  );
}
