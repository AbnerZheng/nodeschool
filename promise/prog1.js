'use strict'

var a = new Promise(function(resolve, reject){
    setTimeout(resolve, 300, 'RESOLVED!');
}).then(function(data){
    console.log(data);
});
