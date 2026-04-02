import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Mail, Instagram } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DownloadCTA from "@/components/DownloadCTA";
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

  const userGuideSections = [
    {
      title: "Accessing the Rehearsal Mode Menu",
      description: "To open additional settings and controls while rehearsing:",
      imageSrc: "/app-user-guide-getting-started.png",
      steps: [
        "Go to Rehearsal Mode in the Scriptly app.",
        "Look at the top-right corner of the screen.",
        "Tap the three dots (•••) icon.",
        "The Rehearsal Menu will slide open with more options.",
      ],
      actionTitle: "What You Can Do in This Menu",
      actions: [
        "Change Your Role",
        "Voice Selection",
        "Range Selection",
        "Edit Mode",
        "Hide Stage Directions",
        "Auto-Loop",
      ],
      imageLabel: "Onboarding screen screenshot",
    },
    {
      title: "Scene Analysis",
      description: "Break down your scene to improve your performance.",
      imageSrc: "/app-user-guide-uploading-scripts.png",
      steps: [
        "Summary \u2013 Quick overview of the scene",
        "Key Details \u2013 Characters and setting",
        "Stakes \u2013 What\u2019s at risk for your character",
        "Reflections \u2013 Prompts to explore deeper meaning",
        "Director\u2019s Notes \u2013 Add your own insights",
      ],
      actionTitle: "",
      actions: [],
      footnote: "Tap a card to expand, use (+) to add notes, and (\u2022\u2022\u2022) for more options.",
      imageLabel: "Scene Analysis screenshot",
    },
    {
      title: "Character Analysis",
      description: "Dive deeper into your character to strengthen your performance.",
      imageSrc: "/app-user-guide-practice-tools.png",
      steps: [
        "Switch between characters using the tabs at the top",
        "Explore sections like Basic Facts, Motivations, Backstory, and Character Arc",
        "Tap a section to expand and read more or edit details",
        "Use the (+) button to add new insights",
        "Tap (\u2022\u2022\u2022) for additional options",
      ],
      footnote: "",
      imageLabel: "Character Analysis screenshot",
    },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container-responsive text-center">
          <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
            The Scriptly Help
            <span className="block text-scriptly-animated">
              Center
            </span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore helpful guides and answers to get the most out of Scriptly.
          </p>
        </div>
      </section>

      {/* App User Guide Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive max-w-6xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="animate-on-scroll text-responsive-lg font-bold text-foreground mb-4">
              App User Guide
            </h2>
            <p className="animate-on-scroll text-responsive-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Use these guided sections for step-by-step help so actors can navigate Scriptly and rehearse with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {userGuideSections.map((section, index) => (
              <Card
                key={section.title}
                className={`p-5 sm:p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 ${index % 2 === 0 ? "animate-slide-left" : "animate-slide-right"}`}
              >
                <div className="mb-5">
                  {section.imageSrc ? (
                    <img
                      src={section.imageSrc}
                      alt={section.imageLabel}
                      className="w-full aspect-[9/16] rounded-none object-contain bg-background/40"
                    />
                  ) : (
                    <div className="w-full aspect-[9/16] rounded-lg border border-dashed border-purple-400/40 bg-background/40 flex items-center justify-center text-center px-4">
                      <span className="text-sm text-purple-200">
                        Add image: {section.imageLabel}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-purple-100 mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-purple-200 mb-4 leading-relaxed">
                  {section.description}
                </p>

                {"footnote" in section && section.footnote ? (
                  <ul className="space-y-2 text-sm text-purple-100 list-disc list-inside">
                    {section.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                ) : (
                  <ol className="space-y-2 text-sm text-purple-100 list-decimal list-inside">
                    {section.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                )}

                {"actionTitle" in section && section.actionTitle && section.actions?.length ? (
                  <div className="mt-5">
                    <h4 className="text-sm sm:text-base font-semibold text-purple-100 mb-2">
                      {section.actionTitle}
                    </h4>
                    <ul className="space-y-2 text-sm text-purple-200 list-disc list-inside">
                      {section.actions.map((action) => (
                        <li key={action}>{action}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {"footnote" in section && section.footnote ? (
                  <p className="mt-4 text-sm text-purple-200 italic leading-relaxed">
                    {section.footnote}
                  </p>
                ) : null}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600/5 to-blue-600/5">
        <div className="container-responsive max-w-4xl">
          <h2 className="text-responsive-lg font-bold mb-8 text-foreground text-center">
            Frequently Asked Questions
          </h2>
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
            Ready to Start Your
            <span className="block text-scriptly-animated">
              Acting Journey?
            </span>
          </h2>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join actors already using Scriptly to enhance their rehearsals.
          </p>
          <div className="animate-scale">
            <DownloadCTA location="faq" showIcon={false} />
          </div>
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
