import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/Marketing_office_team_collaboration_1959cdf9.png";
import servicesGraphic from "@assets/generated_images/Services_hero_graphic_8fe592b4.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-destructive/5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--destructive) / 0.05) 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="mb-6 gap-2" data-testid="badge-trusted">
                <Sparkles className="h-3 w-3" />
                Trusted by 500+ Chinese Companies Going Global
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight"
            >
              Transform Your
              <span className="bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
                {" "}
                Global Reach
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              We help Chinese companies expand internationally with cutting-edge
              marketing strategies, powerful web solutions, and AI-driven growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-hero-get-started">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 backdrop-blur-sm"
                  data-testid="button-hero-view-work"
                >
                  View Our Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Marketing team collaboration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 hidden lg:block"
            >
              <img
                src={servicesGraphic}
                alt="Digital services"
                className="w-64 h-auto rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
