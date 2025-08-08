import {z} from "zod"

export const waitlistSchema = z.object({
//   firstName: z.string().min(1, "First name is required"),
//   lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address"),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
