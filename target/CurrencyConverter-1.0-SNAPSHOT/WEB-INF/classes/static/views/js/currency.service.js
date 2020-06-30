currencyApp.service('currencyConverterService', ['$http', function($http) {

        this.CurrencyConversion = function(access_key) {
            return $http.get("http://api.currencylayer.com/live" + "?access_key=" + access_key)
                .then(function (data) {
                    return data;
                })
                .catch(function (e) {
                    return e;
                });
        };

        this.ConversionHistory = function(historyData) {

            return $http({
                url: "/currencies/history",
                method: "POST",
                data: historyData
            })
                .then(function (response) {
                    console.log("response: ", response);
                    return response;
                })
                .catch(function (error) {
                    return error;
                });
        };

       this.geHistoryList =  function () {
            return $http.get("/currencies/list")
                .then(function (data) {
                    return data;
                })
                .catch(function (e) {
                    return e;
                });
        }
}]);
