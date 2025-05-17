// 서로소 유니온 타입은 교집합이 없는 타입들 즉 서로소 관계에 있는 타입들을 모아 만든 유니온 타입을 말 합니다.

// type Admin = {
//     name: string;
//     kickCount: number;
// };

// type Member = {
//     name: string;
//     point: number;
// };

// type Guest = {
//     name: string;
//     visitCount: number;
// };

// type User = Admin | Member | Guest;

// function login(user: User) {
//     if ("kickCount" in user) {
//         // Admin
//         console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
//     } else if ("point" in user) {
//         // Member
//         console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
//     } else {
//         // Guest
//         console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
//     }
// }

// 이렇게 코드를 작성하면 조건식만 보고 어떤 타입으로 좁혀지는지 바로 파악하기가 좀 어렵습니다. 
// 결과적으로 직관적이지 못한 코드입니다.


type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// function login(user: User) {
//   if (user.tag === "ADMIN") {
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
//   } else if (user.tag === "MEMBER") {
//     console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
//   } else {
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
//   }
// }

function login(user: User) {
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
            break;
        }
        case "MEMBER": {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
            break;
        }
        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
            break;
        }
    }
}