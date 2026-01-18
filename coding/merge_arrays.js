const x = [{ a: 1 }, { b: 5 }];
const y = [{ b: 2 }, { c: 0 }];
// const outp = { a: 1, b: 5, c: 0 };

const first = x.reduce((acc, cur) => {
  const key = Object.keys(cur)[0];
  acc[key] = cur[key];
  return acc;
}, {});

const final = y.reduce((acc, cur) => {
  const key = Object.keys(cur)[0];
  if (acc[key] === undefined) {
    acc[key] = cur[key];
  }

  return acc;
}, first);

console.log("final", final);

const mergeProperties = (x, y) => {
  const outp = {};
  x.forEach((item) => {
    const key = Object.keys(item)[0];
    const idx = y.findIndex((yItem) => yItem[key]);
    outp[key] = item[key];
  });
  y.forEach((item) => {
    const key = Object.keys(item)[0];
    if (!outp[key]) {
      outp[key] = item[key];
    }
  });
  console.log(outp);
};

mergeProperties(x, y);
