import { ExternalLink, Github } from "lucide-react";
import { PortfolioButton } from "@/components/ui/portfolio-button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const ProjectsSection = () => {
  

  const projects = [
    { id: 1, title: "WEATHER-APP-MAIN", description: "A responsive weather application built with HTML, CSS, and JavaScript using the OpenWeather API to display real-time weather data.", image: project1, technologies: ["HTML", "CSS", "JAVASCRIPT", "OPENWEATHER API"], liveUrl: "https://weather-app-main-ruby-six.vercel.app/", githubUrl: "https://github.com/gowthamb1547-dev/WEATHER-APP-MAIN.git", category: "Web Application" },
    { id: 2, title: "TASK MAN", description: "Taskman is a React-based task management application that helps users create, manage, and organize daily tasks efficiently and easily.", image: project2, technologies: ["React JS"], liveUrl: "https://weather-app-main-gvdg.vercel.app/", githubUrl: "https://github.com/gowthamb1547-dev/TASKMAN.git", category: "WEB APPLICATION" },
    { id: 3, title: "APPLIEDLATER", description: "AppliedLater is a Chrome extension that helps job seekers capture, organize, and track applications directly from job pages with a clean, lightweight, browser-first experience.", image: project3, technologies: ["HTML", "CSS", "VANILLA JS", "MANIFEST V3"], liveUrl: "https://example.com", githubUrl: "https://github.com/gowthamb1547-dev/CHROME-EXTENTION.git", category: "CHROME EXTENSION" },
    { id: 4, title: "Social Media Platform", description: "Modern social networking application with real-time messaging and content sharing capabilities.", image: project4, technologies: ["React", "Node.js", "MongoDB", "Socket.io"], liveUrl: "https://example.com", githubUrl: "https://github.com/example", category: "Social Platform" },
    { id: 5, title: "AI Task Management", description: "Intelligent project management tool with AI-powered task prioritization and automated workflows.", image: project5, technologies: ["React", "Python", "AWS Lambda", "PostgreSQL"], liveUrl: "https://example.com", githubUrl: "https://github.com/example", category: "AI/ML" },
    { id: 6, title: "Crypto Trading Platform", description: "Secure cryptocurrency trading platform with real-time market data and advanced charting tools.", image: project6, technologies: ["React", "Spring Boot", "Java", "PostgreSQL"], liveUrl: "https://example.com", githubUrl: "https://github.com/example", category: "FinTech" },
  ];

  

  return (
    <section id="projects" className="pt-12 pb-20 bg-black defer-visibility">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="section-heading text-fluid-h2">Featured Projects</h2>
          <div className="section-underline mx-auto mt-3 mb-5"></div>
          <p className="text-fluid-body text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card overflow-hidden hover-lift transition-shadow duration-300 border border-white/10 group hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:border-blue-500/40"
            >
              {/* Media */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="relative z-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
              </div>

              {/* Body */}
              <div className="p-5 md:p-6 space-y-3">
                <span className="text-xs px-3 py-1 bg-accent rounded-full text-accent-foreground font-medium">
                  {project.category}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[11px] md:text-xs px-2 py-1 bg-secondary rounded text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <PortfolioButton variant="hero" className="flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Open GitHub repo">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </PortfolioButton>
                  <PortfolioButton variant="hero" className="flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Open live site">
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  </PortfolioButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;