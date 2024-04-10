import Header from "../components/Header/Header";
import { Footer } from "../components/Footer/page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header/>
        <div className={`mt-0 sm:px-[14%] sm:w-full px-[12rem] overflow-hidden ${inter.className}`}>
          {children}
        </div>
      <Footer/>
    </>
  );
}