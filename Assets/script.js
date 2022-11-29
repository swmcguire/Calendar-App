$(function () {

  //-------------------------------Set current date and time to display---------//
  var today = dayjs().format('MMM-DD-YYYY: HH:mm:ss');
  $('#currentDay').text(today);
  
 //-------------------------------Set current time for comparison---------//
  var currentHour = dayjs().format('HH');

  //-------------------------------Use ParseInt to get the hour from the class/ID------------//
    $(".time-block").each(function() {
      var hourWindow = parseInt($(this).attr("id").split("hour-")[1]);

  //--------------------------------Console.log to check to see what is being shown---------//
      console.log(hourWindow, currentHour);
    
  //------------------------------if current time is before hour window then past-----------//
  if (hourWindow < currentHour) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    
  //------------------------------if current time is equal to hour window then present-----------//
  } else if (hourWindow == currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
  
  //------------------------------if current time is after hour window then future-----------//  
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }

})
  
//--------------------------------Add OnClick Event-----------//  
$(".saveBtn").on("click",function(event) {
//--------------------------------When button clicked then save to local storage 
var textArea = $(this).siblings(".description").val(); //call the sibling of the saveBtn class (div/textarea) -- get the description text box
var hourWindow = $(this).parent().attr("id"); // call the parent of the .saveBtn class (returns the div) --then get the id of "hour-__"
localStorage.setItem(hourWindow,textArea);
  console.log("button click");
  console.log(textArea);
  console.log(hourWindow);
console.log($(event.target));
});

//--------------------------------When page reloaded add the item back to the page--------//
//localStorage.getItem();

$("#hour-8 .description") .val(localStorage.getItem("hour-8"));
$("#hour-9 .description") .val(localStorage.getItem("hour-9"));
$("#hour-10 .description") .val(localStorage.getItem("hour-10"));
$("#hour-11 .description") .val(localStorage.getItem("hour-11"));
$("#hour-12 .description") .val(localStorage.getItem("hour-12"));
$("#hour-13 .description") .val(localStorage.getItem("hour-13"));
$("#hour-14 .description") .val(localStorage.getItem("hour-14"));
$("#hour-15 .description") .val(localStorage.getItem("hour-15"));
$("#hour-16 .description") .val(localStorage.getItem("hour-16"));
$("#hour-17 .description") .val(localStorage.getItem("hour-17"));


});
