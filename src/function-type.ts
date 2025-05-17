function func(a: number, b: number): number {
    return a + b;
}

// 반환 타입 추론
function func2(a: number, b: number) {
    return a + b;
}

// 화살표 함수
const add = (a: number, b: number): number => a + b;

const add2 = (a: number, b: number) => a + b;

// 매개변수에 기본값 설정 시 타입 자동 추론
function introduce(name = '김성현') {
    console.log(`my name is ${name}`);
}

// introduce(1); // 오류

// 선택적 매개변수 : 자동으로 undefined와 union된 타입으로 추론
// 따라서 number 값으로 기대하고 사용한다면 타입 좁히기 필요
// 반드시 필수 매개변수 뒤에 배치
function introduce2(name = '김성현', tall?: number) {
    console.log(`my name is ${name}`);

    if (typeof tall === 'number') {
        console.log(`my tall is ${tall + 10}`);
    }
}

introduce2('김성현'); // Ok

// 나머지 매개변수
// function getSum(...rest: number[]) {
//     let sum = 0;
//     rest.forEach(v => sum += v);

//     return sum;
// }

// 크기 고정 시 튜플 타입 이용 가능
function getSum(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach(v => sum += v);

    return sum;
}

getSum(1, 2, 3); // Ok
// getSum(1, 2, 3, 4); // Error

