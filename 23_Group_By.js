Array.prototype.groupBy = function(fn) {
    const output = {};
    for(const obj of this){
        const key = fn(obj);
        if(!output.hasOwnProperty(key)){
            output[key] = [];
        }
        output[key].push(obj);
    }
     return output ;
};
