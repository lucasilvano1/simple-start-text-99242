import React from 'react';
import { Button } from '@/components/ui/button';
import { BlurIn } from '@/components/ui/blur-in';
import { FadeIn } from '@/components/ui/fade-in';
import { Play } from 'lucide-react';

const Architecture = () => {
  const architectureData = [
    {
      title: "Input Layer — Multimodal gateway",
      description: "Processes text, data, code, and more in real time. Designed to handle diverse formats seamlessly.",
    },
    {
      title: "Core Engine — Neural precision", 
      description: "Optimized neural pathways reduce computation overhead, delivering results in milliseconds while maintaining accuracy.",
    },
    {
      title: "Output Layer — Adaptive response",
      description: "Generates responses tailored to your context, evolving over time to align with your workflow.",
    }
  ];

  return (
    <section className="section-padding overflow-x-hidden">
      {/* Heading with same container width */}
      <div className="section-container">
        <BlurIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-16">
          Architecture
        </BlurIn>
      </div>

      {/* Full-width bordered container */}
      <div className="w-full border-t border-b border-border">
        {/* Inner container with same max-width */}
        <div className="section-container">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[419px]">
            {architectureData.map((item, index) => (
              <div 
                key={index}
                className={`flex-1 relative overflow-hidden p-6 lg:p-0 ${
                  index === 0 
                    ? 'border-b lg:border-b-0 lg:border-l lg:border-r border-border' 
                    : index === architectureData.length - 1
                    ? 'lg:border-r border-border'
                    : 'border-b lg:border-b-0 lg:border-r border-border'
                }`}
                style={index === 0 ? {
                  backgroundImage: 'url(/altan-uploads/9c384700-f43c-4552-9545-8a1f90e9a5f0.png)',
                  backgroundSize: '100% auto',
                  backgroundPosition: 'top',
                  backgroundRepeat: 'no-repeat'
                } : index === 1 ? {
                  backgroundImage: 'url(/altan-uploads/2259ffc6-2af5-429e-941d-3a82f0f6189b.png)',
                  backgroundSize: '100% auto',
                  backgroundPosition: 'top',
                  backgroundRepeat: 'no-repeat'
                } : index === 2 ? {
                  backgroundImage: 'url(/altan-uploads/3f8708e6-0939-4185-bb8a-56ef7b4777f8.png)',
                  backgroundSize: '100% auto',
                  backgroundPosition: 'top',
                  backgroundRepeat: 'no-repeat'
                } : undefined}
              >
                {/* Learn more button */}
                <FadeIn delay={index * 0.2}>
                  <div className="flex justify-center pt-16 pb-8 lg:pt-32 lg:pb-0">
                    <Button variant="primary" className="rounded-full">
                      <Play className="w-4 h-4 text-primary" />
                      Learn more
                    </Button>
                  </div>
                </FadeIn>

                {/* Content at bottom */}
                <div className="lg:absolute lg:bottom-6 lg:left-6 lg:right-6 space-y-2">
                  <FadeIn delay={index * 0.2 + 0.3} direction="up" className="space-y-2">
                    <h3 className="text-foreground text-base font-medium">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-base font-normal leading-7">
                      {item.description}
                    </p>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;