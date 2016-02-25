var app = angular.module("myApp", []);

app.directive("footerDirective", function() {
    return {
        template : "3 DAYS AGO &#124; FRANCE, TRIPS, LOCAL, EATS, CULTURE, BUDGET"
    };
});

app.directive("adventureDirective", function() {
    return {
        template : "ADVENTURE GEAR"
    };
});

app.directive("featuredDirective", function() {
    return {

        template : "FEATURED TRIPS"
    };
});
