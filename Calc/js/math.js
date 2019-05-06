// Function to start when the web document is loaded
$(document).ready(function() {
  //When the form with ID 'calcForm' is submitted this funciton runs
  $('#calcForm').keyup(function(event) {
    //stop the auto refresh of the page
    event.preventDefault();
    //retrieve the value in the input with ID 'employee'
    var emp = document.getElementById("employee").value;
    //retrieve the value in the input with ID 'salary'
    var sal = document.getElementById("salary").value;
    //retrieve the value in the input with ID 'rate'
    var abs = document.getElementById("rate").value;
    //check abs value, if value is above 100 show error message
    if(abs > 100) {
      alert('Please enter a number between 0 and 100 into Annual Absence Rate.');
    } else {
    //set variable month to 0
    var month = 0;
    //set variable year to 0
    var year = 0;
    //set variable x to 0
    var x = 0;
    //set variable y to 0
    var y = 0;
    //set variable x to the multiplaction of the employee and salary values
    var x = emp * sal;
    //set var y as the result from abs divided by 100, so that var x can be multiplied by this to get the % easily
    var y = abs / 100;

    //set year variable to the result from variable x multiplied by variable y
    year = x * y;

    //set the month variable to the result of the year variable being divided by 12
    month = year / 12;

    //set the element with the ID 'year' to £ + the value of the year variable, rounded to 2 decimal places
    document.getElementById("year").innerHTML = '£' + year.toFixed(2);
    //set the element with the ID 'month' to £ + the value of the month variable, rounded to 2 decimal places
    document.getElementById("month").innerHTML = '£' + month.toFixed(2);
  }});

});
