'use strict'
function *factorial(n){
    let temp=1;
    for(let i = 0; i<n; i++){
        temp *= i+1;
        yield temp;
    }
}

for(var n of factorial(5)){
    console.log(n)
}
