export type ComparisonValue = string | "check" | "cross";

export interface ServiceComparisonRow {
  feature: string;
  banca: ComparisonValue;
  others: ComparisonValue;
}

export const SERVICE_COMPARISON_ROWS: ServiceComparisonRow[] = [
  {
    feature: "Payment Per Transaction",
    banca: "0.50/per transacrion",
    others: "1.50/per transaction",
  },
  {
    feature: "Bank account limitations",
    banca: "up to 10 bank accounts",
    others: "Only 3 bank accounts",
  },
  {
    feature: "Local fees capped at NGN 2,000",
    banca: "check",
    others: "cross",
  },
  {
    feature: "Loan Purchase",
    banca: "easy to follow steps",
    others: "complicated steps",
  },
  {
    feature: "Debt Financing",
    banca: "check",
    others: "cross",
  },
  {
    feature: "No hidden fees or charges",
    banca: "check",
    others: "cross",
  },
  {
    feature: "Local fees capped",
    banca: "check",
    others: "cross",
  },
];

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export const SERVICE_STATS: StatItem[] = [
  { value: 400, suffix: "K", label: "Total active customers" },
  { value: 100, suffix: "M+", label: "Order success rate" },
  { value: 95.87, suffix: "%", label: "Avg. new projects", decimals: 2 },
];
