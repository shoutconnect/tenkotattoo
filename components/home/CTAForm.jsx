"use client";

import Script from "next/script";

export default function CTAForm() {
  return (
    <>
      <iframe
        src="https://www.cognitoforms.com/f/0RwzHuYrgkimJq8sYGUzwQ/7"
        height="396"
        width="100%"
        className="w-full"
        id="discuss"
        title="Discussion Form"
      ></iframe>
      <Script src="https://www.cognitoforms.com/f/iframe.js" async></Script>
    </>
  );
}
