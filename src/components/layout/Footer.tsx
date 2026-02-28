import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/20 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-2xl font-display font-bold"
        >
          Abishek Babu<span className="text-primary">.</span>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-sm text-center md:text-left"
        >
          © {currentYear} Abishek Babu. All rights reserved.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:abishekbabu@example.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-red-400 hover:bg-red-400/10 transition-all">
            <FaEnvelope size={18} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
