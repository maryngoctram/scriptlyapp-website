import { Download } from "lucide-react";
import { trackDownloadApp } from "@/utils/analytics";
import { cn } from "@/lib/utils";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/scriptly-ai-acting-rehearsal/id6754227999";

interface DownloadCTAProps {
  location: string;
  compact?: boolean;
  className?: string;
}

export default function DownloadCTA({
  location,
  compact = false,
  className,
}: DownloadCTAProps) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackDownloadApp(location)}
      className={cn(
        "cta-bounce bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-4 py-2 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 border border-purple-400/30 inline-flex items-center justify-center h-auto",
        className
      )}
    >
      <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
      {compact ? (
        <>
          <span className="hidden lg:inline">Download Scriptly</span>
          <span className="lg:hidden">Download</span>
        </>
      ) : (
        "Download Scriptly"
      )}
    </a>
  );
}
