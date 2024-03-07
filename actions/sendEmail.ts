"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const sender = formData.get("senderEmail");
  const message = formData.get("senderMessage");

  if (!validateString(sender, 500)) {
    return {
      error: "Invalid sender",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <resend_email@resend.dev>",
      to: "leoexori@hotmail.com",
      subject: "Message from contact dev portfolio",
      reply_to: sender as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: sender as string,
      }),
    });
  } catch (err: unknown) {
    return {
      error: getErrorMessage(err),
    };
  }
  return {
    data,
  };
};
