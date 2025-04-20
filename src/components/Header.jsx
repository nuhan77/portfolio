import { useRef, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import { useMyContext } from "../context/context";
import { button, div } from "motion/react-client";
import useIsMobile from "../utils/IsMobile";
function Header() {
  const { options, setOptions, headerContent, optionsObj, setIsHeaderClicked } =
    useMyContext();
  const isMobile = useIsMobile();

  const [isSidebar, setIsSidebar] = useState(false);

  return (
    <div
      className={`${
        isMobile
          ? "right-2 bg-transparent "
          : " p-1 left-1/2 -translate-x-1/2 bg-white/20"
      } w-fit rounded-full z-100 font-winky-sans fixed top-2 flex items-center  backdrop-blur-[10px] justify-center `}
    >
      {!isMobile ? (
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0, 0.71, 0.3, 1.01] }}
          className="relative border-2 w-fit py-3 px-1 gap-4 rounded-full border-white flex items-center justify-around"
        >
          {headerContent.map((item, index) => (
            <Tab
              key={index}
              optionsObj={optionsObj}
              content={item}
              setOptions={setOptions}
            />
          ))}

          <Animation options={options} />
        </motion.ul>
      ) : (
        <div className="relative">
          <SidebarButton isSidebar={isSidebar} setIsSidebar={setIsSidebar} />
          {<Sidebar isSidebar={isSidebar} content={headerContent} />}
        </div>
      )}
    </div>
  );
}

const Tab = ({ content, setOptions, optionsObj }) => {
  const { setIsHeaderClicked } = useMyContext();

  const tab = useRef();
  return (
    <Link
      to={content.link}
      smooth={true}
      offset={-70}
      ref={tab}
      onClick={() => {
        setOptions(optionsObj[content.link]);
        setIsHeaderClicked(true);
        setTimeout(() => {
          setIsHeaderClicked(false);
        }, 1000);
      }}
      className="mx-4 z-10 uppercase cursor-pointer  text-white "
    >
      {content.text}
    </Link>
  );
};

const Animation = ({ options }) => {
  return (
    <motion.li
      animate={options}
      style={{
        background: `linear-gradient(90deg, #fa0101 0%, #b700ff 100%)`,
      }}
      className={`top-1 bottom-1  w-20 rounded-full absolute z-0`}
    ></motion.li>
  );
};

const SidebarButton = ({ isSidebar, setIsSidebar }) => {
  const sidebar = useRef(null);

  return (
    <button
      ref={sidebar}
      onClick={() => {
        setIsSidebar(!isSidebar);
      }}
      className=" z-20 rounded-full h-8 w-20 overflow-hidden relative font-semibold uppercase"
    >
      <motion.div
        animate={{ top: isSidebar ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute h-[100%] w-full "
      >
        <p className=" h-full w-full flexCenter bg-[#9cfd74] text-black  ">
          Menu
        </p>
        <p className="top-full h-full w-full flexCenter bg-black ">close</p>
      </motion.div>
    </button>
  );
};

const Sidebar = ({ isSidebar, content }) => {
  const variants = {
    open: {
      width: 300,
      height: 500,
      top: -8,
      right: -8,
    },
    close: {
      width: 0,
      height: 0,
      top: 5,
      right: 5,
    },
  };

  return (
    <motion.div
      className=" z-10 absolute overflow-hidden bg-[#9cfd74] h-[400px] w-[300px] rounded-xl"
      variants={variants}
      animate={isSidebar ? "open" : "close"}
      initial="close"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div className="flexCenter  text-black font-bold flex-col mt-6 p-4 text-4xl">
        {content.map((item, index) => (
          <Link
            key={index}
            smooth={true}
            offset={-70}
            className="p-4 w-full cursor-pointer text-center"
            to={item.link}
          >
            {item.text}
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Header;
