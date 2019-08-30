var HelloWorld = /** @class */ (function () {
    function HelloWorld(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + 'My name is' + this.firstName + ' ' + this.lastName + ' and I am taking IS51 Fall 2019' + '.');
    };
    return HelloWorld;
}()); //end of class
var myHelloinstance = new HelloWorld('Jim', 'Yang');
myHelloinstance.sayHello();
