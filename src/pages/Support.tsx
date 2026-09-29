import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Instagram } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DownloadCTA from "@/components/DownloadCTA";
import TikTokIcon from "@/components/icons/TikTokIcon";

const Support = () => {
  useEffect(() => {
    // Initialize scroll animations
    import('../utils/scrollAnimations').then(({ startScrollAnimations }) => {
      startScrollAnimations();
    });
  }, []);

  const userGuideSections = [
    {
      title: "Using the Visuals Tab",
      description: "Create a mood board to visualize your scene using your own images or AI-generated inspiration.",
      imageSrc: "/app-user-guide-visuals-tab.jpg",
      stepsTitle: "Creating Your Mood Board",
      steps: [
        "Tap Visuals in the bottom navigation bar.",
        "Select Add your own image to upload an image.",
        "Or use AI to generate images for your Set, Wardrobe, or Props.",
        "Arrange your images to bring your scene to life.",
      ],
      actionTitle: "Additional Tools & Options",
      actions: [
        { label: "Script Icon (Top Left):", text: "Access your original script file." },
        {
          label: "Three Dots (•••) (Top Right):",
          text: "Open additional mood board options:",
          subItems: ["Reset Layout", "Generate Full Board", "Generate Set", "Generate Wardrobe", "Generate Props"],
        },
      ],
      imageLabel: "Visuals tab mood board screenshot",
    },
    {
      title: "Using the Rehearse Tab",
      description: "Practice your lines with AI-powered scene partners and customize your rehearsal experience.",
      imageSrc: "/app-user-guide-rehearsal-menu.jpg",
      stepsTitle: "Rehearsing Your Scene",
      steps: [
        "Tap Rehearse in the bottom navigation bar.",
        "Follow your highlighted lines as you rehearse.",
        {
          text: "Use the playback controls to navigate your scene:",
          subItems: [
            { label: "Rewind:", text: "Go back to the previous line." },
            { label: "Play/Pause:", text: "Start or pause your rehearsal." },
            { label: "Fast-Forward:", text: "Skip to the next line." },
            { label: "Playback Speed:", text: "Adjust the rehearsal speed." },
          ],
        },
      ],
      actionTitle: "Additional Tools & Options",
      actions: [
        { label: "Script Icon (Top Left):", text: "Access your original script file." },
        { label: "Chat Icon (Top Right):", text: "Add individual notes to specific lines for greater clarity and detail." },
        {
          label: "Three Dots (•••) (Top Right):",
          text: "Open additional rehearsal options:",
          subItems: ["Change Your Role", "Voice Selection", "Range Selection", "Edit Mode", "Hide Stage Directions", "Auto-Loop"],
        },
      ],
      imageLabel: "Rehearse tab screenshot",
    },
    {
      title: "Using the Insights Tab",
      description: "Explore AI-generated scene and character insights to deepen your understanding of the script and your role.",
      imageSrc: "/app-user-guide-insights-tab.jpg",
      stepsTitle: "Exploring Your Insights",
      steps: [
        "Tap Insights in the bottom navigation bar.",
        "Select Scene or an individual character (e.g., SAM or ROY) to view their insights.",
        "Tap any insight to expand and read its details.",
        "Tap the Pencil Icon to manually edit or personalize any insight.",
      ],
      groupsTitle: "What You'll Find in Insights",
      groups: [
        {
          title: "Scene Insights:",
          items: ["Summary", "Key Details", "Beats", "Subtext", "Stakes", "Moment Before"],
        },
        {
          title: "Character Insights:",
          items: ["Basic Facts", "Music", "Motivations", "Backstory", "Character Arc", "Occupation Insight"],
        },
      ],
      actionTitle: "Additional Tools & Options",
      actions: [
        { label: "Script Icon (Top Left):", text: "Access your original script file." },
        {
          label: "Three Dots (•••) (Top Right):",
          text: "Open additional insight options:",
          subItems: ["Refresh Scene Insights", "Refresh Character Insights", "Select to Delete specific insights"],
        },
      ],
      imageLabel: "Insights tab screenshot",
    },
    {
      title: "Using the Chat Tab",
      description: "Ask Scriptly's AI questions about your scene or character to explore motivations, subtext, and other details that bring your performance to life.",
      imageSrc: "/app-user-guide-chat-tab.jpg",
      stepsTitle: "Chatting About Your Scene",
      steps: [
        "Tap Chat in the bottom navigation bar.",
        "Select a suggested question to get started, or type your own in the chat box.",
        "Tap the Send Arrow to submit your question.",
        "Continue asking follow-up questions to explore your scene or character in greater detail.",
      ],
      actionTitle: "What You Can Ask",
      actions: [
        { label: "Character Motivations:", text: "What does my character want in this scene?" },
        { label: "Subtext:", text: "What is my character not saying out loud?" },
        { label: "Scene Context:", text: "What happened right before this scene starts?" },
        { label: "Character Development:", text: "How does my character change throughout the scene?" },
      ],
      imageLabel: "Chat tab screenshot",
    },
    {
      title: "Using the Notes Tab",
      description: "Your personal workspace to jot down ideas, organize your thoughts, and study your scene throughout the rehearsal process.",
      imageSrc: "/app-user-guide-notes-tab.jpg",
      stepsTitle: "Taking Notes",
      steps: [
        "Tap Notes in the bottom navigation bar.",
        "Tap anywhere in the workspace to start writing.",
        "Record your thoughts, observations, or reminders as you prepare for your scene.",
        "Return to your Notes anytime to review or update them.",
      ],
      actionTitle: "What You Can Write",
      actions: [
        { label: "Scene Observations:", text: "Important details or discoveries about your scene." },
        { label: "Character Notes:", text: "Thoughts on motivations, emotions, and character development." },
        { label: "Rehearsal Reminders:", text: "Acting choices, feedback, or areas to improve." },
        { label: "Personal Reflections:", text: "Ideas and takeaways from your rehearsal sessions." },
      ],
      imageLabel: "Notes tab screenshot",
    },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-hero">
        <div className="container-responsive text-center">
          <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
            Scriptly
            <span className="block text-scriptly-animated">
              Support Center
            </span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore helpful guides to get the most out of Scriptly.
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

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
            {userGuideSections.map((section, index) => (
              <Card
                key={section.title}
                className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""} p-5 sm:p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 ${index % 2 === 0 ? "animate-slide-left" : "animate-slide-right"}`}
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

                {"stepsTitle" in section && section.stepsTitle ? (
                  <h4 className="text-sm sm:text-base font-semibold text-purple-100 mb-2">
                    {section.stepsTitle}
                  </h4>
                ) : null}

                {section.steps.length === 0 ? null : (
                  <ol className="space-y-2 text-sm text-purple-100 list-decimal list-inside">
                    {section.steps.map((step) =>
                      typeof step === "string" ? (
                        <li key={step}>{step}</li>
                      ) : (
                        <li key={step.text}>
                          {step.text}
                          <ul className="mt-2 ml-5 space-y-1 text-purple-200 list-disc list-inside">
                            {step.subItems.map((item) => (
                              <li key={item.label}>
                                <span className="font-semibold text-purple-100">{item.label}</span> {item.text}
                              </li>
                            ))}
                          </ul>
                        </li>
                      )
                    )}
                  </ol>
                )}

                {"groups" in section && section.groups?.length ? (
                  <div className="mt-5">
                    <h4 className="text-sm sm:text-base font-semibold text-purple-100 mb-2">
                      {section.groupsTitle}
                    </h4>
                    {section.groups.map((group) => (
                      <div key={group.title} className="mt-3">
                        <p className="text-sm font-semibold text-purple-100 mb-1">{group.title}</p>
                        <ul className="space-y-1 text-sm text-purple-200 list-disc list-inside">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}

                {"actionTitle" in section && section.actionTitle && section.actions?.length ? (
                  <div className="mt-5">
                    <h4 className="text-sm sm:text-base font-semibold text-purple-100 mb-2">
                      {section.actionTitle}
                    </h4>
                    <ul className="space-y-2 text-sm text-purple-200 list-disc list-inside">
                      {section.actions.map((action) =>
                        typeof action === "string" ? (
                          <li key={action}>{action}</li>
                        ) : (
                          <li key={action.label}>
                            <span className="font-semibold text-purple-100">{action.label}</span> {action.text}
                            {action.subItems ? (
                              <ul className="mt-2 ml-5 space-y-1 list-[circle] list-inside">
                                {action.subItems.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ) : null}

              </Card>
            ))}
          </div>
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
            <DownloadCTA location="support" />
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

export default Support;
