// 1. Add .click() event handlers for each of the boxes:

let score = 0;

$('#a10').click(addTen);
function addTen() {
    score = score + 10;
    $('#out').html(score);
}
$('#a20').click(addTwenty);
function addTwenty() {
    score = score + 20;
    $('#out').html(score);

}
$('#a30').click(addThirty);
function addThirty() {
    score = score + 30;
    $('#out').html(score);

}

$('#red').click(red);
function red() {
$('#out').css('background', 'red');
}

$('#out').click(out);
function out(){
    total = 0;
    $('#out').css('background', 'white');
    $('#out').html(total);
}



$('#blue').click(blue);
function blue() {
$('#out').css('background', 'blue');
}

$('#n10').click(subtractTen);
function subtractTen() {
    score = score - 10;
    $('#out').html(score);
}
$('#n20').click(subtractTwenty);
function subtractTwenty() {
score = score - 20;
$('#out').html(score);

}
$('#n30').click(subtractThirty);
function subtractThirty() {
    score = score - 30;
$('#out').html(score);
}



// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, let count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - .html()
// - .css()
