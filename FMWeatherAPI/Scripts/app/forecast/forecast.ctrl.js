﻿(function () {
    angular.module("app.forecast")
        .controller("Forecast", function ($scope, $routeParams, weatherSvc) {
            $scope.forecast = null;
            $scope.current = null;
            $scope.getTime = getTime;
            $scope.courseToDirection = courseToDirection;

            if ($routeParams.id !== undefined) {
                getForecast($routeParams.id);
                getCurrent($routeParams.id);
            }

            function getForecast(id) {
                weatherSvc.getForecast(id)
                    .then(
                        function (response) {
                            $scope.forecast = response;
                            console.log($scope.forecast);
                        },
                        function (err) {
                            console.log("Error loading forecast data: ", err);
                        }
                    )
            }

            function getCurrent(id) {
                weatherSvc.getCurrent(id)
                    .then(
                        function (response) {
                            $scope.current = response;
                        },
                        function (err) {
                            console.log("Error loading current weather data: ", err);
                        }
                    )
            }

            function getTime(dt) {
                return new Date(dt * 1000);
            }

            function courseToDirection(course) {
                console.log(course);
                if (course >= 348.76 && course <= 360) {
                    return 'N';
                } else if (course >= 0 && course <= 11.25) {
                    return 'N';
                } else if (course >= 11.26 && course <= 33.75) {
                    return 'NNE';
                } else if (course >= 33.76 && course <= 56.25) {
                    return 'NE';
                } else if (course >= 56.26 && course <= 78.75) {
                    return 'ENE';
                } else if (course >= 78.76 && course <= 101.25) {
                    return 'E';
                } else if (course >= 101.26 && course <= 123.75) {
                    return 'ESE';
                } else if (course >= 123.76 && course <= 146.25) {
                    return 'SE';
                } else if (course >= 146.26 && course <= 168.75) {
                    return 'ESE';
                } else if (course >= 168.76 && course <= 191.25) {
                    return 'S';
                } else if (course >= 191.26 && course <= 213.75) {
                    return 'SSW';
                } else if (course >= 213.76 && course <= 236.25) {
                    return 'SW';
                } else if (course >= 236.26 && course <= 258.75) {
                    return 'WSW';
                } else if (course >= 258.76 && course <= 281.25) {
                    return 'W';
                } else if (course >= 281.26 && course <= 303.75) {
                    return 'WNW';
                } else if (course >= 303.76 && course <= 326.25) {
                    return 'NW';
                } else if (course >= 326.26 && course <= 348.75) {
                    return 'NW';
                } else {
                    return 'N/A';
                }
            }
        });
})();