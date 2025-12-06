import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Gowtham. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;