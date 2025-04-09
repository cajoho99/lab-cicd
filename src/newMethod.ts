
export const findCommonNumbers = (num1: number, num2: number) => {
  const a = num1 + "";
  const b = num2 + "";

  const c = a + b;

  const d = new Set(c);

  const e = Array.from(d).sort().join("");

  return e;

}
