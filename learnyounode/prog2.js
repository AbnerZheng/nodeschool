var nums = process.argv.slice(2);
var sum = nums.reduce(function(prev,cur){
    return prev + Number(cur);
},0)

console.log(sum);
