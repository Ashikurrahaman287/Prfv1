import { Card } from '@/components/ui/card';
import { Trophy, Handshake, Lightbulb, TrendingUp } from 'lucide-react';

const awards = [
  {
    title: 'Business Development Excellence',
    organization: 'Copx.AI',
    date: '2025',
    description: 'Spearheaded strategic partnerships and client acquisition',
    icon: Trophy,
    color: 'from-chart-3 to-chart-4',
  },
  {
    title: 'Growth Strategic Leadership',
    organization: 'AscendEX',
    date: '2025',
    description: 'Drove platform expansion and user growth initiatives',
    icon: TrendingUp,
    color: 'from-primary to-chart-2',
  },
  {
    title: 'Strategic Partnership Architect',
    organization: 'Tapbit.com',
    date: 'Jan 2023',
    description: 'Expanded market reach by 40%',
    icon: Handshake,
    color: 'from-chart-2 to-chart-3',
  },
  {
    title: 'Innovative Support Solutions',
    organization: 'Hotbit.io',
    date: 'Dec 2020',
    description: 'Implemented chatbot system improving efficiency by 20%',
    icon: Lightbulb,
    color: 'from-chart-4 to-chart-5',
  },
];

export default function AwardsSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" data-testid="section-awards">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Awards & Recognition
          </h2>
          
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary via-chart-2 to-primary mx-auto rounded-full animate-pulse" />
          
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Celebrating excellence and innovation in blockchain and business development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card
                key={index}
                className="relative p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate group overflow-hidden"
                data-testid={`card-award-${award.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${award.color} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`p-5 rounded-2xl bg-gradient-to-br ${award.color} mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">{award.title}</h3>
                  
                  <div className="mb-4">
                    <p className="text-sm font-bold text-primary mb-1">{award.organization}</p>
                    <p className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full inline-block">{award.date}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
