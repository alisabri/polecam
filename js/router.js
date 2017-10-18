define(function() {

    var $ = Dom7;

    /**
     * Init router, that handle page events
     */
    function init() {
        $(document).on('pageBeforeInit', function(e) {
            var page = e.detail.page;
            console.log('page', page);
            if (page.name==='index')
              page.name = 'main';
            load(page.name, page.query);
        });
    }

    /**
     * Load (or reload) controller from js code (another controller) - call it's init function
     * @param controllerName
     * @param query
     */
    function load(controllerName, query) {
        require(['js/controller/' + controllerName + 'Controller'], function(controller) {
            controller.init(query);
        });
    }

    return {
        init: init,
        load: load
    };
});

// Option 2. Using live 'pageInit' event handlers for each page
//$$(document).on('pageInit', '.page[data-page="schedule"]', function (e) {

// Following code will be executed for page with data-page attribute equal to "about"
//})
/*
var calendarDateFormat = myApp.calendar({
    input: '#calendar-date-format',
    dateFormat: 'DD, MM dd, yyyy'
});
*/
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
