import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrelineScript from "@/components/PrelineScript";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Tenko Tattoo</title>
        <meta
          name="description"
          content="Located in the heart of Preston/UK, our tattoo studio offers a diverse range of styles and services to bring your tattoo vision to life. Experience top-quality artistry and professional service in a welcoming environment."
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Tenko Tattoo" />
        <meta
          property="og:description"
          content="Located in the heart of Preston/UK, our tattoo studio offers a diverse range of styles and services to bring your tattoo vision to life. Experience top-quality artistry and professional service in a welcoming environment."
        />
        <meta property="og:image" content="/images/logos/Tenko SVG Black.svg" />
        <meta property="og:url" content="https://www.tenkotattoo.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags (Optional) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tenko Tattoo" />
        <meta
          name="twitter:description"
          content="Located in the heart of Preston/UK, our tattoo studio offers a diverse range of styles and services to bring your tattoo vision to life. Experience top-quality artistry and professional service in a welcoming environment."
        />
        <meta
          name="twitter:image"
          content="/images/logos/Tenko SVG Black.svg"
        />
      </Head>
      <body>
        <PrelineScript />
        <div className="fixed mt-36 mx-auto right-0 left-0 -z-20 inset-0 h-[100%] w-[95%] bg-neutral-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <Navbar />
        {/* <NavSpace /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
