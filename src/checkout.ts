import { z } from "zod"

const countryValidation = z.string().min(1);
const firstNameValidation = z.string().min(1);
const lastNameValidation = z.string().min(1);
const companyValidation = z.string().min(1);
const addressValidation = z.string().min(1);
const postNumberValidation = z.string().min(1);
const cityValidation = z.string().min(1);
const emailValidation = z.string().email();
const phoneValidation = z.number();


export const CheckoutSchema = z.object({
    country: countryValidation,
    firstName: firstNameValidation,
    lastName: lastNameValidation,
    company: companyValidation,
    address: addressValidation,
    postNumber: postNumberValidation,
    city: cityValidation,
    email: emailValidation,
    phoneNumber: phoneValidation
})

export type CheckoutInput = z.infer<typeof CheckoutSchema>;

export type CheckoutState = {
    form?: {
        country?: string;
        firstName?: string;
        lastName?: string;
        company?: string;
        address?: string;
        postNumber?: string;
        city?: string;
        email?: string;
        phoneNumber?: string;
    },
    errors?: {
        country?: string[];
        firstName?: string[];
        lastName?: string[];
        company?: string[];
        address?: string[];
        postNumber?: string[];
        city?: string[];
        email?: string[];
        phoneNumber?: string[];
        form?: string[];
    }
}