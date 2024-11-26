var compose = function(functions) {
    
    return function(x) {
        for(const fn of functions.reverse()) {
            x = fn(x);
        }
        return x;
    }
};

//Example 1
let fn1 = compose([x => x + 1, x => x * x, x => 2 * x]); 
console.log(fn1(4));

//Example 2
let fn2 = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(fn2(1));

//Example 3
let fn3 = compose([]);
console.log(fn3(42));
