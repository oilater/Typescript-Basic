type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// 함수 타입 표현식은 여러 개의 함수가 동일한 타입을 갖는 경우 요긴하게 사용됨

// const add = (a: number, b: number) => a + b;
// const sub = (a: number, b: number) => a - b;
// const multiply = (a: number, b: number) => a * b;
// const divide = (a: number, b: number) => a / b;

type Operation = (a: number, b: number) => number;

// const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 이렇게 합쳐서 사용해도 문제는 없음
const add2: (a: number, b: number) => number = (a, b) => a + b;

// 호출 시그니처
// 자바스크립트에서는 함수도 객체이기 때문에, 객체를 정의하듯 함수의 타입을 별도로 정의 가능
type Operation2 = {
    (a: number, b: number): number,
}

const sub2: Operation2 = (a, b) => a - b; // Ok
const sub3: Operation = (a, b) => a - b; // Ok

// 호출 시그니쳐 아래에 프로퍼티를 추가 정의하는 것도 가능합니다. 
// 이렇게 할 경우 함수이자 일반 객체를 의미하는 타입으로 정의되며 이를 하이브리드 타입이라고 부른다.

type Operation3 = {
    (a: number, b: number): number,
    name: string
}   

const sub4: Operation3 = (a, b) => a - b;
sub4.name; // Ok
