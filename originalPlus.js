var Combinator = require('./combinator');
var menu = require('./menu');

function run() {
    var threeCombos = new Combinator({
            min: menu.threeItems.min,
            max: menu.threeItems.max
        })
        .combine([], menu.threeItems.values)
        .combinations;

    var sixCombos = new Combinator({
            min: menu.sixItems.min,
            max: menu.sixItems.max
        })
        .combine([], menu.sixItems.values)
        .combinations;

    var twelveCombos = new Combinator({
            min: menu.twelveItems.min,
            max: menu.twelveItems.max
        })
        .combine([], menu.twelveItems.values)
        .combinations;

    console.log('threeCombos.length =', threeCombos.length, threeCombos);
    console.log('sixCombos.length =', sixCombos.length, sixCombos);
    console.log('twelveCombos.length =', twelveCombos.length);
}

run();
