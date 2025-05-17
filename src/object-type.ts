// 기본 타입의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // Ok
// num2 = num1; // Error

type Animal = {
    name: string,
    color: string,
};

type Dog = {
    name: string,
    color: string,
    breed: string,
};

let animal: Animal = {
    name: "기린",
    color: 'yellow',
}

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
}

animal = dog // Ok
// dog = animal // Error

type Book = {
    name: string,
    price: number,
};

type ProgrammingBook = {
    name: string,
    price: number,
    skill: string,
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한 입 크기로 잘라먹는 타입스크립트',
    price: 3000,
    skill: 'react.js',
};

book = programmingBook; // Ok
// programmingBook = book; // Error

// 초과 프로퍼티 오류
// let book2: Book = {
//     name: '한 입 크기로 잘라먹는 타입스크립트',
//     price: 3000,
//     skill: 'react.js',
// };

let book3: Book = programmingBook; // 미리 만들어 둔 변수로는 가능

function func(book: Book) {

}

// 초과 프로퍼티 검사는 함수의 매개변수에도 동일하게 발생합니다.

func({
    name: 'book',
    price: 3000,
    // skill: 'skill', // Error
});

// 이때에도 역시 검사를 피하고 싶다면 다음과 같이 변수에 미리 값을 담아둔 다음 변수값을 인수로 전달하면 됩니다.
func(programmingBook); // Ok