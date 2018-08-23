$(function() {
    'use strict';

    var url = 'https://restcountries.eu/rest/v1/name/';
    var $countriesList = $('#countries');

    function searchCountries(event) {
        var $countryName = $('#countryName').val();

        event.preventDefault();

        $.ajax({
            url: url + $countryName,
            method: 'GET',
            success: showCountriesList
        });
    };

    function showCountriesList(resp) {
        var $li;
        var $name;
        var $capital;
        var $region;
        var $population;
        var $area;

        $countriesList.empty();

        resp.forEach(function(item) {
            $li = $('<li>').addClass('country-card');
            $region = $('<p>').addClass('country-region').text(item.region).appendTo($li);
            $name = $('<p>').addClass('country-capital').text('Country: ' + item.name).appendTo($li);
            $capital = $('<p>').addClass('country-name').text('Capital: ' + item.capital).appendTo($li);
            $population = $('<p>').addClass('country-population').text('Populatioin: ' + item.population).appendTo($li);
            $area = $('<p>').addClass('country-area').text('Area: ' + item.area + ' m^2').appendTo($li);
            $li.appendTo($countriesList);
        });
    };

    $('#search').click(searchCountries);
});
