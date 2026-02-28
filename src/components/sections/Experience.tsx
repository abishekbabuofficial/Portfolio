import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { FaBriefcase } from "react-icons/fa";

export function Experience() {
  const experiences = [
    {
      role: "Product Developer Trainee",
      company: "Lumel Technologies Pvt. Ltd.",
      period: "July 2025 – Present",
      description: "Engineering robust, scalable product features and optimizing full-stack architectures. Contributing to critical product pipelines and exploring AI-driven enhancements for business intelligence tools.",
      current: true
    },
    {
      role: "Product Developer Intern",
      company: "Lumel Technologies",
      period: "Apr 2025 – June 2025",
      description: "Assisted in the development of data visualization components. Improved frontend performance by 20% and integrated automated testing workflows.",
      current: false
    },
    {
      role: "AI App Development Intern",
      company: "Andiran Healthtech",
      period: "Jun 2024 – Sep 2024",
      description: "Developed machine learning pipelines for medical image analysis. Built full-stack interfaces to allow doctors to securely access AI diagnostic suggestions.",
      current: false
    },
    {
      role: "Data Analyst Intern",
      company: "Ford Motor India",
      period: "2023",
      description: "Analyzed supply chain telemetry data using Python and PowerBI. Created automated dashboards that reduced reporting time for the logistics team by 15 hours weekly.",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading title="Work Experience" subtitle="My professional journey" align="center" />

        <div className="relative mt-16">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2"></div>
          {/* Mobile Line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-white/10"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                    <FaBriefcase size={12} className="text-primary" />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full pl-12 md:pl-0 md:w-1/2 flex ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                    <div className={`glass p-8 rounded-3xl relative hover:border-primary/50 transition-colors w-full md:max-w-md ${
                      exp.current ? "border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.1)]" : ""
                    }`}>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                        exp.current ? "bg-primary text-primary-foreground" : "bg-white/10 text-muted-foreground"
                      }`}>
                        {exp.period}
                      </span>
                      <h4 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h4>
                      <h5 className="text-lg text-primary font-medium mb-4">{exp.company}</h5>
                      <p className="text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
