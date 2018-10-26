let m = "mkfsmdfk";
/*eslint-disable no-console*/
console.log(`yes my name is ${m}`);
fetch("https://jsonplaceholder.typicode.com/users").then((x) => {
        console.log("yes");
        console.log(x.body);
    })
    .catch(y => {
        console.log(JSON.stringify(y));
    });