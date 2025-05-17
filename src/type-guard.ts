// instanceof 타입가드
// nstanceof를 이용하면 내장 클래스 타입을 보장할 수 있는 타입가드를 만들 수 있습니다.
type Person = {
    name: string,
    age: number,
}

// in 타입 가드
// 우리가 직접 만든 타입과 함께 사용하려면 다음과 같이 in 연산자를 이용해야 합니다.
function func(value: string | Date | Person) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());

    } else if (value instanceof Date) {
        console.log(value.getTime());

    } else if (value && "age" in value) {
        console.log(value.age);
    }
}