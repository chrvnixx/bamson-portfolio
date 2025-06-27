import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div id="contact" className="container mx-auto px-4 py-16 sm:py-24">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-8 sm:mb-12"
      >
        Contact Me
      </motion.h2>
      <div className="max-w-4xl mx-auto ">
        <p className="text-2xl sm:text-2xl lg:text-6xl leading-tight mb-8 sm:mb-12">
          Open to paid design work
          <br />
          and ready to collaborate
          <br />
          and contribute where it counts. DM me on
        </p>
      </div>
      <div className="flex justify-center">
        <motion.div
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 2,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow duration-300"
        >
          <a
            href="https://x.com/bmsnayo"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <FaXTwitter className="w-8 h-8 sm:w-12 sm:h-12 text-black" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
