class Calculator {
    
    constructor(value) {
        this.number = value;
        this.check = true; // Check Zero Devision
    }
    
    add(value){
        this.number += value;
        return this;
    }
    
    subtract(value){
        this.number -= value;
        return this;
    }
    
    multiply(value) {
        this.number *= value;
        return this;
    }
    
    divide(value) {
        if (value === 0) {
            this.check = false;
            return this;
        } else {
            this.number /= value;
            return this;
        }
    }
    
    power(value) {
        this.number **= value;
        return this;
    }
    
    getResult() { 
        if (this.check === false) {
            return "Division by zero is not allowed";
        } else {
            return this.number;
        }
    }
}
