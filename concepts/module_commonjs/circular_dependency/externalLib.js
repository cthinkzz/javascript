export async function createOrder(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved after 5 seconds"); //comment this and see it fails with Detected unsettled top-level await
    }, 5000);
  });
}
