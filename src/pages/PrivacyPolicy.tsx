import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import TikTokIcon from "@/components/icons/TikTokIcon";
import DiscordLink from "@/components/DiscordLink";

const PrivacyPolicy = () => {
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
            Privacy Policy
            <span className="block text-scriptly-animated">
              Scriptly
            </span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Scriptly ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights when using the Scriptly mobile app and website ("Services").
          </p>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            By using Scriptly, you agree to the practices described below.
          </p>
          <p className="animate-on-scroll text-xs sm:text-sm text-muted-foreground italic">
            Last Updated: October 12, 2026
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding bg-background">
        <div className="container-responsive max-w-4xl">
          <Card className="p-6 sm:p-8 md:p-10 bg-gradient-to-r from-purple-600/5 to-blue-600/5 backdrop-blur-xl border border-purple-400/20 rounded-xl shadow-lg">
            <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground">
              
              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  1. Information We Collect
                </h2>
                <p className="mb-4 leading-relaxed">
                  Scriptly is designed with privacy and on-device storage as core principles. We only collect the minimum information needed to provide app functionality.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">1.1 Information You Provide</h3>
                
                <p className="font-semibold mb-2">Script Content</p>
                <p className="mb-3 leading-relaxed">
                  When you upload or paste a script into Scriptly, the entire script is securely sent to our third-party AI processing provider (such as OpenAI) only to perform the features you request, including:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Scene parsing</li>
                  <li>Character detection</li>
                  <li>Scene analysis</li>
                  <li>Text-to-speech (TTS) generation</li>
                </ul>
                <ul className="list-none mb-4 space-y-2 ml-4">
                  <li>✅ <strong>We do not store or retain your scripts</strong> on our servers or in any cloud system.</li>
                  <li>✅ <strong>Your script is transmitted only for the duration</strong> of the AI request</li>
                  <li>✅ <strong>It is discarded immediately after processing</strong></li>
                  <li>✅ <strong>All processed output is stored locally</strong> on your device</li>
                  <li>✅ <strong>According to OpenAI's policies</strong>, your data is not used to train AI models</li>
                </ul>

                <p className="font-semibold mb-2">Voice Input & Audio</p>
                <p className="mb-4 leading-relaxed">
                  If you rehearse lines or use TTS playback, audio is processed on your device or by a third-party TTS provider. Scriptly does not upload or store your audio files on any server.
                </p>

                <p className="font-semibold mb-2">Notes, Edits, and Saved Scenes</p>
                <p className="mb-4 leading-relaxed">
                  All annotations, highlights, edits, and scenes are stored locally on your device only. We do not upload or store this information.
                </p>

                <p className="font-semibold mb-2">Account & Subscription Information</p>
                <p className="mb-4 leading-relaxed">
                  If you create an account or purchase a subscription, we may collect minimal account information such as your email and subscription status. Payment details are handled entirely by Apple and are never accessible to us.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">1.2 Automatically Collected Information</h3>
                <p className="mb-3 leading-relaxed">
                  We collect limited technical data needed to maintain and improve the app:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Device type and OS version</li>
                  <li>App version</li>
                  <li>Basic usage statistics</li>
                  <li>Crash logs and diagnostics (collected by Apple or our analytics provider)</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  We do not collect personally identifiable usage data beyond what is necessary for app functionality and troubleshooting.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-foreground mt-6">1.3 Information You Share on Our Website</h3>

                <p className="font-semibold mb-2">Discord Community Waitlist</p>
                <p className="mb-3 leading-relaxed">
                  If you join the waitlist for our Discord community at scriptlyapp.com/community, we collect:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Your name, email address, and Discord username</li>
                  <li>Any optional answers you choose to give, such as your role (for example, actor or acting coach), whether you use Scriptly, how you heard about Scriptly, your city or time zone, and any comments</li>
                  <li>The date and time you signed up and the page you signed up from</li>
                </ul>

                <p className="font-semibold mb-2">Feedback Form</p>
                <p className="mb-4 leading-relaxed">
                  If you send us feedback through our website, we collect your name, email address, and message.
                </p>

                <p className="font-semibold mb-2">Website Analytics</p>
                <p className="mb-4 leading-relaxed">
                  Our website uses Google Analytics to understand how visitors use the site, such as which pages are visited and which buttons are clicked (for example, Download or Join the Waitlist). This uses cookies and collects information like your browser, device type, and approximate location. It does not include the answers you type into our forms.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  2. How We Use Your Information
                </h2>
                <p className="mb-3 leading-relaxed">
                  We use the information described above to:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Provide core app features (script processing, scene parsing, character detection, scene analysis, TTS)</li>
                  <li>Improve app performance, reliability, and user experience</li>
                  <li>Provide customer support and respond to feedback</li>
                  <li>Send your invite and updates about the Scriptly Discord community, plan community events, and understand how people find Scriptly</li>
                  <li>Manage subscriptions and prevent fraud</li>
                  <li>Comply with legal requirements</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  We do not sell or share your data for advertising purposes.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  3. How Your Information Is Stored and Protected
                </h2>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Script content, notes, scenes, and audio are stored locally on your device</li>
                  <li>We do not operate cloud storage for your personal content</li>
                  <li>Third-party AI providers process data only temporarily and do not retain it</li>
                  <li>Discord community waitlist signups are stored in a private Google Sheet that only the Scriptly team can access</li>
                  <li>We use industry-standard security measures for encrypted data transmission</li>
                </ul>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  4. Sharing of Information
                </h2>
                <p className="mb-3 leading-relaxed">
                  We only share information with:
                </p>
                
                <p className="font-semibold mb-2">Service Providers</p>
                <p className="mb-3 leading-relaxed">
                  Trusted partners that process data solely to support app functionality:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>OpenAI – script analysis and TTS processing</li>
                  <li>Analytics providers – basic usage and crash reporting</li>
                  <li>Apple / RevenueCat – subscription management</li>
                  <li>Google (Google Sheets and Gmail) – storing Discord community waitlist signups and notifying our team of new signups</li>
                  <li>Web3Forms – delivering messages sent through our website feedback form</li>
                  <li>Google Analytics – website usage statistics</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  These providers are contractually prohibited from selling or misusing your data.
                </p>

                <p className="font-semibold mb-2">Discord</p>
                <p className="mb-4 leading-relaxed">
                  When our Discord community opens, joining it is optional. Anything you share on Discord is governed by Discord's own Terms of Service and Privacy Policy.
                </p>

                <p className="font-semibold mb-2">Legal Requirements</p>
                <p className="mb-4 leading-relaxed">
                  We may disclose information if required by law, subpoena, or governmental request.
                </p>
                <p className="mb-4 leading-relaxed">
                  We do not share data with advertisers or data brokers.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  5. Your Rights
                </h2>
                <p className="mb-3 leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information, including the right to:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Access the personal information we maintain</li>
                  <li>Request deletion of the data we store or process</li>
                  <li>Request correction</li>
                  <li>Request a copy of your data</li>
                  <li>Opt out of certain types of processing</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Because Scriptly stores most content locally on your device, some actions must be performed directly by you (such as deleting scripts, notes, or audio).
                </p>
                <p className="mb-4 leading-relaxed">
                  For account-related or service-related requests, contact us at: <a href="mailto:scriptlyactingapp@gmail.com" className="text-purple-400 hover:text-purple-300 underline">scriptlyactingapp@gmail.com</a>
                </p>
                <p className="mb-4 leading-relaxed">
                  We will respond within a reasonable time in accordance with applicable law.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  6. Data Retention
                </h2>
                <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                  <li>Scriptly retains no script content on its servers</li>
                  <li>All user-generated content remains on your device</li>
                  <li>Third-party AI providers do not retain script data</li>
                  <li>Account metadata (email, subscription status) is retained only as needed for service operation</li>
                  <li>Discord community waitlist signups are kept until we've sent your invite and only as long as needed to run the community. You can ask us to delete your signup at any time by emailing <a href="mailto:scriptlyactingapp@gmail.com" className="text-purple-400 hover:text-purple-300 underline">scriptlyactingapp@gmail.com</a></li>
                </ul>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  7. Children's Privacy
                </h2>
                <p className="mb-4 leading-relaxed">
                  Scriptly is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has used Scriptly or provided personal information, we will delete that information as required by law.
                </p>
                <p className="mb-4 leading-relaxed">
                  If you believe a child is using Scriptly without permission, contact us at: <a href="mailto:scriptlyactingapp@gmail.com" className="text-purple-400 hover:text-purple-300 underline">scriptlyactingapp@gmail.com</a>
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  8. Changes to This Policy
                </h2>
                <p className="mb-4 leading-relaxed">
                  We may update this Privacy Policy as our features evolve. If material changes occur, we will notify users in the app or on our website.
                </p>
              </div>

              <div className="animate-on-scroll mb-8">
                <h2 className="text-responsive-lg font-bold mb-4 text-foreground border-b border-purple-400/30 pb-2">
                  9. Contact Us
                </h2>
                <p className="mb-4 leading-relaxed">
                  If you have any questions about this Privacy Policy, contact us:
                </p>
                <ul className="list-none mb-4 space-y-2 ml-4">
                  <li>📧 <a href="mailto:scriptlyactingapp@gmail.com" className="text-purple-400 hover:text-purple-300 underline">scriptlyactingapp@gmail.com</a></li>
                  <li>🌐 <a href="https://www.scriptlyapp.com" className="text-purple-400 hover:text-purple-300 underline">https://www.scriptlyapp.com</a></li>
                </ul>
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

export default PrivacyPolicy;

