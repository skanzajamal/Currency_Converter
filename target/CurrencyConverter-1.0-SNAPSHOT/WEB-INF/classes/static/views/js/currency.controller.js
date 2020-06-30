currencyApp.controller('CurrencyCtrl', ['$scope', '$filter','currencyConverterService', function($scope, $filter, currencyConverterService) {

    var access_key = 'b3310f591dd1d532f86802058e8b5f62';
    $scope.historyList = [];
    $scope.timestamp = new Date(Date.now() - 864e5);

    $scope.currencyLists = [
        "AFN",
        "ALL",
        "DZD",
        "AOA",
        "ARS",
        "AMD",
        "AWG",
        "AZN",
        "BSD",
        "BHD",
        "BDT",
        "BBD",
        "BYN",
        "BZD",
        "BMD",
        "BTN",
        "BOB",
        "BOV",
        "BAM",
        "BWP",
        "BRL",
        "BND",
        "BGN",
        "BIF",
        "CVE",
        "KHR",
        "CAD",
        "KYD",
        "CLF",
        "CLP",
        "CNY",
        "COP",
        "COU",
        "KMF",
        "CDF",
        "CRC",
        "HRK",
        "CUC",
        "CUP",
        "CZK",
        "DJF",
        "DOP",
        "EGP",
        "SVC",
        "ERN",
        "ETB",
        "FKP",
        "FJD",
        "XAF",
        "GMD",
        "GEL",
        "GHS",
        "GIP",
        "DKK",
        "GTQ",
        "GNF",
        "GYD",
        "HTG",
        "HNL",
        "HKD",
        "HUF",
        "ISK",
        "INR",
        "IDR",
        "XDR",
        "IRR",
        "IQD",
        "ILS",
        "JMD",
        "JPY",
        "JOD",
        "KZT",
        "KES",
        "KPW",
        "KRW",
        "KWD",
        "KGS",
        "LAK",
        "LBP",
        "LSL",
        "LRD",
        "LYD",
        "MOP",
        "MGA",
        "MWK",
        "MYR",
        "MVR",
        "MRU",
        "MUR",
        "XUA",
        "MXN",
        "MXV",
        "MDL",
        "MNT",
        "MZN",
        "MMK",
        "NAD",
        "NPR",
        "NIO",
        "NGN",
        "OMR",
        "PKR",
        "PAB",
        "PGK",
        "PYG",
        "PEN",
        "PHP",
        "PLN",
        "QAR",
        "MKD",
        "RON",
        "RUB",
        "RWF",
        "SHP",
        "XCD",
        "WST",
        "STN",
        "SAR",
        "RSD",
        "SCR",
        "SLL",
        "SGD",
        "ANG",
        "XSU",
        "SBD",
        "SOS",
        "ZAR",
        "SSP",
        "LKR",
        "SDG",
        "SRD",
        "NOK",
        "SZL",
        "SEK",
        "CHE",
        "CHF",
        "CHW",
        "SYP",
        "TWD",
        "TJS",
        "TZS",
        "THB",
        "XOF",
        "NZD",
        "TOP",
        "TTD",
        "TND",
        "TRY",
        "TMT",
        "AUD",
        "UGX",
        "UAH",
        "AED",
        "GBP",
        "USN",
        "UYI",
        "UYU",
        "UZS",
        "VUV",
        "VEF",
        "VND",
        "USD",
        "XPF",
        "MAD",
        "YER",
        "ZMW",
        "ZWL",
        "EUR"
    ];

    // $scope.result = null;
    $scope.FromCurrency = "EUR";
    $scope.ToCurrency = "CHF";

    $scope.convert = function (valid) {

        if(valid){
            currencyConverterService.CurrencyConversion(access_key).then( function(response) {
                var from_currency = $scope.FromCurrency;
                var to_currency = $scope.ToCurrency;
                var rates = response.data.quotes;
                try {
                    var usd_equiv = $scope.amount / rates['USD'+from_currency+''];
                    $scope.result = usd_equiv * rates['USD'+to_currency+''];
                    $scope.addHistory();
                } catch (error) {
                    console.log("Error");
                    $scope.result = null;
                }
            });
        }
    };

    $scope.setDefault = function(){
        $scope.result = null;
    };

    $scope.swap = function (valid) {
        var to_currency = $scope.ToCurrency;
        var from_currency = $scope.FromCurrency;
        $scope.FromCurrency = to_currency;
        $scope.ToCurrency = from_currency;
        $scope.convert(valid);
    };

    $scope.addHistory = function () {
        var historyData = {
            fromCurrency: $scope.FromCurrency,
            toCurrency: $scope.ToCurrency,
            timestamp:  $filter('date')($scope.timestamp, 'MMMM dd, yyyy'),
            fromValue : $scope.amount,
            toValue :  $scope.result,
        };
        currencyConverterService.ConversionHistory(historyData).then(function (result) {
        })
    };

    $scope.getHistoryList = function () {
        currencyConverterService.geHistoryList().then(function (result) {
            $scope.historyList = result.data;
        });
    };

}]);