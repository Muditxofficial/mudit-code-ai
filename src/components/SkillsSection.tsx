import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "RPA & Automation",
    skills: ["UiPath Studio", "UiPath Orchestrator", "Databricks"],
  },
  {
    category: "Programming",
    skills: ["Python", "PySpark", "SQL", "REST APIs"],
  },
  {
    category: "AI & ML",
    skills: ["Agentic AI", "LangChain", "LLM Integration", "NLP", "Prompt Engineering"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "Azure", "CI/CD"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary mb-2 block">// tech stack</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display">Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-sm text-accent font-semibold mb-4 uppercase tracking-wider">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
