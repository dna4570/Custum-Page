'use strict'

// const { data } = require("jquery");

// //fetch処理が順番に進んで後続を待つ
// fetch("test.txt")
// .then((data) => data.text())
// .then((res) => console.log(res));

// async function fetchData() {
//   console.log = await fetch("test.txt");
//   const res =await data.text();
//   console.log(res);
// }
// console.log('こんにちわ');

fetch("data.json")
.then((data) => data.json())
.then((res) => console.log(res));
