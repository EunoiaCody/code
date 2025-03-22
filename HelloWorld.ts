// Run: tsc HelloWorld.ts
// Output: HelloWorld.js
// Run: node HelloWorld.js

interface User {
    name: string;
    age: number;
    id: number;
}

class User {
    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    greet(): string {
        return `ko nn ni ti wa ${this.name} desuwa!`;
    }

    selfIntro(): string {
        return `watashi wa ${this.name} desu. ${this.age} sai desu.`;
    }
}

let eunoiacody = new User("EunoiaCody", 18, 1);

function sayHello(username): string {
    return `Hello, ${username}!`;
}

console.log(eunoiacody.selfIntro());