import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Mail, Instagram } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DownloadCTA, { DownloadTagline } from "@/components/DownloadCTA";
import TikTokIcon from "@/components/icons/TikTokIcon";

const FAQ = () => {
  useEffect(() => {
    // Initialize scroll animations
    import('../utils/scrollAnimations').then(({ startScrollAnimations }) => {
      startScrollAnimations();
    });
  }, []);

  const faqs = [
    {
      question: "What is Scriptly and how does it work?",
      answer: "Scriptly is a mobile app that helps actors rehearse scripts, run lines, and prepare for auditions with AI-powered coaching. Whether you're building a role or sharpening your craft, Scriptly gives you a focused rehearsal workflow.\n\nUpload your script in the app, let Scriptly process it, and start rehearsing with tools that support pacing, script reading, and performance analysis.\n\nInstead of juggling paper scripts or waiting on rehearsal partners, you get a smart rehearsal companion available anytime, anywhere."
    },
    {
      question: "Is Scriptly suitable for beginners?",
      answer: "Absolutely. Scriptly is designed for actors at all levels, from beginners to seasoned professionals. The app helps you practice scripts at your own pace, run lines repeatedly, and build confidence with guided AI support."
    },
    {
      question: "How does your AI Insights tool work?",
      answer: "AI Insights works like a smart acting coach inside the app. It analyzes your scenes and characters so you understand script context, objectives, and emotional beats. Instead of only running lines, you get contextual feedback that helps you make stronger acting choices for auditions and performance."
    },
    {
      question: "What devices will Scriptly support?",
      answer: "Scriptly will be available for iOS devices only (iPhone and iPad). There is no version for Android users at the moment. The app is optimized for both phone and tablet use, with features that take advantage of each device's capabilities."
    },
    {
      question: "How much will Scriptly cost?",
      answer: "Scriptly will offer an initial 7-day free trial. The pricing model for the app will be a monthly subscription of $14.99/month paid in the app store."
    },
    {
      question: "Can Scriptly help me memorize my lines?",
      answer: "Scriptly is built to help you memorize lines through repeated rehearsal, script reading, and pacing tools. Many actors use it to lock in scenes faster by practicing consistently. AI feedback and syncing features still require an internet connection."
    }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container-responsive text-center">
          <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
            Frequently Asked
            <span className="block text-scriptly-animated">
              Questions
            </span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Quick answers about Scriptly, pricing, devices, and how the app helps you rehearse.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600/5 to-blue-600/5">
        <div className="container-responsive max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={`bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-xl px-4 sm:px-6 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}>
                <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-6">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="animate-float w-4 h-4 sm:w-5 sm:h-5 text-purple-300 flex-shrink-0" />
                    <span className="font-semibold text-sm sm:text-base text-purple-100">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 sm:pb-6 text-sm sm:text-base text-purple-200 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
            Still Have
            <span className="block text-scriptly-animated">
              Questions?
            </span>
          </h2>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
          
          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            <Card className="animate-scale p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-xl text-center shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="animate-float w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-purple-100">Email Support</h3>
              <p className="text-purple-200 mb-4 text-sm">
                Send us a detailed message and we'll respond as soon as possible.
              </p>
              <a href="mailto:support@scriptlyapp.com" className="inline-block">
                <Button variant="ghost" className="text-purple-300 hover:text-purple-200 hover:bg-purple-500/20 border border-purple-400/30">
                  Send Email
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
            Your Next Great Performance
            <span className="block text-scriptly-animated">
              Starts Here.
            </span>
          </h2>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Learn your lines, explore your character, and rehearse with confidence—all in one app.
          </p>
          <div className="animate-scale">
            <DownloadCTA location="faq" />
          </div>
          <DownloadTagline />
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
            </div>
          </div>
          <div className="text-center sm:text-left text-purple-200 text-xs sm:text-sm">
            <div className="mb-2">
              © 2025 Scriptly. All rights reserved. Available in the iOS App Store.
            </div>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                to="/"
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                About
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
      </footer>
    </div>
  );
};

export default FAQ;
