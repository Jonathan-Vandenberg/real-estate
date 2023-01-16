export function bondRepayment(
  principal: number,
  annualInterestRate: number,
  termInYears: number
): number {
  // Calculate the term in months
  const termInMonths = termInYears * 12;

  // Calculate the monthly interest rate
  const monthlyInterestRate = annualInterestRate / 12 / 100;

  // Calculate the monthly repayment amount
  const repayment =
    principal *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -termInMonths)));

  return repayment;
}
