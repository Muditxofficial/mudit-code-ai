import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-display text-sm text-primary mb-2 block">// let's connect</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Get in Touch</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Interested in working together or have a project in mind? I'd love to hear from you.
          </p>

          <a
            href="https://www.linkedin.com/in/mudit9821/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity glow-primary mb-10"
          >
            <Send className="w-5 h-5" />
            Say Hello
          </a>

          <div className="flex justify-center gap-6 mt-6">
            <a href="https://github.com/Muditxofficial" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mudit9821/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:muditchoudhary4@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
