import { motion } from "motion/react";

function TextReveal({
  children,
  className,
  delay = 0,
  stagger = 0.15,
  space = "1rem",
  lineHeight,
  padding,
}) {
  return (
    <div
      className={`${className} relative  overflow-hidden  inline-block ${
        padding && `px-${padding}`
      } text-nowrap`}
      style={lineHeight && { lineHeight }}
    >
      {children?.split("").map((letter, i) => (
        <motion.span
          initial={{
            y: "100%",
          }}
          whileInView={{
            y: "0",
          }}
          transition={{
            duration: 0.3,
            delay: delay + i * stagger,
          }}
          viewport={{
            once: true,
          }}
          className={`inline-block `}
          style={letter === " " && { marginRight: space }}
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}

export default TextReveal;
