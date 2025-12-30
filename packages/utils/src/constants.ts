export const COUNTRIES = [
  { code: "SN", name: "Sénégal", currency: "XOF", flag: "🇸🇳" },
  { code: "CI", name: "Côte d’Ivoire", currency: "XOF", flag: "🇨🇮" },
  { code: "CM", name: "Cameroun", currency: "XAF", flag: "🇨🇲" },
  { code: "CD", name: "RD Congo", currency: "CDF", flag: "🇨🇩" },
  { code: "ML", name: "Mali", currency: "XOF", flag: "🇲🇱" },
  { code: "BF", name: "Burkina Faso", currency: "XOF", flag: "🇧🇫" },
  { code: "TG", name: "Togo", currency: "XOF", flag: "🇹🇬" },
  { code: "BJ", name: "Bénin", currency: "XOF", flag: "🇧🇯" },
] as const;

export const CURRENCIES = {
  XOF: { symbol: "FCFA", name: "Franc CFA (BCEAO)" },
  XAF: { symbol: "FCFA", name: "Franc CFA (BEAC)" },
  CDF: { symbol: "FC", name: "Franc Congolais" },
  EUR: { symbol: "€", name: "Euro" },
  USD: { symbol: "$", name: "US Dollar" },
} as const;

export const PAYMENT_PROVIDERS = {
  PAWAPAY: "pawapay",
  STRIPE: "stripe",
  WAVE: "wave",
} as const;

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  ORGANIZER: "organizer",
} as const;
