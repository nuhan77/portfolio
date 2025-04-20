import { motion } from "motion/react";
function Backdrop({ children, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        ease: "ease",
      }}
      className="w-full h-screen fixed top-0 left-0 bg-black/60 z-100 flexCenter"
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
