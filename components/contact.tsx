"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contato</SectionHeading>
      <p className="text-gray-700 -mt-3 dark:text-white/80">
        Você pode me contatar através do meu email{" "}
        <a className="underline" href="mailto:leoexori@hotmail.com">
          leoexori@hotmail.com
        </a>{" "}
        ou através deste formulário.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email enviado com sucesso!");
        }}
      >
        <input
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Seu Email"
        />
        <textarea
          name="senderMessage"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Sua mensagem"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
