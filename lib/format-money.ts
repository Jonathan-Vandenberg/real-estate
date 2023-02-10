export function formatMoney(num: number): string {
  return `R ${num.toLocaleString("en-US").replace(/,/g, ", ")}`;
}
