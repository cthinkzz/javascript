console.log("A from file1 ", a);
console.log("B from file1 ", b); // works
// Important mental model (🔥 this is the key)
// All non-module <script> tags share the same global execution environment

console.log("A from file1 ", window.a); // 100
console.log("B from file1 ", window.b); // undefined
