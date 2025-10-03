import React from 'react';
import { Button } from "@/components/ui/button";
import { BlurIn } from "@/components/ui/blur-in";
import { FadeIn } from "@/components/ui/fade-in";
import { 
  Play,
  Utensils,
  Shield,
  Figma,
  CloudSnow,
  Smartphone,
  Apple,
  Edit,
  Grid3X3,
  Building,
  Github,
  Slash,
  Star,
  Navigation,
  Home,
  User,
  Heart,
  Zap,
  Target,
  Users,
  Settings
} from "lucide-react";

const CTASection = () => {
  const companyIcons = [
    [Utensils, Shield, Figma, CloudSnow, Smartphone, Apple, Edit],
    [Grid3X3, Building, Github, Slash, Star, Navigation, Home],
    [User, Heart, Zap, Target, Users, Settings, Play]
  ];

  return (
    <section 
      className="section-padding overflow-x-hidden relative"
      style={{
        backgroundImage: `url('/altan-uploads/50597573-28c8-40d6-95fe-727a8090807c.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient fade overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none"></div>
      
      <div className="section-container relative">
        <div className="flex flex-col justify-start items-center gap-12">
          <div className="flex flex-col justify-start items-center gap-12">
            {/* Icon */}
            <FadeIn delay={0.2}>
              <div className="w-9 h-14 flex items-center justify-center">
                <img 
                  src="/altan-uploads/b652779f-5683-4f89-9b1c-e1f8d0f9aa01.png" 
                  alt="Run Logo" 
                  className="w-9 h-auto"
                />
              </div>
            </FadeIn>
            
            {/* Heading */}
            <BlurIn as="h2" className="text-center text-foreground text-3xl md:text-4xl font-medium max-w-2xl">
              Build the future of intelligence with us.
            </BlurIn>
          </div>
          
          {/* CTA Button */}
          <FadeIn delay={0.5}>
            <Button
              variant="primary"
              size="lg"
              className="h-12 px-8 py-2.5 rounded-full text-base font-medium"
            >
              Request early access
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* Company Logos Section */}
      <div className="w-full border-t border-b border-border mt-16">
        <div className="section-container">
          <div className="grid grid-cols-7 gap-0">
            {companyIcons.map((row, rowIndex) => 
              row.map((IconComponent, colIndex) => {
                const isFirstCol = colIndex === 0;
                const isLastCol = colIndex === 6;
                const isLastRow = rowIndex === 2;
                
                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`
                      h-24 flex items-center justify-center border-border
                      ${isFirstCol ? 'border-l' : ''}
                      ${isLastCol ? 'border-r' : 'border-r'}
                      ${!isLastRow ? 'border-b' : ''}
                    `}
                  >
                    <IconComponent className="w-6 h-6 text-foreground opacity-60" />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;