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
        var $name = $('<p>').addClass('countryName');
        var $capital = $('<p>').addClass('countryCapital');
        var $region = $('<p>').addClass('countryRegion');
        var $population = $('<p>').addClass('countryPopulation');
        var $area = $('<p>').addClass('countryArea');

        $countriesList.empty();
        console.log(resp);

        resp.forEach(function(item) {
            $li = $('<li>').addClass('countryCard');
            $region.text(item.region).appendTo($li);
            $name.text(item.name).appendTo($li);
            $capital.text(item.capital).appendTo($li);
            $population.text(item.population).appendTo($li);
            $area.text(item.area + 'm^2').appendTo($li);
            $li.appendTo($countriesList);
        });
    };

    $('#search').click(searchCountries);
});
