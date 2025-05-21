type Dog = {
    name: string,
    isBark: boolean,
};

type Cat = {
    name: string,
    isScratch: boolean,
};

type Animal = Dog | Cat;

function warning(animal: Animal) {
    if ('isBark' in animal) {
        console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else if ('isScratch' in animal) {
        console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
}

// 하지만 in 연산자로 타입 좁히기를 하는 건 안좋음
// 프로퍼티 이름이 수정되거나 하면 타입 가드가 제대로 동작하지 않을 수 있기 때문에

// 이럴 땐 함수를 이용해 커스텀 타입 가드를 만들어 타입을 검사하자

function isDog(animal: Animal): animal is Dog { // 반환 타입은 boolean으로 해도 되지만 타입 좁히기 기능이 동작하지 않는다
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined;
}

function warning2(animal: Animal) {
    if (isDog(animal)) {
        console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else {
        console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
}
