import { z } from "zod";

const EmployeeSchema = z.object({
  id: z.number(),
  navn: z.string(),
  yrke: z.string(),
});

export const EmployeeListeSchema = z.array(EmployeeSchema);

export type EmployeeListe = z.infer<typeof EmployeeListeSchema>;

export type Employee = z.infer<typeof EmployeeSchema>;
