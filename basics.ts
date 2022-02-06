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

type Person = {
    name: string,
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32 
}

let people: Person[];

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

// union type
let course: string | number  = 'React- the course';
course = 12345;