import React from 'react';
import { BlurIn } from '@/components/ui/blur-in';
import { FadeIn } from '@/components/ui/fade-in';

const Roadmap = () => {
  const roadmapVersions = [
    {
      version: "Run 1.1",
      features: [
        "Voice input and real-time speech output",
        "Expanded multimodal support for charts, docs, and dashboards",
        "Deeper integrations with productivity and collaboration tools",
        "Developer console with usage insights and analytics"
      ]
    },
    {
      version: "Run 1.2",
      features: [
        "Multilingual mastery across 100+ languages",
        "Plugin system for custom workflows and extensions", 
        "Further latency reduction through optimized streaming",
        "Granular enterprise controls for teams and compliance"
      ]
    },
    {
      version: "Run 2.0",
      features: [
        "Full multimodality: text, data, visuals, audio, and video",
        "Self-optimizing architecture for massive scale",
        "Context memory across sessions and teams",
        "Marketplace for community-built extensions and workflows"
      ]
    }
  ];

  return (
    <section className="section-container section-padding overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start max-w-full">
        {/* Left Column - Heading */}
        <div className="w-full">
          <BlurIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Roadmap
          </BlurIn>
        </div>

        {/* Right Column - Roadmap Versions */}
        <div className="space-y-10 w-full">
          {roadmapVersions.map((version, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="flex flex-col gap-5 w-full">
                {/* Version Header */}
                <div className="flex items-center gap-4">
                  <h3 className="text-foreground text-base font-medium">
                    {version.version}
                  </h3>
                </div>
                
                {/* Features List - Just paragraphs */}
                <div className="flex flex-col gap-3">
                  {version.features.map((feature, featureIndex) => (
                    <p key={featureIndex} className="text-muted-foreground text-base font-normal leading-7">
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;