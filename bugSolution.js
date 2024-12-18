function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  return a + b;
}
console.log(foo(null, 5)); //Output: null
console.log(foo(0, 5));   //Output: 5
console.log(foo(5, null)); //Output: null
console.log(foo(5,0));    //Output: 5