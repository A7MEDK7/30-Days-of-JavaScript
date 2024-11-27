var once = function(fn) {
    let call = false;

    return function(...args){
        if(call){
            return undefined
        }
        call = true;
        return fn(...args)
    }
};
