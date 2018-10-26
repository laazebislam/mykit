import jsdom from 'jsdom';
import fs from 'fs';


let file = fs.readFileSync("./index.html", 'utf-8');
console.log("obj => ", jsdom);
jsdom.env(file, function(err, window) {
    if (err) throw err;
    console.log(JSON.stringify(window.document));

    console.log(window.document.querySelector('h1').textContent);
});