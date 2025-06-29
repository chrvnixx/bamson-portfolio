import { motion } from "framer-motion";
export default function Intro() {
  return (
    <div
      id="intro"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full mt-16 sm:mt-20 md:mt-0">
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-3xl sm:text-6xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tighter pl-4"
          >
            I'm Bamson , I design web
            <div className="mt-2 sm:mt-4">and product interfaces with</div>
            <div className="mt-2 sm:mt-4">a focus on clear layouts,</div>
            <div className="mt-2 sm:mt-4">smooth user flows, and</div>
            <div className="mt-2 sm:mt-4">helping teams build with</div>
            <div className="mt-2 sm:mt-4">more trust and intention.</div>
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
