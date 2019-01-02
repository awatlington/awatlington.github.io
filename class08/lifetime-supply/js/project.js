


document.querySelector('#click-me').onclick = drinksTotal;

function drinksTotal() {

    var age = document.querySelector('#age').value;
    var maxAge = document.querySelector('#max-age').value;
    var drink = document.querySelector('#item').value;
    var drinksDay = document.querySelector('#num-per-day').value;

    console.log(maxAge);

    var solution = (maxAge - age) * drinksDay * 365;
    console.log(solution);

    document.querySelector('#solution').innerHTML = solution;
    document.querySelector('#drink').innerHTML = drink;

}