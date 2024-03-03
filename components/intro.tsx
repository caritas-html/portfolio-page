/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React from "react";
import profileImg from "@/public/profile.png";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profileImg}
              alt="profile-portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl "
            />
          </motion.div>
          <motion.span
            className="text-3x1 bottom-0 right-0 absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            ♟️
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4x1"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Olá! Eu sou Leonardo.</span> Eu
        sou um{" "}
        <span className="font-bold">desenvolvedor full-stack</span>{" "}
        com <span className="font-bold">2 anos</span> de experiência.
        Entusiasta de{" "}
        <span className="italic">programação, ciclismo e xadrez</span>
        . Meu foco é{" "}
        <span className="underline">
          React (Next.js) e Vue (Nuxt.js)
        </span>
        .
      </motion.p>
    </section>
  );
}
