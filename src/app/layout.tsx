import type { Metadata } from "next";
import "./globals.css";
import Banner from "@/components/layout/Banner";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";


export const metadata: Metadata = {
  title: "Estatein",
  description: "An estate management website",
  icons: {
    icon: "/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <body
        className={`antialiased max-w-svw min-h-dvh overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
