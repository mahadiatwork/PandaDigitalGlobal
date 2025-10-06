import { TeamSection } from "@/components/TeamSection";
import { Card } from "@/components/ui/card";
import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We're committed to helping Chinese companies succeed on the global stage.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We leverage the latest technologies and strategies to stay ahead.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our success. We're partners in your growth journey.",
  },
  {
    icon: TrendingUp,
    title: "Results-Oriented",
    description: "We focus on measurable outcomes and sustainable growth.",
  },
];

export default function About() {
  return (
    <div>
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              About Panda Digital
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a specialized marketing agency dedicated to helping Chinese
              companies expand their reach and succeed in global markets. With deep
              understanding of both Chinese and Western business cultures, we bridge
              the gap and create winning strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <Card className="p-8 md:p-12">
              <h2 className="text-3xl font-bold font-heading mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded in 2016, Panda Digital was created to solve a critical
                challenge: helping innovative Chinese companies navigate the
                complexities of international markets. We've since grown to serve
                over 500 clients across 50+ countries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our unique approach combines cutting-edge digital marketing
                techniques with cultural intelligence, ensuring your message
                resonates with global audiences while maintaining your brand's
                authentic voice.
              </p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-8 h-full hover-elevate active-elevate-2 cursor-pointer transition-all duration-300">
                  <value.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold font-heading mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
    </div>
  );
}
