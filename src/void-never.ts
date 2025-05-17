// void
// void 타입은 아무런 값도 없음을 의미하는 타입입니다.
// 보통은 다음과 같이 아무런 값도 반환하지 않는 함수의 반환값 타입을 정의할 때 사용합니다.

function func2(): void {
    console.log('hello');
}

// 물론 다음과 같이 변수의 타입으로도 당연히 void 타입을 지정할 수 있습니다. 
// 그러나 void 타입의 변수에는 undefiend 이외의 다른 타입의 값은 담을 수 없습니다. 
// 그 이유는 void 타입이 undefiend 타입을 포함하는 타입이기 때문입니다.

let a: void;
a = undefined;

// 그런데 만약 이때 tsconfig.json에 엄격한 null 검사(strictNullChecks) 옵션을 해제(False)로 설정하면 
// 특별히 이때에는 void 타입의 변수에 null 값도 담을 수 있게 됩니다.

// never 타입
// never 타입은 불가능을 의미하는 타입입니다.
// 보통 다음과 같이 함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용됩니다.

// 그냥 빈 함수로 작성하면, A function returning 'never' cannot have a reachable end point.
function func3(): never {
    while (true) { }
}

// 함수 func3는 무한 루프를 돌기 때문에 아무런 값도 반환할 수 없습니다. 
// 엄밀히 말하면 이 함수는 영원히 종료될 수 없기 때문에 뭔가를 반환한다는 것 자체가 '불가능' 합니다.

// 무한 루프 외에도 다음과 같이 의도적으로 오류를 발생시키는 함수도 never 타입으로 반환값 타입을 정의할 수 있습니다.

function func4(): never {
    throw new Error();
}


// 변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없게 됩니다. 
let abc: never;
// abc = 1; // Error
// abc = 'abc'; // Error
// abc = true; // Error
// abc = undefined; // Error
