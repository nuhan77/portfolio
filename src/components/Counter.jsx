import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Counter = ({ number, duration = 2, className = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < number) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return number;
          }
        });
      }, (duration * 1000) / number);

      return () => clearInterval(interval);
    }
  }, [isInView, number, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`text-3xl flexCenter font-bold ${className}`}
    >
      {count}+
    </motion.div>
  );
};

export default Counter;
