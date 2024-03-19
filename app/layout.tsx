import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/page";
import { ContextProvider } from "./components/context/context";

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
        <div className={`flex flex-col ${inter.className} `}>
          <ContextProvider>
            {children}
          </ContextProvider>
        </div>
        </body>
    </html>
  );
}
