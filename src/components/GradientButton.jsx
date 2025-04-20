import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { animate } from "motion";
import { useMyContext } from "../context/context";

function GradientButton({ text, onClick }) {
  const { blackTheme1, blackTheme2 } = useMyContext();

  const primaryColor = useMotionValue(blackTheme1);
  const secondaryColor = useMotionValue(blackTheme2);
  const buttonBackground = useMotionTemplate`linear-gradient( 43deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;

  const changeToGradient = () => {
    animate(primaryColor, "#fa0101", { duration: 0.5 });
    animate(secondaryColor, "#b700ff", { duration: 0.5 });
  };
  const changeToNormal = () => {
    animate(primaryColor, blackTheme1, { duration: 1 });
    animate(secondaryColor, blackTheme2, { duration: 1 });
  };

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={changeToGradient}
      onHoverEnd={changeToNormal}
      style={{ background: buttonBackground }}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.8)" }}
      transition={{ duration: 0.5 }}
      className=" font-bold  py-2 px-6 rounded-full"
    >
      {text}
    </motion.button>
  );
}

export default GradientButton;
