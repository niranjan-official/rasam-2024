import { Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import NavBar from "@/components/pages/NavBar";
import Footer from "@/components/pages/Footer";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rasam 2024",
  description:
    "Rasam – An ultimate cultural extravaganza where young talent from across the country exhibit their talents",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={poppins.className}>
        <Suspense fallback={<Loading />}>
          <NavBar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
