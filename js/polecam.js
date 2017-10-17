// Initialize your app
var myApp = new Framework7({
    modalTitle: 'PoleCam',
    material: true,
    materialPageLoadDelay: 200
});
// Export selectors engine
var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  //dynamicNavbar: true
});

myApp.onPageInit('schedule', function (page) {
  // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
  // Get page data from event data
  var page = e.detail.page;

})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="schedule"]', function (e) {
  // Following code will be executed for page with data-page attribute equal to "about"
})

/*
$('#batteryUsage').circleProgress({
  value: 0.75,
  size: 50,
  lineCap: 'round',
  fill: {
    gradient: ["red", "orange", "blue"]
  }
}).on('circle-animation-progress', function(event, progress, value) {
    console.log("burada ", progress);
    $(this).find('span.percent-text').html(Math.floor(value*100)+"%");
});
*/
