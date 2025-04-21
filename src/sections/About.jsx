import TextReveal from "../components/TextReveal";
import { motion, useInView } from "motion/react";
import pic from "./../assets/aboutPic.jpg";
import RevealFormBottom from "../components/RevealFormBottom";
import CountUp from "react-countup";
import { useEffect, useRef } from "react";
import { useMyContext } from "../context/context";

function About() {
  const { setOptions, optionsObj, isHeaderClicked, under540px, under370px } =
    useMyContext();

  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView && !isHeaderClicked) setOptions(optionsObj.about);
  }, [isInView]);

  return (
    <section ref={ref} id="about" className="mt-40 flex flex-col items-center">
      <TextReveal
        lineHeight={"4rem"}
        padding={1}
        className="text-5xl font-bold font-courgette text-center "
      >
        About Me
      </TextReveal>
      <TextReveal
        delay={1.4}
        stagger={0.03}
        space=".25rem"
        className="description text-center "
      >
        Here is a little bit information about me
      </TextReveal>

      <div className="relative overflow-hidden mt-16 w-[95%] max-w-[70rem] h-fit">
        <motion.div
          animate={{
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-full h-full  rounded-full bg-orange-500 blur-[60px]"
        ></motion.div>
        <div className="absolute w-full h-full  bg-amber-600/20 blur-[60px]"></div>
        <div className="flex flex-col overflow-hidden gap-4  relative bg-black/50  backdrop-blur-3xl p-4 rounded-lg h-full w-full">
          <div className="flexCenter w-full flex-col">
            <RevealFormBottom>
              {" "}
              <img
                src={pic}
                className="w-[70%] max-w-[20em] object-cover rounded-full"
                alt=""
              />
            </RevealFormBottom>
            <RevealFormBottom>
              <p className="font-tekur text-2xl text-lime-500 mt-4 text-center font-[700]">
                Hi, I am Nawazesh Mohammad from Bangladesh.
              </p>
            </RevealFormBottom>
          </div>
          <RevealFormBottom delay={0.3}>
            <p className="font-titillium ">
              I am a passionate MERN stack developer and UI/UX designer with a
              strong focus on creating seamless, user-friendly digital
              experiences. Currently, I am pursuing my studies in Electrical and
              Electronic Engineering (EEE) at Islamic University. My expertise
              lies in building scalable web applications with modern
              technologies like React.js, Node.js, Express.js, and MongoDB while
              also designing intuitive interfaces using Figma. I thrive on
              solving complex problems and bringing innovative ideas to life
              through clean, efficient code and engaging design.
            </p>
          </RevealFormBottom>
          <div>
            <TextReveal
              space={`${
                under540px ? (under370px ? ".25rem" : ".3rem") : ".5rem"
              }`}
              stagger={0.03}
              className={`${
                under540px
                  ? under370px
                    ? "text-[.8rem]"
                    : "text-[1rem]"
                  : "text-2xl"
              } font-tekur   text-cyan-400  font-[700]`}
            >
              Let's build something amazing together!
            </TextReveal>
          </div>
          <div className="w-full mt-4 flexCenter">
            <div className="flex items-center gap-4 md:gap-8">
              <ExperienceCard title={"Years of Experience"} number={3} />
              <ExperienceCard title={"Projects"} number={23} />
              <ExperienceCard title={"Satisfied Clients"} number={6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

const ExperienceCard = ({ title, number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="" ref={ref} className="flex flex-col gap-2">
      <p className={` text-center  font-semibold -mb-1`}>{title}</p>
      {isInView && (
        <CountUp
          end={number}
          duration={4}
          className={`text-3xl font-tekur text-center font-bold text-cyan-400`}
        />
      )}
    </div>
  );
};
