$(document).ready(function () {
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
    let currentHour = parseInt(moment().format("H"));
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

  //Saving to Local Storage User-Entered Events into Local Storage
  $(".saveBtn").click(function () {
    ///Storing to local storage
    var savebtnID = this.id;
    var splitID = savebtnID.split("-");
    var savebtnNum = splitID[1];
    var blockEvents = JSON.parse(localStorage.getItem("blocks")) || [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
    var eventRecord = $("#text-" + savebtnNum).val();
    blockEvents.splice(parseInt(savebtnNum), 1, eventRecord);
    localStorage.setItem("blocks", JSON.stringify(blockEvents));
  });
  //Retrieving the Events from Local Storage and Displaying Them to the Correct Text Areas
  var displayedEvents = [];
  displayedEvents = JSON.parse(localStorage.getItem("blocks"));
  $("textarea").each(function (textsDisplayed) {
    $("#text-" + textsDisplayed.toString()).text(
      displayedEvents[parseInt(textsDisplayed)]
    );
  });
});
