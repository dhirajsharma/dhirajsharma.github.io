var articleStart = "<article class=\"resume-timeline-item position-relative pb-5\">"
var div1 = "<div class=\"resume-timeline-item-header mb-2\">"
var div2 = "<div class=\"d-flex flex-column flex-md-row\">"
var position = "<h3 class=\"resume-position-title font-weight-bold mb-1\">"
var positionEnd = "</h3>"
var company ="<h3 class=\"resume-position-title font-weight-bold mb-1\">"
var divEnd = "</div>"
var articleEnd = "</article>"
$.getJSON('data/resume.json', function(data) {
    var items = [];
    $.each(data, function (key, value) {
        console.log(value);
    })
})