var isEmpty = function(obj) {
    if(Object.keys(obj).length === 0){
        return true  // Will Return True If Length Of Keys Equal Zero ,So There Is No Key, Then The Object Is Empty
    }
    return false   // Will Return False If Length Of Keys Equal Al Least One ,So There Is a Key, Then The Object Is Not Empty
};
