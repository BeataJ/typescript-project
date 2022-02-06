// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitves

let age: number;

age = 12

let userName: string;

userName = 'beata';

let isInstructor: boolean;

isInstructor = true;

// More complex

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: {
    name: string,
    age: number
};

person = {
    name: 'Max',
    age: 32 
}

let people: {
    name: string,
    age: number
}[];

people = [
    {
        name: 'bob',
        age: 56
    },
    {
        name: 'beata',
        age: 55
    }
]

// type inference

let course = 'React- the course';
