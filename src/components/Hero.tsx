import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Play, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DownloadCTA from "@/components/DownloadCTA";
import { trackWatchDemo } from "@/utils/analytics";

const Hero = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initialize scroll animations
    import('../utils/scrollAnimations').then(({ startScrollAnimations }) => {
      startScrollAnimations();
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center section-padding gradient-hero">
      <div className="container-responsive text-center">
        {/* Badge */}
        <div className="animate-on-scroll inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-400/30 rounded-full px-6 py-3 text-sm font-medium text-purple-100 mb-6 sm:mb-8 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105">
          <Star className="w-4 h-4 text-purple-300 fill-purple-300" />
          Available on the iOS App Store
        </div>

        {/* Main Heading */}
        <h1 className="animate-on-scroll text-responsive-xl font-bold mb-4 sm:mb-6 text-foreground">
          <span className="block text-scriptly-animated">Scriptly</span>
          <span className="block text-subtitle-animated">
            Master Your Acting Craft
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6">
          The AI-powered app for actors to rehearse scripts and memorize lines with confidence
          for performances and auditions.
        </p>

        {/* Hero Image */}
        <div className="animate-scale relative mb-12 sm:mb-16">
          <div className="absolute inset-0 gradient-spotlight opacity-20 blur-3xl rounded-full"></div>
          {/* Each image's flex-grow is its width/height ratio, so both always render at the same height */}
          <div className="animate-float relative mx-auto flex items-start gap-3 sm:gap-6 w-full max-w-[340px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[640px]">
            <img
              src="/app-rehearse-iphone.jpg"
              alt="Scriptly on iPhone: rehearse lines with an AI reader"
              width={891}
              height={1905}
              style={{ flex: `${891 / 1905} 1 0%` }}
              className="min-w-0 h-auto rounded-2xl sm:rounded-3xl shadow-dramatic"
              loading="eager"
              decoding="async"
            />
            <img
              src="/app-ipad-split-view.jpg"
              alt="Scriptly on iPad with Split View: script and AI chat side by side"
              width={778}
              height={1249}
              style={{ flex: `${778 / 1249} 1 0%` }}
              className="min-w-0 h-auto rounded-2xl sm:rounded-3xl shadow-dramatic"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-on-scroll flex flex-row gap-3 sm:gap-4 justify-center">
          <DownloadCTA location="hero" className="whitespace-nowrap px-3 max-[359px]:px-2 max-[359px]:text-xs" />
          <Button
            onClick={() => { trackWatchDemo(); setDemoOpen(true); }}
            className="cta-bounce bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 text-purple-100 font-medium whitespace-nowrap px-3 max-[359px]:px-2 max-[359px]:text-xs py-2 sm:px-8 sm:py-4 text-sm sm:text-base rounded-xl backdrop-blur-xl border border-purple-400/30 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 h-auto"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Watch Demo
          </Button>
          <Dialog
            open={demoOpen}
            onOpenChange={(open) => {
              setDemoOpen(open);
              if (!open) {
                const video = videoRef.current;
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }
            }}
          >
            <DialogContent className="max-w-4xl w-[95vw] p-2 sm:p-4">
              <DialogTitle className="sr-only">
                Scriptly Walkthrough Demo
              </DialogTitle>
              <video
                ref={videoRef}
                src="/scriptly-demo.mov"
                controls
                autoPlay
                playsInline
                className="w-full max-w-full aspect-video rounded-lg bg-black"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Hero;