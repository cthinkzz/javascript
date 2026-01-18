import { x } from "./A.js";
import { createOrder } from "./externalLib.js";
export var y = x + 1;
console.log("y from B.js ", y);

const resp = await createOrder(); // this fails when createOrder does not resolve promise
console.log("resp: ", resp);
