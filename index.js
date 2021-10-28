// pwRegex should match the passwords that are greater than 5 characters longs, and have two consecutive digits.

let sampleWord = "12345";
// greater than 5 characters long
// two consecutive digits
let pwRegex = /(?=\w{6})(?=\D*\d{2})/;
let result = pwRegex.test(sampleWord);
console.log(result)
