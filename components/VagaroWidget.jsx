// components/VagaroWidget.js
"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function VagaroWidget() {
  return (
    <>
      <Script
        type="text/javascript"
        src="https://www.vagaro.com/resources/WidgetEmbeddedLoader/OZqpC3OtCZ4cT3qmV35y79oz34mC2PeFJ4mC30m9cyUeJUtjP0dDxkJEvwRapWUep2sERAJDXwOapcUbfYJExcUcnoQc9c?v=dDCZGpAnkKMIyJ2wKmRbW3H0uddXhJvzQ8AAR77Yg0I#"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Vagaro widget loaded successfully");
        }}
        onError={(e) => {
          console.error("Error loading Vagaro widget:", e);
        }}
      />
    </>
  );
}
