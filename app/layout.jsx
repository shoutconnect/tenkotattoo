import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrelineScript from "@/components/PrelineScript";
import NavSpace from "@/components/NavSpace";

export const metadata = {
  title: "Tenko Tattoo",
  description:
    "Located in the heart of Preston/UK, our tattoo studio offers a diverse range of styles and services to bring your tattoo vision to life. Experience top-quality artistry and professional service in a welcoming environment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
