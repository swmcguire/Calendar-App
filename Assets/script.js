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
var textArea = $(this).siblings(".description"); //Very close - need to get the value
var hourWindow = $(this).parent(); // figure out how to get the time here 
localStorage.setItem(hourWindow,textArea);
  console.log("button click");
  console.log(textArea);
  console.log(hourWindow);
console.log($(event.target));
});


//--------------------------------When page reloaded add the item back to the page--------//
//localStorage.getItem();



});
