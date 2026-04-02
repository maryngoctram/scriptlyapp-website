import { Card } from "@/components/ui/card";
import { NotebookPen, Sparkles, Users, FileText } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Rehearsal",
    description: "Rehearse and memorize lines with AI feedback."
  },
  {
    icon: Sparkles,
    title: "Visualization",
    description: "See your scene come alive with immersive, AI-generated visuals that help you imagine the setting, mood, and tone."
  },
  {
    icon: Users,
    title: "Scene Analysis",
    description: "Break down each scene with smart insights into pacing, emotion, objectives, and key dramatic beats for stronger auditions."
  },
  {
    icon: NotebookPen,
    title: "Character Analysis",
    description: "Explore your character's motivations, relationships, and emotional arc to build a deeper, more authentic performance as an actor."
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
            Everything You Need to
            <span className="block text-scriptly-animated">
              Excel in Your Performance
            </span>
          </h2>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI tools designed by an acting professional to help you rehearse.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className={`p-3 sm:p-6 md:p-8 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-lg sm:rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}>
              <div className="animate-float-mobile sm:animate-float w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-2 sm:mb-4 md:mb-6 shadow-lg shadow-purple-500/30">
                <feature.icon className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-purple-100 leading-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm md:text-base text-purple-200 leading-tight sm:leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;