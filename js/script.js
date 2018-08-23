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
        var $div = $('<div>').addClass('countryCard');
        var $name = $('<p>').addClass('countryName');
        var $capital = $('<p>').addClass('countryCapital');
        var $region = $('<p>').addClass('countryRegion');
        var $population = $('<p>').addClass('countryPopulation');
        var $area = $('<p>').addClass('countryArea');

        $countriesList.empty();

        resp.forEach(function(item) {
            $region.text(item.region).appendTo($div);
            $name.text(item.name).appendTo($div);
            $capital.text(item.capital).appendTo($div);
            $population.text(item.population).appendTo($div);
            $area.text(item.area + ' m^2').appendTo($div);
            $div.appendTo($countriesList);

        });
    };

    $('#search').click(searchCountries);
});
