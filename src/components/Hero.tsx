import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-10" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">John Doe</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground mb-8 font-light">
            Full Stack Developer & UI/UX Designer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences with modern technologies. 
            Passionate about creating intuitive interfaces and scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full glow transition-smooth hover:scale-110">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full glow transition-smooth hover:scale-110">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full glow transition-smooth hover:scale-110">
              <Mail className="w-6 h-6" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;