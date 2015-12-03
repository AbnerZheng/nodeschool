'use strict'

let fs = require('fs')
let path = process.argv[2]

let buf = fs.readFileSync(path)
let lines = buf.toString().split('\n')

console.log(lines.length -1 );
