import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Star, Users, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "20+", label: "Beta Users" },
  { icon: Clock, value: "50K+", label: "Hours Practiced" }
];

const AppPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-responsive">
        <div className="grid lg:grid-cols-2 gap-mobile items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 animate-slide-left">
            <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
              Trusted by
              <span className="block text-scriptly-animated">
                Rising Stars
              </span>
            </h2>
            <p className="animate-on-scroll text-responsive-sm text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Join the dozens of actors already using Scriptly to run lines and build confidence before auditions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-on-scroll">
                  <div className="animate-float w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg shadow-purple-500/30">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-2xl font-bold text-purple-100">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-purple-200">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Content - App Mockup */}
          <div className="relative order-1 lg:order-2 animate-slide-right">
            <div className="absolute inset-0 gradient-spotlight opacity-20 blur-3xl rounded-full"></div>
            <Card className="animate-scale relative p-6 sm:p-8 bg-gradient-to-r from-purple-600/10 to-purple-500/10 backdrop-blur-xl border border-purple-400/20 text-center rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
              <div className="animate-float w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg shadow-purple-500/30">
                <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-purple-100 mb-3 sm:mb-4">Scriptly</h3>
              <p className="text-sm sm:text-base text-purple-200 mb-4 sm:mb-6">
                "This app has transformed my audition preparation. It helps me memorize my lines faster, and the AI feedback is incredibly insightful."
              </p>
              <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 fill-purple-300" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-purple-200">— Sarah M., Professional Actor</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;