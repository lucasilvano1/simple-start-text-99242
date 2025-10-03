import React from 'react';
import { BlurIn } from '@/components/ui/blur-in';

const Footer = () => {
  const footerSections = [
    {
      title: "Features",
      links: ["Latency", "Privacy", "Multimodal", "Adaptive learning"]
    },
    {
      title: "Company", 
      links: ["About", "Careers", "Brand"]
    },
    {
      title: "Resources",
      links: ["Docs", "Privacy", "Terms", "Status"]
    },
    {
      title: "Connect",
      links: ["Discord", "X (Twitter)", "Hugging Face", "YouTube"]
    }
  ];

  return (
    <footer className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Brand Name */}
          <div className="w-full">
            <BlurIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Run
            </BlurIn>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-18">
              {footerSections.map((section, index) => (
                <div key={index} className="flex flex-col gap-6 min-w-[120px]">
                  <h3 className="text-foreground text-sm font-medium">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-4">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className="text-muted-foreground text-sm font-normal hover:text-foreground transition-colors"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;