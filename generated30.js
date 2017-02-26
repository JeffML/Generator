var menu = require('./menu');
var Combinator = require('./Combinator-generator');

function run() {
    var thirtyCombos = new Combinator({
            min: menu.thirtyItems.min,
            max: menu.thirtyItems.max
        })
        .combine([], menu.thirtyItems.values);

    var i = 0;
    for (;;) {
        var it = thirtyCombos.next();
        if (it.done) {
            console.log("done!")
            break;
        }
        if ((++i % 1000000) === 0) {
            console.log(`iteration: ${i}; ${it.value}`);
        }
    }
}

run();
