type UserD = number | string;

const Userdetails = (id: UserD, name: UserD) => {
  console.log(`user id is ${id} and name is ${name}`);
};

const result_ = Userdetails(10, "shafin");

console.log(result_);
