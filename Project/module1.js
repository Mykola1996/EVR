function createUser(name, age) {
    return {
        name,
        age,
        sayHello: () => {
            console.log(`Helo my name is ${name} and i am ${age} old`);
        }
    }
}

console.log('module 1 was init');

module.exports = {
    createUser
}