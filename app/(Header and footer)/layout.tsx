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
        <div className="sm:mt-[12rem] mt-[36rem] sm:px-[33rem] sm:w-[215rem] px-[12rem] overflow-hidden">
          {children}
        </div>
      <Footer/>
    </>
  );
}