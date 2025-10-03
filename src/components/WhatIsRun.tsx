import React from 'react';
import { BlurIn } from '@/components/ui/blur-in';
import { FadeIn } from '@/components/ui/fade-in';

const WhatIsRun = () => {
  const features = [
    {
      number: "01",
      title: "The vision",
      description: "Run 1.0 was created to solve one of the biggest problems in AI today: performance without compromise. Most models are powerful but slow, accurate but rigid, innovative but insecure. We designed Run to be different — to bring together speed, adaptability, and trust in one system."
    },
    {
      number: "02", 
      title: "Built for real work",
      description: "Run 1.0 isn't a research demo — it's production-ready. Every part of the architecture was tuned to eliminate latency, so responses arrive in milliseconds, not seconds. That speed isn't just a technical feat — it changes how you work. You can ideate, test, and iterate in a natural rhythm, without waiting for your tools to catch up."
    },
    {
      number: "03",
      title: "A new benchmark", 
      description: "Run 1.0 isn't just another entry in the AI race. It's a step toward intelligence that feels human in speed, reliable in execution, and respectful in design. It's not about replacing creativity or expertise — it's about running alongside you, making every idea easier to bring to life."
    }
  ];

  return (
    <section className="section-container section-padding overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-full">
        {/* Left Column - Heading */}
        <div className="w-full">
          <BlurIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            What is Run?
          </BlurIn>
        </div>

        {/* Right Column - Feature List */}
        <div className="space-y-8 w-full">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="flex items-start gap-4 w-full">
                {/* Number */}
                <span className="text-muted-foreground text-base font-mono font-normal flex-shrink-0 mt-1">
                  {feature.number}
                </span>
                
                {/* Dashed Line */}
                <div 
                  className="flex-shrink-0 w-16 border-t-2 border-dashed border-muted-foreground mt-3"
                  style={{ borderTopWidth: '2px', borderStyle: 'dashed' }}
                />
                
                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-foreground text-base font-medium">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-base font-normal leading-7">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsRun;