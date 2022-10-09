import { motion } from "framer-motion";
import FancyForm from "./FancyForm";

export default function Modal({ handleClose }) {
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      overflowY: "hidden",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      onClick={(e) => e.stopPropagation}
      className="m-auto w-3/5 max-w-md h-full pb-10 pt-4 flex flex-col items-center justify-center"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <FancyForm handleClose={handleClose} />
    </motion.div>
  );
}
