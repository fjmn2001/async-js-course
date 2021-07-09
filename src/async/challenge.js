const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/';

const fetchData = (urlApi) => {
    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();

        xhttp.open('GET', urlApi, true);

        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(new Error('Error' + urlApi));
                }
            }
        }

        xhttp.send();
    })
};

const anotherFunction = async (url_api) => {
    try {
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension)
    } catch (e) {
        console.error(e);
    }
}

console.log('before');
anotherFunction(API);