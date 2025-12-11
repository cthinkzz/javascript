function globalFn() {
  // this = { a: 1 }; // can't we do assign this to some value??
  console.log("PRINT ", this);
}

const ArrowFn = () => {
  console.log("ARROWFN", this);
};
ArrowFn();

function OuterNormalFn() {
  console.log("OuterNormalFn ", this);
  const InnerArrowFn = () => {
    console.log("InnerArrowFn", this);
  };
  InnerArrowFn();

  function InnerNormalFn() {
    console.log("InnerNormalFn", this); //this will be window (as if this is null or undefined it gets replaced by global object)
  }
  InnerNormalFn();
}

OuterNormalFn();
const testObj = { a: 10 };
OuterNormalFn.call(testObj);

const currentObj = {
  attr1: "attr1",
  attr2: function () {
    console.log("attr2 ", this); // current object
  },
  attr3: () => {
    console.log("attr3 ", this); // this will be global object!! as arrow function always references to its lexical scope's this
  },
  attr4: function () {
    console.log("attr4 ", this); // current object
    const attr5 = () => {
      console.log("attr5 ", this); // this will be current object!! as arrow function always references to its lexical scope's this
    };
    attr5();
  },
  attr5: () => {
    console.log("attr6 ", this); // global object
    function attr5() {
      console.log("attr7 ", this); // global object
    }
    attr5();
  },
};
currentObj.attr2();
currentObj.attr3();
currentObj.attr4();
currentObj.attr5();
