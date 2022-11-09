/**
* Author: Jaq Moore and Mikayla Jordan
* Created: 11.7.2022
*
*(c) Copyright Jaq and Mikayla
**/


$('#challenges').append('<button id="buttonChalEl">click.me.</button>');

$('#problems').append('<button id="buttonProbEl">CLICK HERE!</button>');

$('#results').append('<button id="buttonResEl">click.me.</button>');

$('#buttonChalEl').click(function(){
    $('#challenges').toggleClass("special");
});

$('#buttonProbEl').click(function(){
    $('#problems').toggleClass("specialer");
});

$('#buttonResEl').click(function(){
    $('#results').toggleClass("specialist");
});
