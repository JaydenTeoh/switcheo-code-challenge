import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import Header from "../components/Header";
import FancyForm from "../components/FancyForm";
import { NotificationProvider } from "web3uikit";
import Modal from "../components/Modal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function MyApp() {
  const [modalOpen, setModalOpen] = useState();
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div className="min-h-screen min-w-screen bg-black box-border overflow-y-hidden">
      <MoralisProvider initializeOnMount={false}>
        <NotificationProvider>
          <div className="flex flex-col w-full justify-between items-center overflow-y-hidden">
            <Header />
            <div className="absolute m-auto h-full flex items-center justify-center">
              <motion.button
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ ease: "linear", duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => open()}
                className="text-white font-semibold m-auto text-4xl"
              >
                Send ETH
              </motion.button>
            </div>

            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
          </div>
        </NotificationProvider>
      </MoralisProvider>
    </div>
  );
}

export default MyApp;
