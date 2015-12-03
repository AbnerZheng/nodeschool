'use strict'

let fs = require('fs');

function run(generator) {
    var it = generator(go);

    function go(err, result){
        try {
            if(err){
                throw err;
            }else{
                it.next(result);
            }
        } catch (e) {
            it.next([null])
        }
    }

    go();
}

run( function *(done) {
    let dirFiles = yield fs.readdir('NoNo', done);
    var firstFile = dirFiles[0];

    console.log(firstFile);
} );
