function palindrome(str) {
  let oldStr= str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  let newStr=str
  .replace(/[^a-z0-9]/gi, '')
  .split("")
  .reverse()
  .join("")
  .toLowerCase();


  
  if(oldStr === newStr){
    return true
  }
  else {
    return false;
  }
}    


console.log(palindrome("A man, a plan, a canal. Panama"));
