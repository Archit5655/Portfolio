"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


const getErrorMessage = (error: unknown): string => {
    let message: string;
  
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "Something went wrong";
    }
  
    return message;
  };
export const Sendemail = async (FormData: FormData) => {
  // console.log("running on server");
  // console.log(FormData.get("senderemail"));
  // console.log(FormData.get("message"));
  const message = FormData.get("message");
  const email = FormData.get("senderemail");

  // console.log(email as string);

  let data;
  try {
      await resend.emails.send({
     reply_to: email as string,
      from: " Contact form <onbording@resend.dev>",
      to: "architgargagra@gmail.com",
      subject: "Message from contact form",
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
      }

  return {
    data,
  };
};
