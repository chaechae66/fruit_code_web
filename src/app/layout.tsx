import Link from "next/link";

import { Search } from "lucide-react";

import "./globals.css";
import "@/styles/components.css";
import { SidebarInput } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1"
      />
      <body>
        <header className={`flex w-full justify-between items-center h-12 p-4`}>
          <h1>
            <Link href={"/"}>LOGO</Link>
          </h1>
          <form className="h-fit relative">
            <SidebarInput
              id="search"
              placeholder="신선한 과일을 찾아보세요"
              className="w-56 pl-4 bg-main-gray rounded-full placeholder:text-main-gray-text placeholder:text-sm"
            />
            <button className="absolute p-2 rounded-full bg-primary top-1/2 right-0 -translate-y-1/2">
              <Search className="size-4 select-none" color="#fff" />
            </button>
          </form>
        </header>
        <div className="min-h-screen">{children}</div>
        <footer className="bg-black text-main-gray-text">
          <div className="px-6 py-8">
            <h1 className="flex pb-3">
              <Link className="mr-2" href={"/"}>
                LOGO
              </Link>
              <div>온리고당</div>
            </h1>
            <div className="footer_info">
              <h2 className="">회사정보</h2>
              <ul className="">
                <li>회사소개</li>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
              </ul>
            </div>
            <div className="footer_info">
              <h2>배송정보</h2>
              <ul className="flex">
                <li>당일배송 가능지역</li>
                <li>새벽배송 서비스</li>
                <li>배송조회</li>
              </ul>
            </div>
            <div className="footer_info_as">
              <h2>고객서비스</h2>
              <ul className="flex">
                <li>
                  <b>고객센터</b>
                  <br />
                  1588-1234
                </li>
                <li>
                  <b>운영 시간</b>
                  <br />
                  09:00 - 18:00
                </li>
                <li>
                  <b>이메일</b>
                  <br />
                  example@onlydang.com
                </li>
              </ul>
            </div>
            <div className="text-center pt-2">
              &copy; 2025.온리고당.All right reserved
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
