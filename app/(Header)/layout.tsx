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
            <div className="sm:mt-0 mt-[32rem] sm:px-[14%] sm:w-full px-[12rem]">
            {children}
            </div>
        </>
        
    );
  }