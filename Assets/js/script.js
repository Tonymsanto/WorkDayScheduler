$(document).ready(function () {
    var currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
    var currentDayEl = $("#currentDay");
    currentDayEl.text(currentDay);
    console.log(currentDay);

    var button = $(".saveBtn");
    button.click(function () {
        var usrText = $(".description").val();
        var blockTime = $(".description").parent().attr("id");
        console.log(usrText);
        console.log(blockTime);

        window.localStorage.setItem(blockTime, usrText);
    })

    var hourEight = $("#hour8 .description");
    hourEight.val(window.localStorage.getItem("hour8"));

    var hourNine = $("#hour9 .description");
    hourNine.val(window.localStorage.getItem("hour9"));

    var hourTen = $("#hour10 .description");
    hourTen.val(window.localStorage.getItem("hour10"));

    var hourEleven = $("#hour11 .description");
    hourEleven.val(window.localStorage.getItem("hour11"));

    var hourTwelve = $("#hour12 .description");
    hourTwelve.val(window.localStorage.getItem("hour12"));

    var hourThirteen = $("#hour13 .description");
    hourThirteen.val(window.localStorage.getItem("hour13"));

    var hourFourteen = $("#hour14 .description");
    hourFourteen.val(window.localStorage.getItem("hour14"));

    var hourFifteen = $("#hour15 .description");
    hourFifteen.val(window.localStorage.getItem("hour15"));

    var hourSixteen = $("#hour16 .description");
    hourSixteen.val(window.localStorage.getItem("hour16"));

    var hourSeventeen = $("#hour17 .description");
    hourSeventeen.val(window.localStorage.getItem("hour17"));
})