import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingScreen.css";
import { useEffect, useState } from "react";

export default function LoadingScreen({ dataLoading, setWorldLoaded }) {
  const { loaded } = useProgress();
  const [loadedPercent, setLoadedPercent] = useState("0px");
  const pro = useProgress();
  useEffect(() => {
    setLoadedPercent(`${(loaded / 46) * 100}px`);
    if (loaded >= 46) setWorldLoaded(true);
    // console.log(loaded);
  }, [loaded]);
  return (
    <AnimatePresence>
      {loaded < 46 && !dataLoading && (
        <motion.div
          className="loading-screen"
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {loaded < 46 && !dataLoading && (
            <motion.div
              className="loading-screen__container"
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              <motion.p
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
              </motion.p>
              <div className="loading-screen__progress-track">
                <div
                  style={{ width: loadedPercent }}
                  className="loading-screen__progress-inner"
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
