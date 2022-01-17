'use strict';

console.log('main.js is alive');

const req = new XMLHttpRequest();
req.open('GET', 'data');
req.responseType = 'json';
req.send();

req.onload = () => {
    console.log(req.response);
}