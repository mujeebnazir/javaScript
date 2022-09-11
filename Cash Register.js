/*Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.*/

function checkCashRegister(price, cash, cid) {

  let changeReturn = cash - price;
  
        var currency = {
          "PENNY": 0.01,
        "NICKEL":0.05,
        "DIME":0.1,
        "QUARTER":0.25,
        "ONE":1,
        "FIVE":5,
        "TEN":10,
        "TWENTY":20
        }
   

let totalCid=0;
  
for(let i=0;i<cid.length;i++){
 totalCid += cid[i][1];
}
totalCid = totalCid.toFixed(2)
//console.log(totalCid)

const changeArray = [];
if(totalCid < changeReturn){
     return {status: "INSUFFICIENT_FUNDS", change: changeArray};
   }
  
else if(totalCid === changeReturn.toFixed(2)){
     return {status: "CLOSED", change: cid}
   }

else {
    cid = cid.reverse();
    for(let elem of cid){
    let temp = [elem[0],0];
    //console.log(currencyelem[0])
    while(changeReturn >= currency[elem[0]] && elem[1] >0){
      temp[1] += currency[elem[0]];
      elem[1] -= currency[elem[0]];
      console.log(temp[1])
      changeReturn -= currency[elem[0]];
      changeReturn = changeReturn.toFixed(2);
     }
   if(temp[1]>0){
  changeArray.push(temp)
       }
    }
}

if(changeReturn > 0){
  return {status: "INSUFFICIENT_FUNDS", change: []};
}
return {status: "OPEN", change: changeArray}
}
