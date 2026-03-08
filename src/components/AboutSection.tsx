import { motion } from "framer-motion";
import { Code2, Bot, Workflow, Cpu } from "lucide-react";

const cards = [
  {
    icon: Workflow,
    title: "RPA Development",
    description: "Building robust automation workflows with UiPath to streamline business processes and eliminate repetitive tasks.",
  },
  {
    icon: Code2,
    title: "Python Development",
    description: "Developing scalable applications, scripts, and data pipelines using Python and its rich ecosystem.",
  },
  {
    icon: Bot,
    title: "Agentic AI",
    description: "Designing autonomous AI agents that reason, plan, and execute complex tasks with minimal human intervention.",
  },
  {
    icon: Cpu,
    title: "Software Engineering",
    description: "Writing clean, maintainable code with modern development practices, CI/CD, and cloud-native architectures.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary mb-2 block">// what I do</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display">
            Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-primary"
            >
              <card.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold font-display mb-2">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
