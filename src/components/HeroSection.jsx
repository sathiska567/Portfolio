import { ArrowDown } from "lucide-react";
// import avatarImage from "../assets/my.jpeg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="mb-8">
          {/* <div className="w-50 h-65 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-subtle"></div>
            <img 
              src={avatarImage} 
              alt="Sathiska Sasindu" 
              className="w-full h-full object-cover rounded-full relative z-10 border-4 border-primary/30 shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div> */}
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sathiska
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Sasindu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            <span className="text-primary">Associate Software Engineer</span> | Passionate about crafting efficient and scalable web solutions.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
