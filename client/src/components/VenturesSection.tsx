import { Card } from '@/components/ui/card';
import spudBlocksLogo from '@assets/Spud Blocks Only Logo Color Full_1762234458919.png';
import arcaneLogo from '@assets/Black and White Modern Streetwear Sport Logo_1762234382168.png';
import ascendexLogo from '@assets/photo_2022-12-27_08-08-25 (1)_1762234436801.jpg';
import agtLogo from '@assets/487989397_122221850360195791_7773183041984101712_n_1762234357260.jpg';

const ventures = [
  {
    name: 'SpudPay',
    role: 'Founder',
    period: '2025 - Present',
    description:
      'AI & blockchain-powered mobile financial services for B2B, B2C, and C2C transactions. Zero-cost cross-border payments with gold-backed, 100% security.',
    logo: spudBlocksLogo,
    gradient: 'from-primary to-chart-2',
  },
  {
    name: 'Arcane Group',
    role: 'Advisor',
    period: '2025 - Present',
    description:
      'An innovative investment firm dedicated to empowering and funding businesses that promote natural living, health, and overall well-being. The firm focuses on ventures that align with sustainable growth, organic products, eco-friendly innovation, and holistic health solutions.',
    logo: arcaneLogo,
    gradient: 'from-chart-5 to-chart-3',
  },
  {
    name: 'AscendEX',
    role: 'Board Member',
    period: '2024 - Present',
    description:
      'A leading global digital asset exchange serving 20 million active users.',
    logo: ascendexLogo,
    gradient: 'from-chart-4 to-primary',
  },
  {
    name: 'AGT Venture',
    role: 'Board Member',
    period: '2022 - Present',
    description:
      'Backed by a $115.1M investment, AGT Venture has invested in 28+ high-impact projects.',
    logo: agtLogo,
    gradient: 'from-chart-3 to-chart-4',
  },
  {
    name: 'SpudBlocks',
    role: 'CEO',
    period: '2018 - 2024',
    description:
      'Pioneering the Future of Web3 & Web4. Trusted by 135 major clients over the past 7 years.',
    logo: spudBlocksLogo,
    gradient: 'from-chart-2 to-chart-3',
  },
];

export default function VenturesSection() {
  return (
    <section id="ventures" className="py-24 px-6" data-testid="section-ventures">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Leadership & Ventures
        </h2>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate group overflow-hidden relative"
              data-testid={`card-venture-${venture.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${venture.gradient} opacity-10 rounded-full blur-3xl`} />
              
              <div className="relative">
                <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-xl bg-background/50 p-3 border border-border">
                  <img 
                    src={venture.logo} 
                    alt={`${venture.name} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{venture.name}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-semibold text-primary">{venture.role}</span>
                  <span className="text-sm text-muted-foreground">• {venture.period}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{venture.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
