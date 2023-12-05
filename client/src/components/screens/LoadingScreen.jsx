import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingScreen.css";
// import { useEffect } from "react";

export default function LoadingScreen({ dataLoading }) {
  const { loaded } = useProgress();
  // const pro = useProgress();
  // useEffect(() => {
  //   console.log(pro);
  // }, [pro]);
  return (
    <AnimatePresence>
      {loaded < 45 && !dataLoading && (
        <motion.div
          className="loading-screen"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          {loaded < 45 && !dataLoading && (
            <motion.div
              className="loading-screen__container"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              <motion.h3
                className="loading-screen__text"
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                LOADING...
              </motion.h3>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
