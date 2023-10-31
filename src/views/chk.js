//string reverse
var string = "I'm hungry now";

var reverseSentence = reverseBySeparator(string,""); //separator is an empty string
var reverseEachWord = reverseBySeparator(reverseSentence," "); //spliiting string using a space

function reverseBySeparator(string, separator){
  var s = string.split(separator).reverse().join(separator); //split the input string into an array of words
  console.log(string.split(separator));
  console.log(string.split(separator).reverse());
  console.log(string.split(separator).reverse().join(separator));
  return s;
}
