import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border" data-testid="footer-main">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Ashikur Rahaman. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/ashik-the-knight"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 border border-primary/20 hover-elevate group"
              data-testid="link-footer-linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
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
