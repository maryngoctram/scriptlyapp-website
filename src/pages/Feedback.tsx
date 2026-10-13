import { useState, useEffect, FormEvent } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Instagram, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { trackSendFeedback } from "@/utils/analytics";
import TikTokIcon from "@/components/icons/TikTokIcon";
import DiscordLink from "@/components/DiscordLink";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    import("../utils/scrollAnimations").then(({ startScrollAnimations }) => {
      startScrollAnimations();
    });
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "c3899b25-94bf-48cb-b8ae-cc0f266b3eed",
          subject: "New Scriptly Feedback",
          from_name: "Scriptly Feedback Form",
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        trackSendFeedback();
        toast.success("Thank you for your feedback!", {
          description: "We appreciate you taking the time to share your thoughts.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Something went wrong.", {
          description: "Please try again later.",
        });
      }
    } catch {
      toast.error("Failed to send feedback.", {
        description: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container-responsive text-center">
          <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
            We'd Love Your
            <span className="block text-scriptly-animated">Feedback</span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Your thoughts help us improve Scriptly. Let us know what you love,
            what could be better, or any ideas you have.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive max-w-2xl mx-auto">
          <Card className="animate-on-scroll p-6 sm:p-10 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-xl shadow-lg shadow-purple-500/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-purple-100">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-background/50 border-purple-400/30 focus:border-purple-400 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-purple-100">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50 border-purple-400/30 focus:border-purple-400 text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-purple-100">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Please share any feedback, issues, and suggestions here."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="bg-background/50 border-purple-400/30 focus:border-purple-400 text-foreground placeholder:text-muted-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full cta-bounce bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-8 py-4 text-sm sm:text-base rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 border border-purple-400/30 h-auto"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Feedback"}
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border-t border-purple-400/20 text-purple-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <div className="text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-purple-100">
                Scriptly
              </h3>
              <p className="text-sm sm:text-base text-purple-200">
                Master your craft. Anytime, anywhere.
              </p>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://instagram.com/scriptlyapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="touch-target text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 border border-purple-400/30"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
              <a
                href="https://www.tiktok.com/@scriptlyactingapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on TikTok"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="touch-target text-purple-200 hover:text-purple-100 hover:bg-purple-500/20 border border-purple-400/30"
                >
                  <TikTokIcon className="w-5 h-5" />
                </Button>
              </a>
              <DiscordLink variant="footer" />
            </div>
          </div>
          <div className="text-center sm:text-left text-purple-200 text-xs sm:text-sm">
            <div className="mb-2">
              © 2025 Scriptly. All rights reserved. Available in the iOS App
              Store.
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

export default Feedback;
