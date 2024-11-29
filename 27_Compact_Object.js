var compactObject = function (obj) {
    if (!obj || typeof obj !== 'object') {  
        return obj;  // If either condition is true, the function returns obj as is, since there's nothing to compact.
    }
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);   // If it is an array, the function first filters out all falsy values using filter(Boolean), which keeps only truthy values.
    }
        if (value) {
            acc[key] = compactObject(value);
        }
        return acc;
    }, {});
};
