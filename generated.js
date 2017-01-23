var _ = require('lodash');
var menu = require('./menu');

var CombinatorGenerator = require('./Combinator-generator');

function run() {
    var iceCreamChoiceIterator = new CombinatorGenerator({
            min: menu.iceCream.min,
            max: menu.iceCream.max
        })
        .combine([], menu.iceCream.values);

    console.log(iceCreamChoiceIterator)

    //console.log(iceCreamChoices);
    for (;;) {
        var it = iceCreamChoiceIterator.next();
        if (it.done) {
            break;
        }
        console.log("choice", it.value);
    }
}

run();
