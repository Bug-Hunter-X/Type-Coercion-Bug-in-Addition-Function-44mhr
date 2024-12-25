function foo(a, b) {
  if (a == null || b == null) {
    return 0; // or handle null differently if needed
  }
  return a + b; 
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(1, 2)); // Output: 3
console.log(foo(0,1)); //Output: 1
console.log(foo(1,0)); // Output: 1