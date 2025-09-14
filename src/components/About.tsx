import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Python", 
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Figma"
  ];

  return (
    <section id="about" className="py-24 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with 5+ years of experience creating innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate full-stack developer who loves turning complex problems into 
                simple, beautiful solutions. With expertise in modern web technologies, I create 
                applications that are not just functional, but also provide exceptional user experiences.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-4 py-2 text-sm font-medium transition-smooth hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <Card className="glass p-8 transition-smooth hover:scale-105">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Experience</span>
                  <span className="text-2xl font-bold gradient-text">5+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Projects Completed</span>
                  <span className="text-2xl font-bold gradient-text">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Happy Clients</span>
                  <span className="text-2xl font-bold gradient-text">30+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Coffee Consumed</span>
                  <span className="text-2xl font-bold gradient-text">∞</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;