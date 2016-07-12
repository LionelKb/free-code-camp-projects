/*

Exact Change


Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

*/


function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var exactChange={};
  var exactChangeArr=[];

  var moneyNamesValues = {
    "ONE HUNDRED": 100.00,
    "TWENTY": 20.00,
    "TEN": 10.00,
    "FIVE": 5.00,
    "ONE": 1.00,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "NICKEL": 0.05,
    "PENNY": 0.01
  };



  // Create a cid object to access easily the values of the cid
  // Example
  // { PENNY: 1.01,
  // NICKEL: 2.05,
  // DIME: 3.1,
  // QUARTER: 4.25,
  // ONE: 90,
  // FIVE: 55,
  // TEN: 20,
  // TWENTY: 60,
  // 'ONE HUNDRED': 100 }

  var cidObject={};
  for (var i = 0; i < cid.length; i++) {
    cidObject[cid[i][0]] = cid[i][1];
  }

  // This function checks is the cid is "closed". It checks if the cid is empty.
  function isCidClosed() {
    var amoundInCid = 0;
    for(var currency in cidObject) {
      amoundInCid += cidObject[currency];
    }
    return (amoundInCid === 0);
  }

  // This function round a float number to two decimals. round(28.45369) //returns 28.45
  function round(value) {
    return Math.round(value*100)/100;
  }

  // This function convert the extactChange Hash in the format of the array to be returned
  function convertExactChange() {
    for (var moneyName in exactChange) {
      if (exactChange[moneyName] > 0) {
        exactChangeArr.push([moneyName,exactChange[moneyName]]);
      }
    }
  }


  // This function returns "Closed" or the extact change depending on the state of the cid
  function cidClosedOrExtactChange(){
    if (isCidClosed()) {
      console.log("Closed");
      return "Closed";
    }
    else {
      convertExactChange();
      console.log(exactChangeArr);
      return exactChangeArr;
      }
  }

  for(var moneyName in moneyNamesValues){
    var moneyValue = moneyNamesValues[moneyName];
    var numberPerMoneyValue= Math.floor(change/moneyValue);
    if (change > 0) {
      if (numberPerMoneyValue >= (cidObject[moneyName]/moneyValue)) {
        exactChange[moneyName] = cidObject[moneyName];
        change -= (cidObject[moneyName]/moneyValue) * moneyValue;
        change = round(change);
        cidObject[moneyName] -= cidObject[moneyName];
      }
      else {
        exactChange[moneyName] = numberPerMoneyValue * moneyValue;
        change -= numberPerMoneyValue * moneyValue;
        cidObject[moneyName] -= numberPerMoneyValue * moneyValue;
        change = round(change);
      }
    }
    else {
      return cidClosedOrExtactChange();
    }
  }

  if (change > 0) {
    // If we reach this section it means that there were Insufficient Funds
    console.log("Insufficient Funds");
    return "Insufficient Funds";
  }
  else {
    // Here we check if the cid is closed or if the extact change array ;
    return cidClosedOrExtactChange();
  }

}


checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) ; //should return an array.
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ; //should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ; //should return a string.
checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) ; //should return [["QUARTER", 0.50]].
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]) ; //should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ; //should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ; //should return "Insufficient Funds".
checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) ; //should return "Closed".

