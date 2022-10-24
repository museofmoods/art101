/**
* Author: Jaq Moore and Mikayla Jordan
* Created: 10.24.2022
*
*(c) Copyright Jaq and Mikayla
**/

//sortUserName - a function that takes user input and sorts  the letters
//of their name

function sortUserName() {
  var userName = window.prompt("Hello. Please insert your name below for special secret purposes")
  console.log("userName =", userName)
  // split string to array
  var nameArray = userName.split ('')
  console.log("nameArray =", nameArray);
  // sort the nameArray
  var nameArraySOrt = nameArray.sort()
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted - nameArraySort.join('')
  // Note that I could have done the above lines as a single line:
  //  userName.toLower().split("").sort().join("")
  return.nameSorted;


}

// output
document.writeln("We have processed your information and will getting back to you in two moons. Thank you for your cooperation")
    sortUserName(, "</br>");
