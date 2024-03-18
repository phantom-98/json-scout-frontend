import React from "react";
import Header from "../components/Header/Header";







export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <>
            <Header />
            <div className="sm:mt-[12rem] mt-[32rem] sm:px-[14%] sm:w-full px-[12rem] overflow-hidden">
            {children}
            </div>
        </>
        
    );
  }