function convertToRoman(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var str = '';

  for (var x of Object.keys(roman)) {//The JavaScript for of statement loops through the values of an iterable object.It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
    let q = Math.floor(num / roman[x]);//The Math.floor() function returns the largest integer less than or equal to a given number. 
    //pengulanagan1 q=0 901/1000
    //p2 1 901/900
    //bakal nilai 0 terus sampe p12 1 1/1 karena cuman sisa 901 sisa cuman 1 dr CM
    num -= q * roman[x];//p1 901-0=901 p2 901-900=1 p12 1-1=0
    str += x.repeat(q);//p1 x=0repeat(0) p2 x=1repeat(1)=>jadinya CM p12 x=12repeat(1)=>jadinya I
    
  }
return str;
  
}
console.log(convertToRoman(901));

