import React from 'react';
import { Button } from '@/components/ui/button';
import { BlurIn } from '@/components/ui/blur-in';
import { FadeIn } from '@/components/ui/fade-in';
import { Building2, Brain, FileText, Zap } from 'lucide-react';

const HeroSection = () => {
  const companyIcons = [
    { icon: Building2, name: 'Company 1' },
    { icon: Brain, name: 'AI Company' },
    { icon: FileText, name: 'Productivity' },
    { icon: Zap, name: 'Tech Company' },
  ];

  return (
    <section className="relative w-full flex justify-center items-center min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Video Layer */}
      <video
        src="https://res.cloudinary.com/dqd4dvem7/video/upload/v1758180143/CleanShot_2025-09-18_at_14.20.09_xn3uir.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Content */}
      <div className="flex flex-col items-center justify-start gap-16 md:gap-18 max-w-[902px] w-full relative z-10">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-start gap-10 md:gap-12 w-full">
          {/* Hero Heading */}
          <BlurIn as="h1" className="text-3xl md:text-5xl lg:text-6xl font-medium text-foreground text-center leading-tight max-w-[868px] w-full">
            AI model that learns, adapts, and performs in real time
          </BlurIn>
          
          {/* CTA Button */}
          <FadeIn delay={0.3}>
            <Button variant="primary" size="lg" className="px-8 py-3 text-[15px] rounded-full">
              Request early access
            </Button>
          </FadeIn>
        </div>

        {/* Company Section */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col items-center justify-start gap-8 max-w-[332px] w-full">
            <p className="text-foreground-secondary text-base font-medium text-center">
              By the makers of
            </p>
            
            {/* Company Icons */}
            <div className="flex items-center justify-center gap-6 md:gap-8">
              {companyIcons.map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-12 h-12 text-foreground-secondary hover:text-foreground transition-colors"
                >
                  <company.icon size={24} />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;