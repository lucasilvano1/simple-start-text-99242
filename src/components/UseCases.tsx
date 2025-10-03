import React from 'react';
import { FadeIn } from '@/components/ui/fade-in';
const UseCases = () => {
  const useCases = [{
    title: "Enterprise automation",
    description: "Streamline operations by turning natural language into actions. Connect across business tools with zero friction."
  }, {
    title: "Creative content",
    description: "Generate articles, social copy, or design text instantly. From brainstorming headlines to polishing long-form writing."
  }, {
    title: "Data analysis",
    description: "Turn complex datasets into clear insights. Query databases in plain English and create dashboards."
  }, {
    title: "Real-time translation",
    description: "Break language barriers with instant, accurate translations that adapt to context and tone."
  }, {
    title: "Coding assistance",
    description: "Write, debug, and refactor code with ease. Run integrates with your IDE to speed up development."
  }, {
    title: "Customer experience",
    description: "Support teams get AI-powered summaries, instant replies, and context-aware suggestions."
  }];
  return <section className="section-padding overflow-x-hidden">
      {/* Heading with same container width */}
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-16">
          Use cases
        </h2>
      </div>

      {/* Full-width bordered container */}
      <div className="w-full border-t border-b border-border">
        {/* Inner container with same max-width */}
        <div className="section-container border-l border-r border-border !px-0">
          {/* Single grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => <div key={index} className={`relative h-[419px] overflow-hidden border-r border-border border-b border-border last:border-r-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(2n)]:border-r md:[&:nth-child(-n+2)]:border-b lg:[&:nth-child(n+4)]:border-b-0`}>
                {/* Image space */}
                <div className="absolute top-0 left-0 right-0 h-[280px] p-6 flex flex-col gap-3">
                  {index === 0 ? <>
                      {/* Left side - receiver messages stacked */}
                      <div className="flex flex-col gap-2">
                        <FadeIn delay={0.3} direction="up">
                          <div className="">
                            <img src="/lovable-uploads/86f1f947-3e07-41c0-9da3-adc1df4192e4.png" alt="Weekly report message" className="w-full h-auto rounded-lg shadow-sm" />
                          </div>
                        </FadeIn>
                        <FadeIn delay={0.6} direction="up">
                          <div className="">
                            <img src="/lovable-uploads/55ce1b72-555e-4079-b767-98318be5e961.png" alt="Report sent notification" className="h-[45px] w-auto max-w-[200px] rounded-lg shadow-sm" />
                          </div>
                        </FadeIn>
                      </div>
                      
                      {/* Right side - sender message */}
                      <div className="flex justify-end">
                        <FadeIn delay={0.9} direction="left">
                          <div className="">
                            <img src="/lovable-uploads/50e3e534-ff9d-4d98-8494-1939069a0aba.png" alt="Ticket updated message" className="h-[45px] w-auto max-w-[200px] rounded-lg shadow-sm" />
                          </div>
                        </FadeIn>
                      </div>
                    </> : index === 1 ? <div className="relative w-full h-full pb-4">
                      {/* Main background image */}
                      <img src="/lovable-uploads/5aa4e1a8-adc2-4311-ac64-fd0a52aa6385.png" alt="Creative content workspace" className="w-full h-full object-cover rounded-lg" />
                      
                      {/* Top left positioned image */}
                      <FadeIn delay={0.6} direction="up" className="absolute top-4 left-4">
                        <img src="/lovable-uploads/dcfbcf89-b03c-4641-ab35-f43a9364f71d.png" alt="Run vision" className="h-auto w-auto" />
                      </FadeIn>
                      
                      {/* Center positioned image */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <FadeIn delay={1.0} direction="up">
                          <img src="/lovable-uploads/61e4b16a-45e4-497c-8571-50b93ead10ee.png" alt="Generating" className="h-auto w-auto" />
                        </FadeIn>
                      </div>
                    </div> : index === 2 ? <div className="relative w-full h-full">
                      {/* Main chart image */}
                      <FadeIn delay={0.3} direction="up">
                        <img src="/lovable-uploads/bb4a105a-2da6-48e3-a807-518f4becf1a5.png" alt="Data analysis chart" className="w-full h-full object-contain p-4" />
                      </FadeIn>
                      
                      {/* Desktop indicator positioned at 30% from left, vertically centered */}
                      <div className="absolute top-1/2 transform -translate-y-1/2" style={{ left: '20%' }}>
                        <FadeIn delay={0.7} direction="up">
                          <img src="/lovable-uploads/0b07e93f-e390-40c1-93f5-713b67f7a332.png" alt="Desktop indicator" className="h-auto w-auto" />
                        </FadeIn>
                      </div>
                    </div> : index === 3 ? <div className="relative w-full h-full flex items-center justify-center">
                      {/* Main center image */}
                      <FadeIn delay={0.2} direction="scale">
                        <img src="/lovable-uploads/999414f9-ecea-4c74-b0fa-41086269ddc9.png" alt="Translation interface" className="h-auto w-auto" />
                      </FadeIn>
                      
                      {/* Left side image - Japanese text */}
                      <div className="absolute top-1/2 transform -translate-y-1/2" style={{ left: '5%' }}>
                        <FadeIn delay={0.5} direction="scale">
                          <img src="/lovable-uploads/6c712dce-c2d0-46f4-a511-93b6f9ce15ca.png" alt="Japanese language" className="h-auto w-auto" />
                        </FadeIn>
                      </div>
                      
                      {/* Right side image - Checkmark */}
                      <div className="absolute top-1/2 transform -translate-y-1/2" style={{ right: '5%' }}>
                        <FadeIn delay={0.8} direction="scale">
                          <img src="/lovable-uploads/d9150edf-76c5-4e4f-bfbd-55a8a3a5d5cc.png" alt="Translation complete" className="h-6 w-auto" />
                        </FadeIn>
                      </div>
                    </div> : index === 4 ? <div className="w-full h-full flex items-center justify-center">
                      <div className="flex flex-row items-center gap-4">
                        <FadeIn delay={0.2} direction="up">
                          <img src="/lovable-uploads/2f1697fd-1cd8-4e48-8142-9c80c0f4ef0c.png" alt="Node.js" className="h-12 w-12" />
                        </FadeIn>
                        <FadeIn delay={0.4} direction="up">
                          <img src="/lovable-uploads/8e7684d7-ec86-4f2d-bba8-c9a4d6cff79b.png" alt="Swift" className="h-12 w-12" />
                        </FadeIn>
                        <FadeIn delay={0.6} direction="up">
                          <img src="/lovable-uploads/aa8f23ce-2073-462b-8503-308c46fb381b.png" alt="3D Box" className="h-12 w-12" />
                        </FadeIn>
                        <FadeIn delay={0.8} direction="up">
                          <img src="/lovable-uploads/47686de2-80fc-4595-a342-3983baa4692e.png" alt="Python" className="h-12 w-12" />
                        </FadeIn>
                      </div>
                    </div> : <div className="w-full h-full flex flex-col gap-3 justify-center">
                      {/* Customer message */}
                      <div className="flex justify-end">
                        <FadeIn delay={0.3} direction="left">
                          <img src="/lovable-uploads/760dd910-d272-49ad-828b-08e55576f247.png" alt="Customer message" className="h-auto w-auto max-w-[200px]" />
                        </FadeIn>
                      </div>
                      
                      {/* Support response */}
                      <div className="flex justify-start ">
                        <FadeIn delay={0.7} direction="up">
                          <img src="/lovable-uploads/9a4cb773-4ff6-41c7-9330-445283889969.png" alt="Support response" className="h-auto w-auto max-w-[280px]" />
                        </FadeIn>
                      </div>
                    </div>}
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-foreground text-base font-medium mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground text-base font-normal leading-7 pr-4">
                    {useCase.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default UseCases;