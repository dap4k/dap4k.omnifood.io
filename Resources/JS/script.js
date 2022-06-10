// $(document).ready(function() { //Everu doc we write Jquery code in must start with this. The .ready assures this will only be loaded after the document is ready.//

//     $("h1").click(function() {
//         $(this).css("background-color", "#ff0000") // "this" refers to the owner object or the element that receives the event e.g. this = "h1"//
//     }) // The $ sign is the selector in JQuery//



// })

/* For the sticky navigation */
$(document).ready(function() {
    $(".js--section-features").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: 60
    })



/* Scroll on Buttons */
    $(".js--scroll-to-plans").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000);
    });

});






/*
$(document).ready(function() {
var waypoint = new Waypoint({
    Element: $(".js--section-features"),
    handler: function(direction) {
        if (direction === "down") {
            $("nav").addClass("sticky");
        } 
        else {
            $("nav").removeClass("sticky");
        }
    }, offset: 60
    })
});

*/



