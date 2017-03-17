/*
Description : This page contains ten javascript functions required for the completion of the Javascript Competency Assessment.
Date : 16/03/2017
Author: Joshua Semple
*/
/*
Question One
- This function accepts an array of numbers and sorts it in descending order. A reverse bubble sort essentially.
*/
var array = [1, -2, 4, 2];
var sortedArray = array;// Make a copy of the original array
function sortDesc() {

  // This tells the function whether or not it will need to iterate over the array again to continue
  var swapped = false;

  for( var i = 1; i < array.length; i++ ) {
    var previous = array[i - 1];
    var current = array[i];

    // If the previous number is > than the current, swap them around
    //if the < is swapped around to a >, the array is sorted by ascending order
    if( previous < current ) {
      //sets the swapped status to true
      swapped = true;

      sortedArray[i] = previous;
      sortedArray[i - 1] = current;
    }
  }

  // If there has been a swap, sort over the array again
  if( swapped ) {
    return sortDesc();
  }
  //prints the sorted array.
  console.log(sortedArray)
}
/*
Question Two
- This function accepts an array and returns the largest number in the array
*/
function findLargestNum(number) {
  //sets the max number to 0
  var max = 0;
  //sets n to the number of elements in the array
  var n = number.length;

  //loops through the array, constantly checking if the next element is bigger than the max number
  for (var i = 0; i < n; ++i) {
    if (number[i] > max) {
      //if it is bigger, the max number updates
      max = number[i];
    }
  }
  //prints the max number
  console.log(max);
};

/*
Question Three
- This function accepts an array of numbers and checks whether the number is odd or even.
*/
function oddEven(array) {
  //loops through the array
  for(var i = 0; i < array.length; ++i){
    //using modulus to check if the number is odd or even
    if(i%2 === 0){
      console.log(i + " is even")
    }
    else {
      console.log(i + " is odd");
    }
  }
}

/*
Question Four
- This function accepts a number and reverses it. There are at least two different ways of reversing a string.
I prefer this way since it's slightly faster than the method that doesn't involve turning the integer into a string.
*/
function reverseNum(int){
  //checks if the input is an integer or not
  if (isNaN(int) || int === "") {
    console.log("Please insert a valid number");
  }
  else {
    //if it's a valid integer, turn the integer into a string for the purpose of splitting it.
    int = int + "";
  	var reversedNum = int.split("").reverse().join("");
    //parses the string back into an integer
    var intReversed = parseInt(reversedNum)
    console.log(intReversed)
  }
}

/*
Question Five
- This function accepts a string and splits it, placing each piece into an array.
*/
function splitString(string) {
    //makes sure that the input is a string
    var t = string.toString();
    //this splits the string on a whitespace
    var s = t.split(" ");
    console.log(s);
}

/*
Question Six
- This function accepts a target number and an array of numbers and will loop through the array in an attempt to sum up all the numbers
and reach the target number.
*/
function totalArray(target, arrayNums) {
  //sorts the array of numbers into ascending order. This is to avoid the function getting stuck.
  var numbers = arrayNums.sort(function(a, b){return b - a});
  var addNum = 0;
  var newNumbers = [];

  //sets the counter for looping through the array
  var counter = 0;
  while (addNum < target) {
    //if the number + the array element are smaller than or equal to the array, add the element and push it into a new array
    if((addNum + numbers[counter]) <= target) {
      addNum += numbers[counter];
      newNumbers.push(numbers[counter]);
    } else {
      //checks if the counter has reached the end of the array or not
      if(counter < numbers.length){
        counter++;
      } else {
        //if it has reached the end, an error is printed and the while loop breaks out
        console.log("target cannot be reached with the provided array");
        break;
      }
    }
  }

 //just some more validation to make sure that the target was either reached or it failed.
  if(addNum === target) {
    //correct
    console.log("target reached");
    console.log(newNumbers);
  } else {
    //incorrect
    console.log("target could not be reached.")
  }
}

/*
Question Seven
- This function accepts an array, and checks whether the array is valid or not.
- There are multiple different ways to check if the input is an array, I chose to use Array.isArray because it's easy to read and
faster than other examples.
- Examples include - variable instanceOf Array; || Object.prototype.toString.call(variable) === '[object Array]';
*/

function checkIfArray(array) {
  //this just checks if the array is actually an array and logs it straight to the console.
  console.log(Array.isArray(array));
}
/*
Question Eight
- This function accepts a number and an array, and will return the last 'n' elements of the array depending on the number.
*/
function cutArray(int, array) {
    //slices the array depending on the integer provided.
    var test = array.slice(-int)
    console.log(test);
}

/*
Question Nine
- This function accepts an array of strings and joins them.
*/
function joinArray(array) {
  //joins the array, leaving a whitespace inbetween each element.
  var test = array.join(" ");
  console.log(test);
}

/*
Question Ten
- This function accepts a string and performs a regex match on the string.
- If the string is found, it returns "substring matched", otherwise it says "incorrect format"
*/
function checkSubString(string) {
  //this part removes the url section, so that you can match on the bold text as illustrated in the question
  var removedUrl = string.match("[^\/]+$");
  //the split text is then matched upon, accepting the two different formats shown in the question, and failing on anything else.
  var regExPattern = new RegExp("^(([a-zA-Z]+[\-]{1}){2,3}([0-9]+[\-])([0-9]+))$");
  if(regExPattern.test(removedUrl) == true) {
    console.log("substring matched")
  }
  else{
    console.log("incorrect format")
  }
}
