"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
        Como desenvolvedor, concentro meus esforços no aprimoramento
        de habilidades em JavaScript e, atualmente, estou ampliando
        meus conhecimentos em Java. Tenho paixão pela programação,
        lógica e resolução de problemas, sempre buscando aprimorar meu
        conhecimento para atingir melhores resultados. Minha parte
        favorita na programação é a resolução de problemas, e,
        portanto, tenho focado em aprimorar meu domínio em tecnologias
        como React, Next.js, Node.js, Vue, Typescript e Nest.js. Além
        disso, possuo familiaridade com linguagens como Java e C#.
        Estou atualmente em busca de oportunidades de emprego
        full-time como desenvolvedor de software full-stack.
      </p>

      <p>
        Fora do ambiente de codificação, dedico meu tempo ao xadrez,
        RPG, brincando com minhas gatas e andando de bicicleta. Tenho
        grande interesse em aprender coisas novas e, atualmente, estou
        focado em meus estudos da língua francesa.
      </p>
    </motion.section>
  );
}
