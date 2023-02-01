import { z } from "zod";

export const LoginInfo = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type LoginInfo = z.infer<typeof LoginInfo>;
