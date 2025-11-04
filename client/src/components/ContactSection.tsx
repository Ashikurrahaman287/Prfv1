import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! This is a demo - in production, this would send an email.');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-accent/20" data-testid="section-contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-contact-name"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-contact-email"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  data-testid="input-contact-message"
                />
              </div>

              <Button type="submit" className="w-full group" data-testid="button-submit-contact">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <a
                href="mailto:Ash@spudblocks.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover-elevate group reduced-motion-safe:hover-sparkle"
                data-testid="link-email"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors reduced-motion-safe:hover-sparkle">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">Ash@spudblocks.com</p>
                </div>
              </a>

              <a
                href="tel:+8801619617036"
                className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover-elevate group"
                data-testid="link-phone"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors reduced-motion-safe:hover-sparkle">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">+880 1619-617036</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/ashik-the-knight"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover-elevate group"
                data-testid="link-linkedin"
              >
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors reduced-motion-safe:hover-sparkle">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-semibold text-foreground">ashik-the-knight</p>
                </div>
              </a>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Looking forward to discussing how we can work together to drive innovation in the
                  Web3 and FinTech space.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
