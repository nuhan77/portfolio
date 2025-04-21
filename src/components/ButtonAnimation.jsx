import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { useMyContext } from "../context/context";

function ButtonAnimation({
  children,
  type = "button",
  onClick,
  className = "",
  primaryColor = "rgb(154, 230, 0)",
  hoverColor = "rgb(255, 255, 255)",
}) {
  const { under490px } = useMyContext();

  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      style={{ background: primaryColor }}
      className={`${
        under490px ? "h-10 text-xl px-2" : "h-12 text-2xl px-4 "
      } relative  rounded-md overflow-hidden  text-black   font-semibold font-tekur ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={
        onClick
          ? onClick
          : (e) => {
              e.preventDefault();
            }
      }
    >
      <div
        className={` text-nowrap  h-full w-full flexCenter items-center gap-2 `}
      >
        <motion.button
          animate={{
            x: isHovering ? 0 : 16,
          }}
          type={type}
          className=" bg-transparent  z-20"
        >
          {children}
        </motion.button>
        <motion.div
          className=" z-20"
          initial={{ y: 50 }}
          animate={{ y: isHovering ? 0 : 50 }}
        >
          <FaArrowRightLong className="" />
        </motion.div>
      </div>
      <motion.span
        style={{ background: hoverColor }}
        initial={{ width: 0 }}
        animate={{ width: isHovering ? "100%" : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-full bg-white "
      ></motion.span>
    </div>
  );
}

export default ButtonAnimation