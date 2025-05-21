interface Animal {
    name: string;
    age: number;
}

// interface Dog {
//     name: string;
//     age: number;
//     isBark: boolean;
// }

// interface Cat {
//     name: string;
//     age: number;
//     isScratch: boolean;
// }

// interface Chicken {
//     name: string;
//     age: number;
//     isFly: boolean;
// }

// 중복 코드를 줄여보자
// 서브타입이 된다는 조건 내에서 속성의 타입 재정의도 가능
interface Dog extends Animal {
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

const dog: Dog = {
    name: "돌돌이",
    age: 29,
    isBark: true,
};


// 타입 별칭을 확장할 수도 있음, 여러개의 인터페이스 확장 또한 가능
type Animal2 = {
    name: string;
    color: string;
};

// interface Dog extends Animal2, Cat {
//     breed: string;
// }