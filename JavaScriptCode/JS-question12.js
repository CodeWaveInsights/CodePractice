function arrayFromValue(item) {
  return
   [item];
}

console.log(arrayFromValue(5));

// The function arrayFromValue is intended to return an array containing the given item.
// However, due to the newline after the return statement, it will return undefined.