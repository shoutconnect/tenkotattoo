import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
