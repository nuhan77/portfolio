import { createContext, useContext, useState } from "react";
import useIsMobile from "../utils/IsMobile";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  let under490px = useIsMobile(490);
  let under440px = useIsMobile(440);
  let under540px = useIsMobile(540);
  let under400px = useIsMobile(400);
  let under370px = useIsMobile(370);
  let isMobile = useIsMobile();

  const [isHeaderClicked, setIsHeaderClicked] = useState(false);

  const [options, setOptions] = useState({
    left: 4,
    width: 70.08,
  });

  const optionsObj = {
    home: { left: 4, width: 70.08 },
    services: { left: 90, width: 92.1 },
    projects: { left: 198, width: 96.27 },
    skills: { left: 310, width: 70.08 },
    about: { left: 400, width: 75.28 },
    contact: { left: 491, width: 89.47 },
  };

  const headerContent = [
    { text: "Home", link: "home" },
    { text: "Services", link: "services" },
    { text: "Projects", link: "projects" },
    { text: "Skills", link: "skills" },
    { text: "About", link: "about" },
    { text: "Contact", link: "contact" },
  ];

  const values = {
    options,
    setOptions,
    headerContent,
    optionsObj,
    isHeaderClicked,
    setIsHeaderClicked,

    under490px,
    under540px,
    isMobile,
    under400px,
    under440px,
    under370px,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};
