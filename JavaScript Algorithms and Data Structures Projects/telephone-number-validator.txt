function telephoneCheck(str) {
  let phoneNo = /^[1]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$|^[(][0-9]{3}[)][-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$|^([1][-\s\.]?[(])[0-9]{3}[)][-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/im;
  //pake | 2 kali biar bisa 3 kondisi 
  //fokus di awalan
  if(str.match(phoneNo))
        {
      return true;
        }
      
        else 
        {
      return false;
        }
}
console.log(telephoneCheck("1 555-555-5555"));