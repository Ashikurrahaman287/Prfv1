import { Linkedin } from 'lucide-react';
import { SiX, SiGithub, SiFacebook, SiSubstack } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border" data-testid="footer-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2018-2025 Ashikur Rahaman. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/ashik-the-knight"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover-elevate hover-sparkle group"
              data-testid="link-footer-twitter"
              aria-label="Twitter Profile"
            >
              <SiX className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </a>
            
            <a
              href="https://github.com/ashik-the-knight"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover-elevate hover-sparkle group"
              data-testid="link-footer-github"
              aria-label="GitHub Profile"
            >
              <SiGithub className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </a>
            
            <a
              href="https://linkedin.com/in/ashik-the-knight"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover-elevate hover-sparkle group"
              data-testid="link-footer-linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </a>
            
            <a
              href="https://facebook.com/ashik-the-knight"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover-elevate hover-sparkle group"
              data-testid="link-footer-facebook"
              aria-label="Facebook Profile"
            >
              <SiFacebook className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </a>
            
            <a
              href="https://substack.com/@ashik-the-knight"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover-elevate hover-sparkle group"
              data-testid="link-footer-substack"
              aria-label="Substack Profile"
            >
              <SiSubstack className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Pioneering the Future of FinTech & Web3
          </p>
        </div>
      </div>
    </footer>
  );
}
