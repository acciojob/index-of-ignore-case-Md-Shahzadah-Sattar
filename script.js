function indexOfIgnoreCase(str: string, subStr: string): number {
  // Check for edge cases: empty strings or empty subStr
  if (str.length === 0 || subStr.length === 0) {
    return -1;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Find the index of the first occurrence of subStr in lowerStr
  const index = lowerStr.indexOf(lowerSubStr);

  return index;
}

// Test cases
console.log(indexOfIgnoreCase("Hello World", "world")); // 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // 2
console.log(indexOfIgnoreCase("test", "aaa"));          // -1


// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
