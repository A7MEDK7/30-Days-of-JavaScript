class EventEmitter {
   eventMap = {};
    subscribe(eventName, callback) {
        if(!this.eventMap.hasOwnProperty(eventName)){
            this.eventMap[eventName] = new Set();
        }
        this.eventMap[eventName].add(callback);

        return {
            unsubscribe: () => {
                this.eventMap[eventName].delete(callback);
            }
        };
    }

    emit(eventName, args = []) {
        const output = [];
        (this.eventMap[eventName] ?? [])
            .forEach((callback) => output.push(callback(...args)));
        return output;
    }
}
