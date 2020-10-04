//Array of objects for each"" working hour
var workingHours=["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

//Sets displays current date at the top of the daily scheduler using Moment.js
var today = moment().format("dddd, MMMM Do");
$("#currentDay").text(today);

//Setting up hour blocks using Moment.js
$(".hour").each(function(hoursWorked){
    let today = moment();
    today.hour(9 + hoursWorked);
    let date = moment(today).format("hA");
    $(this).text(date);
})