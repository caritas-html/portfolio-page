"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

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

  try {
    await resend.emails.send({
      from: "Contact Form <resend_email@resend.dev>",
      to: "leoexori@hotmail.com",
      subject: "Message from contact dev portfolio",
      text: message as string,
      reply_to: sender as string,
    });
  } catch (err: unknown) {
    return {
      error: getErrorMessage(err),
    };
  }
};
