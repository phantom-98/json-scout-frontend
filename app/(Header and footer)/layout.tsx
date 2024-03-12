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
        <div className="sm:mt-0 mt-[18rem] sm:px-[14%] px-[12rem] overflow-hidden">
          {children}
        </div>
      <Footer/>
    </>
  );
}