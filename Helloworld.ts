
class HelloWorld {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log('Hello World!' + 'My name is' + this.firstName + ' ' + this.lastName +' and I am taking IS51 Fall 2019' +'.');
    }
} //end of class

const myHelloinstance = new HelloWorld('Jim', 'Yang');

myHelloinstance.sayHello();