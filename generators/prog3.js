'use strict'

function *flat(arr) {
    if(typeof arr === 'object' && arr.constructor === Array){
        for(var a of arr){
            yield *flat(a);
        }
    }else{
        yield arr;
    }
}

var A = [1,[2,[3,4],5],6];
for(var f of flat(A)){
    console.log(f)
}
