import type { Metadata } from "next";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import AppbarBottom from "@/components/appbar-bottom";
import ToastProvider from "@/components/toasts/ToastProvider";
import { BannerAndContentMenu, SidebarMobile } from "@/components/layout";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "AI COPY",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ToastProvider>
          <Header />
          <div className="lg:block hidden">
            <Sidebar />
          </div>
          <div className="lg:mt-[75px] mt-[80px] lg:ml-[135px]">
            <BannerAndContentMenu />

            <div className="max-lg:px-1 flex">
              <SidebarMobile />

              <div className="px-2 w-full">
                <main className="max-lg:max-w-[720px] mx-auto max-lg:h-full max-lg:overflow-auto max-lg:max-h-screen pb-7 pt-2">
                  {children}
                </main>
              </div>
            </div>

            <Footer />
            <AppbarBottom />
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
