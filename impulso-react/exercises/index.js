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


const person1 = {
    name: 'Daniel Avzaradel'
}

const animal1 = {
    name: 'Dog'
}

function getName() {
    console.log('name is: ', this.name); 
}

getName.call(person1)
getName.call(animal1)


// atividade 1 - JavaScript

function avgGrade(students, avg) {
    let approved = []
    
    for(let i=0; i < students.length; i++) {
        const {firstName, lastName, grade} = students[i];

        if(grade >= avg) {
            approved.push(firstName + ' ' + grade.toFixed(1))
        }
    }
    console.log(approved);
    return approved
}

let studs = [
    {
        firstName: 'Daniel',
        lastName: 'Avzaradel',
        grade: 9.2
    },
    {
        firstName: 'David',
        lastName: 'Avzaradel',
        grade: 8.6
    },
    {
        firstName: 'Aaban',
        lastName: 'Vasconcelos',
        grade: 10
    },
    {
        firstName: 'Gabriel',
        lastName: 'Bemerguy',
        grade: 4.6
    }
]

avgGrade(studs, 7)