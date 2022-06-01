function checkCashRegister(price, cash, cid) {
 const cashLib = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  } 
  //<-----------------Penjumlahan semua nilai properti di cid---------------->
  let sumCid=0;
  for(let value of cid){// for in pengulangan index/key elemen dalam object, sedangkan for of pengulangan nilai elemen dalam object.
    sumCid+=value[1];
  }
  sumCid=sumCid.toFixed(2);//toFixed(maksimal desimal di belakang)
  //<<----------------------------------------------------------------------->
  let change = cash-price;//kembalian
  let newArr=[];
  
  if (change>sumCid){//klo kembali lebih kek uang di register
    return {status: "INSUFFICIENT_FUNDS", change: newArr}
  }else if (change.toFixed(2)===sumCid){//klo kembali sama kek uang di register
    return {status: "CLOSED", change: cid}
  }else {
    let cidRev=cid.reverse();//dibalik biar utamain yg besar dulu
    for (let elem of cidRev) {//buat nilai di setiap cidRev
          let temp = [elem[0], 0];//temp[0]=elem[0],temp[1]=0 berubah sesuai loop
          while (change >= cashLib[elem[0]] && elem[1] > 0) {//klo kembali lbih ato sama dari cash library (mulai dari 100,20,dst) dan(&&) nilai/value/(elem[1]) dr propertie di cidRev bukan 0
            temp[1] += cashLib[elem[0]];//klo sesuai kondisi diatas nilai temp[1] diupdate
            elem[1] -= cashLib[elem[0]];//klo uang besar masih ada utamain ngasih uang besar contoh kembali 200 uang 100 ada 1 brati elem[1] -= cashLib[elem[0]]=100-100 uang 100 habis,habis itu harus pake uang besar lainnya karena uang 100 abis
            change -= cashLib[elem[0]];//kembalian dikurangin sampe kembalian abis klo 0/< dari cashLib[elem[0]] /0.01 (karena paling kecil di list) berarti pengulangan berhenti
            change = change.toFixed(2);
        }   if (temp[1] > 0) {//klo nilai di line 32 lebih dr 0
       newArr.push(temp);//masukin temp ke newArr
      }
    }
   
  
   }  if (change > 0) {//klo uang di register gk cukup gk bisa ngasih kembalian
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }  return { status: "OPEN", change: newArr};

  
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

