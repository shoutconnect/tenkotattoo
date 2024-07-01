"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PrelineScript() {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      const preline = await import("preline/preline");

      // Ensure preline is loaded and HSStaticMethods exists
      if (preline && preline.HSStaticMethods) {
        preline.HSStaticMethods.autoInit();
      }
    };

    loadPreline();
  }, [path]);

  return null;
}
