const createOrder = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(12345), 10000);
  });

const makePayment = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("successfull"), 5000);
  });

async function callApi() {
  const orderId = await createOrder();
  console.log("orderId", orderId);

  const payment = await makePayment();
  // NO, IT WAS NOT CALLED immediately Seconds, IT IS CALLED AFTER 5 more Seconds
  console.log("payment status was " + payment);
}

callApi();

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Hello World");
  }, 4000);
});

async function asyncFn() {
  try {
    console.log("First");
    const resp = await promise1;
    console.log("Second");
    console.log(resp);
    return "hello"; // this does not ends the function, i.e finally will be called no matter what!
  } catch (err) {
    console.log("err: ", err);
  } finally {
    // no params are allowed to be accepted here
    console.log("inside Finally");
    // return "world";
  }
  console.log("outside finally"); //not printed as return "hello" returns the function execution
}

asyncFn();

console.log("Third");
