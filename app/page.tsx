"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.4
    }
  }
};

const line: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const floatingCode = [
  "const build = async () => launch();",
  "interface Portfolio { status: 'coming-soon'; }",
  "git commit -m \"first commit\"",
  "export default function Work() { return next(); }"
];

function CodeGridBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,255,228,0.9),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(145,255,205,0.45),transparent_32%),linear-gradient(135deg,#d9f2e6_0%,#eef4f1_46%,#cfe9df_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,24,39,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,24,39,0.08)_1px,transparent_1px)] bg-[size:48px_48px] opacity-65" />
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gray-900/8" />
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gray-900/8" />
      {floatingCode.map((snippet, index) => (
        <motion.div
          key={snippet}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: [0.18, 0.4, 0.18], y: [0, index % 2 === 0 ? -10 : 10, 0] }}
          transition={{
            duration: 8 + index,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: index * 0.8
          }}
          className={`absolute hidden rounded-full border border-gray-900/8 bg-white/40 px-4 py-2 font-mono text-xs text-gray-700 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur md:block ${
            index === 0
              ? "left-[10%] top-[18%]"
              : index === 1
                ? "right-[10%] top-[24%]"
                : index === 2
                  ? "bottom-[18%] left-[12%]"
                  : "bottom-[22%] right-[12%]"
          }`}
        >
          {snippet}
        </motion.div>
      ))}
    </>
  );
}

export default function AaronMillsPortfolio() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#e7f2ec] text-gray-950">
      <CodeGridBackdrop />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.h1
          variants={line}
          className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Aaron Mills
        </motion.h1>

        <motion.p
          variants={line}
          className="mt-4 text-lg text-gray-700"
        >
          Portfolio site
        </motion.p>

        <motion.p
          variants={line}
          className="mt-3 text-gray-600"
        >
          Coming Soon
        </motion.p>

        <motion.a
          variants={line}
          href="mailto:aaron@aaronmills.uk"
          className="mt-8 inline-flex items-center rounded-full border border-gray-900/10 bg-white/50 px-6 py-3 text-sm font-medium text-gray-900 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-gray-900/16 hover:bg-white/68"
        >
          Contact me
        </motion.a>
      </motion.div>
    </main>
  );
}
