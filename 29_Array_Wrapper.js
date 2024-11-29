class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    valueOf() {
        let total = 0;
        if (Array.isArray(this.nums)) {
            for (const num of this.nums) {
                total += num;
            }
        } else {
            total += this.nums;
        }
        return total;
    }

    toString() {
        return `[${this.nums}]`;
    }
}
