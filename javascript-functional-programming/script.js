
//Given input array
var numbers = [2,4,6];
document.write(`Input array: ${numbers}`);
document.write("<br>---------------------<br>");


//Double the values using custom built map function and put it in a new array
function map(numbers, callback) {
    var result = []; // Create a new Array
    for (var i = 0; i != numbers.length; i++)
      result[i] = callback(numbers[i]);
        return result;
  }
  
  //Callback function to double the values in the input array
  var callback = function(num) {
     return num * 2; 
  }
  
  //Call a custom map function passing the input array and a callback function
  var doubles = map(numbers, callback);
  //Print the values of the generated array
  document.write(`Double array: ${doubles}`);
  document.write("<br>-------------------------");