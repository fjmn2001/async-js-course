const somethingWillHappen = () => {
    return new Promise(((resolve, reject) => {
        if (true) {
            resolve('Ok!')
        } else {
            reject('Whoooops!');
        }
    }));
}

somethingWillHappen()
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

const somethingWillHappen2 = () => {
    return new Promise(((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve('Ok Something Two!'), 2000);
        } else {
            reject(new Error('Whoooops!'));
        }
    }));
}

somethingWillHappen2()
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then((response) => console.log(response))
    .catch((error) => console.error(error));