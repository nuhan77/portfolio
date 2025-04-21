import { useEffect, useRef, useState } from "react";
import profilePic from "./../assets/profilePic.jpg";
import facebookIcon from "./../assets/icons/facebook.png";
import instagramIcon from "./../assets/icons/instagram.png";
import linkedinIcon from "./../assets/icons/linkedin.png";
import githubIcon from "./../assets/icons/github-sign.png";
import twitterIcon from "./../assets/icons/twitter.png";
import logo from "../../public/logo.png";

const socialMedias = [
  {
    png: facebookIcon,
    link: "https://www.facebook.com/nawazeshmohammad.nuhan",
  },
  {
    png: instagramIcon,
    link: "https://www.instagram.com/nawazeshmohammad?igsh=cnl5eGMyb2JpZGJh",
  },
  {
    png: linkedinIcon,
    link: "https://www.linkedin.com/in/nawazesh-mohammad-949824356/",
  },
  {
    png: githubIcon,
    link: "https://github.com/nuhan77",
  },
  {
    png: twitterIcon,
    link: "https://x.com/nuhan2003",
  },
];

import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import { animate } from "motion";
import { useMyContext } from "../context/context";
import TextReveal from "../components/TextReveal";
import AnimatedButton from "../components/AnimatedButton";
import { Link } from "react-scroll";

function Hero() {
  const { isHeaderClicked, isMobile, under440px } = useMyContext();

  const { setOptions, optionsObj } = useMyContext();

  const ref = useRef(null);

  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView && !isHeaderClicked) setOptions(optionsObj.home);
  }, [isInView]);

  const texts = useRef(null);
  const image = useRef(null);

  const primaryX = useMotionValue(0);
  const primaryY = useMotionValue(0);
  const transform = useMotionTemplate`rotateX(${primaryY}deg) rotateY(${primaryX}deg)`;

  const [isMove, setIsMove] = useState(false);
  setTimeout(() => {
    setIsMove(true);
  }, 1500);

  const handleMouseMove = (event) => {
    if (!isMove || isMobile) return;
    const dimensionX = texts.current.getBoundingClientRect().x;
    const dimensionY = texts.current.getBoundingClientRect().y;
    const height = texts.current.getBoundingClientRect().height;
    const width = texts.current.getBoundingClientRect().width;
    const centerX = dimensionX + width / 2;
    const centerY = dimensionY + height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    animate(primaryY, (mouseX - centerX) / 40, { duration: 2 });
    animate(primaryX, (mouseY - centerY) / 10, { duration: 2 });
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className=" overflow-hidden relative min-h-screen flexCenter flex-col "
    >
      <img src={logo} className="w-20 absolute top-0 left-0" alt="" />
      <div className="flex-col  md:flex-row  pt-20 md:pt-0 items-center justify-around px-20 flex gap-12">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.3, 1.01] }}
        >
          <motion.div
            ref={texts}
            id="hero"
            style={{
              transform,
            }}
            className="max-w-[50em] w-full"
          >
            <p className="text-4xl font-caveat">Hey there,</p>
            <div className="flex  items-start ">
              <h1 className={`${under440px ? "text-4xl" : "text-6xl"} mt-8`}>
                I'm
                <TextReveal
                  delay={1}
                  className="ml-4 -mb-2 font-bold  font-winky-sans"
                >
                  Nawazesh
                </TextReveal>
                <TextReveal
                  delay={2.3}
                  className="ml-4  -mb-2 font-bold  font-winky-sans"
                >
                  Mohammad
                </TextReveal>
              </h1>
            </div>
            <h1 className="font-courgette text-4xl mt-4">
              Expert Full Stack <span>Web Developer</span>
            </h1>
            <p className="mt-8 description  ">
              I'm a freelancer with a passion for creating innovative, dynamic
              and user-friendly web applications. I specialize in building
              custom web applications that meet the unique needs of my clients.
            </p>

            <div className={` mt-8 flex gap-6 -z-20`}>
              <Link to="contact" smooth={true} offset={-70}>
                <AnimatedButton>Contact Me</AnimatedButton>
              </Link>
              <Link to="contact" smooth={true} offset={-70}>
                <AnimatedButton>Hire Me</AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <div ref={image} className="flexCenter pt-16 pb-28">
          <div className=" relative flexCenter h-[15em] w-[15em] rounded-full  ">
            <motion.div
              initial={{ top: "50%", left: "50%", height: 0, width: 0 }}
              animate={{
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                scale: 1.3,
                rotate: 360,
              }}
              transition={{
                delay: 1.1,
                duration: 1.5,
                ease: "easeOut",
                rotate: {
                  delay: 1.5,
                  duration: 3,
                  ease: "linear",
                  repeat: Infinity,
                },
              }}
              className="imageDiv absolute rounded-full top-0 left-0 h-full w-full blur-xl "
            ></motion.div>
            <motion.img
              className="max-h-60 z-10 max-w-60 rounded-full "
              src={profilePic}
              initial={{
                x: 500,
                opacity: 0,
                scale: 2,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
                rotate: -360,
              }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.3, 1.01],
              }}
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 200, scale: 0.3, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="flex gap-4 mt-8 bg-white/20 rounded-md p-2 sm:p-4"
      >
        {socialMedias.map((social, index) => (
          <SocialMedia
            key={index}
            index={index}
            png={social.png}
            link={social.link}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default Hero;

const SocialMedia = ({ index, png, link }) => {
  return (
    <motion.a
      initial={{ y: 50, scale: 0.4, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut", delay: 1 + index * 0.2 }}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.img
        whileHover={{ y: -10, scale: 1.2, rotate: 20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="cursor-pointer w-10 h-auto"
        src={png}
      />
    </motion.a>
  );
};
