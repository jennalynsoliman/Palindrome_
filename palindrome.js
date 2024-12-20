// PROBLEM 1...String Array operation

// the program will ask the user to enter any first word the after entering the program will ask again to enter a second word...any word
const word1 = prompt("Enter the first word: ");
const word2 = prompt("Enter the second word: ");

// Function to check if a word is a palindrome
function isPalindrome(word) {
  // Reverse the word
  //word.split() to splits the word into an array of individual characters
  //reverse()...reverse the order of characters in array
  // join() this joins the characters back into the single string
  const reversedWord = word.split('').reverse().join(''); //this reverse the word

  // Compare the original and reversed words
  return word === reversedWord; // this return true if the original word is equal to its reversed version
}

// Check and log the results for each word
console.log("Original word 1:", word1); //print the orig first word
console.log("Reversed word 1:", word1.split('').reverse().join('')); //display the reverse first word in the program
console.log("Is word 1 a palindrome?", isPalindrome(word1));//this prints wether the first word is palindrome

console.log("Original word 2:", word2); // print the original 2nd word
console.log("Reversed word 2:", word2.split('').reverse().join('')); //print the reverse second word
console.log("Is word 2 a palindrome?", isPalindrome(word2)); // this prints wether the second word is palindrome
