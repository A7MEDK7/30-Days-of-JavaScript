var createCounter = function(init) {
    let counter = init;
    return {
        increment : function() {
            return counter += 1;
        },
        decrement : function() {
            return counter -= 1;
        },
        reset : function() {
            return counter = init;
        }
    }
};
