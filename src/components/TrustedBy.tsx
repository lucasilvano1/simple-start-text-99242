import React from 'react';
import { BlurIn } from '@/components/ui/blur-in';
import { FadeIn } from '@/components/ui/fade-in';

const TrustedBy = () => {
  const testimonials = [
    {
      quote: "Integrating Run 1.0 into our platform cut our response times by 70% while keeping costs predictable. It's the only model that truly scales with enterprise demand.",
      role: "VP of Engineering",
      company: "Atlassian"
    },
    {
      quote: "Latency this low changes everything. For real-time collaboration, Run 1.0 delivers an experience our customers notice instantly.",
      role: "Head of Product", 
      company: "Linear"
    },
    {
      quote: "Security was our top concern. Run 1.0 gave us end-to-end encryption with zero compromises on speed. That combination is unmatched.",
      role: "CTO",
      company: "Airtable"
    }
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <BlurIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-16 lg:mb-24">
          Trusted by industry leaders
        </BlurIn>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up">
              <div className="flex-1 border-l border-border pl-6 lg:pl-8 flex flex-col justify-between">
                <p className="text-foreground text-base font-normal leading-7 mb-8 lg:mb-12">
                  "{testimonial.quote}"
                </p>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground text-base font-normal leading-7">
                    {testimonial.role}
                  </p>
                  <p className="text-foreground text-base font-medium">
                    {testimonial.company}
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

export default TrustedBy;