// 타입 추론 가능한 상황들

// 1. 변수 선언
let a = 10;
let b = 'hello';
let c = {
    id: 1,
    name: '김성현',
    profile: {
        nickname: '하이'
    },
    urls: 'https://www.github.com/oilater',
};

// 복잡한 객체 타입도 문제 없이 잘 추론합니다.

// 2. 구조 분해 할당
// 객체와 배열을 구조 분해 할당하는 상황에서도 타입이 잘 추론됩니다.
let { id, name, profile } = c;
let [one, two, three] = [1, 'hello', true];

// 3. 함수의 반환값
// 함수 반환값의 타입은 return 문을 기준으로 잘 추론됩니다.

function func() {
    return 'hello ts';
}

// 4. 기본값이 잘 설정된 매개변수
function func2(message = 'hello') {
    return 'hello';
}

// 주의해야 할 상황들

// 1. 암시적으로 any 타입으로 추론
// 변수를 선언할때 초기값을 생략하면 암시적인 any 타입으로 추론됩니다. 
// 참고로 이때 매개변수의 타입이 암시적 any로 추론될 때와 달리 
// 일반 변수의 타입이 암시적 any 타입으로 추론되는 상황은 오류로 판단하지 않습니다.

let d; // 암시적인 any 타입으로 추론

// 이 변수에 값을 할당하면 그 다음 라인부터 any 타입이 해당 값의 타입으로 변화합니다. => any 타입의 진화
d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();
// d.toFixed(); // Error

// 2. const 상수의 추론
// const로 선언된 상수도 타입 추론이 진행됩니다. 그러나 let으로 선언한 변수와는 다른 방식으로 추론됩니다.
// 상수는 초기화 때 설정한 값을 변경할 수 없기 때문에 특별히 가장 좁은 타입으로 추론됩니다. 

const num = 10; // 10 Number Literal 타입으로 추론
const str = 'Hello' // Hello String Literal 타입으로 추론



// 최적 공통 타입(Best Common Type)
let arr = [1, 'hello']; // (string | number)[] 타입으로 추론