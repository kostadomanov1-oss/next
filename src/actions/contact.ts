"use server";

import { contactFormSchema } from "@/schemas/contact-form";

export type ContactFormState = {
  success: boolean;
  error?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    message: formData.get("message"),
    service: formData.get("service"),
  };

  const result = contactFormSchema.safeParse(raw);

  if (!result.success) {
    return { success: false, error: "validation_error" };
  }

  // In a real app, send email / save to DB here.
  // For the reference architecture, we simulate success.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return { success: true };
}
