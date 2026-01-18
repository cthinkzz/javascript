import { y } from "./B.js";
import { createOrder } from "./externalLib.js";
export var x = y + 1;
console.log("x from A.js ", x);

const resp = await createOrder();
console.log("resp: ", resp);
