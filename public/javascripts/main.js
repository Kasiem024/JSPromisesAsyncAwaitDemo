'use strict';

console.log('main.js is alive');

// const req = new XMLHttpRequest();
// req.open('GET', 'data');
// req.responseType = 'json';
// req.send();

// req.onload = () => {
//     console.log(req.response);
// }

// const fetchData = fetch('/data')
//     .then(response => response.json())
//     .then(data => funcLoad(data));

// let myRequest = new Request('/data');

// fetch(myRequest)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => funcLoad(data));

const fetchData = async() => {
    const response = await fetch('/data');
    const data = await response.json();
    return data;
}

fetchData().then(data => {
    funcLoad(data);
});

const funcLoad = (data) => {
    console.log(data);
}