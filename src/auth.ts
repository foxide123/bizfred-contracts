import { z } from "zod";

const firstNameValidation = z
  .string()
  .min(1, { message: "Specify first name" })
  .regex(/^\p{L}+(?:\s\p{L}+)*$/u, { message: "Should contain only letters" });

const lastNameValidation = z
  .string()
  .min(1, { message: "Specify last name" })
  .regex(/^\p{L}+$/u, { message: "Should contain only letters" });

const emailValidation = z
  .string()
  .email({message: "Invalid email"})
  .min(1, {message:"Email is required"});

const passwordValidation = z
  .string()
  .min(6, { message: "Password must be at least 8 letters" })
  .max(30, { message: "Password cannot exceed 20 characters" })
  .regex(/^(?=.*[A-Z]).{8,}$/, {
    message: "Should Contain at least one uppercase letter",
  });

const BaseEmailSchema = z.object({
  email: emailValidation
})

export const SignupConfirmationSchema = BaseEmailSchema;
export type SignupConfirmationInput = z.infer<typeof SignupConfirmationSchema>

export const PasswordRecoverySchema = BaseEmailSchema;
export type PasswordRecoveryInput = z.infer<typeof PasswordRecoverySchema>;

export const NewsletterSchema = BaseEmailSchema;
export type NewsletterInput = z.infer<typeof NewsletterSchema>;

export const LoginSchema = BaseEmailSchema.extend({
  password: z.string().min(1, { message: "Password is required" })
});
export type LoginInput = z.infer<typeof LoginSchema>;

/* export const LoginSchema = z.object({
  email: emailValidation,
  password: z.string().min(1, { message: "Password is required" }),
}); */

export const SignupSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
  firstName: firstNameValidation,
  lastName: lastNameValidation,
});
export type SignupInput = z.infer<typeof SignupSchema>;

export type PasswordRecoveryState = {
  form?: {
    email?: string;
  };
  errors?: {
    email?: string[];
    form?: string;
  }
}

export type LoginActionState = {
  form?: {
    email?: string;
    password?: string;
  };
  errors?: {
    email?: string[];
    password?: string[];
    form?: string;
  };
};

export type SignupActionState = {
  form?: {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
  };
  errors?: {
    email?: string[];
    password?: string[];
    firstName?: string[];
    lastName?: string[];
    form?: string;
  };
};