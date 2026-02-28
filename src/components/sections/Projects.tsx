import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function Projects() {
  const featuredProject = {
    title: "Smart Ambulance Traffic System",
    description: "An intelligent traffic management system prioritizing emergency vehicles. Uses computer vision and IoT to clear paths dynamically, reducing response times in critical situations.",
    tags: ["AI + IoT", "Deep Learning", "Embedded Systems", "Python", "Computer Vision"],
    award: "IEEE IC3IOT 2024",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=400&fit=crop", // abstract smart city traffic data
    github: "#",
    demo: "#"
  };

  const otherProjects = [
    {
      title: "Leave Management System",
      description: "A comprehensive internal portal for tracking employee leave, automating approvals, and generating HR reports with robust role-based access control.",
      tags: ["React.js", "Node.js", "PostgreSQL", "TailwindCSS"],
      github: "#"
    },
    {
      title: "Green Doctor",
      description: "An AI-powered application diagnosing plant diseases from images and suggesting remedies using advanced CNN models.",
      tags: ["TensorFlow", "React Native", "Python FastAPI", "Computer Vision"],
      github: "#",
      demo: "#"
    },
    {
      title: "PowerGPT",
      description: "A RAG-based LLM system tailored for power sector analytics. Conversational interface to query complex technical manuals and regulations.",
      tags: ["LangChain", "OpenAI", "Vector DB", "React.js"],
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Featured Projects" subtitle="Selected works & technical implementations" />

        {/* Featured Project */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl overflow-hidden mb-12 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
              {featuredProject.award && (
                <div className="absolute top-4 left-4 z-20 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {featuredProject.award}
                </div>
              )}
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-primary font-semibold mb-2">Featured Project</span>
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">{featuredProject.title}</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                {featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {featuredProject.tags.map(tag => (
                  <span key={tag} className="bg-white/5 border border-white/10 text-foreground px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                <a href={featuredProject.github} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl transition-colors font-medium">
                  <FaGithub /> Source Code
                </a>
                <a href={featuredProject.demo} className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-primary-foreground px-5 py-2.5 rounded-xl transition-colors font-medium">
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass rounded-2xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaExternalLinkAlt size={20} />
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-foreground/70">
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
}
