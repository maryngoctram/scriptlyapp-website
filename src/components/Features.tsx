import { Card } from "@/components/ui/card";
import { Mic, Images, Sparkles, MessagesSquare, SquareMenu } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Rehearse",
    description: "Our core feature: the Rehearsal tool. Rehearse and memorize lines seamlessly with AI assistance and feedback."
  },
  {
    icon: Images,
    title: "Visuals",
    description: "See your scene come alive with immersive, AI-generated images that help you imagine the setting, mood, and tone in your own mood board."
  },
  {
    icon: Sparkles,
    title: "Insights",
    description: "Get a Readiness Score and AI script analysis for every scene: a summary, key details, beats, subtext, stakes, and the moment before, so you walk into auditions and self-tapes prepared."
  },
  {
    icon: MessagesSquare,
    title: "Chat",
    description: "Ask an AI acting coach anything about your scene, from your character's objective to a confusing line, and get instant answers based on your script."
  },
  {
    icon: SquareMenu,
    title: "Notes",
    description: "Keep your own acting notes, blocking, and character ideas beside your script with a simple notes page for every scene."
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
            Comprehensive rehearsal tools designed by an acting professional.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-4xl md:max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className={`p-3 sm:p-6 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-lg sm:rounded-xl shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 ${index === 0 ? "col-span-2 col-start-2" : "col-span-2"} ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}>
              <div className="animate-float-mobile sm:animate-float w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-2 sm:mb-4 shadow-lg shadow-purple-500/30">
                <feature.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3 text-purple-100 leading-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-purple-200 leading-tight sm:leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;