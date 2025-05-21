
class Employee {
    // 필드
    public name: string;
    protected age: number;
    position: string;  // 자동으로 public

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일함");
    }
}

const employee = new Employee("이정환", 27, "devloper");

employee.name = "홍길동";
// employee.age = 30; // protected라 오류
employee.position = "디자이너";


class ExecutiveOfficer extends Employee {
    // 메서드
    func() {
        this.name;
        this.age;
    }
}

class Employee2 {
    // 생성자
    constructor(
        private name: string,
        protected age: number,
        public position: string
    ) {
        // this.name = name; // 접근제어자가 설정된 매개변수들은 내부 코드가 자동 수행된다
        // this.age = age;
        // this.position = position;
    }

    // 메서드
    private work() {
        console.log(`${this.name} 일함`);
    }
}