"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{
        delay: 0.175,
      }}
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Como desenvolvedor,{" "}
        <span className="font-medium">
          concentrei, meus esforços no aprimoramento de habilidades em
          JavaScript
        </span>{" "}
        <span className="font-medium">
          {" "}
          e estou atualmente ampliando meus conhecimentos em Java.{" "}
        </span>
        <span className="font-medium">
          Sou apaixonado por programação, lógica e resolução de
          problemas.{" "}
        </span>
        <span className="font-medium">
          Estou sempre em busca de aprimorar meu conhecimento para
          atingir melhores resultados.
        </span>
        .{" "}
        <span className="italic">
          Minha parte favorita na programação
        </span>{" "}
        é a resolução de problemas. E,{" "}
        <span className="font-medium"> visto isso, </span>foquei em
        certas tecnologias como:{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Vue, Typescript e Nest.js
        </span>
        . Também tenho familiaridade com algumas linguagens como: Java
        e C#. Atualmente estou à procura de um emprego{" "}
        <span className="font-medium">full-time</span> como
        desenvolvedor de software full-stack.
      </p>

      <p>
        Quando não estou fazendo códigos
        <span className="font-medium">
          , estou jogando xadrez, rpg, brincando com minhas gatas ou
          andando de bicicleta.{" "}
        </span>{" "}
        Eu também gosto muito de{" "}
        <span className="font-medium">aprender coisas novas</span>.
        Atualmente estou focando meus estudos na{" "}
        <span className="font-medium">língua francesa</span>.
      </p>
    </motion.section>
  );
}
