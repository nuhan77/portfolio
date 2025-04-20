import { motion } from "motion/react";
function RevealFormBottom({ children, delay = 0, once = true }) {
  return (
    <motion.div
      className="w-full h-full flexCenter"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.68, -0.6, 0.32, 1.6],
      }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
}

export default RevealFormBottom;
