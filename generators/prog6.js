'use strict'

function askFoo() {
    return new Promise(function(resolve, reject){
        resolve('foo');
    });
}

function run(generator) {
    var it = generator();
    it.next();
}

run(function* (){
    var foo = yield askFoo();
    console.log(foo);
})
