import { z } from "zod";

export const loanCalculatorSchema = z.object({
  loanType: z.enum(["debt-loan", "installment-loan"]),
  amount: z
    .string()
    .min(1, "Amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
  durationDays: z
    .string()
    .min(1, "Duration is required")
    .regex(/^\d+$/, "Enter a valid number of days"),
  repayments: z
    .string()
    .min(1, "Repayment amount is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid amount"),
});

export type LoanCalculatorFormData = z.infer<typeof loanCalculatorSchema>;
