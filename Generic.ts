function printvalue<T>(User_id: T) {
  return User_id;
}

const this_result = printvalue(2);
const this_result_ = printvalue("Shafin");

console.log(this_result);
console.log(this_result_);
