import { ArrowRight } from "lucide-react";

const Workflow = () => {
  const steps = [
    {
      image: "/how-step-1-upload.jpg",
      imageAlt: "Upload Scene menu: Photo Library, Take Photo, or Choose File",
      title: "Upload Scene",
      description: "Upload your script or scene in PDF or text format."
    },
    {
      image: "/how-step-2-processing.jpg",
      imageAlt: "Scriptly preparing script sections from an uploaded page",
      title: "AI Processes",
      description: "AI analyzes dialogue and assigns character lines"
    },
    {
      image: "/how-step-3-rehearse.jpg",
      imageAlt: "Rehearse mode highlighting the current line",
      title: "Rehearse",
      description: "Rehearse and memorize lines with AI feedback."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-responsive">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="animate-on-scroll text-responsive-lg font-bold mb-4 sm:mb-6 text-foreground">
            How
            <span className="block text-scriptly-animated">
              Scriptly Works
            </span>
          </h2>
          <p className="animate-on-scroll text-responsive-sm text-muted-foreground max-w-2xl mx-auto">
            Transform any script into a personalized rehearsal flow for actors.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Workflow */}
          <div className="hidden md:flex items-center justify-center gap-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Screenshot and Content */}
                <div className={`flex flex-col items-center text-center ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}>
                  {/* Step Screenshot */}
                  <div className="animate-float w-[200px] aspect-[3/4] mb-4 rounded-2xl overflow-hidden bg-[#131a2c] border border-purple-400/30 shadow-lg shadow-purple-500/30 flex items-center justify-center">
                    <img src={step.image} alt={step.imageAlt} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  
                  {/* Step Content */}
                  <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-xl p-6 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 min-w-[200px] max-w-[248px]">
                    <h3 className="text-lg font-semibold mb-2 text-purple-100">{step.title}</h3>
                    <p className="text-sm text-purple-200">{step.description}</p>
                  </div>
                </div>

                {/* Arrow between steps (except last) */}
                {index < steps.length - 1 && (
                  <div className="mx-2 flex items-center justify-center mt-16">
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Workflow */}
          <div className="md:hidden flex items-center justify-center gap-1 overflow-x-auto pt-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Screenshot and Content */}
                <div className="animate-on-scroll flex flex-col items-center text-center">
                  {/* Step Screenshot */}
                  <div className="animate-float w-[100px] aspect-[3/4] mb-1 rounded-lg overflow-hidden bg-[#131a2c] border border-purple-400/30 shadow-lg shadow-purple-500/30 flex items-center justify-center">
                    <img src={step.image} alt={step.imageAlt} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  
                  {/* Step Content */}
                  <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-xl border border-purple-400/20 rounded-lg p-2 shadow-lg shadow-purple-500/10 min-w-[100px] max-w-[110px]">
                    <h3 className="text-xs font-semibold mb-1 text-purple-100 leading-tight">{step.title}</h3>
                    <p className="text-xs text-purple-200 leading-tight">{step.description}</p>
                  </div>
                </div>

                {/* Arrow between steps (except last) */}
                {index < steps.length - 1 && (
                  <div className="mx-1 flex items-center justify-center mt-6">
                    <ArrowRight className="w-3 h-3 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
