import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Car Price Prediction",
      description: "Used Python libraries numpy, pandas, matplotlib, seaborn to process and visualize factors impacting car pricing. This model aids customers in selecting the best model based on their preference and enables predictive modeling for future price estimation.",
      image: "/placeholder.svg",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "YouTube Trending Videos Analysis",
      description: "Comprehensive analysis using Python libraries including WordCloud, plotly, matplotlib, seaborn, numpy, pandas. Explores title length, common keywords, top channels, dominant categories like entertainment and optimal publishing times for maximizing trend potential.",
      image: "/placeholder.svg",
      technologies: ["Python", "WordCloud", "Plotly", "Matplotlib", "Seaborn"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Numri-Craft",
      description: "Created an app on Lovable platform about Numerical methods which promotes learning with fun. An interactive educational tool designed to make numerical methods engaging and accessible.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/ShachiPradhan/numi-verse-explorer"
    },
    {
      title: "Easy Clinic",
      description: "Created an app on Lovable platform that enables smooth hospital management through automatic patient token generation and doctors' availability tracking. Streamlines clinic operations efficiently.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/ShachiPradhan/easy-clinic-token"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="glass transition-smooth hover:scale-105 group overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/30">
                      {project.title.split(' ')[0][0]}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;