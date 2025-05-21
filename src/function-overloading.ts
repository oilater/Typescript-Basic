// 함수 오버로딩

// 먼저 오버로드 시그니처 만들기

function func(a: number): void;
function func(a: number, b: number, c: number): void;

function func(a: number, b?: number, c?: number): void {
    if (typeof b === 'number' && typeof c === 'number') {
        console.log(a + b + c);
    } else {
        console.log(a + 10);
    }
}

func(1);
// func(1, 2); // Error
func(1, 2, 3);
