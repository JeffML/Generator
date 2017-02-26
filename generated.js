var menu = require('./menu');
var Combinator = require('./Combinator-generator');

function run() {
    var threeCombos = new Combinator({
            min: menu.threeItems.min,
            max: menu.threeItems.max
        })
        .combine([], menu.threeItems.values);

    for (;;) {
        var it = threeCombos.next();
        if (it.done) {
            console.log("done!")
            break;
        }
        console.log("choice", it.value);
    }
}

run();
