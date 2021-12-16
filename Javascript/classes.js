
class person {
    constructor(name) {
        this.name = name
    }

    sayPerson() {
        console.log(`person : hi my name is ${this.name}`)
    }
}

class student extends person {
    constructor(name, age, id) {
        super(name);
        this.age = age;
        this.id = id;
    }

    sayStudent() {
        console.log(`student : hi ${this.name} student ${this.age} age with id ${this.id}`)
    }
}


class teacher extends person {
    constructor(name, lesson) {
        super(name);
        this.lesson = lesson;
    }

    sayTeacher() {
        console.log(`teacher : hi ${this.name} with lesson ${this.lesson} `)
    }

}


const john = new person('john')
john.sayPerson()

const student1 = new student('dele ali', 24, 10327)
student1.sayStudent()

const teacher1 = new teacher('john abraham', 'math')
teacher1.sayTeacher()
