import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-display font-bold text-foreground"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 flex items-center gap-4"
        >
          {align === "left" && <div className="h-1 w-12 bg-primary rounded-full" />}
          <p className="text-muted-foreground text-lg">{subtitle}</p>
          {align === "center" && (
            <div className="h-1 w-12 bg-primary rounded-full mx-auto mt-6" />
          )}
        </motion.div>
      )}
    </div>
  );
}
