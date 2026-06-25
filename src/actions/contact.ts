"use server";

import { contactFormSchema } from "@/schemas/contact-form";
import nodemailer from "nodemailer";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

const RECIPIENT_EMAIL = "kostadomanov1@gmail.com";

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    message: formData.get("message"),
  };

  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    return { success: false, error: "validation_error" };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: RECIPIENT_EMAIL,
      subject: "Новая заявка с сайта ГидроТепло",
      text: result.data.message,
      html: `<h2>Новая заявка с сайта</h2><p>${result.data.message.replace(/\n/g, "<br>")}</p>`,
    });

    return { success: true };
  } catch {
    console.error("Failed to send email");
    return { success: false, error: "send_error" };
  }
}
