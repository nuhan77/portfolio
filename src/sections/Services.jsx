import { useInView, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useMyContext } from "../context/context";
import fullStackImage from "./../assets/fullstack-min.jpg";
import frontendImage from "./../assets/frontend-min.jpg";
import backendImage from "./../assets/backend-min.jpg";
import server from "./../assets/server-min.jpg";
import freelance from "./../assets/freelance-min.jpg";
import api from "./../assets/api-min.jpg";
import optimization from "./../assets/optimization-min.jpg";
import TextReveal from "../components/TextReveal";

function Services() {
  const { setOptions, optionsObj, isHeaderClicked } = useMyContext();

  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.1 });
  useEffect(() => {
    if (isInView && !isHeaderClicked) setOptions(optionsObj.services);
  }, [isInView]);

  const services = [
    {
      title: "Full-Stack Web Development",
      desc: "I specialize in building dynamic, high-performance web applications using the MERN stack. From designing seamless user interfaces to developing robust backend logic, I ensure a smooth and scalable experience. My approach focuses on creating applications that are fully responsive, optimized for speed, and secure, making them reliable for both small projects and large-scale platforms.",
      image: fullStackImage,
    },
    {
      title: " Frontend Development ",
      desc: "Using React.js, I develop modern, interactive, and mobile-friendly user interfaces that enhance engagement and usability. I ensure fast rendering, smooth state management, and optimal performance by utilizing tools like Redux, Context API, and Tailwind CSS. My goal is to create front-end experiences that are not only visually appealing but also highly efficient and scalable.",
      image: frontendImage,
    },
    {
      title: "Backend Development",
      desc: "I develop powerful and scalable backend systems using Node.js and Express.js. My expertise includes building RESTful APIs, implementing authentication systems with JWT and OAuth, and integrating real-time features using WebSockets. Security and performance are always a priority, ensuring applications run efficiently with well-structured server-side logic.",
      image: backendImage,
    },
    {
      title: "Database Management",
      desc: "I design and optimize NoSQL databases with MongoDB to ensure fast data retrieval and scalability. I also work with Firebase for real-time data synchronization, providing seamless user experiences. My approach includes proper indexing, data security measures, and performance optimization to maintain efficient database operations.",
      image: server,
    },
    {
      title: "Third-Party API Integrations",
      desc: "I integrate various third-party services to enhance functionality, including payment gateways like Stripe and PayPal, authentication systems, and external APIs such as Google Maps and OpenAI. These integrations help improve user experience and provide additional features tailored to business needs.",
      image: api,
    },
    {
      title: "Optimization & Security",
      desc: "I focus on optimizing applications for speed and security by implementing caching strategies, lazy loading, and efficient database queries. Security best practices such as XSS prevention, CSRF protection, and secure authentication methods are also applied to safeguard applications from vulnerabilities.",
      image: optimization,
    },
    {
      title: "Freelance & Consulting",
      desc: "Beyond development, I offer consulting services to help businesses and startups plan, optimize, and improve their web applications. Whether it's code review, debugging, or guidance on best practices, I provide expert insights to enhance the overall development process.",
      image: freelance,
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="services"
      className=" mt-20  flexCenter flex-col"
    >
      <TextReveal className="text-5xl font-bold font-courgette text-center  ">
        Services
      </TextReveal>
      <TextReveal
        delay={1.2}
        stagger={0.03}
        space=".25rem"
        className="description  "
      >
        The services I provide to my clients
      </TextReveal>

      <div className="flexCenter md:px-12  flex-wrap gap-8 mt-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
}

export default Services;

const ServiceCard = ({ title, image, desc }) => {
  const [isHovering, setIsHovering] = useState(false);

  const { isMobile, under490px, under400px } = useMyContext();

  const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", ".8 1"],
  // });

  // const scaleTransform = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  // const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.5, 1]);


  const isInView = useInView(ref, { amount: 0.2, once:true });

  return (
    <div className="">
      <motion.div
        ref={ref}
        layout
        style={{
          // opacity: opacityTransform,
          // scale: scaleTransform,
        }}
        initial = {{
          scale: .5,
          opacity: .5,
        }}
        animate={ isInView && {
          scale: 1,
          opacity: 1,
          boxShadow: isHovering
            ? "0px 0px 40px 0px rgba(0,0,0,0.8)"
            : "0px 0px 15px 0px rgba(0,0,0,0.8)",
          backdropFilter: isHovering ? "blur(10px)" : "blur(0px)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        onHoverStart={() => {
          setIsHovering(true);
        }}
        onHoverEnd={() => {
          setIsHovering(false);
        }}
        className={`${
          isMobile
            ? under490px
              ? under400px
                ? "w-[19.5em] h-[25em]"
                : "w-[24em] h-[20em]  "
              : "w-[29em] h-[20em]"
            : "w-[29em] h-[24em]  "
        }  relative   rounded-xl overflow-hidden `}
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          animate={{
            scale: isHovering ? 1.2 : 1,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        ></motion.div>

        <motion.div
          className={`${
            isHovering
              ? "bg-black/50 w-[65%]"
              : isMobile
              ? "bg-black/50 w-[100%]"
              : "bg-black/20 w-[65%]"
          } transition-colors duration-500 absolute top-0  h-full  backdrop-blur-xs`}
          animate={{
            left: !isHovering ? "0%" : "35%",
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
        >
          <div className="flex items-center justify-start p-4">
            <motion.div
              className="p-3 rounded    bg-amber-500 "
              animate={{
                rotate: isHovering ? 360 : 0,
                transition: { duration: 0.5, ease: "easeInOut" },
              }}
            ></motion.div>
            <h1
              className={`${
                isHovering ? "text-amber-500 " : "text-white"
              } transition-colors duration-500 text-2xl ml-4 font-bold font-winky-sans`}
            >
              {title}
            </h1>
          </div>
          <p className="p-4 font-titillium font-light">{desc}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};
