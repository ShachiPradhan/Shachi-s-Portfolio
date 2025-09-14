import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Python", "C", "Exploratory Data Analysis", "Data Visualization", "GitHub", "Git Bash",
    "Firebase Studio", "Visual Studio", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib", "Seaborn"
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
              Enthusiastic Computer Science student passionate about data science and AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a 2nd year Computer Science (Data Science) student at AMC Engineering College, Bengaluru. 
                I'm passionate about using code and data to solve real-world problems and currently learning 
                AI and analytics tools to build impactful projects.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My journey in data science has led me to work on various projects involving data analysis, 
                visualization, and predictive modeling. I enjoy exploring datasets to uncover insights and 
                create solutions that can make a real difference.
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
                  <span className="text-sm font-medium text-muted-foreground">Academic Year</span>
                  <span className="text-2xl font-bold gradient-text">2nd Year</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Projects Completed</span>
                  <span className="text-2xl font-bold gradient-text">4+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Programming Languages</span>
                  <span className="text-2xl font-bold gradient-text">3+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Data Analysis Tools</span>
                  <span className="text-2xl font-bold gradient-text">5+</span>
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