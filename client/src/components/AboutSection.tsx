import { Card } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6" data-testid="section-about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-12 rounded-full" />

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-card-border hover-elevate">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I am a <span className="text-foreground font-semibold">dynamic and proactive professional</span> with{' '}
            <span className="text-primary font-semibold">10+ years of experience</span> in the Fintech and
            Blockchain industry, specializing in business growth and development. Known for my exceptional
            work ethic and sharp problem-solving abilities, I excel at identifying and capitalizing on
            opportunities. With a focused mindset, I take the initiative to drive{' '}
            <span className="text-foreground font-semibold">sustainable business growth</span>, leveraging
            my diverse skill set to manage, develop, and scale businesses effectively.
          </p>
        </Card>
      </div>
    </section>
  );
}
