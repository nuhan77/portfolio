import { useEffect, useRef, useState } from "react";
import RevealFormBottom from "../components/RevealFormBottom";
import TextReveal from "../components/TextReveal";
import { motion, useInView } from "motion/react";
import AnimatedButton from "../components/AnimatedButton";
import { useMyContext } from "../context/context";
import Modal from "../modal/Modal";
import loadingGif from "./../assets/loading_icon.gif";

const emailJsServiceId = "service_hbwg50l";
const emailJsTemplateId = "template_fbxnbeo";
const emailJsPublicKey = "VQlYN3fZRvu19axHJ";
import { AnimatePresence } from "motion/react";

const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClose = () => setIsModalOpen(false);
  const onOpen = () => setIsModalOpen(true);

  const { setOptions, optionsObj, isHeaderClicked } = useMyContext();

  const ref = useRef(null);

  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView && !isHeaderClicked) setOptions(optionsObj.contact);
  }, [isInView]);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handelChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message)
      return alert("Please fill all the fields");

    if (!isValidEmail(contactData.email))
      return alert("Please enter a valid email");

    setIsModalOpen(true);
    setIsLoading(true);
    setIsEmailSent(false);
    try {
      const response = await fetch(
        `https://api.emailjs.com/api/v1.0/email/send`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: emailJsServiceId,
            template_id: emailJsTemplateId,
            user_id: emailJsPublicKey,
            template_params: contactData,
          }),
        }
      );
      setIsEmailSent(response.ok);
    } catch (error) {
      console.log("error sending mail \n", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="mt-40 px-4 flex mb-24 flex-col items-center"
    >
      <TextReveal
        lineHeight={"4rem"}
        padding={1}
        className="text-5xl font-bold font-courgette text-center "
      >
        Contact Me
      </TextReveal>
      <TextReveal
        delay={1.4}
        stagger={0.03}
        space=".25rem"
        className="description text-center "
      >
        Contact me for any work or suggestions
      </TextReveal>

      <div className="flex flex-col md:flex-row gap-8 mt-16 items-center">
        <div>
          <RevealFormBottom>
            {" "}
            <p className="font-titillium text-2xl">
              Fell free to contact me for any work or suggestions or just to say
              hi. I am always there to help you.
            </p>
          </RevealFormBottom>
          <RevealFormBottom delay={0.5}>
            {" "}
            <p className="font-tekur text-6xl font-semibold text-yellow-500 text-center">
              24/7
            </p>
          </RevealFormBottom>
        </div>

        <div className="relative  w-[95%] max-w-[70rem]">
          <motion.div
            animate={{
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="absolute -top-5 -left-5 bg-pink-500 h-[20em] aspect-square rounded-full blur-[40px]"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.1, 0.8, 1.1],
            }}
            transition={{
              duration: 5,
              delay: 1,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="absolute -bottom-5 -right-5 bg-blue-800 h-[20em] aspect-square rounded-full blur-[40px]"
          ></motion.div>
          <motion.div className="absolute top-0 left-0 bg-amber-800/50 h-full w-full  blur-[40px]"></motion.div>

          <form
            onSubmit={handelSubmit}
            className="bg-black/50  grid rounded-lg p-4 gap-4 backdrop-blur-lg h-full w-full"
          >
            <h1 className="text-3xl font-bold text-center font-courgette">
              Contact Form
            </h1>
            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                className="bg-black/40 rounded block w-full py-2 px-2 outline-none"
                required
                name="name"
                placeholder="Enter your name"
                type="text"
                onChange={handelChange}
              />
            </motion.div>
            <motion.div
              className="overflow-hidden"
              viewport={{ once: true }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                required
                className="bg-black/40 rounded block w-full py-2 px-2 outline-none"
                name="email"
                placeholder="Enter your email"
                type="email"
                onChange={handelChange}
              />
            </motion.div>
            <motion.div
              className="overflow-hidden"
              initial={{ width: 0 }}
              viewport={{ once: true }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                required
                rows={5}
                className="bg-black/40 rounded block w-full py-2 px-2 resize-y outline-none min-h-[8em]"
                name="message"
                placeholder="Enter your message"
                type="text"
                onChange={handelChange}
              />
            </motion.div>
            <div className="w-full flexCenter -z-20">
              <AnimatedButton type="submit" onClick={handelSubmit}>
                Send
              </AnimatedButton>
            </div>
          </form>

          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {isModalOpen && (
              <Modal modalOpen={isModalOpen} handelClose={onClose}>
                {isLoading ? (
                  <div>
                    <img src={loadingGif} alt="" />
                  </div>
                ) : (
                  <div className="text-black text-center text-lg font-winky-sans">
                    <h1 className="text-center text-2xl  font-semibold text-green-600">
                      "Success"
                    </h1>

                    <p>Your message has been sent successfully.</p>
                    <p>Thanks for reaching out. I will get back to you soon.</p>
                    <button
                      className="mt-4 bg-blue-400 px-4 py-1 rounded text-white hover:bg-blue-600 transition duration-200"
                      onClick={onClose}
                    >
                      Cose
                    </button>
                  </div>
                )}
              </Modal>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Contact;
