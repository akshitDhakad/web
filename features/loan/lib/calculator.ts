export function calculateLoanEmi(principal: number, annualRate: number, months: number) {
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    const emi = principal / months;
    return {
      emi,
      totalPayment: emi * months,
      totalInterest: emi * months - principal,
    };
  }

  const factor = Math.pow(1 + monthlyRate, months);
  const emi = (principal * monthlyRate * factor) / (factor - 1);
  const totalPayment = emi * months;

  return {
    emi,
    totalPayment,
    totalInterest: totalPayment - principal,
  };
}

export function formatCurrency(value: number) {
  return `$ ${Math.round(value).toLocaleString("en-US")}`;
}
