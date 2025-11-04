import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    company: 'Saga Lab',
    role: 'Software Engineer',
    period: 'Mar 2025 - Present',
    achievements: [
      'Saga Lab is an interdisciplinary AI innovation research lab dedicated to integrating artificial intelligence into the humanities',
      'Developing culturally and linguistically competent AI systems',
      'Revolutionizing teaching, learning, and research through AI integration',
    ],
  },
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
    company: 'IoTeX',
    role: 'dApp Developer - Contract',
    period: 'Feb 2024 - Mar 2025',
    achievements: [
      'Developed decentralized applications on IoTeX blockchain platform',
      'Connected physical devices to decentralized networks for secure data flow',
      'Enabled real-time data flow for AI systems and dApps',
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
    company: 'Biconomy',
    role: 'Operation Manager',
    period: 'Sep 2021 - Jul 2022',
    achievements: [
      'Managed operations for centralized cryptocurrency exchange serving global users',
      'Optimized spot and futures trading, staking, and cryptocurrency services',
      'Enhanced user experience with improved security measures and interface',
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
    company: 'Spudblocks.com',
    role: 'Business Development Manager',
    period: 'Feb 2018 - Sep 2023',
    achievements: [
      'Streamlined project timelines by 25%',
      'Achieved a client satisfaction rate of 97% in 2023',
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

function TimelineItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();
  
  const isLeft = index % 2 === 0;
  
  return (
    <motion.div
      ref={cardRef}
      className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
      data-testid={`timeline-item-${index}`}
    >
      <motion.div
        className="flex-1 w-full"
        initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
        animate={shouldReduceMotion ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 })}
        transition={shouldReduceMotion ? { duration: 0 } : { 
          duration: 0.6, 
          delay: index * 0.15,
          type: "spring",
          bounce: 0.3
        }}
      >
        <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-card-border hover-elevate relative overflow-visible">
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
                <motion.li 
                  key={achIndex} 
                  className="flex gap-2"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  animate={shouldReduceMotion ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 })}
                  transition={shouldReduceMotion ? { duration: 0 } : { 
                    duration: 0.4, 
                    delay: (index * 0.15) + 0.4 + (achIndex * 0.1)
                  }}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </Card>
      </motion.div>

      <div className="hidden md:flex relative z-10">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const timelineRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-24 px-6 bg-accent/20" data-testid="section-experience">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Professional Journey
        </h2>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full" />

        <div className="relative" ref={timelineRef}>
          <motion.div 
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary to-chart-2 origin-top hidden md:block"
            initial={shouldReduceMotion ? { height: "100%" } : { height: 0 }}
            animate={shouldReduceMotion ? { height: "100%" } : (isTimelineInView ? { height: "100%" } : { height: 0 })}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.5, ease: "easeOut" }}
            style={{ transform: 'translateX(-50%)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
