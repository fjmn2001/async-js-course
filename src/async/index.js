const doSomethingAsync = () => {
    return new Promise(((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something async'), 3000)
            : reject(new Error('Test Error'))
    }))
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('after');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (e) {
        console.error(e);
    }
}

console.log('Before');
anotherFunction();
console.log('after');