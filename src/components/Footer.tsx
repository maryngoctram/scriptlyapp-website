import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import DownloadCTA from "@/components/DownloadCTA";
import TikTokIcon from "@/components/icons/TikTokIcon";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border-t border-purple-400/20 text-purple-100 section-padding">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-responsive-lg font-bold mb-4 sm:mb-6">
            Ready to Transform Your
            <span className="block text-scriptly-animated">
              Acting Journey?
            </span>
          </h2>
          <p className="text-responsive-sm text-purple-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Download the app now to experience AI-powered acting rehearsals. Use Scriptly to prepare for auditions.
          </p>
          <DownloadCTA location="footer" icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />} />
        </div>

        <div className="border-t border-purple-400/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-100">Scriptly</h3>
              <p className="text-sm sm:text-base text-purple-200">Master your craft. Anytime, anywhere.</p>
              <p className="text-xs sm:text-sm text-purple-300 mt-1">Your AI audition partner and script reader for actors.</p>
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
            </div>
          </div>

          <div className="text-center sm:text-left text-purple-200 text-xs sm:text-sm mt-6 sm:mt-8">
            <div className="mb-2">
              © 2025 Scriptly. All rights reserved. Available in the iOS App Store.
            </div>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link 
                to="/about"
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                About Scriptly
              </Link>
              <Link
                to="/faq"
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                Acting FAQ
              </Link>
              <Link 
                to="/privacy-policy" 
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;