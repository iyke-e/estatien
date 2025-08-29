import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanistSan = Urbanist({
  variable: "--font-urbanist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Estatein",
  description: "An estate management website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanistSan.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
