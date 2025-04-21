import { useEffect, useRef, useState } from "react";
import TextReveal from "../components/TextReveal";
import { useInView, motion, useMotionValue } from "motion/react";
import { useMyContext } from "../context/context";
import skillsPic from "./../assets/skillsPic.jpg";
import cssIcon from "./../assets/icons/css.png";
import reactIcon from "./../assets/icons/science.png";
import nodeIcon from "./../assets/icons/Node-js.png";
import mongoDBIcon from "./../assets/icons/MongoDB.png";
import jsIcon from "./../assets/icons/js.png";
import gsapIcomn from "./../assets/icons/gsap.png";
import framerMotionIcon from "./../assets/icons/framer-motion2.png";
import figmaIcon from "./../assets/icons/Figma.png";
import canvaIcon from "./../assets/icons/Canva.png";

import useIsMobile from "../utils/IsMobile";
import CountUp from "react-countup";

const threshold = 100;

function Skills() {
  const { setOptions, optionsObj, isHeaderClicked } = useMyContext();

  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.3 });
  useEffect(() => {
    if (isInView && !isHeaderClicked) setOptions(optionsObj.skills);
  }, [isInView]);

  const isMobile = useIsMobile(900);

  const [index, setIndex] = useState(0);

  const [isGrabbing, setIsGrabbing] = useState(false);

  const dragX = useMotionValue(0);

  return (
    <section
      ref={ref}
      id="skills"
      className="flex flex-col justify-center items-center  "
    >
      <TextReveal
        lineHeight={"4rem"}
        padding={1}
        className="text-5xl font-bold font-courgette text-center "
      >
        Skills
      </TextReveal>
      <TextReveal
        delay={1}
        stagger={0.03}
        space=".25rem"
        className="description text-center "
      >
        See my skill level in different areas
      </TextReveal>

      <div className="w-[95%] overflow-hidden max-w-[70rem] relative mt-16 ">
        <motion.div
          animate={{
            scale: [1, 0.6, 1],
          }}
          transition={{
            duration: 5,
            delay: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full  rounded-full bg-lime-500 blur-[60px]"
        ></motion.div>
        <div className="absolute w-full h-full  bg-lime-600/20 blur-[60px]"></div>
        <div className="flex flex-col md:flex-row  overflow-hidden gap-4  relative bg-black/50 backdrop-blur-3xl p-4 rounded-lg h-full w-full">
          <img
            className="w-full h-full object-cover md:w-[30%]"
            src={skillsPic}
            alt=""
          />

          <div className="overflow-hidden w-full">
            <motion.div
              className={`${
                isGrabbing ? "cursor-grabbing" : "cursor-grab"
              } grid   w-full pb-2`}
              onDragStart={() => setIsGrabbing(true)}
              style={{
                gridTemplateColumns: "50% 50% 50% 50%",
              }}
              drag="x"
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragConstraints={{ left: 0, right: 0 }}
              animate={{
                transform: `translateX(-${index * 50}%)`,
              }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              onDragEnd={(e, info) => {
                setIsGrabbing(false);
                if (info.offset.x < -threshold && index < 3) {
                  setIndex(index + 1);
                } else if (info.offset.x > threshold && index > 0) {
                  setIndex(index - 1);
                }
              }}
            >
              <motion.div className="pb-4 ">
                <TextReveal
                  stagger={0.03}
                  space=".6rem"
                  padding={1}
                  className="text-lg font-[300] font-courgette text-center "
                >
                  Front-end
                </TextReveal>
                <div className="w-[calc(100%-1rem)]  mx-auto grid text-4xl gap-1">
                  <SkillsCard name="CSS" png={cssIcon} />
                  <SkillsCard name="React JS" png={reactIcon} />
                </div>
                <CircularProgress size={70} percentage={83} />
              </motion.div>

              <motion.div className="">
                <TextReveal
                  stagger={0.03}
                  space=".6rem"
                  padding={1}
                  className="text-lg font-[300] font-courgette text-center "
                >
                  Back-end
                </TextReveal>
                <div className="w-[calc(100%-1rem)]  mx-auto grid text-4xl gap-1">
                  <SkillsCard name="Java Script" png={jsIcon} />
                  <SkillsCard name="Node JS" png={nodeIcon} />
                  <SkillsCard name="Mongo BD" png={mongoDBIcon} />
                </div>

                <CircularProgress size={70} percentage={86} />
              </motion.div>

              <motion.div className=" ">
                <TextReveal
                  stagger={0.03}
                  space=".6rem"
                  padding={1}
                  className="text-lg font-[300] font-courgette text-center "
                >
                  UI/UX Design
                </TextReveal>
                <div className="w-[calc(100%-1rem)] mx-auto grid text-4xl gap-1">
                  <SkillsCard name="Figma" png={figmaIcon} />
                  <SkillsCard name="Canva" png={canvaIcon} />
                </div>

                <CircularProgress size={70} percentage={74} />
              </motion.div>

              <motion.div className=" 0">
                <TextReveal
                  stagger={0.03}
                  space=".6rem"
                  padding={1}
                  className="text-lg font-[300] font-courgette text-center "
                >
                  Animations
                </TextReveal>
                <div className="w-[calc(100%-1rem)] mx-auto grid text-4xl gap-1">
                  <SkillsCard name="Framer Motion" png={framerMotionIcon} />
                  <SkillsCard name="GSAP" png={gsapIcomn} />
                </div>

                <CircularProgress size={70} percentage={81} />
              </motion.div>
            </motion.div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:left-[60%] ">
              <Dots setIndex={setIndex} index={index} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

const SkillsCard = ({ name, png }) => {
  const [isHovering, setIsHovering] = useState(false);
  const { under490px } = useMyContext();

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        gridTemplateColumns: "auto 1fr",
      }}
      className="grid gap-5 w-full max-w-[7em] items-center rounded p-2 bg-black/40 group hover:bg-black/50"
    >
      <div className="">
        <motion.img
          src={png}
          alt=""
          className="w-8 h-auto"
          animate={
            isHovering
              ? {
                  rotate: 360,
                }
              : {
                  rotate: 0,
                }
          }
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </div>
      <motion.p
        className={`${
          under490px ? "text-sm -ml-3" : "text-lg"
        } font-tekur font-semibold`}
        animate={{
          color: isHovering ? "rgb(154, 230, 0)" : "white",
        }}
      >
        {name}
      </motion.p>
    </div>
  );
};

const Dots = ({ setIndex, index }) => {
  return (
    <div className="flex gap-2 ">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          onClick={() => setIndex(i)}
          className={`${
            i === index ? "bg-lime-500" : "bg-white"
          } w-3 h-3 rounded-full cursor-pointer`}
        />
      ))}
    </div>
  );
};

const CircularProgress = ({
  percentage = 20,
  size = 100,
  strokeWidth = 10,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="flex relative items-center w-fit justify-start mt-4 ml-2 "
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        {/* Animated Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke=" oklch(0.768 0.233 130.85)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        {/* Percentage Text */}
      </svg>
      {isInView && (
        <div className="text-lg absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 font-tekur text-center font-bold text-lime-500">
          <CountUp end={percentage} duration={3} />%
        </div>
      )}
    </div>
  );
};
