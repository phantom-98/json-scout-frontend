import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/page";

const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <div className={`flex flex-col ${inter.className}`}>
      <Header/>
      <div className="sm:mt-0 mt-[18rem] sm:px-[14%] px-[12rem] overflow-hidden">
        {children}
      </div>
      <Footer/>
    </div>
      </body>
    </html>
  );
}
