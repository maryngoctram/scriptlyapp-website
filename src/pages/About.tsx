import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart, Instagram } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import DownloadCTA, { DownloadTagline } from "@/components/DownloadCTA";
import TikTokIcon from "@/components/icons/TikTokIcon";

const About = () => {
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
            About
            <span className="block text-scriptly-animated">
              Scriptly
            </span>
          </h1>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
            {/* Wide phones break before "with"; narrower phones keep the phrase together so "AI-" never splits from "powered" */}
            We're passionate about helping actors rehearse smarter{" "}
            <br className="hidden min-[410px]:inline sm:hidden" />
            <span className="whitespace-nowrap">with AI-powered tools.</span>
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-mobile items-center">
            <div className="animate-slide-left">
              <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Scriptly was born from a simple belief: AI should never replace the creative - it should help the artist express themselves more freely. We combine modern AI technology with time-tested acting techniques so actors can rehearse scripts, run lines, and prepare for auditions with clarity.
              </p>
              <p className="animate-on-scroll text-responsive-sm text-muted-foreground leading-relaxed">
                Our goal is to democratize acting education and help performers at every level build a reliable rehearsal workflow.
              </p>
            </div>
            <div className="relative animate-slide-right">
              <div className="absolute inset-0 gradient-spotlight opacity-20 blur-3xl rounded-full"></div>
              <Card className="animate-scale relative p-6 sm:p-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 text-center rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
                <div className="animate-float w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-purple-500/30">
                  <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-100 mb-3 sm:mb-4">Enhancing Creativity and Empowering Actors</h3>
                <p className="text-sm sm:text-base text-purple-200">
                  "AI should never replace the creative—it should be a tool to allow the artist to express themselves freely."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
              Our Values
            </h2>
            <p className="animate-on-scroll text-responsive-sm text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Scriptly.
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 md:gap-8">
            <Card className="animate-slide-left p-2 sm:p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-lg sm:rounded-xl text-center shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="animate-float-mobile sm:animate-float w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg shadow-purple-500/30">
                <Users className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xs sm:text-xl font-semibold mb-1 sm:mb-3 text-purple-100">Accessibility</h3>
              <p className="text-xs sm:text-base text-purple-200 leading-tight sm:leading-relaxed">
                Making professional acting training accessible to everyone, everywhere.
              </p>
            </Card>

            <Card className="animate-on-scroll p-2 sm:p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border border-blue-400/20 rounded-lg sm:rounded-xl text-center shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
              <div className="animate-float-mobile sm:animate-float w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg shadow-blue-500/30">
                <Award className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xs sm:text-xl font-semibold mb-1 sm:mb-3 text-blue-100">Excellence</h3>
              <p className="text-xs sm:text-base text-blue-200 leading-tight sm:leading-relaxed">
                Maintaining the highest standards in both technology and educational content.
              </p>
            </Card>

            <Card className="animate-slide-right p-2 sm:p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-lg sm:rounded-xl text-center shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
              <div className="animate-float-mobile sm:animate-float w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4 shadow-lg shadow-purple-500/30">
                <Heart className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xs sm:text-xl font-semibold mb-1 sm:mb-3 text-purple-100">Passion</h3>
              <p className="text-xs sm:text-base text-purple-200 leading-tight sm:leading-relaxed">
                Fueled by our love for the craft and dedication to actor success.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
            Ready to Join Our
            <span className="block text-scriptly-animated">
              Acting Community?
            </span>
          </h2>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be a part of the future of acting education. Start rehearsing scripts with your AI audition partner today.
          </p>
          <div className="animate-scale">
            <DownloadCTA location="about" />
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
                to="/faq"
                className="text-purple-300 hover:text-purple-100 underline transition-colors"
              >
                FAQ
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

export default About;