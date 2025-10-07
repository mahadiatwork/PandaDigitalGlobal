"use client";

import { Card } from "@/components/ui/card";
import { Share2, Globe, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Engage global audiences with data-driven social campaigns across all major platforms.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Build stunning, high-performance websites that convert visitors into customers.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Sales Generation",
    description: "Drive revenue growth with proven strategies and targeted lead generation.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Sparkles,
    title: "AI Agent Services",
    description: "Leverage cutting-edge AI to automate customer service and boost efficiency.",
    color: "from-green-500 to-emerald-500",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the global market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="p-8 h-full hover-elevate active-elevate-2 cursor-pointer transition-all duration-300 border-card-border"
                data-testid={`card-service-${index}`}
              >
                <div
                  className={`w-12 h-12 rounded-md bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
