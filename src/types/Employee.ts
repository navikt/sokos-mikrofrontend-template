import { z } from "zod";

const EmployeeSchema = z.object({
  id: z.number(),
  navn: z.string(),
  yrke: z.string(),
});

export type Employee = z.infer<typeof EmployeeSchema>;
