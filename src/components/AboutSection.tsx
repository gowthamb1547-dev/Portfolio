const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-accent rounded-full"></div>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a passionate full-stack developer with 5+ years of experience building 
                scalable web applications and cloud solutions. My journey in tech started 
                with a curiosity for problem-solving and has evolved into a deep expertise 
                in modern development practices.
              </p>
              
              <p>
                I specialize in creating efficient, user-centric applications using cutting-edge 
                technologies. From architecting cloud infrastructures to crafting intuitive 
                front-end experiences, I bring a holistic approach to every project.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="glass-card p-8 hover-lift">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">My Approach</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                    <span className="text-muted-foreground">Clean, maintainable code</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                    <span className="text-muted-foreground">User-first design thinking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                    <span className="text-muted-foreground">Scalable architecture</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                    <span className="text-muted-foreground">Continuous learning</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/3 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;