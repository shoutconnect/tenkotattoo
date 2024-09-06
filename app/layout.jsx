import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrelineScript from "@/components/PrelineScript";
import Script from "next/script";
import Head from "next/head";

export const metadata = {
  title: "Comfortable & personalised Tattoo Studio in Preston Tenko Tattoo",
  description:
    "Experience comforting & personalised tattoo services at Tenko Tattoo in Preston, Lancashire. Book your appointment today! ",
  openGraph: {
    title: "Comfortable & personalised Tattoo Studio in Preston Tenko Tattoo",
    description:
      "Experience comforting & personalised tattoo services at Tenko Tattoo in Preston, Lancashire. Book your appointment today! ",
    images: [
      {
        url: "/images/logos/Tenko Head Black PNG.png",
        width: 800,
        height: 600,
        alt: "Tenko Tattoo Studio",
      },
    ],
  },
  metadataBase: new URL("https://www.tenkotattoo.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          Comfortable & personalised Tattoo Studio in Preston Tenko Tattoo
        </title>
        <meta
          name="description"
          content="Experience comforting & personalised tattoo services at Tenko Tattoo in Preston, Lancashire. Book your appointment today!"
        />
        <meta
          name="keywords"
          content="tattoo studio Preston, tattoos Preston, tattoo artist Lancashire, personalised tattoo services, Tenko Tattoo, tattoo shop Preston, body art Preston, unique tattoos Lancashire, professional tattoo studio, Preston tattoo artists, preston tattoo studio, tattoo shops in preston"
        />
        <meta name="author" content="Tenko Tattoo" />
        <link rel="icon" href="/favicon.ico" />
        {/* Facebook Domain Verification */}
        <meta
          name="facebook-domain-verification"
          content="bgef0hy8y9zmebyhgz54cpkqh3fvjc"
        />
      </Head>
      <body>
        {" "}
        {/* Google meta tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VEBMYT26HW"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VEBMYT26HW');
        `,
          }}
        />
        {/* End Google meta tag */}
        {/* Meta Pixel Code */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '783759000601615');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=783759000601615&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
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
