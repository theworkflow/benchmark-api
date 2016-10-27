((ng) => {
  'use strict';

  var module = ng.module('benchmarkAPI', ['benchmark.auth']);

  module.factory('BenchmarkAPI', ($http, URLS, AuthService) => {
    var BenchmarkAPI = {};
    var user = AuthService.getUser();
    var BASE_URL = URLS.BENCHMARK_API_URL;
    var REDUX_BASE_URL = URLS.BENCHMARK_API_REDUX_URL;
    var agency_id = user.agency_id;

    BenchmarkAPI.createProvider = (location_id, provider) => {
      return $http({
        method: 'post',
        url: `${BASE_URL}/locations/${location_id}/providers`,
        data: provider
      });
    };

    BenchmarkAPI.createLocation = (location) => {
      return $http({
        method: 'post',
        url: `${BASE_URL}/locations`,
        data: location
      });
    };

    BenchmarkAPI.updateLocation = (location) => {
      return $http({
        method: 'put',
        url: `${BASE_URL}/locations/${location._id}`,
        data: location
      });
    };

    BenchmarkAPI.updateCompanyLocation = (agency_id, location) => {
      return $http({
        method: 'put',
        url: `${BASE_URL}/agencies/${agency_id}/locations/${location._id}`,
        data: location
      });
    };

    BenchmarkAPI.contactSupport = (contact) => {
      return $http({
        method: 'post',
        url: `${BASE_URL}/support_requests`,
        data: contact
      });
    };

    BenchmarkAPI.searchPlace = (place) => {
      return $http({
        method: 'get',
        url: `${BASE_URL}/search/locations`,
        params: place
      });
    };

    BenchmarkAPI.scheduleSummaries = (o) => {
      let options = {
        method: 'get',
        url: `${BASE_URL}/run/summaries`,
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.scheduleInsights = (o) => {
      let options = {
        method: 'get',
        url: `${BASE_URL}/run/insights`,
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.runSentimentAnalysis = () => {
      return $http({
        method: 'get',
        url: `${BASE_URL}/run/reviews`
      });
    };

    BenchmarkAPI.runLocationSentimentAnalysis = (location_id) => {
      return $http({
        method: 'get',
        url: `${BASE_URL}/run/reviews`,
        params: { location_id: location_id }
      });
    };

    BenchmarkAPI.getStats = () => {
      return $http({
        method: 'get',
        url: `${BASE_URL}/insights`,
        params: { agency_id: agency_id, sort: '-created_on', limit: 1 }
      });
    };

    BenchmarkAPI.removeCompanyLocation = (agency_id, location_id) => {
      return $http({
        method: 'delete',
        url: `${BASE_URL}/agencies/${agency_id}/locations/${location_id}`
      });
    };

    BenchmarkAPI.removeLocation = (location) => {
      return $http({
        method: 'delete',
        url: `${BASE_URL}/locations/${location._id}`
      });
    };

    BenchmarkAPI.getLocationCompetitors = (agency_id, location_id) => {
      return $http({
        method: 'get',
        url: `${BASE_URL}/agencies/${agency_id}/locations/${location_id}/competitors`
      });
    };

    BenchmarkAPI.connectLocation = (agency_id, location) => {
      return $http({
        method: 'post',
        url: `${BASE_URL}/agencies/${agency_id}/locations/${location.selected._id}`,
        data: location
      });
    };

    BenchmarkAPI.getAgencyTimeStats = (o) => {
      let options = {
        method: 'get',
        url: `${BASE_URL}/agencies/${agency_id}/stats/quality_score`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getLocationTimeStats = (o) => {
      let options = {
        method: 'get',
        url: `${BASE_URL}/agencies/${agency_id}/locations/${o.location_id}/stats/quality_score`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getLocationCompetitorsTimeStats = (o) => {
      let options = {
        method: 'get',
        url: `${BASE_URL}/agencies/${agency_id}/locations/${o.location_id}/competitors/stats/quality_score`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getLocationReviews = (o, location_id) => {
      let options = {
        method: 'get',
        url: `${BASE_URL}/agencies/${agency_id}/locations/${location_id}/reviews`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getLocationReviewTrends = (o, location_id) => {
      let options = {
        method: 'get',
        url: `${BASE_URL}/agencies/${agency_id}/locations/${location_id}/keywords`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.correctSentiment = (o) => {
      let options = {
        method: 'post',
        url: `${BASE_URL}/agencies/${agency_id}/sentiment_corrections`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getNotifications = (id) => {
      return $http({
        method: 'get',
        url: `${BASE_URL}/users/${id}/notifications`
      });
    };

    BenchmarkAPI.updateNotification = (id, o) => {
      let options = {
        method: 'patch',
        url: `${BASE_URL}/notifications/${id}`
      };
      return $http(_.merge(options, o));
    };

    // API-REDUX ENDPOINTS
    BenchmarkAPI.getAgency = (agency_id) => {
      return $http({
        method: 'get',
        url: `${REDUX_BASE_URL}/agencies/${agency_id}`
      });
    };

    BenchmarkAPI.getAgencies = (o) => {
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/agencies`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.createAgency = (agency) => {
      return $http({
        method: 'post',
        url: `${REDUX_BASE_URL}/agencies`,
        data: agency
      });
    };

    BenchmarkAPI.removeAgency = (id) => {
      return $http({
        method: 'delete',
        url: `${REDUX_BASE_URL}/agencies/${id}`
      });
    };

    BenchmarkAPI.updateAgency = (agency) => {
      return $http({
        method: 'patch',
        url: `${REDUX_BASE_URL}/agencies/${agency._id}`
        data: agency
      });
    };

    BenchmarkAPI.getRecommendations = () => {
      return $http({
        method: 'get',
        url: `${REDUX_BASE_URL}/recommendations`
      });
    };

    BenchmarkAPI.createRecommendations = (recommendation) => {
      return $http({
        method: 'post',
        url: `${REDUX_BASE_URL}/recommendations`,
        data: recommendation
      });
    };

    BenchmarkAPI.getRecommendation = (id) => {
      return $http({
        method: 'get',
        url: `${REDUX_BASE_URL}/recommendations/${id}`
      });
    };

    BenchmarkAPI.deleteRecommendation = (id) => {
      return $http({
        method: 'delete',
        url: `${REDUX_BASE_URL}/recommendations/${id}`
      });
    };

    BenchmarkAPI.updateRecommendation = (id, recommendation) => {
      return $http({
        method: 'patch',
        url: `${REDUX_BASE_URL}/recommendations/${id}`,
        data: recommendation
      });
    };

    BenchmarkAPI.getSurveys = (o) => {
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/surveys`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getSurvey = (id) => {
      return $http({
        method: 'get',
        url: `${REDUX_BASE_URL}/surveys/${id}`
      });
    };

    BenchmarkAPI.createSurvey = (o) => {
      let options = {
        method: 'post',
        url: `${REDUX_BASE_URL}/surveys`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.removeSurvey = (id) => {
      return $http({
        method: 'delete',
        url: `${REDUX_BASE_URL}/surveys/${id}`
      });
    };

    BenchmarkAPI.updateSurvey = (id, o) => {
      let options = {
        method: 'put',
        url: `${REDUX_BASE_URL}/surveys/${id}`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getRespondent = (id) => {
      return $http({
        method: 'get',
        url: `${REDUX_BASE_URL}/respondents/${id}`
      });
    };

    BenchmarkAPI.listRespondents = function(o) {
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/respondents`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getRespondentReport = (id) => {
      return $http({
        method: 'get',
        url: `${REDUX_BASE_URL}/respondents/${id}/report`
      });
    };

    BenchmarkAPI.createRespondent = (id, o) => {
      let options = {
        method: 'post',
        url: `${REDUX_BASE_URL}/surveys/${id}/respondents`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.updateRespondent = (id, o) => {
      let options = {
        method: 'patch',
        url: `${REDUX_BASE_URL}/respondents/${id}`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getRespondents = (id, o) => {
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/surveys/${id}/respondents`
      }
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.generateSurveyNumber = (o, id) => {
      let options = {
        method: 'post',
        url: `${REDUX_BASE_URL}/agencies_locations/${id}/twilio_number`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getBlacklist = () => {
      return $http({
        method: 'get',
        url: `${REDUX_BASE_URL}/blacklist`
      });
    };

    BenchmarkAPI.addBlacklist = (o) => {
      let options = {
        method: 'post',
        url: `${REDUX_BASE_URL}/blacklist`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.removeBlacklist = (id) => {
      return $http({
        method: 'delete',
        url: `${REDUX_BASE_URL}/blacklist/${id}`
      });
    };

    BenchmarkAPI.getCompetitors = (agency_id) => {
      return $http({
        method: 'get',
        url: `${REDUX_BASE_URL}/agencies/${agency_id}/competitors`
      });
    };

    BenchmarkAPI.createCompetitor = (competitor) => {
      return $http({
        method: 'post',
        url: `${REDUX_BASE_URL}/competitors`,
        data: competitor
      });
    };

    BenchmarkAPI.removeCompetitor = (competitor_id) => {
      return $http({
        method: 'delete',
        url: `${REDUX_BASE_URL}/competitors/${competitor_id}`
      });
    };

    BenchmarkAPI.updateCompetitor = (competitor) => {
      return $http({
        method: 'put',
        url: `${REDUX_BASE_URL}/competitors/${competitor._id}`,
        data: competitor
      });
    };

    BenchmarkAPI.getUsers = (o) => {
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/users`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getUser = (o, id) => {
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/users/${id}`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.updateUser = (o, user_id) => {
      let options = {
        method: 'patch',
        url: `${REDUX_BASE_URL}/users/${user_id}`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.createUser = (user) => {
      return $http({
        method: 'post',
        url: `${REDUX_BASE_URL}/users`,
        data: user
      });
    };

    BenchmarkAPI.removeUser = (id) => {
      return $http({
        method: 'delete',
        url: `${REDUX_BASE_URL}/users/${id}`
      });
    };

    BenchmarkAPI.getLocations = (o) => {
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/locations`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.listAgenciesLocations = (agency_id) => {
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/agencies_locations`,
        params: { limit: 100000 }
      };

      if (agency_id) options.params = { agency_id: agency_id, limit: 100000 };
      return $http(options);
    };

    BenchmarkAPI.getAgencyReviews = (o) => {
      var agency = o.agency_id ? o.agency_id : agency_id;
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/agencies/${agency}/reviews`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getAgencyReviewFilters = (o) => {
      let options = {
        method: 'get',
        url: `${REDUX_BASE_URL}/agencies/${agency_id}/reviews/filters`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.createReviewFilter = (o) => {
      let options = {
        method: 'post',
        url: `${REDUX_BASE_URL}/review_filters`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.removeReviewFilter = (id, o) => {
      let options = {
        method: 'delete',
        url: `${REDUX_BASE_URL}/review_filters/${id}`
      };
      return $http(_.merge(options, o));
    };

    BenchmarkAPI.getLocation = (location_id) => {
      return $http({
        method: 'get',
        url: `${REDUX_BASE_URL}/agencies_locations/${location_id}`
      });
    };

    return BenchmarkAPI;
  });
}(angular));
