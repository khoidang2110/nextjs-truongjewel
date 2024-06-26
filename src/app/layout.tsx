import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sản phẩm từ đá quý",
  description: "sản phẩm từ đá quý",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
<div>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com"  />
  <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap" rel="stylesheet" />
<link rel="preconnect" href="https://fonts.googleapis.com" />

<div>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link href="https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=Sawarabi+Gothic&display=swap" rel="stylesheet" />
</div>

</div>

      </head>
      <body className='sawarabi-gothic-regular bg-white'>
        <div className="pb-20">
        <Header/>
        </div>
       
      <div className="pt-10">
      {children}
      </div>
      
    
     
        <Footer />
      </body>
    </html>
  );
}
