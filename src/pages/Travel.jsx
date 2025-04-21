import tourBookingVideo from "./../assets/tour-booking.mp4";
import tourBookingImage from "../assets/tourBooking.png";
import { useEffect, useRef } from "react";

const repoLink = "https://github.com/nuhan77/tour-booking";
const liveLink = "https://tour-booking-frontend.onrender.com";

function Travel() {
  const videoRef = useRef(null);
  useEffect(() => {
    // Play video when component mounts
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
          src={tourBookingImage}
          alt=""
        />
        <h1 className="text-3xl pt-10 md:text-5xl text-amber-600 font-courgette text-center font-bold">
          Travel
        </h1>

        <video
          ref={videoRef}
          muted
          autoPlay
          loop
          playsInline
          class="w-[90%] max-w-[40em] m-auto mt-4 rounded-lg shadow-4xl"
          controls
        >
          <source src={tourBookingVideo} type="video/mp4" />
        </video>
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
        <p className="font-winky-sans text-xl">Project Overview: Travel App</p>
        <p>
          Travel is a fully responsive, modern travel application that I
          designed and developed from the ground up using the MERN stack
          (MongoDB, Express.js, React.js, Node.js). My goal was to create a
          seamless, user-centric travel platform that blends clean UI/UX design
          with powerful backend functionality — and that’s exactly what I
          delivered.
        </p>
        <p className="mt-2">
          As both a developer and UI/UX designer, I handled every stage of the
          project, from wireframes in Figma to production-ready code. The
          frontend is built with React.js and styled using Tailwind CSS,
          ensuring a fast, mobile-first, and accessible experience. On the
          backend, I used Node.js and Express.js to create secure, scalable
          APIs, with MongoDB for flexible data storage.
        </p>
        <p className="mt-4 font-winky-sans text-xl">
          The app includes advanced features like:
        </p>
        <ul className="list-disc ml-4">
          <li>User authentication (JWT-based login/register)</li>
          <li>Real-time location-based search</li>
          <li>Smart itinerary planning</li>
          <li>Expense tracking with MongoDB aggregation</li>
          <li>Offline access with PWA support</li>
          <li>Cloud image uploading (Cloudinary)</li>
          <li>Admin dashboard for trip analytics and user management</li>
        </ul>
        <p className="mt-2">
          To enhance performance, I implemented code-splitting, lazy loading,
          and image optimization. The app is fully deployed using Vercel
          (frontend) and Render/Heroku (backend), with continuous deployment via
          GitHub.
        </p>
      </div>
    </section>
  );
}

export default Travel;




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