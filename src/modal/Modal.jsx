import { motion } from "motion/react";
import Backdrop from "./Backdrop";

function Modal({ handelClose, children }) {
  return (
    <Backdrop onClick={handelClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
        className="w-[85%] max-w-[40em] sm:w- p-8 bg-white flexCenter rounded-md"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
