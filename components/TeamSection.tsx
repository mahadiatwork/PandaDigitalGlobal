"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const team = [
  {
    name: "Sarah Chen",
    role: "Chief Marketing Officer",
    image: "/images/generated_images/Team_member_portrait_one_1fea16e8.png",
    bio: "10+ years driving global marketing strategies for Chinese enterprises",
  },
  {
    name: "Michael Zhang",
    role: "Lead Web Developer",
    image: "/images/generated_images/Team_member_portrait_two_5007c4d6.png",
    bio: "Expert in building high-performance web applications that scale",
  },
  {
    name: "Aisha Rahman",
    role: "AI Solutions Architect",
    image: "/images/generated_images/Team_member_portrait_three_c98e4bd8.png",
    bio: "Specializes in implementing cutting-edge AI solutions for business growth",
  },
];

export function TeamSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experts dedicated to your global success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer transition-all duration-300"
                data-testid={`card-team-${index}`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading mb-1" data-testid={`text-name-${index}`}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3" data-testid={`text-role-${index}`}>
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
