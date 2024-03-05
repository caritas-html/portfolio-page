import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cokemealsImg from "@/public/cokemeals.jpg";
import ciandtImg from "@/public/ciandt.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Sobre",
    hash: "#about",
  },
  {
    name: "Projetos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contato",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Kenzie Academy",
    location: "Brazil",
    description:
      "Curso Fullstack com a duração de 1 ano inteiro onde fui monitor após 6 meses de curso, atuei durante 2 meses e então comecei no meu primeiro emprego",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "CI&T - Front-End Developer",
    location: "Brazil",
    description:
      "Atuei como desenvolvedor front-end para um produto internacional da Coca-Cola, utilizando tecnologias AEM como CMS, VueJS, TypeScript, Less e Webpack. Trabalhei como desenvolvedor full-stack para um produto interno, utilizando VueJS com VITE, NodeJS, Jest (testes unitários), Cypress.io (testes E2E), Axios, Firebase, i18n e pipelines do Bitbucket. Assumi o papel de desenvolvedor de referência, oferecendo orientação e ensinando VueJS para estagiários durante o período de treinamento. Também forneci suporte técnico em um projeto paralelo da empresa para um cliente estrangeiro, utilizando ReactJS, NextJS e NestJS.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "KaBuM - Full-Stack Developer",
    location: "Brazil",
    description:
      "Tive um período de experiência como desenvolvedor fullstack na Kabum, na área interna do departamento comercial, onde criei operações CRUD que foram usadas no sistema interno de controle da loja, utilizando PERL, NEST e JAVA com Springboot, ao mesmo tempo em que aprendia Elixir.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "ZDZCode - Full-Stack Developer",
    location: "Brazil",
    description:
      "Atuei como um desenvolvedor fullstack destacado, com foco em front-end, devido à minha experiência prévia com Vue 3, Vuetify e Pinia, uma vez que envolvia a migração de um projeto do Vue 2. Colaborei de perto com C#, SQL, MYSQL SERVER, DOCKER, .NET CORE, EF CORE e RazorPAGES durante o projeto.",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Coke & Meals",
    description:
      "Trabalhei como front-end desenvolvendo features e corrigindo bugs neste projeto em conjunto à coca-cola internacional.",
    tags: ["Vue", "Typescript", "AEM", "Bootstrap"],
    imageUrl: cokemealsImg,
  },
  {
    title: "CI&T OKRs",
    description:
      "Atuei como desenvolvedor fullstack referência a outros desenvolvedores e estagiários. Fiquei encarregado de instruí-los no uso do VueJS.",
    tags: [
      "Vue",
      "TypeScript",
      "NodeJS",
      "Tailwind",
      "Cypress.io",
      "Jest",
    ],
    imageUrl: ciandtImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Nest",
  "MySQL",
  "VueJS",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Flask",
  "Cypress",
  "Jest",
  "C#",
] as const;
