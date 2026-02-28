import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { FaGraduationCap } from "react-icons/fa";

export function About() {
  const education = [
    {
      degree: "B.Tech in AI & Data Science",
      institution: "Sri Sairam Institute",
      period: "2021 - 2025",
      details: "GPA: 8.6",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "State Board",
      period: "Completed 2021",
      details: "Score: 91.5%",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "State Board",
      period: "Completed 2019",
      details: "Excellent Academic Record",
    },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="About Me" subtitle="Professional summary & education" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-primary">Professional Summary</h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                I am an AI & Data Science graduate with strong foundations in Python, AI/ML, React.js, and Node.js. 
                My passion lies at the intersection of artificial intelligence and robust web engineering.
              </p>
              <p>
                I am experienced in building production-ready applications, including AI-powered chatbots, 
                computer vision systems, and comprehensive analytics dashboards. I thrive on translating 
                complex data into actionable insights and seamless user experiences.
              </p>
              <p>
                With a strong analytical mindset honed through industry internship experience in product 
                development and data analytics, I continuously seek to push boundaries and build intelligent 
                systems that solve real-world problems.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="glass p-4 rounded-2xl border-l-4 border-l-primary">
                <p className="text-3xl font-display font-bold text-foreground">3+</p>
                <p className="text-sm text-muted-foreground">Years Coding</p>
              </div>
              <div className="glass p-4 rounded-2xl border-l-4 border-l-accent">
                <p className="text-3xl font-display font-bold text-foreground">10+</p>
                <p className="text-sm text-muted-foreground">Projects Built</p>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <FaGraduationCap className="text-primary" /> Education Journey
            </h3>
            
            <div className="relative pl-8 space-y-12">
              {/* Timeline Line */}
              <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

              {education.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  
                  <div className="glass p-6 rounded-2xl group-hover:border-primary/50 transition-colors duration-300">
                    <span className="text-sm font-semibold text-primary mb-2 block">{item.period}</span>
                    <h4 className="text-xl font-bold text-foreground">{item.degree}</h4>
                    <p className="text-lg text-muted-foreground mt-1">{item.institution}</p>
                    <p className="text-sm text-foreground/80 mt-3 font-medium px-3 py-1 bg-white/5 inline-block rounded-lg">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
