interface Person {
    readonly name: string,
    age?: number,
    // sayHi: () => void,
    // sayHi(): void,
    // sayHi: (a: number) => void; // 함수 타입 표현식은 오버로딩 안됨
    // sayHi(a: number): void, // 호출 시그니처는 오버로딩 가능
    // sayHi(a: number, b: number): void, // 호출 시그니처는 오버로딩 가능
}

// const person: Person = {
//     name: '성현',
//     // age: 29,
// };

// person.name = '리액트'; // Error

// 인터페이스 또한 함수이자 일반 객체인 하이브리드 타입 정의 가능
interface Func2 {
    (a: number): string,
    b: boolean,
}

const func: Func2 = (a) => 'hello';
func.b = true;

// 주의
type Type1 = number | string | Person;
type Type2 = number & string & Person;

// interface Person2 {
//     name: string,
//     age: number,
// } | number; // Error

// const person3: Person & string = {
//     name: '성현',
//     age: 29,
// }