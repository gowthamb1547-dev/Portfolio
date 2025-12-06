import { PortfolioButton } from "@/components/ui/portfolio-button";
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import BackgroundGalaxy from "@/components/BackgroundGalaxy";

const HeroSection = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/gowtham-b-658801259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "#0077B5", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/gowthamb1547-dev", color: "#181717", label: "GitHub" },
    { icon: Mail, href: "gowtham7451@gmail.com", color: "#EA4335", label: "Email" },
    { icon: Twitter, href: "https://x.com/Gowthamb_16?t=iU_Ta4HgcVPAze_I6dBN8A&s=09", color: "#1DA1F2", label: "Twitter" }
  ];

  return (
    <section id="home" className="min-h-[90svh] flex items-center justify-end relative overflow-hidden sm:min-h-[95svh]">
      {/* Animated Galaxy Background */}
      <div className="absolute inset-0 opacity-90">
        <BackgroundGalaxy />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto container-padding flex justify-end">
          <div className="text-right w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
            <div className="space-y-8 pt-10 xs:pt-14 sm:pt-0">
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