class Employee {
    name; // 생성자에 타입 설정하면 필드 선언 시 타입 또는 초기값 생략 가능
    age = 123; // 초기값 지정하면 타입 선언 생략 가능
    position?: string = '';

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log("일함");
    }
}

// 클래스는 타입으로도 사용 가능

const employeeC: Employee = {
    name: "",
    age: 0,
    work() { },
};

// 상속
class ExecutiveOfficer extends Employee {
    officeNumber: number;

    constructor(
        name: string,
        age: number,
        position: string,
        officeNumber: number
    ) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}