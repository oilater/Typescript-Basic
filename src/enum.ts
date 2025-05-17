// enum은 Javascript에는 없고, Typescript에서만 사용할 수 있는 특별한 타입
// 숫자를 할당하지 않으면, 순서대로 자동으로 0, 1, 2 할당 (숫자형 enum)
// 첫번째 숫자만 10으로 지정하면, 10, 11, 12 할당
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

// 문자도 할당 가능 (문자열 enum)
enum Langauge {
    korean = 'ko',
    english = 'en',
}

// enum의 멤버들을 값으로 활용
const user1 = {
    name: '김성현',
    role: Role.ADMIN, // 관리자
}

const user2 = {
    name: "홍길동",
    role: Role.USER, // 회원
};

const user3 = {
    name: "아무개",
    role: Role.GUEST, // 게스트
};

// enum은 컴파일될 때 다른 타입들 처럼 사라지지 않고 자바스크립트 객체로 변환됩니다. 
// 타입스크립트는 enum을 자바스크립트에서 쓸 수 있도록 즉시실행함수(IIFE) 방식으로 변환해 줍니다.

/**
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {})); // 값이 없다면 빈 객체 {}로 초기화

🔍 Role[Role["GUEST"] = 2] = "GUEST";
이 한 줄은 두 가지 역할을 동시에 수행합니다:

Role["GUEST"] = 2 → "GUEST"라는 키에 2를 할당
Role[2] = "GUEST" → 2라는 키에 "GUEST"를 할당

즉, 한 줄로 양방향 매핑을 만든 것

Role 객체는 다음과 같이 초기화됨
{
  0: "ADMIN",
  1: "USER",
  2: "GUEST",
  ADMIN: 0,
  USER: 1,
  GUEST: 2
}
  
console.log(Role.ADMIN); // 0
console.log(Role[0]);    // "ADMIN"
 */




