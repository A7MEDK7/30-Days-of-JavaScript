function memoize(fn) {
    let memory = {};
    return function(...args) {
        const key = JSON.stringify(args); // JSON.stringify(object) ==> Convert Object To String
        if (key in memory) {
            return memory[key];
        }
        memory[key] = fn(...args);
        return memory[key];
    }
}
