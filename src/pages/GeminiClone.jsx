import geminiVideo from "./../assets/tour-booking.mp4";
import geminiImage from "../assets/geminiClone.png";
import { useEffect, useRef } from "react";

const repoLink = "https://github.com/nuhan77/gemini-clone";
const liveLink = "https://gemini-clone-ya3o.onrender.com";

function GeminiClone() {
  const videoRef = useRef (null);

  useEffect(() => {
    // Play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    }
  }, []);

  return (
    <section className="mb-20">
      <div className="relative bg-black/30">
        <img
          className="h-full blur-[2px] w-full object-cover -z-10 absolute"
          src={geminiImage}
          alt=""
        />
        <h1 className="text-3xl pt-10 md:text-5xl text-teal-800 font-courgette text-center font-bold">
          Gemini Clone  
        </h1>

        {/* <video 
          ref={videoRef}
          muted
          autoPlay
          loop
          playsInline
          class="w-[90%] max-w-[40em] m-auto mt-4 rounded-lg shadow-4xl"
          controls
        >
          <source src={geminiVideo} type="video/mp4" />
        </video> */}
        <div className="flexCenter flex-col md:flex-row gap-4 py-10">
          <a
            className="w-fit"
            target="_blank"
            rel="noopener noreferrer"
            href={liveLink}
          >
            <AnimatedButton onClick={() => {}}>Watch Live</AnimatedButton>
          </a>
          <a
            className="w-fit"
            target="_blank"
            rel="noopener noreferrer"
            href={repoLink}
          >
            <AnimatedButton onClick={() => {}}>Github Repo</AnimatedButton>
          </a>
        </div>
      </div>
      <div className="mt-4 font-titillium  mx-3 sm:mx-12 lg:mx-20  ">
      <p className="font-winky-sans text-xl">Project Overview: Gemini Clone App</p>
        <p>
        The Gemini Clone App is a cutting-edge AI chatbot interface inspired by Google's Gemini (formerly Bard). It delivers a seamless and intelligent conversational experience that mimics the design, functionality, and responsiveness of the original AI interface, with added customizations to enhance user interaction and performance.
        </p>
        <p className="mt-2">
        This project was developed as a demonstration of my full-stack development and design capabilities, combining front-end aesthetics with robust back-end logic and real-time responsiveness.
        </p>
        <p className="mt-4 font-winky-sans text-xl">Tech Stack & Tools Used:</p>
        <ul className="list-disc ml-4">
          <li>Frontend: React.js, Tailwind CSS, HTML5, JavaScript (ES6+)</li>
          <li>AI Integration: OpenAI GPT-4 API (or custom LLM wrapper)</li>
          <li>UI/UX Design: Figma – designed clean, modern, and responsive layouts for web and mobile</li>
          <li>Deployment: Hosted on Render for fast global access</li>
        </ul>
        <p className="mt-4 font-winky-sans text-xl">Key Features:</p>
        <ul className="list-disc ml-4">
          <li>Real-time Chat UI: Similar to Gemini, with smooth scroll, smart animations, and dark/light theme toggle.</li>
          <li>LLM Integration: Connected to OpenAI’s API to simulate intelligent responses.</li>
          <li>Saved Conversations: Store and retrieve chat history from the database.</li>
          <li>AI Integration: Google AI API (or custom LLM wrapper)</li>
          <li>Search Engine-Like Input: Allows for smart prompt recognition, including follow-up questions and multi-turn conversations.</li>
          <li>Performance Optimized: Lazy loading, code splitting, and minimal re-renders for maximum speed.</li>
        </ul>
      </div>
    </section>
  );
}

export default GeminiClone;


import { motion } from "motion/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { useMyContext } from "../context/context";

function AnimatedButton({
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

