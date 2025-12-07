import { PortfolioButton } from "@/components/ui/portfolio-button";
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import BackgroundGalaxy from "@/components/BackgroundGalaxy";
// @ts-ignore
import profilePicture from "@/assets/profile-picture.jpg?url";

const HeroSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/gowtham-b-658801259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "#0077B5", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/gowthamb1547-dev", color: "#181717", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/Gowthamb_16?t=iU_Ta4HgcVPAze_I6dBN8A&s=09", color: "#1DA1F2", label: "Twitter" }
  ];
  
  const email = "gowtham7451@gmail.com";

  return (
    <section id="home" className="min-h-[90svh] flex flex-col justify-center relative overflow-hidden sm:min-h-[95svh] py-12 lg:py-0">
      {/* Animated Galaxy Background */}
      <div className="absolute inset-0 opacity-90">
        <BackgroundGalaxy />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto container-padding">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Profile Picture - Visible on all screens */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl flex-shrink-0">
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="w-full h-full object-cover object-center lg:object-[50%_45%] translate-y-2"
              loading="eager"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:text-right max-w-2xl">
            <div className="space-y-6 sm:space-y-8">
              {/* Name and Title */}
              <div className="space-y-4">
                <h1 className="text-fluid-hero bg-gradient-accent bg-clip-text text-transparent animate-glow">
                  Gowtham
                </h1>
                <p className="text-fluid-h2 text-muted-foreground font-light">
                  Full-Stack Developer
                </p>
                <p className="text-fluid-body text-muted-foreground max-w-xl ml-auto">
                  Crafting scalable solutions with modern technologies. Passionate about clean code, user experience, and cutting-edge tech.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-end gap-6">
                {/* Download CV Button */}
                <PortfolioButton variant="cv" size="hero" className="h-12 hover-lift" asChild>
                  <a href="/cv.pdf" download="Gowtham_CV.pdf" aria-label="Download CV">
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </PortfolioButton>

                {/* Social Icons Group */}
                <div className="inline-flex h-12 items-center rounded-lg border bg-white text-foreground shadow-md hover-lift px-3 sm:px-5">
                  {socialLinks.map((social, index) => (
                    <PortfolioButton key={index} variant="social" size="icon" asChild>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                        aria-label={`Open ${social.label}`}
                      >
                        <social.icon
                          className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                          style={{ color: social.color }}
                        />
                      </a>
                    </PortfolioButton>
                  ))}
                  <a
                    href={`mailto:${email}`}
                    aria-label="Send email to Gowtham"
                    className="group inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5 text-[#EA4335] transition-transform duration-200 group-hover:scale-110" />
                  </a>
                </div>
              </div>

              {/* Scroll Indicator removed */}
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;