'use server';

import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  try {
    // Here you would typically interact with a database like Firestore
    // For example: await db.collection('contacts').add(parsed.data);
    console.log('Form data received:', parsed.data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, message: 'Could not submit form. Please try again.' };
  }
}
