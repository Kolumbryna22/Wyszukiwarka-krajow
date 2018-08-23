$(function() {
    'use strict';

    var url = 'https://restcountries.eu/rest/v1/name/';
    var $countriesList = $('#countries');

    function searchCountries() {
        var $countryName = $('#countryName').val();

        $.ajax({
            url: url + $countryName,
            method: 'GET',
            success: showCountriesList
        });
    };

    function showCountriesList(resp) {
        $countriesList.empty();

        resp.forEach(function(item) {
            $('<li>').text(item.name).appendTo($countriesList);
        });
    };

    $('#search').click(searchCountries);
});
