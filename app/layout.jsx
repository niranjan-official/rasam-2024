import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import NavBar from "@/components/pages/NavBar";
import Footer from "@/components/pages/Footer";
import Head from "next/head";

const josefin = Josefin_Sans({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Rasam 2024",
  description:
    "Rasam – An ultimate cultural extravaganza where young talent from across the country exhibit their talents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={josefin.className}>
        <Suspense fallback={<Loading />}>
          <NavBar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
