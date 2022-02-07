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

type Unit = string | number;

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
let course: Unit = "React- the course";
course = 12345;

// Function & types

function add(a: number, b:number) {
    return a + b;
}

function printOut(value: any) {
    console.log(value);
}

// Generic

function insertAtBeginning<T>(array: T[], value:T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1);