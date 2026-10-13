import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import TikTokIcon from "@/components/icons/TikTokIcon";
import DiscordLink from "@/components/DiscordLink";

const TermsOfService = () => {
  useEffect(() => {
    // Initialize scroll animations
    import('../utils/scrollAnimations').then(({ startScrollAnimations }) => {
      startScrollAnimations();
    });
  }, []);

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container-responsive text-center">
          <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
            Terms of Service
            <span className="block text-scriptly-animated">
              Scriptly
            </span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Please read these Terms of Service ("Terms") carefully before using Scriptly (the "App"). By downloading, accessing, or using Scriptly, you agree to be bound by these Terms. If you do not agree, you must discontinue use of the App immediately.
          </p>
          <p className="animate-on-scroll text-xs sm:text-sm text-muted-foreground italic">
            Last Updated: December 8, 2025
          </p>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="section-padding bg-background">
        <div className="container-responsive max-w-4xl">
          <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-r from-purple-600/5 to-blue-600/5 backdrop-blur-xl border border-purple-400/20 rounded-xl shadow-lg">
            <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground">
              
              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  1. Overview
                </h2>
                <p className="mb-4 leading-relaxed">
                  Scriptly ("we," "us," "our") is a mobile application that helps users rehearse scripts, analyze scenes, practice lines with AI-generated voices, and take notes. These Terms govern your use of the App and all related features.
                </p>
                <p className="mb-4 leading-relaxed">
                  Certain features require an active paid subscription purchased through Apple's In-App Purchase system.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  2. Eligibility
                </h2>
                <p className="mb-4 leading-relaxed">
                  You must be at least 13 years old to use this App.
                </p>
                <p className="mb-4 leading-relaxed">
                  If you are under 18, you may use Scriptly only with permission from a parent or legal guardian.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  3. User Content & Script Uploads
                </h2>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">3.1 Ownership of Your Content</h3>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>You may upload scripts or text into the App for processing.</li>
                  <li>You retain full ownership of all scripts and content you upload.</li>
                  <li>Scriptly does not store your scripts on our servers.</li>
                  <li>Scripts are processed temporarily through Supabase Edge Functions solely to call OpenAI's API.</li>
                  <li>Once processed, script data remains only on your device unless you delete it.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">3.2 License for Processing</h3>
                <p className="mb-4 leading-relaxed">
                  By uploading content, you grant Scriptly a temporary, limited license to process your content only as needed to provide features such as scene parsing, character detection, analysis, and AI voice playback.
                </p>
                <p className="mb-4 leading-relaxed">
                  We never sell, redistribute, or reuse your script content.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  4. Acceptable Use
                </h2>
                <p className="mb-3 leading-relaxed">You agree not to:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Use the App for illegal purposes</li>
                  <li>Upload content you don't have permission to use</li>
                  <li>Upload harmful, obscene, defamatory, or discriminatory content</li>
                  <li>Attempt to hack, reverse engineer, or disrupt any part of the App</li>
                  <li>Introduce malware or harmful code</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  We may suspend or terminate access for violations.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  5. AI Features & Third-Party Services
                </h2>
                <p className="mb-3 leading-relaxed">
                  Scriptly uses Supabase and OpenAI models to provide several features, including:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Script parsing</li>
                  <li>Scene and character analysis</li>
                  <li>AI voice generation</li>
                  <li>Line rehearsal and playback</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  By using the App, you agree to comply with OpenAI's policies, Supabase's terms, and Apple's App Store rules.
                </p>
                <p className="mb-4 leading-relaxed">
                  Scriptly is not responsible for outages or changes within third-party services.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  6. Paid Features, Subscriptions & Billing
                </h2>
                <p className="mb-4 leading-relaxed">
                  Scriptly offers premium features requiring an active subscription purchased via Apple In-App Purchase.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">6.1 Billing & Payment</h3>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Payment is charged to your Apple ID at confirmation of purchase.</li>
                  <li>Prices may vary by region and are subject to change.</li>
                  <li>Scriptly does not directly handle or store payment information.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">6.2 Auto-Renewal</h3>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Subscriptions renew automatically unless canceled at least 24 hours before the end of the billing period.</li>
                  <li>Renewal charges occur within 24 hours prior to the current period ending.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">6.3 Managing or Canceling Subscriptions</h3>
                <p className="mb-3 leading-relaxed">
                  You may manage or cancel your subscription anytime in your Apple ID settings:
                </p>
                <p className="mb-3 leading-relaxed font-semibold">
                  Settings → Your Name → Subscriptions
                </p>
                <p className="mb-4 leading-relaxed">
                  Cancellation takes effect at the end of the current billing cycle.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">6.4 Free Trials</h3>
                <p className="mb-3 leading-relaxed">If offered:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Unused free trial portions are forfeited when a subscription is purchased.</li>
                  <li>Trial eligibility is determined by Apple.</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">6.5 Refunds</h3>
                <p className="mb-4 leading-relaxed">
                  All refund requests must be submitted to Apple, not Scriptly. Apple's refund policy applies to all transactions.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  7. Privacy Policy
                </h2>
                <p className="mb-4 leading-relaxed">
                  Your use of Scriptly is also governed by our Privacy Policy:
                </p>
                <p className="mb-4 leading-relaxed">
                  <Link to="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">https://www.scriptlyapp.com/privacy-policy</Link>
                </p>
                <p className="mb-4 leading-relaxed">
                  This policy explains what data we collect (if any), how it is used, and your rights.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  8. Intellectual Property
                </h2>
                <p className="mb-4 leading-relaxed">
                  All App design, branding, logos, features, AI voice assets, and code are owned by Scriptly unless stated otherwise.
                </p>
                <p className="mb-4 leading-relaxed">
                  You may not copy, reproduce, distribute, or modify any part of the App.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  9. License to Use Scriptly
                </h2>
                <p className="mb-3 leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable, revocable license to use Scriptly for personal, non-commercial purposes.
                </p>
                <p className="mb-3 leading-relaxed">You may not:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Reverse engineer, decompile, or disassemble the App</li>
                  <li>Use the App to develop a competing product</li>
                  <li>Access Scriptly in unauthorized ways</li>
                </ul>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  10. Modifications & Updates
                </h2>
                <p className="mb-4 leading-relaxed">
                  We may update or modify Scriptly at any time, including adding or removing features.
                </p>
                <p className="mb-4 leading-relaxed">
                  We may also update these Terms. Continued use after changes constitutes acceptance.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  11. Disclaimer of Warranties
                </h2>
                <p className="mb-3 leading-relaxed">
                  Scriptly is provided "as is" and "as available", without warranties of any kind.
                </p>
                <p className="mb-3 leading-relaxed">We do not guarantee:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>uninterrupted or error-free performance</li>
                  <li>compatibility with all devices</li>
                  <li>accuracy of AI-generated responses</li>
                  <li>availability of third-party services (OpenAI, Supabase, Apple IAP)</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Use the App at your own risk.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  12. Limitation of Liability
                </h2>
                <p className="mb-3 leading-relaxed">To the fullest extent permitted by law:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Scriptly is not liable for indirect, incidental, or consequential damages</li>
                  <li>We are not responsible for data loss, device damage, or script loss</li>
                  <li>Our total liability for any claim is limited to the amount you paid to Scriptly in the past 12 months</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Some jurisdictions may not allow these limits.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  13. Apple-Specific Terms
                </h2>
                <p className="mb-3 leading-relaxed">
                  As required by Apple's App Store policies, you acknowledge that:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Apple is not responsible for providing support for Scriptly</li>
                  <li>Apple is not liable for any claims related to Scriptly or its use</li>
                  <li>Apple is a third-party beneficiary of these Terms and may enforce them</li>
                </ul>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  14. Termination
                </h2>
                <p className="mb-3 leading-relaxed">We may suspend or terminate your access if you:</p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Violate these Terms</li>
                  <li>Misuse App features</li>
                  <li>Engage in harmful or unlawful activity</li>
                  <li>Use the App in a way that disrupts other users or services</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  You may stop using Scriptly anytime by deleting the App.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  15. Governing Law
                </h2>
                <p className="mb-4 leading-relaxed">
                  These Terms are governed by the laws of the State of California, without regard to conflict-of-law principles.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  16. Contact Information
                </h2>
                <p className="mb-4 leading-relaxed">
                  For questions or support, contact us at:
                </p>
                <p className="mb-4 leading-relaxed">
                  <a href="mailto:scriptlyactingapp@gmail.com" className="text-purple-400 hover:text-purple-300 underline">scriptlyactingapp@gmail.com</a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border-t border-purple-400/20 text-purple-100 py-8 px-4">
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
            <div className="mb-2">
              © 2025 Scriptly. All rights reserved. Available in the iOS App Store.
            </div>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
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
      </footer>
    </div>
  );
};

export default TermsOfService;

