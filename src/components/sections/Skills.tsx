import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { 
  SiReact, SiHtml5, SiCss3, SiTailwindcss, 
  SiNodedotjs, SiPython, SiPostgresql, SiMysql, 
  SiTensorflow, SiPytorch, SiHuggingface,
  SiGit, SiPodman
} from "react-icons/si";
import { FaJava, FaRobot, FaChartBar } from "react-icons/fa";

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  percentage: number;
  color: string;
}

function SkillBadge({ name, icon, percentage, color }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden group"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: color }}
      />
      
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle 
            cx="40" cy="40" r={radius} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            className="text-white/10"
          />
          {/* Animated Progress Circle */}
          <motion.circle 
            cx="40" cy="40" r={radius} 
            fill="none" 
            stroke={color} 
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isHovered ? strokeDashoffset : circumference }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1 }}
          className="text-3xl relative z-10"
          style={{ color: isHovered ? color : '#a1a1aa' }} // text-muted-foreground by default
        >
          {icon}
        </motion.div>
      </div>
      
      <div className="text-center z-10">
        <h4 className="font-semibold text-foreground">{name}</h4>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className="text-sm font-bold mt-1"
          style={{ color }}
        >
          {percentage}%
        </motion.p>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <SiReact />, percentage: 85, color: "#61DAFB" },
        { name: "HTML5", icon: <SiHtml5 />, percentage: 90, color: "#E34F26" },
        { name: "CSS3", icon: <SiCss3 />, percentage: 85, color: "#1572B6" },
        { name: "TailwindCSS", icon: <SiTailwindcss />, percentage: 85, color: "#38B2AC" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs />, percentage: 80, color: "#339933" },
        { name: "Python", icon: <SiPython />, percentage: 90, color: "#3776AB" },
        { name: "Java", icon: <FaJava />, percentage: 75, color: "#007396" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, percentage: 80, color: "#336791" },
        { name: "MySQL", icon: <SiMysql />, percentage: 75, color: "#4479A1" },
      ]
    },
    {
      title: "AI / ML",
      skills: [
        { name: "LangChain", icon: <FaRobot />, percentage: 80, color: "#12B981" },
        { name: "TensorFlow", icon: <SiTensorflow />, percentage: 75, color: "#FF6F00" },
        { name: "PyTorch", icon: <SiPytorch />, percentage: 75, color: "#EE4C2C" },
        { name: "HuggingFace", icon: <SiHuggingface />, percentage: 80, color: "#FFD21E" },
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Power BI", icon: <FaChartBar />, percentage: 85, color: "#F2C811" },
        { name: "Git", icon: <SiGit />, percentage: 85, color: "#F05032" },
        { name: "Podman", icon: <SiPodman />, percentage: 70, color: "#892CA0" },
      ]
    }
  ];

  const categoryNames = ["All", ...categories.map(c => c.title)];
  
  const filteredSkills = activeCategory === "All" 
    ? categories.flatMap(c => c.skills)
    : categories.find(c => c.title === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Technical Arsenal" subtitle="Skills & tools I work with" align="center" />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categoryNames.map((name) => (
            <button
              key={name}
              onClick={() => setActiveCategory(name)}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === name 
                  ? "bg-primary text-white shadow-lg shadow-primary/25" 
                  : "bg-white/5 text-muted-foreground hover:bg-white/10"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {filteredSkills.map((skill, idx) => (
            <SkillBadge key={skill.name} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
