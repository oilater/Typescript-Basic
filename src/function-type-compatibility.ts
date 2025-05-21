// 함수 타입의 호환성

// 1. 반환값 타입이 호환되는가 ?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // Error

// 2. 매개변수 타입이 호환되는가 ?
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => { };
let d: D = (value) => { };

// c = d; // Error
d = c;

// 매개변수가 객체 타입일 때

type Animal = {
    name: string;
};

type Dog = {
    name: string;
    color: string;
};

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc; // ❌
dogFunc = animalFunc; // ✅

// 매개변수 수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => { };
let func2: Func2 = (a) => { };

func1 = func2; // ✅
// func2 = func1; // ❌