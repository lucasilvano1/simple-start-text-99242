import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BlurIn } from "@/components/ui/blur-in";
import { 
  Globe, 
  Slack, 
  FileText, 
  Github, 
  Minus, 
  Shield, 
  Workflow 
} from "lucide-react";

const APISection = () => {
  const integrations = [
    {
      icon: Globe,
      name: "Netlify",
      description: "Deploy AI-powered features straight to production.",
    },
    {
      icon: Slack,
      name: "Slack",
      description: "Conversational AI inside your workspace",
    },
    {
      icon: FileText,
      name: "Notion",
      description: "Knowledge management with instant insights",
    },
    {
      icon: Github,
      name: "GitHub",
      description: "Review pull requests, generate docs, or suggest fixes.",
    },
    {
      icon: Minus,
      name: "Linear",
      description: "Break down feature requests into actionable tasks",
    },
    {
      icon: Shield,
      name: "Auth0",
      description: "Integrate with your SSO for secure access.",
    },
    {
      icon: Workflow,
      name: "Temporal",
      description: "Orchestrate AI tasks as part of pipelines.",
    },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedIntegrations = [...integrations, ...integrations];

  return (
    <section className="section-padding overflow-hidden">
      {/* Heading with same container width */}
      <div className="section-container">
        <BlurIn as="h2" className="text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-16">
          Easy to use API
        </BlurIn>
      </div>

      {/* Full-width marquee container with borders */}
      <div className="w-full border-t border-b border-border overflow-hidden">
        <motion.div
          className="flex"
          animate={{
            x: [0, -100 * integrations.length * 4], // Move by the width of original array
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50, // Slower speed
              ease: "linear",
            },
          }}
          style={{
            width: `${duplicatedIntegrations.length * 304}px`, // Each card is ~304px wide
          }}
        >
          {duplicatedIntegrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div
                key={`${integration.name}-${index}`}
                className="w-[304px] h-[228px] p-6 border-r border-border flex-shrink-0 flex flex-col justify-between"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-foreground" />
                    <h3 className="text-base font-medium text-foreground">
                      {integration.name}
                    </h3>
                  </div>
                  <p className="text-base text-foreground-secondary leading-7">
                    {integration.description}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="self-start rounded-full px-4 py-2 h-8 bg-transparent border-border hover:bg-transparent"
                >
                  Explore docs
                </Button>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default APISection;