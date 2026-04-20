"use client";

import { useEffect } from "react";

interface CalWindow extends Window {
  Cal?: {
    (method: string, ...args: unknown[]): void;
    loaded?: boolean;
    ns?: Record<string, (method: string, ...args: unknown[]) => void>;
    q?: unknown[];
  };
}

/**
 * Cal.com inline embed for Surmount's 30-minute discovery call.
 * Loads the Cal.com embed script once, then initializes the inline widget
 * on #surmount-cal-inline. Safe to mount/unmount across route changes.
 */
export function CalEmbed() {
  useEffect(() => {
    const win = window as CalWindow;

    // Standard Cal.com embed loader pattern, adapted for React.
    (function (C: CalWindow, A: string, L: string) {
      const p = function (a: { q: unknown[] }, ar: unknown) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function (...args: unknown[]) {
          const cal = C.Cal!;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const script = d.createElement("script");
            script.src = A;
            d.head.appendChild(script);
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function (...iargs: unknown[]) {
              p(api as unknown as { q: unknown[] }, iargs);
            };
            const namespace = ar[1];
            (api as unknown as { q: unknown[] }).q = [];
            if (typeof namespace === "string") {
              cal.ns![namespace] = cal.ns![namespace] || (api as unknown as (method: string, ...args: unknown[]) => void);
              p(cal.ns![namespace] as unknown as { q: unknown[] }, ar);
              p(cal as unknown as { q: unknown[] }, ["initNamespace", namespace]);
            } else {
              p(cal as unknown as { q: unknown[] }, ar);
            }
            return;
          }
          p(cal as unknown as { q: unknown[] }, ar);
        };
    })(win, "https://app.cal.com/embed/embed.js", "init");

    win.Cal!("init", "30min", { origin: "https://app.cal.com" });

    const ns = win.Cal!.ns!["30min"];
    ns("inline", {
      elementOrSelector: "#surmount-cal-inline",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "surmountcxo/30min",
    });

    ns("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      id="surmount-cal-inline"
      style={{ width: "100%", height: "100%", minHeight: "640px", overflow: "auto" }}
    />
  );
}
