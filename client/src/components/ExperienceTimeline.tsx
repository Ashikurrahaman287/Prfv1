import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Copx.AI',
    role: 'Business Development Manager',
    period: 'Mar 2024 - Sep 2025',
    achievements: [
      'Spearheaded community-driven governance through smart contracts',
      'Increased client acquisition by 20% through strategic partnerships',
      'Bridged traditional finance with cryptocurrency',
    ],
  },
  {
    company: 'Tapbit.com',
    role: 'Business Development Manager',
    period: 'Mar 2022 - Aug 2023',
    achievements: [
      'Drove a 30% rise in revenue growth',
      'Increased customer retention by 15% via new product launches',
    ],
  },
  {
    company: 'Spudblocks.com',
    role: 'Business Development Manager',
    period: 'Feb 2018 - Sep 2023',
    achievements: [
      'Streamlined project timelines by 25%',
      'Achieved a client satisfaction rate of 97% in 2023',
    ],
  },
  {
    company: 'Plutusfi.io',
    role: 'Business Development Manager',
    period: 'Jan 2021 - Jan 2023',
    achievements: [
      'Established key partnerships enhancing market presence',
      'Led marketing campaigns that increased user participation',
    ],
  },
  {
    company: 'Coinverse.com',
    role: 'Business Development Manager',
    period: 'Mar 2018 - Jan 2020',
    achievements: [
      'Developed business strategies aligned with industry trends',
      'Boosted brand visibility through influencer partnerships',
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 bg-accent/20" data-testid="section-experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Professional Journey
        </h2>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate relative overflow-hidden"
              data-testid={`timeline-item-${index}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.company}</h3>
                    <p className="text-base text-primary font-semibold">{exp.role}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
