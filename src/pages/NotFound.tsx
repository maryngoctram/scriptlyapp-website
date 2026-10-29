import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import TikTokIcon from "@/components/icons/TikTokIcon";
import DiscordLink from "@/components/DiscordLink";

const NotFound = () => {
  const location = useLocation();
  const [clapped, setClapped] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const t = setTimeout(() => setClapped(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background gradient-hero px-4 pt-24 pb-48">
      {/* Film slate (clapperboard): the striped arm snaps shut once the page loads */}
      <div className="w-full max-w-md drop-shadow-[0_12px_30px_rgba(168,85,247,0.3)]">
        <div
          aria-hidden="true"
          className={`h-9 sm:h-10 origin-bottom-left rounded-t-md border border-purple-300/40 bg-[repeating-linear-gradient(135deg,#f5f3ff_0_22px,#2e1065_22px_44px)] transition-transform duration-200 ease-in motion-reduce:transition-none ${
            clapped ? "rotate-0" : "-rotate-[18deg]"
          }`}
        />
        <div
          aria-hidden="true"
          className="relative h-9 sm:h-10 border-x border-purple-300/40 bg-[repeating-linear-gradient(45deg,#f5f3ff_0_22px,#2e1065_22px_44px)]"
        >
          <span className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-zinc-400 border border-zinc-600" />
        </div>
        <div className="rounded-b-2xl border border-t-0 border-purple-300/40 bg-gradient-to-b from-zinc-900 to-[#1a1033] p-5 sm:p-6 font-mono text-purple-100">
          <div className="grid grid-cols-3 border border-purple-300/30 text-center">
            {[
              ["SCENE", "404"],
              ["TAKE", "1"],
              ["STATUS", "CUT!"],
            ].map(([label, value]) => (
              <div key={label} className="py-2 border-r border-purple-300/30 last:border-r-0">
                <p className="text-[10px] tracking-widest text-purple-300">{label}</p>
                <p className={`text-xl sm:text-2xl font-bold ${value === "CUT!" ? "text-pink-400" : ""}`}>{value}</p>
              </div>
            ))}
          </div>
          <div className="pt-5 font-sans">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-pink-400 mb-2">ERROR 404</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Page not found</h1>
            <p className="text-sm sm:text-base text-purple-200 leading-relaxed">
              This scene was cut. The page you're looking for doesn't exist or has moved.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          to="/"
          className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm sm:text-base font-medium text-white shadow-lg shadow-purple-500/30 hover:from-purple-700 hover:to-blue-700"
        >
          Back to Home
        </Link>
        <Link
          to="/faq"
          className="rounded-xl border border-purple-400/30 bg-purple-600/15 px-6 py-3 text-sm sm:text-base font-medium text-purple-100 hover:bg-purple-600/25"
        >
          Visit the FAQ
        </Link>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600/10 to-purple-500/10 backdrop-blur-xl border-t border-purple-400/20 text-purple-100 py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-100">Scriptly</h3>
              <p className="text-sm sm:text-base text-purple-200">Master your craft. Anytime, anywhere.</p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com/scriptlyapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Button variant="ghost" size="icon" className="touch-target text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 border border-purple-400/30">
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://www.tiktok.com/@scriptlyactingapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
              >
                <Button variant="ghost" size="icon" className="touch-target text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 border border-purple-400/30">
                  <TikTokIcon className="w-5 h-5" />
                </Button>
              </a>
              <DiscordLink variant="footer" />
            </div>
          </div>
          <div className="text-center sm:text-left text-purple-200 text-xs sm:text-sm">
            © 2025 Scriptly. All rights reserved. Available in the iOS App Store.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
