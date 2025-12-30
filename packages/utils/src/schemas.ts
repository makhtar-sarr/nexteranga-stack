import { z } from "zod";

export const phoneSchema = z
  .string()
  .min(9, "Le numéro doit contenir au moins 9 chiffres")
  .regex(/^\+?[1-9]\d{1,14}$/, "Numéro de téléphone invalide");

export const emailSchema = z.string().email("Adresse email invalide");

export const amountSchema = z
  .number()
  .positive("Le montant doit être positif")
  .min(100, "Le montant minimum est de 100");

export const paymentInitiateSchema = z.object({
  amount: amountSchema,
  currency: z.enum(["XOF", "XAF", "CDF", "EUR", "USD"]),
  phoneNumber: phoneSchema,
  provider: z.enum(["pawapay", "stripe", "wave"]),
});
