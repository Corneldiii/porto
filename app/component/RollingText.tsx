import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RollingTextProps {
  title: string[];
  currentIndex: number;
}

const RollingText: FC<RollingTextProps> = ({ title, currentIndex }) => {
  return (
    <div className="overflow-hidden h-8 lg:h-50">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          className="text-3xl sm:text-7xl md:text-8xl lg:text-[90px] xl:text-[100px] lg:w-50  font-extrabold leading-tight md:leading-none tracking-tight"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {title[currentIndex]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default RollingText;