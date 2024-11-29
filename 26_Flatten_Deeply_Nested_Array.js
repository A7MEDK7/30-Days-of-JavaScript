var flat = function (arr, n) {
    let output = [];
    function cheaker(arr,depth = 0) {
        for(const value of arr) {
            if (typeof value === "object" && depth < n){
                cheaker(value,depth+1);
            } else {
                output.push(value);
            }
        }
        return output;
    } 
    return cheaker(arr,0);
};
