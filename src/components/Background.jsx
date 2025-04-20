import { motion } from "motion/react";
function Background() {
  return (
    <motion.div
      className="h-[110vh] w-full fixed -z-10 bg-[#0c192c] "
      style={{}}
    >
      <div className="flex justify-around relative ">
        <motion.span
          initial={{ y: "100vh", scale: 0 }}
          animate={{ y: "-20vh", scale: 1 }}
          transition={{ duration: 5, repeat: Infinity }}
          className="h-10 w-10 bg-[#4fc3dc] rounded-full m-4"
          style={{
            boxShadow: "0px 0px 0px 10px #4fc3dc44, 0px 0px 50px #4fc3dc ",
          }}
        ></motion.span>
        <motion.span
          initial={{ y: "100vh", scale: 0 }}
          animate={{ y: "-20vh", scale: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-10 w-10 bg-[#ff2d75] rounded-full m-4"
          style={{
            boxShadow: "0px 0px 0px 10px #ff2d7544, 0px 0px 50px #ff2d75 ",
          }}
        ></motion.span>
        <motion.span
          initial={{ y: "100vh", scale: 0 }}
          animate={{ y: "-20vh", scale: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-10 w-10 bg-[#4fc3dc] rounded-full m-4"
          style={{
            boxShadow: "0px 0px 0px 10px #4fc3dc44, 0px 0px 50px #4fc3dc ",
          }}
        ></motion.span>
        <motion.span
          initial={{ y: "100vh", scale: 0 }}
          animate={{ y: "-20vh", scale: 1 }}
          transition={{ duration: 6, repeat: Infinity }}
          className="h-10 w-10 bg-[#ff2d75] rounded-full m-4"
          style={{
            boxShadow: "0px 0px 0px 10px #ff2d7544, 0px 0px 50px #ff2d75 ",
          }}
        ></motion.span>

        {window.innerWidth > 400 && (
          <>
            <motion.span
              initial={{ y: "100vh", scale: 0 }}
              animate={{ y: "-20vh", scale: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-10 w-10 bg-[#4fc3dc] rounded-full m-4"
              style={{
                boxShadow: "0px 0px 0px 10px #4fc3dc44, 0px 0px 50px #4fc3dc ",
              }}
            ></motion.span>
          </>
        )}

        {window.innerWidth > 600 && (
          <>
            <motion.span
              initial={{ y: "100vh", scale: 0 }}
              animate={{ y: "-20vh", scale: 1 }}
              transition={{ duration: 8, repeat: Infinity }}
              className="h-10 w-10 bg-[#ff2d75] rounded-full m-4"
              style={{
                boxShadow: "0px 0px 0px 10px #ff2d7544, 0px 0px 50px #ff2d75 ",
              }}
            ></motion.span>
          </>
        )}

        {window.innerWidth > 800 && (
          <>
            <motion.span
              initial={{ y: "100vh", scale: 0 }}
              animate={{ y: "-20vh", scale: 1 }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-10 w-10 bg-[#4fc3dc] rounded-full m-4"
              style={{
                boxShadow: "0px 0px 0px 10px #4fc3dc44, 0px 0px 50px #4fc3dc ",
              }}
            ></motion.span>
            <motion.span
              initial={{ y: "100vh", scale: 0 }}
              animate={{ y: "-20vh", scale: 1 }}
              transition={{ duration: 6, repeat: Infinity }}
              className="h-10 w-10 bg-[#ff2d75] rounded-full m-4"
              style={{
                boxShadow: "0px 0px 0px 10px #ff2d7544, 0px 0px 50px #ff2d75 ",
              }}
            ></motion.span>
          </>
        )}

        {window.innerWidth > 1000 && (
          <>
            <motion.span
              initial={{ y: "100vh", scale: 0 }}
              animate={{ y: "-20vh", scale: 1 }}
              transition={{ duration: 3, repeat: Infinity }}
              className="h-10 w-10 bg-[#4fc3dc] rounded-full m-4"
              style={{
                boxShadow: "0px 0px 0px 10px #4fc3dc44, 0px 0px 50px #4fc3dc ",
              }}
            ></motion.span>
          </>
        )}
        {window.innerWidth > 1500 && (
          <>
            <motion.span
              initial={{ y: "100vh", scale: 0 }}
              animate={{ y: "-20vh", scale: 1 }}
              transition={{ duration: 8, repeat: Infinity }}
              className="h-10 w-10 bg-[#4fc3dc] rounded-full m-4"
              style={{
                boxShadow: "0px 0px 0px 10px #4fc3dc44, 0px 0px 50px #4fc3dc ",
              }}
            ></motion.span>
            <motion.span
              initial={{ y: "100vh", scale: 0 }}
              animate={{ y: "-20vh", scale: 1 }}
              transition={{ duration: 4, repeat: Infinity }}
              className="h-10 w-10 bg-[#4fc3dc] rounded-full m-4"
              style={{
                boxShadow: "0px 0px 0px 10px #4fc3dc44, 0px 0px 50px #4fc3dc ",
              }}
            ></motion.span>
          </>
        )}
      </div>
    </motion.div>
  );
}
export default Background;
