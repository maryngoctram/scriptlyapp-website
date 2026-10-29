import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { APP_STORE_URL } from "@/components/DownloadCTA";
import { trackDownloadApp } from "@/utils/analytics";

// Safari on iPhone/iPad already shows Apple's Smart App Banner (index.html), so this bar
// covers every other iOS browser: Chrome, Firefox, Edge, and in-app browsers like
// Instagram and TikTok. Hidden on desktop and Android. Add ?appBanner=show to any URL
// to preview it on another device. Closing it hides it for the current visit only;
// it shows again the next time the site is opened or reloaded. It sits at the top of
// the page, where Safari puts the Smart App Banner, so every iOS browser matches.

function shouldShow(): boolean {
  if (new URLSearchParams(window.location.search).get("appBanner") === "show") return true;
  const ua = navigator.userAgent;
  const isIOS =
    /iPhone|iPad|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1); // iPadOS reports as a Mac
  if (!isIOS) return false;
  const otherBrowser = /CriOS|FxiOS|EdgiOS|OPiOS|GSA|Instagram|FBAN|FBAV|musical_ly|BytedanceWebview|TikTok/.test(ua);
  const isSafari = /Safari/.test(ua) && !otherBrowser;
  return !isSafari;
}

const AppBanner = () => {
  const [visible, setVisible] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Decide in the browser only, so pre-rendered pages never include the bar
  useEffect(() => {
    setVisible(shouldShow());
  }, []);

  // Like Apple's banner, the bar sits above the page and scrolls away with it.
  // --app-banner-offset keeps the fixed menu bar (Navigation.tsx) just below it.
  useEffect(() => {
    const root = document.documentElement;
    if (!visible) {
      root.style.removeProperty("--app-banner-offset");
      return;
    }
    const update = () => {
      const height = barRef.current?.offsetHeight ?? 0;
      root.style.setProperty("--app-banner-offset", `${Math.max(0, height - window.scrollY)}px`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      root.style.removeProperty("--app-banner-offset");
    };
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => setVisible(false);

  return (
    <div
      ref={barRef}
      role="region"
      aria-label="Get the Scriptly app"
      className="relative z-[60] border-b border-purple-400/30 bg-background"
    >
      <div className="flex items-center gap-3 px-3 py-3 max-w-xl mx-auto">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="p-1 -ml-1 text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </button>
        <img src="/Icon.png" alt="" className="w-11 h-11 rounded-xl shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground truncate">Scriptly: AI Acting Rehearsal</p>
          <p className="text-xs text-muted-foreground truncate">Free 7-day trial on the App Store</p>
        </div>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackDownloadApp("app-banner")}
          className="shrink-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30"
        >
          Get
        </a>
      </div>
    </div>
  );
};

export default AppBanner;
