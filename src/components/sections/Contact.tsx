import { motion } from "framer-motion";
import { SectionHeading } from "../ui/section-heading";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const contactLinks = [
  {
    name: "GitHub",
    handle: "@abishekbabuofficial",
    url: "https://github.com/abishekbabuofficial",
    icon: <FaGithub />,
    color: "hover:text-white"
  },
  {
    name: "LinkedIn",
    handle: "abishek-babu-career",
    url: "https://www.linkedin.com/in/abishek-babu-career",
    icon: <FaLinkedin />,
    color: "hover:text-[#0A66C2]"
  },
  {
    name: "Email",
    handle: "abistudies03@gmail.com",
    url: "mailto:abistudies03@gmail.com",
    icon: <FaEnvelope />,
    color: "hover:text-red-400"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together" align="center" />

        <div className="space-y-4">
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className={`text-3xl text-muted-foreground transition-colors duration-300 ${link.color}`}>
                  {link.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">{link.name}</h4>
                  <p className="text-sm text-muted-foreground">{link.handle}</p>
                </div>
              </div>
              <FiArrowUpRight className="text-2xl text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
