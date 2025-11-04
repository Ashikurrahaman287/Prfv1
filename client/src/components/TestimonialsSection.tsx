import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Anndy Lian',
    title: 'Chairman - INB Blockchain',
    quote:
      'Ashikur has an exceptional ability to identify blockchain opportunities and turn them into sustainable business growth. His strategic vision in Web3 is truly remarkable.',
  },
  {
    name: 'Zenne Zheng',
    title: 'CMO - One Capital',
    quote:
      'Working with Ashikur has been transformative for our fintech initiatives. His deep understanding of both business development and blockchain technology sets him apart in the industry.',
  },
  {
    name: 'Aurora Zhou',
    title: 'BDM - Hotbit Exchange',
    quote:
      'Ashikur brings a unique combination of technical expertise and business acumen. His contributions to our blockchain projects have been invaluable and consistently exceed expectations.',
  },
  {
    name: 'Rosa Wong',
    title: 'Managing Director - Bybit Exchange',
    quote:
      'A true visionary in the Web3 space. Ashikur\'s strategic partnerships and innovative approach to business development have helped us achieve remarkable growth in competitive markets.',
  },
  {
    name: 'Yvonne Wong',
    title: 'Managing Director - AscendEX',
    quote:
      'Ashikur\'s expertise in blockchain solutions and his proactive approach to problem-solving make him an outstanding leader. His work has significantly impacted our venture\'s success.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Testimonials
        </h2>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-card-border hover-elevate group relative overflow-hidden"
              data-testid={`card-testimonial-${testimonial.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground text-lg">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium mt-1">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
