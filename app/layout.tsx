import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "./components/context/context";
import { Slide, ToastContainer } from 'react-toastify';
import { ReCaptchaProvider } from "next-recaptcha-v3";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JSON Scout",
  description: "Fetch Insights that Matter",
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
        <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
        bodyClassName="toastBody"
        />
        <ReCaptchaProvider reCaptchaKey="[GTM-6Lev8MUoAAAAAKp3bYSwQo3lTykrWGHEzGAP1qqd]">
          <ContextProvider>
            {children}
          </ContextProvider>
        </ReCaptchaProvider>
          
        </div>
        </body>
    </html>
  );
}
