"use strict";
// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// Primitves
var age;
age = 12;
var userName;
userName = 'beata';
var isInstructor;
isInstructor = true;
// More complex
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
var people;
people = [
    {
        name: 'bob',
        age: 56
    },
    {
        name: 'beata',
        age: 55
    }
];
// type inference
// union type
var course = "React- the course";
course = 12345;
// Function & types
function add(a, b) {
    return a + b;
}
function printOut(value) {
    console.log(value);
}
// Generic
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[]
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('beata', 'jasin', 90, ['Angular']);
student.enroll('react');
console.log(student);
student.listCourses();
var max;
max = {
    firstName: 'beata',
    age: 100,
    greet: function () {
        console.log('hello');
    }
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    return Instructor;
}());
