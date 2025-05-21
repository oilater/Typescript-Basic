// 인터페이스 선언 합치기 가능
// 타입은 합치기 안됨

interface Person {
    name: string,
}

interface Person {
    age: number,
}

// 하지만 동일한 프로퍼티 타입을 다른 타입으로 정의하면 오류 발생
// interface Person {
//     name: number,
// }

const person: Person = {
    name: 'ksh',
    age: 123,
};

