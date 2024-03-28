"use strict";
console.log('Hello, Upek');
// Arrays
let names = ['Upek', 'Senuri', 'Ayanaji', 'Oshan'];
let ages = [20, 18, 20, 19];
names.push('Prabuddhi');
ages.push(24);
// Type inference with arrays
let fruits = ['Apple', 'Banana', 'Orange', 'Manago'];
fruits.push('peaches');
const f = fruits[3];
let things = [1, true, 'Hello'];
const t = things[0];
// Object Literals
let user = {
    firstName: 'Upek',
    age: 20,
    uid: 1234
};
user.firstName = 'Ayanaji';
user.uid = 5678;
// Type inference with object literals
let person = {
    name: 'Senuri',
    score: 80
};
person.name = 'Ayanaji';
person.score = 90;
const score = person.score;
// Functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(10, 20);
subtractTwoNumbers(15, 7);
function addAllNumber(items) {
    const total = items.reduce((a, b) => a + b, 0);
    console.log(total);
    // return total
}
addAllNumber([10, 20, 30, 40]);
// Return type inference
function formatGreating(name, greeting) {
    return `${greeting}, ${name}`;
    // return 10
}
const result = formatGreating('Upek', 'Hello');
// Any Type
let age;
let title;
age = 20;
age = 'Twenty';
age = true;
title = 20;
title = {
    hello: 'World'
};
let anyThings = ['hello', true, 20, null];
anyThings.push({ id: 123 });
// Functions & Any
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('Hola');
const resultTwo = addTogether(20);
// useful when migrating from js to ts
// because using any won't cause errors initially
// tuples - fixed length arrays
let tupPerson = ['Upek', 20, true];
// tuples examples
let hsla;
hsla = [200, '50%', '50%', 1];
let xy;
xy = [10, 20];
function useCoords() {
    // get user coords
    const lat = 10;
    const long = 20;
    return [lat, long];
}
const [lat, long] = useCoords();
console.log(lat, long);
// named tuples 
let tupUser;
tupUser = ['Upek', 20];
console.log(tupUser[0]);
const authorOne = { name: 'Upek', avatar: './img/upek.jpg' };
const newPost = {
    title: 'Very 1st Post',
    body: 'This is something interesting',
    tags: ['new', 'tech'],
    createdAt: new Date(),
    author: authorOne
};
console.log('newPost:');
console.log(newPost);
// Interfaces as function arguments types
function createPost(post) {
    console.log(`Created Post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// Interfaces with arrays
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = { name: 'Upek', score: 80 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}`);
}
formatUser(userOne);
formatUser({ name: 'Oshan', score: 75 });
// Union Types
let someId;
someId = 10;
someId = 'someId';
let email = null;
email = 'upek@wemixt.com';
email = null;
let anotherId;
anotherId = 'abc';
anotherId = 123;
// Union Type Pitfall
function swapIdType(id) {
    // can only use props & methods common to
    // both number & string stypes
    // parseInt(id) --> not allowed
    // using TypeGuard
    if (typeof id === 'string') {
        // can use string methods & properties
        return parseInt(id);
    }
    else {
        // can use number methods & properties
        return id.toString();
    }
}
const idOne = swapIdType(5);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
const tgUser = { type: 'user', username: 'upek', email: 'upek@wemixt.com', id: '123' };
const tgPerson = { type: 'person', firstname: 'Upek', age: 20, id: 123 };
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
logDetails(tgUser);
logDetails(tgPerson);
