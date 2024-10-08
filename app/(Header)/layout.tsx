import React from "react";
import Header from "../components/Header/Header";

import { ToastContainer, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <>
          <ToastContainer
              position="top-right"
              autoClose={2000}
              theme="light"
              transition={Bounce}
              bodyClassName="toastBody"
              />
            <Header />
            <div className="sm:mt-0 mt-[32rem] sm:px-[14%] sm:w-full px-[12rem]">
            {children}
            </div>
        </>
        
    );
  }