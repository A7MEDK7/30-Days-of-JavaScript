var reduce = function(nums, fn, init) {
    return nums.reduce(fn, init);
};


// Example 1
nums1 = [1,2,3,4]
fn1 = function sum(accum, curr) { return accum + curr; }
init1 = 0
console.log(reduce(nums1, fn1, init1));

// Example 1
nums2 = [1,2,3,4]
fn2 = function sum(accum, curr) { return accum + curr * curr; }
init2 = 100
console.log(reduce(nums2, fn2, init2));

// Example 3
nums3 = []
fn3 = function sum(accum, curr) { return 0; }
init3 = 25
console.log(reduce(nums3, fn3, init3));
