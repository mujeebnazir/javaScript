/*Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.*/

function palindrome(str) {

  const temp = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  var revStr = "";
  
  for(let i = temp.length-1;i>=0;i--){
      revStr += temp[i];
      }
  
  if(temp.localeCompare(revStr)===0){
    return true
   }
  return false
  
}
