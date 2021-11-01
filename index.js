function findMax() {
    let max = -Infinity;
    
    for (let i=0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
            console.log(max);
            return max;
}

findMax(1, 9, 13, 2, 4, 23, 11, 950, 5, 93)

const person = {
    firstName: 'Daniel',
    lastName: 'Avzaradel',
    id: 1,
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    },
    getId: function() {
        return this.id
    }
}

console.log(person.fullName());