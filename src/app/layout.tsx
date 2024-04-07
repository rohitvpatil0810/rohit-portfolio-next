import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "../styles/globals.css";

const inter = Lexend_Deca({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit Patil | Software Engineer",
  description:
    "Hello, I'm Rohit Patil, a computer engineering student currently studying at Pune Institute of Computer Technology. As @rohitvpatil0810, my passion lies in software development, and my portfolio reflects a blend of creativity and technical expertise. Projects like 'Notes pRO' and 'News Ninja' showcase my dynamic skill set, while the MERN stack-powered Public Health Record Management System reflects my commitment to secure and seamless experiences. As I pursue my degree, I am eager to explore opportunities in software engineering. Feel free to delve into my portfolio and join me in this exciting journey of code, design, and innovation! 🚀 #ComputerEngineeringStudent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-eerie-black px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 2xl:px-40 pt-4 text-light-green`}
      >
        {children}
      </body>
    </html>
  );
}
