"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Panda Digital transformed our global presence. Their expertise in bridging Chinese and Western markets is unmatched. Our international sales increased by 300% in just 6 months.",
    author: "Li Wei",
    company: "Shanghai Tech Solutions",
    country: "China",
    flag: "🇨🇳",
  },
  {
    quote: "The AI solutions they implemented revolutionized our customer service. We now serve clients 24/7 across all time zones with incredible efficiency.",
    author: "James Rodriguez",
    company: "Global Commerce Inc",
    country: "USA",
    flag: "🇺🇸",
  },
  {
    quote: "Outstanding web development and marketing strategy. They understood our vision and delivered beyond expectations. Highly recommended for any business going global.",
    author: "Emma Thompson",
    company: "UK Innovations Ltd",
    country: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    quote: "Their social media campaigns helped us reach markets we never thought possible. The ROI has been exceptional, and their team is incredibly professional.",
    author: "Hans Mueller",
    company: "Deutsche Marketing GmbH",
    country: "Germany",
    flag: "🇩🇪",
  },
];

export function TestimonialsSection() {
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by companies worldwide to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="p-8 h-full hover-elevate active-elevate-2 cursor-pointer transition-all duration-300"
                data-testid={`card-testimonial-${index}`}
              >
                <Quote className="h-10 w-10 text-primary mb-6" />
                <p className="text-lg leading-relaxed mb-6 text-card-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.flag}</div>
                  <div>
                    <div className="font-bold" data-testid={`text-author-${index}`}>
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}, {testimonial.country}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
