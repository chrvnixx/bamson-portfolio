import { motion } from "framer-motion";

export default function Works() {
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div id="work" className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col justify-center mt-8 sm:mt-20 md:mt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-center pt-10 mt-8 sm:mt-12 md:mt-20"
          >
            Design Work
          </motion.h2>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl md:text-6xl py-4 sm:py-6 md:py-10 w-full sm:w-180"
          >
            Here are some design explorations focused on improving user flows{" "}
            <br className="hidden sm:block" />
            and building trust.
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl py-2 sm:py-4 md:py-8 font-semibold text-center"
          >
            BORROW/LEND DAPP
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl"
          >
            A product design exercise for a DeFi borrow/lend dapp, featuring
            four key dashboard screens
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={imageVariantsLeft}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img src="/OVERVIEW PAGE.png" alt="overview page" />
            <span className="text-[12px]">
              Overview page – Gives users a snapshot of their portfolio health
              and activity.
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={imageVariantsRight}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img src="/BORROW PAGE.png" alt="borrow page" />
            <span className="text-[12px]">
              Borrow Page - Users complete loan dashboard. Track borrowed
              amounts, monitor liquidation risk, and view detailed asset
              breakdowns.
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={imageVariantsLeft}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img src="/LEND PAGE.png" alt="lend page" />
            <span className="text-[12px]">
              Borrow Page - Users complete loan dashboard. Track borrowed
              amounts, monitor liquidation risk, and view detailed asset
              breakdowns.
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={imageVariantsRight}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img src="/LIQUIDITY POOL PAGE.png" alt="liquidity pool page" />
            <span className="text-[12px]">
              Liquidity Pool Page – Clean table layout showing asset pairs, key
              metrics, and quick actions for users to exploring and interact
              with pools.
            </span>
          </motion.div>
        </div>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl py-2 sm:py-4 md:py-8 font-semibold text-center mt-6 sm:mt-8 md:mt-12"
        >
          NFT MINT MODAL — CONCEPT UI
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl px-4 text-center"
        >
          UI idea for a minting modal with cleaner layout,
          <br className="hidden sm:block" /> confirmation and error state flow
        </motion.p>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={imageVariantsLeft}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img src="/design 3.jpg" alt="mint preview page" />
            <span className="text-[12px]">
              Mint Preview - Users review NFT details and cost before
              proceeding.
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={imageVariantsRight}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img src="/design 4.jpg" alt="confirm mint page" />
            <span className="text-[12px]">
              Confirm Mint - Final step before minting. Approve transaction in
              wallet to complet mint.
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={imageVariantsLeft}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img src="/design 5.jpg" alt="mint success page" />
            <span className="text-[12px]">
              Mint Success - Your NFT is now yours. View it in your collection.
            </span>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
            variants={imageVariantsRight}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <img src="/Mint Failed 1.png" alt="mint failed page" />
            <span className="text-[12px]">
              Mint Failure - This state display a failed mint transaction. Users
              see the cause of failure, rectify and try again.
            </span>
          </motion.div>
        </div>
      </div>

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-8 sm:mt-12 md:mt-20"
      >
        Website Design
      </motion.h2>

      <div className="flex flex-col justify-center mt-6 sm:mt-8 md:mt-12 space-y-6 sm:space-y-8 md:space-y-16">
        <motion.div
          className="px-4 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={imageVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <p className="text-center text-3xl py-2 sm:py-4 md:py-4 font-semibold">
            Ophelia Wellness Landing Page
          </p>
          <div className="max-w-6xl mx-auto">
            <img
              src="/OPHELIA DISPLAY.png"
              alt="ophelia landing page"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <motion.div
          className="px-4 md:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={imageVariants}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <p className="text-center text-3xl py-2 sm:py-4 md:py-4 font-semibold">
            Borrow/Lend DAPP Landing page
          </p>
          <div className="max-w-6xl mx-auto">
            <img
              src="/design 1.jpg"
              alt="Borrow/lend DAPP landing page"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
