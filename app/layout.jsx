import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrelineScript from "@/components/PrelineScript";

export const metadata = {
  title:
    "Comfortable & personalised Tattoo Studio in Preston | Tenko Tattoo - Personalised Services",
  description:
    "Experience comforting & personalised tattoo services at Tenko Tattoo in Preston, Lancashire. Book your appointment today! ",
  openGraph: {
    images: "/images/logos/Tenko Head Black PNG.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VEBMYT26HW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VEBMYT26HW');
        `,
          }}
        />
      </head>
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
