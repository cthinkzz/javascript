function myBind(context, ...args1) {
  const fn = this;
  return function (...args2) {
    fn.apply(context, [...args1, ...args2]);
  };
}

Function.prototype.myBind = myBind;
const obj = {
  name: "CP",
  age: 28,
  sayHi: function (country, city) {
    console.log(
      "Name: " +
        this.name +
        " Age: " +
        this.age +
        " Country: " +
        country +
        " City:" +
        city
    );
  },
};
const obj2 = {
  name: "Chandu Patil",
  age: 20,
};
const bounded = obj.sayHi.myBind(obj2, "INDIA");
bounded("Bangalore");
