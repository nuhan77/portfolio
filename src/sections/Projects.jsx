import TextReveal from "../components/TextReveal";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useMyContext } from "../context/context";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";
import tourBookingImage from "./../assets/tourBooking.png";
import geminiCLoneImage from "./../assets/geminiClone.png";
import portfolioImage from "./../assets/portfolio.png";
import { Link, useNavigate } from "react-router-dom";
import AnimatedButton from "../components/AnimatedButton";

const projectsInfo = [
  {
    title: "Travel",
    image: tourBookingImage,
    liveLink: "https://tour-booking-frontend.onrender.com",
    link: "/projects/travel",
    shortDesc:
      "A responsive travel booking app built with the MERN stack, offering users the ability to explore destinations, view tour details, and book trips seamlessly. Features include dynamic search, user authentication, admin dashboard, and smooth UI/UX for a complete travel planning experience.",
  },
  {
    title: "Gemini Clone",
    image: geminiCLoneImage,
    liveLink: "https://gemini-clone-ya3o.onrender.com",
    link: "/projects/gemini-clone",
    shortDesc:
      "An AI-powered Gemini clone built with React.js, featuring real-time chat, smart response generation using OpenAI's API, and a clean, responsive UI that mimics the original Gemini experience.",
  },
  {
    title: "Travel",
    image: tourBookingImage,
    liveLink: "https://tour-booking-frontend.onrender.com",
    link: "/projects/travel",
    shortDesc:
      "A responsive travel booking app built with the MERN stack, offering users the ability to explore destinations, view tour details, and book trips seamlessly. Features include dynamic search, user authentication, admin dashboard, and smooth UI/UX for a complete travel planning experience.",
  },
  {
    title: "Gemini Clone",
    image: geminiCLoneImage,
    liveLink: "https://gemini-clone-ya3o.onrender.com",
    link: "/projects/gemini-clone",
    shortDesc:
      "An AI-powered Gemini clone built with React.js, featuring real-time chat, smart response generation using OpenAI's API, and a clean, responsive UI that mimics the original Gemini experience.",
  },
  {
    title: "Portfolio",
    image: portfolioImage,
    liveLink: "https://tour-booking-frontend.onrender.com",
    link: "/projects/portfolio",
    shortDesc:
      "My portfolio app is a modern, fully responsive web application built to showcase my skills as a MERN stack developer and UI/UX designer. Designed with a clean and intuitive layout, the app highlights my best projects, including live demos, code repositories, and design previews. Developed using React.js, styled with Tailwind CSS, and optimized for performance and smooth navigation, this app reflects my passion for building elegant and efficient digital solutions.",
  },
];

function Projects() {
  const { setOptions, optionsObj, isHeaderClicked } = useMyContext();

  const mainRef = useRef(null);

  const isInView = useInView(mainRef);
  useEffect(() => {
    if (isInView && !isHeaderClicked) setOptions(optionsObj.projects);
  }, [isInView]);

  const [isRight, setIsRight] = useState(true);

  const graphVariants = {
    right: {
      backgroundPositionY: ["0px", "15px"],
      backgroundPositionX: ["0px", "15px"],
    },
    left: {
      backgroundPositionY: ["0px", "15px"],
      backgroundPositionX: ["15px", "0px"],
    },
  };

  const ref = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  // });

  // const scrollVertical = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section
      ref={mainRef}
      id="projects"
      className="mt-40 mb-40 flex flex-col items-center justify-center"
    >
      <TextReveal
        lineHeight={"4rem"}
        padding={1}
        className="text-5xl font-bold font-courgette text-center "
      >
        Projects
      </TextReveal>
      <TextReveal
        delay={1.2}
        stagger={0.03}
        space=".25rem"
        className="description text-center "
      >
        See my some of my work
      </TextReveal>
      <div className=" px-[.5em] sm:px-4 py-[2em] mt-8 relative w-[95%] sm:w-[90%] ">
        <motion.div
          className={` -z-10 absolute h-full border w-full top-0 right-0 `}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px),linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)",
            backgroundSize: "15px 15px",
          }}
          variants={graphVariants}
          animate={isRight ? "right" : "left"}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        ></motion.div>
        <ProjectSlider setIsRight={setIsRight} projectsInfo={projectsInfo} />
      </div>
    </section>
  );
}

export default Projects;

const ProjectSlider = ({ setIsRight, projectsInfo }) => {
  const { under400px } = useMyContext();
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handelNext = () => {
    setPositionIndexes((prev) =>
      prev.map((index) => (index + 1) % projectsInfo.length)
    );
    setIsRight(false);
  };
  const handelPrev = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map(
        (index) => (index - 1 + projectsInfo.length) % projectsInfo.length
      )
    );
    setIsRight(true);
  };

  const positions = ["left1", "left", "center", "right", "right1"];

  const imageVariants = {
    left1: {
      x: "-40%",
      scale: 0.5,
      zIndex: 2,
    },
    left: {
      x: "-25%",
      scale: 0.7,
      zIndex: 4,
    },
    center: {
      x: 0,
      scale: 1,
      zIndex: 5,
      opacity: 1,
    },
    right: {
      x: "25%",
      scale: 0.7,
      zIndex: 4,
    },
    right1: {
      x: "40%",
      scale: 0.5,
      zIndex: 2,
    },
  };

  const navigate = useNavigate();
  return (
    <div className=" relative w-full h-[40em] overflow-hidden">
      {projectsInfo.map((project, index) => (
        <motion.div
          key={index}
          variants={imageVariants}
          animate={positions[positionIndexes[index]]}
          className="w-[80%] sm:w-[70%] h-[30em] sm:h-[35em] rounded-md overflow-hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
        >
          <img
            className="w-full h-full object-cover blur-[2px]"
            src={project.image}
          />
          <motion.div className="h-full w-full bg-black/50 absolute top-0 left-0 px-2 sm:px-4 py-4 flexCenter flex-col gap-8">
            <h1 className="text-3xl md:text-5xl  font-winky-sans font-bold text-center text-white ">
              {project.title}
            </h1>
            <p
              className={`${
                under400px ? "text-xs" : "text-sm"
              }  md:text-lg text-white text-center`}
            >
              {project.shortDesc}
            </p>
            <div className="flexCenter flex-col md:flex-row gap-4">
              <a
                className="w-fit"
                target="_blank"
                rel="noopener noreferrer"
                href={project.liveLink}
              >
                <AnimatedButton onClick={{}}>Watch Live</AnimatedButton>
              </a>
              <AnimatedButton
                onClick={() => navigate(project.link)}
                className=""
              >
                View Details
              </AnimatedButton>
            </div>
          </motion.div>
        </motion.div>
      ))}
      <div className="text-3xl absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-10">
        <button className="cursor-pointer" onClick={handelNext}>
          <FaCircleArrowLeft className="" />
        </button>
        <button className="cursor-pointer" onClick={handelPrev}>
          <FaCircleArrowRight />
        </button>
      </div>
    </div>
  );
};

//   return (
//     <div className=" rounded-md ">
//       <img src={image} className="w-full h-full object-cover" alt="" />
//       <div>
//         <h1>{title}</h1>
//       </div>
//     </div>
//   );
// };

// const Slider = ({ desc, image }) => {
//   return (
//     <motion.div
//       className="w-full "
//       initial={{ opacity: 0, y: 200 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//     >
//       <h1>{desc}</h1>
//       <div className="h-[30em] w-[50em] rounded-md overflow-hidden">
//         <img className="w-full h-full object-cover" src={image} />
//       </div>
//     </motion.div>
//   );
// };
