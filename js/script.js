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
        console.log(resp);

        resp.forEach(function(item) {
            $li = $('<li>').addClass('countryCard');
            $region = $('<p>').addClass('countryName').text(item.region).appendTo($li);
            $name = $('<p>').addClass('countryCapital').text(item.name).appendTo($li);
            $capital = $('<p>').addClass('countryRegion').text(item.capital).appendTo($li);
            $population = $('<p>').addClass('countryPopulation').text(item.population).appendTo($li);
            $area = $('<p>').addClass('countryArea').text(item.area + 'm^2').appendTo($li);
            $li.appendTo($countriesList);
        });
    };

    $('#search').click(searchCountries);
});
