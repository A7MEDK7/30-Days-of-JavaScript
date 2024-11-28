var chunk = function(arr, size) {
    let output = [];
    while(arr.length !== 0){
        output.push(arr.slice(0,size));  // Slice A Part Of arr And Put It In outPut
        for(let i=0; i<size; i++){
            arr.shift();   // Remove The Elements Which Has Been Sliced
        }
    }
    return output;
};
