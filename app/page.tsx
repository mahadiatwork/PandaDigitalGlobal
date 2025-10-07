"use client";

import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ManagementSection } from "@/components/ManagementSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ManagementSection />
      <TestimonialsSection />
      
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-destructive/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready to Go Global?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how we can help your business expand internationally
            </p>
            <Link href="/contact">
              <Button size="lg" className="gap-2" data-testid="button-cta-contact">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
