import AnimatedButton from "./../components/animatedButton";
import tourBookingVideo from "./../assets/tour-booking.mp4";
import portfolioImage from "../assets/portfolio.png";
import { useEffect, useRef } from "react";

const repoLink = "https://github.com/nuhan77/tour-booking";
const liveLink = "https://tour-booking-frontend.onrender.com";

function Portfolio() {
  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay failed:", error);
      });
    }
  }, []);
  return (
    <section className="mb-20">
      <div className="relative bg-black/30">
        <img
          className="h-full blur-[2px] w-full object-cover -z-10 absolute"
          src={portfolioImage}
          alt=""
        />
        <h1 className="text-3xl pt-10 text-orange-600 md:text-5xl font-courgette text-center font-bold">
          Portfolio
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
          <source src={tourBookingVideo} type="video/mp4" />
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
        <p className="font-winky-sans text-xl">
          Portfolio App – Nawazesh Mohammad
        </p>
        <p>
          The Portfolio App is a dynamic and fully responsive web application
          designed and developed to professionally showcase my journey, skills,
          and projects as a Full Stack MERN Developer and UI/UX Designer. It
          serves as a digital resume, presenting my technical expertise,
          creative process, and real-world work in an engaging and interactive
          way.
        </p>
        <p className="mt-2">
          This portfolio is not just a static website — it’s a carefully crafted
          single-page application (SPA) that reflects my personal brand, coding
          proficiency, and design aesthetics. Built with modern technologies and
          best practices, it’s optimized for speed, accessibility, and a
          seamless user experience across all devices.
        </p>
        <p className="mt-4 font-winky-sans text-xl">Tech Stack:</p>
        <ul className="list-disc ml-4">
          <li>
            Frontend: React.js, Tailwind CSS, Framer Motion (for subtle
            animations), HTML5, JavaScript (ES6+)
          </li>
          <li>
            Design: Figma – all UI elements are custom-designed for a clean,
            modern look
          </li>
          <li>
            Routing & Navigation: React Router DOM (with smooth scroll to
            sections)
          </li>
          <li>
            Performance: Code splitting, lazy loading of assets, and image
            optimization
          </li>
          <li>Deployment: Hosted on Render for fast global access</li>
        </ul>
        <p className="mt-4 font-winky-sans text-xl">Key Features:</p>
        <ul className="list-disc ml-4">
          <li>
            About Me Section: Highlights my background, education (EEE @ Islamic
            University), and passion for building full-stack applications
          </li>
          <li>
            Skills Section: Lists technical skills (React, Node, MongoDB,
            Express, Figma, Git, etc.) with elegant icons and tooltips
          </li>
          <li>
            Projects Showcase: Interactive cards with project screenshots, live
            links, GitHub repos, and feature overviews
          </li>
          <li>
            Responsive UI/UX: Designed with mobile-first principles to look
            great on any screen size
          </li>
          <li>
            Contact Form: Integrated form with validation and email
            functionality
          </li>
        </ul>
        <p className="mt-4 font-winky-sans text-xl">Why I Built It:</p>
        <p className="">
          This app is more than just a portfolio — it's a hands-on demonstration
          of my ability to plan, design, develop, and deploy a complete web
          solution from scratch. It reflects my dedication to clean code,
          responsive design, and user-first thinking.
        </p>
        <p className="mt-2">
          Through this project, I aimed to create a space where potential
          employers, collaborators, or clients can quickly understand my
          strengths, explore my work, and connect with me — all through a
          smooth, branded experience.
        </p>
        <p className="mt-4">
          Let me know if you want a version that’s more casual, more creative,
          or tailored to a specific audience like recruiters or clients!
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
