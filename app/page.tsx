"use client";

import Image from "next/image";
import { FaCalendar, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-dvh bg-[#1C1C1C]">
      <section className="relative overflow-hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pt-16 pb-12 sm:px-6 sm:pt-20 sm:pb-16 md:pt-24 md:pb-24">
          <motion.div
            className="flex flex-col items-center gap-6 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Badge/Pill */}
            <motion.div
              className="mb-4 inline-block w-full sm:w-auto"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative flex items-center gap-3 rounded-full border border-[#1C1C1C]/20 bg-[#FFFFFF] px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.32),0_0_20px_rgba(113,221,174,0.4),0_0_40px_rgba(113,221,174,0.2)] overflow-hidden sm:gap-5 sm:px-8 sm:py-4 sm:overflow-visible md:px-10 md:py-5">
                <Image
                  alt="Logo"
                  width={48}
                  height={48}
                  className="h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12 md:h-14 md:w-14"
                  src="/assets/2_Logo_Bulle.png"
                />
                <p className="text-sm font-extrabold text-[#1C1C1C] overflow-hidden text-ellipsis whitespace-nowrap sm:text-lg sm:overflow-visible sm:whitespace-nowrap md:text-xl lg:text-2xl xl:text-3xl uppercase">
                  Créer un site web{" "}
                  <span className="underline decoration-[3px] underline-offset-4 decoration-[#1C1C1C]">
                    vraiment
                  </span>{" "}
                  unique
                </p>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Votre <span className="text-[#71DDAE]">site</span> doit{" "}
              <span className="text-[#71DDAE]">donner envie</span> de{" "}
              <span className="text-[#71DDAE]">rester</span>, pas de{" "}
              <span className="line-through decoration-[4px] decoration-[#1C1C1C]">
                <span className="text-[#71DDAE]">revenir</span>
                <span className="text-white"> en </span>
                <span className="text-[#71DDAE]">arrière</span>
              </span>
              .
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="max-w-lg text-base font-medium text-white/80 sm:max-w-2xl sm:text-lg md:text-xl"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Design moderne,
              <br className="sm:hidden" /> SEO solide, Suivi complet :
              <br />
              on construit un site qui retient vos visiteurs et vous apporte des
              résultats.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start"
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative w-full sm:w-auto sm:inline-flex">
                <motion.a
                  href="#"
                  className="group relative inline-flex w-full items-center justify-center gap-3 rounded-xl px-6 py-3 text-lg font-extrabold tracking-wide text-[#1C1C1C] shadow-lg h-12 whitespace-nowrap sm:w-auto sm:px-8 sm:py-4 sm:text-xl md:px-8 md:py-4 md:text-2xl md:h-[68px] overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#71DDAE] via-[#2A9D7A] to-[#71DDAE] bg-[length:200%_100%]"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#71DDAE]/0 via-white/25 to-[#71DDAE]/0" />
                  <FaCalendar className="relative z-10 text-lg sm:text-xl md:text-2xl" />
                  <span className="relative z-10">Prendre RDV</span>
                </motion.a>
                {/* Un p'tit click annotation */}
                <motion.div
                  className="absolute top-full -left-12 -mt-4 pointer-events-none hidden sm:block"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <Image
                    alt="Un p'tit click ?"
                    width={200}
                    height={150}
                    className="w-auto h-auto max-w-[200px]"
                    src="/assets/3_Un_Ptit_Click.png"
                  />
                </motion.div>
              </div>
              <motion.a
                href="#portfolio"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#71DDAE] bg-[#1C1C1C]/50 backdrop-blur px-6 py-3 text-base font-extrabold tracking-wide text-[#71DDAE] transition-colors duration-200 hover:bg-[#71DDAE]/10 h-12 sm:w-auto sm:px-8 sm:py-4 sm:text-lg md:h-[68px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Découvrir nos projets
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaArrowDown className="text-xl text-[#71DDAE]" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Background glow effects */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(113,221,174,0.25)] blur-[120px] sm:h-[400px] sm:w-[400px] sm:blur-[160px] md:h-[520px] md:w-[520px] md:blur-[220px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.25, 0.35, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute left-1/4 top-1/4 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,255,255,0.18)] blur-[100px] sm:h-[280px] sm:w-[280px] sm:blur-[140px] md:h-[360px] md:w-[360px] md:blur-[200px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.18, 0.25, 0.18],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </section>
    </main>
  );
}
