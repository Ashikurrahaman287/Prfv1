import { Card } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { 
  SiPython, 
  SiJavascript, 
  SiGo, 
  SiSolidity,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiAmazon,
  SiDocker,
  SiGraphql,
  SiPostgresql
} from 'react-icons/si';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Core Business Skills',
    icon: Briefcase,
    skills: [
      { name: 'Business Strategy & Growth Planning', icon: null },
      { name: 'Sales Leadership & Funnel Management', icon: null },
      { name: 'Strategic Partnerships & Negotiation', icon: null },
      { name: 'Blockchain & Web3 Solutions', icon: null },
      { name: 'Financial Forecasting & Revenue Modeling', icon: null },
    ],
  },
  {
    title: 'Programming Languages',
    icon: SiJavascript,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'SQL', icon: SiPostgresql },
      { name: 'Golang', icon: SiGo },
      { name: 'Solidity', icon: SiSolidity },
    ],
  },
  {
    title: 'Blockchain & Backend',
    icon: SiNodedotjs,
    skills: [
      { name: 'Web3.js', icon: SiJavascript },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Solidity', icon: SiSolidity },
      { name: 'Smart Contracts', icon: null },
      { name: 'DeFi Protocols', icon: null },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: SiDocker,
    skills: [
      { name: 'Git & GitHub', icon: SiGithub },
      { name: 'Google Cloud', icon: SiGooglecloud },
      { name: 'AWS', icon: SiAmazon },
      { name: 'Docker', icon: SiDocker },
      { name: 'REST APIs', icon: null },
      { name: 'GraphQL', icon: SiGraphql },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-24 px-6 bg-accent/20" data-testid="section-skills" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Core Competencies
        </h2>
        
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-chart-2 mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={shouldReduceMotion ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 })}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card
                  className="p-8 bg-card/50 backdrop-blur-sm border-card-border group h-full"
                  data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:[text-shadow:0_0_8px_hsl(var(--primary)/0.5)] transition-all">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skillIndex}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover-elevate"
                          data-testid={`badge-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {SkillIcon && <SkillIcon className="w-5 h-5 text-primary" />}
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
