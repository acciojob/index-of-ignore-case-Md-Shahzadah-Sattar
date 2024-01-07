function indexOfIgnoreCase(str: string, subStr: string): number {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  return lowerStr.indexOf(lowerSubStr);
}

// Examples
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple")); // Output: 2
console.log(indexOfIgnoreCase("test", "aaa")); // Output: -1


// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
