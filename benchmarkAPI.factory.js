(function (ng) {

    'use strict';

    angular.module('bencmarkAPI', [])
        .factory('BenchmarkAPI', benchmarkAPI);


// Benchmark API

    function benchmarkAPI($http, URLS, AuthService) {
        var BenchmarkAPI = {};
        var user = AuthService.getUser();
        var BASE_URL = URLS.BENCHMARK_API_URL;
        var agency_id = user.agency_id;

        BenchmarkAPI.getPlaces = function (o) {
            var options = {
                method: 'get',
                url: BASE_URL + '/locations'
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.getLocations = function () {
            return $http({
                method: 'get',
                url: BASE_URL + '/locations'
            });
        };

        BenchmarkAPI.createProvider = function (location_id, provider) {
            return $http({
                method: 'post',
                url: BASE_URL + '/locations/' + location_id + '/providers',
                data: provider
            });
        };

        BenchmarkAPI.createLocation = function (location) {
            return $http({
                method: 'post',
                url: BASE_URL + '/locations',
                data: location
            });
        };

        BenchmarkAPI.getAgencies = function () {
            return $http({
                method: 'get',
                url: BASE_URL + '/agencies',
            });
        };

        BenchmarkAPI.createAgency = function (agency) {
            return $http({
                method: 'post',
                url: BASE_URL + '/agencies',
                data: agency
            });
        };

        BenchmarkAPI.removeAgency = function (id) {
            return $http({
                method: 'delete',
                url: BASE_URL + '/agencies/' + id
            });
        };

        BenchmarkAPI.updateAgency = function (agency) {
            return $http({
                method: 'patch',
                url: BASE_URL + '/agencies/' + agency._id,
                data: agency
            });
        };

        BenchmarkAPI.updateLocation = function (location) {
            return $http({
                method: 'put',
                url: BASE_URL + '/locations/' + location._id,
                data: location
            });
        };

        BenchmarkAPI.updateCompanyLocation = function (agency_id, location) {
            return $http({
                method: 'put',
                url: BASE_URL + '/agencies/' + agency_id + '/locations/' + location._id,
                data: location
            });
        };

        BenchmarkAPI.getLocation = function (location_id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/locations/' + location_id
            });
        };

        BenchmarkAPI.getAgencyLocations = function (agency_id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/locations'
            });
        };

        BenchmarkAPI.contactSupport = function (contact) {
            return $http({
                method: 'post',
                url: BASE_URL + '/support_requests',
                data: contact
            });
        };

        BenchmarkAPI.searchPlace = function (place) {
            return $http({
                method: 'get',
                url: BASE_URL + '/search/locations',
                params: place,
            });
        };

        BenchmarkAPI.scheduleSummaries = function (o) {
            var options = {
                method: 'get',
                url: BASE_URL + '/run/summaries'
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.scheduleInsights = function (o) {
            var options = {
                method: 'get',
                url: BASE_URL + '/run/insights'
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.runSentimentAnalysis = function () {
            return $http({
                method: 'get',
                url: BASE_URL + '/run/reviews'
            });
        };

        BenchmarkAPI.runLocationSentimentAnalysis = function (location_id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/run/reviews',
                params: { location_id : location_id}
            });
        };

        BenchmarkAPI.getAgency = function (agency_id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id
            });
        };

        BenchmarkAPI.getStats = function () {
            return $http({
                method: 'get',
                url: BASE_URL + '/insights',
                params: {agency_id: agency_id, sort: '-created_on', limit: 1}
            });
        };

        BenchmarkAPI.removeCompanyLocation = function(agency_id, location_id) {
            return $http({
                method: 'delete',
                url: BASE_URL + '/agencies/' + agency_id + '/locations/' + location_id
            });
        };

        BenchmarkAPI.removeLocation = function(location) {
            return $http({
                method: 'delete',
                url: BASE_URL + '/locations/' + location._id
            });
        };

        BenchmarkAPI.getUsers = function (o) {
            var options = {
                method: 'get',
                url: BASE_URL + '/users'
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.getUser = function (o, id) {
            var options = {
                method: 'get',
                url: BASE_URL + '/users/' + id
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.updateUser = function (o, user_id) {
            var options = {
                method: 'patch',
                url: BASE_URL + '/users/' + user_id
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.createUser = function (user) {
            return $http({
                method: 'post',
                url: BASE_URL + '/users',
                data: user
            });
        };

        BenchmarkAPI.getLocationCompetitors = function (agency_id, location_id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/locations/' + location_id + '/competitors'
            });
        };

        BenchmarkAPI.getCompetitors = function (agency_id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/competitors'
            });
        };

        BenchmarkAPI.createCompetitor = function (competitor) {
            return $http({
                method: 'post',
                url: BASE_URL + '/competitors',
                data: competitor
            });
        };

        BenchmarkAPI.removeCompetitor = function (competitor_id) {
            return $http({
                method: 'delete',
                url: BASE_URL + '/competitors/' + competitor_id
            });
        };

        BenchmarkAPI.updateCompetitor = function (competitor) {
            return $http({
                method: 'put',
                url: BASE_URL + '/competitors/' + competitor._id,
                data: competitor
            });
        };

        BenchmarkAPI.removeUser = function (id) {
            return $http({
                method: 'delete',
                url: BASE_URL + '/users/' + id
            });
        };

        BenchmarkAPI.connectLocation = function (agency_id, location) {
            return $http({
                method: 'post',
                url: BASE_URL + '/agencies/' + agency_id + '/locations/' + location.selected._id,
                data: location
            });
        };

        BenchmarkAPI.getAgencyTimeStats = function (o) {
            var options = {
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/stats/quality_score',
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.getLocationTimeStats = function (o) {
            var options = {
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/locations/' + o.location_id + '/stats/quality_score',
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.getLocationCompetitorsTimeStats = function (o) {
            var options = {
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/locations/' + o.location_id + '/competitors/stats/quality_score',
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.getAgencyReviews = function (o) {
            var options = {
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/reviews',
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.getLocationReviews = function (o, location_id) {
            var options = {
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/locations/' + location_id + '/reviews',
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.getAgencyReviewTrends = function (o) {
            var options = {
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/keywords'
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.getLocationReviewTrends = function (o, location_id) {
            var options = {
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/locations/' + location_id + '/keywords'
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.correctSentiment = function(o) {
            var options = {
                method: 'post',
                url: BASE_URL + '/agencies/' + agency_id + '/sentiment_corrections'
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.generateSurveyNumber = function (o, location_id) {
            var options = {
                method: 'post',
                url: BASE_URL + '/locations/' + location_id + '/twilio_number'
            };
            return $http(_.merge(options, o));
        };

        BenchmarkAPI.getAgencyReviewFilters = function(o) {
            return $http(_.merge({
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/reviews/filters'
            }, o));
        };

        BenchmarkAPI.createReviewFilter = function(o) {
            return $http(_.merge({
                method: 'post',
                url: BASE_URL + '/review_filters'
            }, o));
        };

        BenchmarkAPI.removeReviewFilter = function(id, o) {
            return $http(_.merge({
                method: 'delete',
                url: BASE_URL + '/review_filters/' + id
            }, o));
        };

        BenchmarkAPI.getNotifications = function(id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/users/' + id + '/notifications'
            });
        };

        BenchmarkAPI.updateNotification = function(id, o) {
            return $http(_.merge({
                method: 'patch',
                url: BASE_URL + '/notifications/' + id
            }, o));
        };

        BenchmarkAPI.getAgencySurveys = function() {
            return $http({
                method: 'get',
                url: BASE_URL + '/agencies/' + agency_id + '/surveys'
            });
        };

        BenchmarkAPI.createSurvey = function(o) {
            o.data.agency_id = agency_id;
            return $http(_.merge({
                method: 'post',
                url: BASE_URL + '/agencies/' + agency_id + '/surveys'
            }, o));
        };

        BenchmarkAPI.removeSurvey = function(id) {
            return $http({
                method: 'delete',
                url: BASE_URL + '/surveys/' + id
            });
        };

        BenchmarkAPI.updateSurvey = function(id, o) {
            return $http(_.merge({
                method: 'put',
                url: BASE_URL + '/surveys/' + id
            }, o));
        };

        BenchmarkAPI.getRespondent = function(id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/respondents/' + id
            });
        };

        BenchmarkAPI.getRespondentReport = function(id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/respondents/' + id + '/report'
            });
        };

        BenchmarkAPI.getSurvey = function(id) {
            return $http({
                method: 'get',
                url: BASE_URL + '/surveys/' + id
            });
        };

        BenchmarkAPI.getRespondents = function(id, o) {
            return $http({
                method: 'get',
                url: BASE_URL + '/surveys/' + id + '/respondents'
            });
        };

        return BenchmarkAPI;
    }

}(angular));
