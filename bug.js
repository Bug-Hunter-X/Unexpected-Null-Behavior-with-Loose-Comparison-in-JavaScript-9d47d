function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will lead to unexpected behavior if a or b are 0
  }
  return a + b;
}
console.log(foo(null, 5)); //Output: null
console.log(foo(0, 5));   //Output: null (unexpected)
console.log(foo(5, null)); //Output: null
console.log(foo(5,0));    //Output: 5 (expected)