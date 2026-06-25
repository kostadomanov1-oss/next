"use server";

import { contactFormSchema } from "@/schemas/contact-form";

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

  // Log the submission (in production, integrate with an email service
  // like Resend, SendGrid, or Nodemailer with SMTP)
  console.log(`[Contact Form] New submission to ${RECIPIENT_EMAIL}:`);
  console.log(`Message: ${result.data.message}`);

  return { success: true };
}
