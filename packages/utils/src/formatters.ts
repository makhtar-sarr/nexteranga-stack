import { CURRENCIES } from "./constants";

export const formatCurrency = (
  amount: number,
  currencyCode: keyof typeof CURRENCIES = "XOF",
  locale: string = "fr-FR"
) => {
  const currency = CURRENCIES[currencyCode];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "symbol",
  })
    .format(amount)
    .replace(currencyCode, currency.symbol);
};

export const formatDate = (date: Date | string, locale: string = "fr-FR") => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
  }).format(new Date(date));
};

export const formatPhone = (phone: string) => {
  // Basic cleaning and formatting for Senegalese numbers as default
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 9) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 7)} ${cleaned.slice(7, 9)}`;
  }
  return phone;
};
