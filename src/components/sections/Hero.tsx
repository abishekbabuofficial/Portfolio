import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 mask-image-gradient" />
      <div className="bg-glow top-1/4 -left-[200px]" />
      <div className="bg-glow bottom-1/4 -right-[200px] !bg-accent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start space-y-6 order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 bg-primary/5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary-foreground">Available for opportunities</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-display text-muted-foreground">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-tight">
              Abishek <br />
              <span className="text-gradient">Babu.</span>
            </h1>
            <h3 className="text-xl md:text-2xl font-medium text-foreground/80 mt-4">
              AI & Full Stack Developer
            </h3>
          </div>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            AI-focused Full Stack Developer building intelligent systems and scalable web applications. Experienced in ML-powered solutions, RAG-based systems, and production-grade web platforms.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              View Projects
            </button>
            <a 
              href="/resume.pdf" 
              download
              className="px-8 py-4 rounded-xl font-semibold glass hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Connect:</span>
            <div className="flex gap-4">
              <a href="https://github.com/abishekbabuofficial" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white hover:-translate-y-1 transition-all">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/abishek-babu-career" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0A66C2] hover:-translate-y-1 transition-all">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:abistudies03@gmail.com" className="text-muted-foreground hover:text-red-400 hover:-translate-y-1 transition-all">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] animate-float">
            {/* Soft glowing gradient border */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-blue-500 blur-[2px] opacity-70"></div>
            <div className="absolute inset-[3px] rounded-full bg-background z-10"></div>
            
            {/* Profile Image (Using a sleek AI/tech abstract portrait placeholder) */}
            {/* abstract minimalist 3d tech portrait */}
            <div className="absolute inset-[8px] rounded-full overflow-hidden z-20 group">
              <img 
                src="/profile4.png" 
                alt="Abishek Babu" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 z-30 glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span className="font-bold">AI</span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">AI/ML</p>
                <p className="text-xs text-muted-foreground">Expertise</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 bottom-1/4 z-30 glass px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <span className="font-bold">&lt;/&gt;</span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">Full Stack</p>
                <p className="text-xs text-muted-foreground">Developer</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
