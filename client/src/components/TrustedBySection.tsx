import { Badge } from '@/components/ui/badge';

const companies = [
  'Hotbit',
  'Bybit',
  'MEXC',
  'Biconomy',
  'Tapbit',
  'Gate.io',
  'AscendEX',
];

export default function TrustedBySection() {
  return (
    <section className="py-20 px-6 bg-accent/20 overflow-hidden relative" data-testid="section-trusted-by">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse -top-48 -left-48" />
        <div className="absolute w-96 h-96 bg-chart-2/5 rounded-full blur-3xl animate-pulse -bottom-48 -right-48" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Trusted By The Best
        </h2>

        <div className="relative">
          <div className="flex animate-scroll gap-8">
            {[...companies, ...companies].map((company, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-base px-6 py-3 whitespace-nowrap bg-card/50 backdrop-blur-sm hover-elevate hover-glow"
                data-testid={`badge-company-${company.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {company}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
