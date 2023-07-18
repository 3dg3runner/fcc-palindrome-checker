function palindrome(str) {
  // Perform removal of unwanted chars & convert to upper case
  str = str.replace(/(\W)|_/g, "");
  str = str.toUpperCase();

  // Set up array for base version of string to loop through
  let baseStrArr = str.split("");

  // Set up empty array to store an array for the reversed string
  let reverseStrArr = [];
  
  // Loop reversely through array and add character to reverse string array
  for (let i = baseStrArr.length; i >= 0; i--) {
    reverseStrArr.push(baseStrArr[i]);
  }

  // Set up forward and backward Strings, convert the reverse array to a string
  let forwStr = str;
  let backStr = reverseStrArr.join("");

  // Perform final comparison checks
  if(forwStr === backStr) {
    return true;
  }
  else {
    return false;
  }
}

// algorithm test cases
palindrome("eye");
palindrome("_eye")
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
