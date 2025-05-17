// Type assertion

type Person = {
    name: string,
    age: number,
}

// let person: Person = {}; // Error
// person.name = '성현';
// person.age = 29;

let person: Person = {} as Person;
person.name = '성현';
person.age = 29;

// 이렇듯  값 as 타입 으로 특정 값을 원하는 타입으로 단언할 수 있습니다. 이를 타입 단언 이라고 부릅니다.
// 타입 단언은 다음과 같이 초과 프로퍼티 검사를 피할때에도 요긴하게 사용할 수 있습니다.

type Dog = {
    name: string,
    color: string,
}

let dog1: Dog = {
    name: '왈왈이',
    color: '갈색',
    breed: '삽살개',
} as Dog;

// 타입 단언에도 조건이 있습니다.
// 값 as 타입 형식의 단언식을 A as B로 표현했을 때 아래의 두가지 조건중 한가지를 반드시 만족해야 합니다.
// - A가 B의 슈퍼타입이다
// - A가 B의 서브타입이다

let num1 = 10 as unknown; // Ok
let num2 = 10 as any; // Ok
let num3 = 10 as never; // Ok
// let a = 10 as string; // Error

// 다중 단언도 가능하지만, 웬만하면 사용하지 말기
let num4 = 10 as unknown as string;

// const 단언
let num5 = 10 as const; // 10 Literal Number Type

let cat = {
    name: '야옹',
    color: 'white',
} as const;

// cat.name = 'adf'; // Error - readonly property

type Post = {
    title: string,
    author?: string,
};

let post: Post = {
    title: '게시글',
}

const len: number | undefined = post.author?.length;
const len2: number = post.author!.length;