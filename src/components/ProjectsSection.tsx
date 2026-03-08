import { motion } from "framer-motion";
import { ExternalLink, Bot, Workflow, Code2 } from "lucide-react";

const projects = [
  {
    icon: Workflow,
    title: "Enterprise RPA Suite",
    description: "End-to-end automation of invoice processing, reducing manual effort by 85% using UiPath and custom Python integrations.",
    tags: ["UiPath", "Python", "OCR"],
  },
  {
    icon: Bot,
    title: "AI Research Agent",
    description: "Autonomous agent that researches topics, synthesizes information, and generates structured reports using LLM orchestration.",
    tags: ["LangChain", "Python", "GPT-4"],
  },
  {
    icon: Code2,
    title: "Process Mining Dashboard",
    description: "Real-time analytics dashboard for monitoring RPA bot performance, identifying bottlenecks, and optimizing workflows.",
    tags: ["Python", "React", "Data Viz"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-display text-sm text-primary mb-2 block">// selected work</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display">Projects</h2>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:glow-primary"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <project.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-display mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-display rounded-md bg-secondary text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
