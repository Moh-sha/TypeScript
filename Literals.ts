function combain(
  a: number | string,
  b: number | string,
  type: "as-number" | "as-string"
) {
  if (type === "as-number") {
    return +a + +b;
  } else return a.toString() + b.toString();
}

const result = combain(2, 3, "as-number");
const result_2 = combain("shafin", "ahmed", "as-string");

console.warn(result);
console.warn(result_2);
