import { motion } from "framer-motion";
import { ExternalLink, Bot, Workflow, Code2 } from "lucide-react";

const projects = [
  {
    icon: Workflow,
    title: "Insurance Bot Claim",
    description: "Automated insurance claim processing bot leveraging HyperScience for intelligent document extraction, UiPath for orchestration, and ReFramework for robust error handling and scalability.",
    tags: ["HyperScience", "UiPath", "Excel", "Email", "ReFramework"],
  },
  {
    icon: Bot,
    title: "Agentic AI YouTube Video Creator Suggestor",
    description: "AI-powered agent that analyzes trends and suggests video creation ideas for YouTube creators, integrating UiPath automation with GPT models and YouTube add-ons.",
    tags: ["UiPath", "YouTube Add-on", "GPT Model"],
  },
  {
    icon: Code2,
    title: "Reddit Data Pipeline Engineering",
    description: "A comprehensive ETL solution for Reddit data, using Apache Airflow, Celery, PostgreSQL, Amazon S3, AWS Glue, Amazon Athena, and Amazon Redshift to extract, transform, and load data into a Redshift data warehouse.",
    tags: ["Airflow", "Celery", "PostgreSQL", "S3", "AWS Glue", "Athena", "Redshift"],
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
