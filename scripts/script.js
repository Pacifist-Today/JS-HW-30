"use strict";

function bindVar (funcArg, ctx, arrOfArg) {
    return function () {
        funcArg.apply(ctx, arrOfArg)
    }
}

let obj = {
    name: "John",
    lastName: "Redcliffe",
}

function example (a, b, c) {
    console.log(a, b, c)
    console.log(this)
}

let newObj = bindVar(example, obj, ["Lord of the ring", "Star wars", "Harry Potter"])
newObj()
// console.log(newObj)