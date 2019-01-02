

$('#convert-to-c-button').click(function () {
    let tempInput = $('#temp').val()
    let celcius = (tempInput - 32) * 5 / 9
    $('#celcius-output').html(celcius)

    if (celcius >= 100) {
        $('body').css('background-color', 'red')
    } else if (celcius <= 0) {
        $('body').css('background-color', 'blue')
    }

})

$('#convert-to-f-button').click(function () {
    let tempInputc = $('#tempf').val()
    let fahrenheit = (tempInputc * 1.8) + 32
    $('#fahrenheit-output').html(fahrenheit)

    if (fahrenheit >= 212) {
        $('body').css('background-color', 'red')
    } else if (fahrenheit <= 32) {
        $('body').css('background-color', 'blue')
    }

})