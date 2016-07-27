/*

Inventory Update


Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should  be in alphabetical order by item.

*/


function updateInventory(arr1, arr2) {

  // This function returns an object from an array with couples as values.
  function arrInObject(arr) {
    var arrObject={};
    for (var i = 0; i < arr.length; i++) {
      arrObject[arr[i][1]] = arr[i][0];
    }
    return arrObject;
  }

  // This function sort an JS object based on the keys
  function sortObjectByKey(myObj) {
    var sortedObj = {};
    var keys = Object.keys(myObj);
    keys.sort();

    for (var i = 0; i < keys.length; i++) {
      sortedObj[keys[i]] = myObj[keys[i]];
    }
    return sortedObj;
  }

  var curInv = arrInObject(arr1);
  var newInv = arrInObject(arr2);
  var updateInv=[];


  for(var itemName in newInv) {
    var itemValue = newInv[itemName];
    if (curInv.hasOwnProperty(itemName)) {
    // Updating the value of the current item in the inventory
      curInv[itemName] += itemValue;
    }
    else { // The item was not present in the current inventory
      curInv[itemName] = itemValue;
    }
  }

  // sorting the curInv
  curInv = sortObjectByKey(curInv);

  // Rendering  the array of the new inventory
  for (itemName in curInv ) {
    updateInv.push([curInv[itemName],itemName]);
  }
  console.log(updateInv);
  return updateInv;
}


updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length ; //should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) ; //should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]].
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) ; //should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]) ; //should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]].
updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]) ; //should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]].


