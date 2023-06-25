// | eita holo union eita define kore data ar value  number hobe or string hobe
const data: number | string = "shafin";
console.warn(data);

function combain(a: number | string, b: number | string) {
  if (typeof a === "number" && typeof b === "string") {
    return a + b;
  } else return a.toString() + b.toString();
}

const result = combain(2, 3);
const result_2 = combain("shafin", "ahmed");

console.warn(result);
console.warn(result_2);
