import { z } from "zod";

const inputValidation = z.string();

z.object({
    input: inputValidation
})