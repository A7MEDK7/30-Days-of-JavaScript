var expect = function(val) {
    return {
        toBe : function(x) {
            if (x === val) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe : function(y) {
            if (y !== val) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
};
