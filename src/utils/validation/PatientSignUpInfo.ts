import { z } from "zod";
export const PatientSignUpInfo = z.object({
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.string().datetime(),
});

export type PatientSignUpInfo = z.infer<typeof PatientSignUpInfo>;
