var filter = function(arr,fn) {
    return arr.filter(fn)
};

// Example 1
arr1 = [0,10,20,30];  
fn1 = function greaterThan10(n) { return n > 10; };
console.log(filter(arr1,fn1));

// Example 2
arr2 = [1,2,3];  
fn2 = function firstIndex(n, i) { return i === 0; };
console.log(filter(arr2,fn2));

// Example 3
arr3 = [-2,-1,0,1,2];  
fn3 = function plusOne(n) { return n + 1 };
console.log(filter(arr3,fn3));
