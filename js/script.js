$(function() {
    'use strict';

    var url = 'https://restcountries.eu/rest/v1/name/';

    function searchCountries(event) {
        var countryName = $('#countryName').val();

        event.preventDefault();

        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    };

    function showCountriesList(resp) {
        var $card;
        var $list = $('<div>');
        var $countriesList = $('#countries');

        $countriesList.empty();

        resp.forEach(function(item) {
            $card = $('<div>').addClass('country-card');
            $('<p>').addClass('country-region').text(item.region).appendTo($card);
            $('<p>').addClass('country-capital').text('Country: ' + item.name).appendTo($card);
            $('<p>').addClass('country-name').text('Capital: ' + item.capital).appendTo($card);
            $('<p>').addClass('country-population').text('Populatioin: ' + item.population).appendTo($card);
            $('<p>').addClass('country-area').text('Area: ' + item.area + ' m^2').appendTo($card);
            $card.appendTo($list);
        });

        $list.appendTo($countriesList);
    };

    $('#search').click(searchCountries);
});
