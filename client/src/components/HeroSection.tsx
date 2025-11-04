import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(end);
      setIsAnimating(false);
      return;
    }

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * (end - startValue) + startValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, shouldReduceMotion]);

  return (
    <span className={`font-mono ${isAnimating && !shouldReduceMotion ? 'animate-glitch-flicker' : ''}`}>
      {count}
    </span>
  );
}

function ParticleEmitter() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${8 + Math.random() * 4}s`,
  }));

  return (
    <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bottom-0 w-1 h-1 bg-primary/30 rounded-full blur-[1px] animate-particle-float"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-chart-2/10" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <ParticleEmitter />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Web3 Visionary</span>
        </div>

        <div className="relative inline-block mb-6">
          <h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent animate-gradient"
            data-testid="text-hero-title"
          >
            Pioneering the Future of FinTech & Web3
          </h1>
          <div className="absolute -inset-4 bg-primary/5 blur-2xl -z-10 animate-pulse" />
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4" data-testid="text-hero-name">
          <span className="font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">Ashikur Rahaman</span>
        </p>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Business Entrepreneur | Blockchain Developer | Building Tomorrow's Decentralized Economy
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            className="text-base font-medium group hover-glow"
            onClick={() => scrollToSection('#experience')}
            data-testid="button-view-work"
          >
            View My Work
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base font-medium backdrop-blur-sm hover-glow"
            onClick={() => scrollToSection('#contact')}
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { value: 10, suffix: '+', label: 'Years of Experience' },
            { value: 115, prefix: '$', suffix: 'M+', label: 'Venture Capital Backing' },
            { value: 20, suffix: 'M+', label: 'Active Users Served' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-card-border hover-elevate"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.prefix}
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
