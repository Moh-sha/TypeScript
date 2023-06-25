// | eita holo union eita define kore data ar value  number hobe or string hobe
var data = "shafin";
console.warn(data);
function combain(a, b) {
    if (typeof a === "number" && typeof b === "string") {
        return a + b;
    }
    else
        return a.toString() + b.toString();
}
var result = combain(2, 3);
var result_2 = combain("shafin", "ahmed");
console.warn(result);
console.warn(result_2);
