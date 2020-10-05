$(document).ready(function () {
//   //Array of objects for each"" working hour
//   var workingHours = [
//     "9AM",
//     "10AM",
//     "11AM",
//     "12PM",
//     "1PM",
//     "2PM",
//     "3PM",
//     "4PM",
//     "5PM",
//   ];
  //Sets displays current date at the top of the daily scheduler using Moment.js
  var today = moment().format("dddd, MMMM Do");
  $("#currentDay").text(today);

  //Setting up hour blocks using Moment.js
  $(".hour").each(function (hoursWorked) {
    let today = moment();
    today.hour(9 + hoursWorked);
    let date = moment(today).format("hA");
    $(this).text(date);
  });

  //Color-coding time blocks based upon their time status of past, present, future
  $("textarea").each(function (numText) {
    let today = moment();
    today.hour(9 + numText);
    let blockedHour = parseInt(moment(today).format("H"));
    console.log(blockedHour);
    let currentHour = parseInt(moment().format("H"));
    console.log(currentHour);
    if (blockedHour > currentHour) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
    } else if (blockedHour === currentHour) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    }
  });
});
