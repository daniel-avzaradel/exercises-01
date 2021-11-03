export function showAge(name, age) {
    console.log(`${name} is ${age} years old.`);
}

function showCity(name, city) {
    console.log(`${name} lives in ${city}`);
}

function showHobby(name, hobby) {
    console.log(`${name}'s hobby is ${hobby}`);
}

export {
    showCity,
    showHobby
}