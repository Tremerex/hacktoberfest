// LANGUAGE: JavaScript
// ENV: Node.js
// AUTHOR: Robert Gomez
// GITHUB: https://github.com/tremerex

const n = () => {
  let e = new String(), o = {
    olleH: e,
    dlroW: e
  };
  let m = Object.keys(o);
  let i = m.length;
  let s = i * (i * i)**i;
  return m
    .map(_ => _.split(e).reverse().join(e))
    .join(String.fromCharCode(s)) + String.fromCharCode(++s);
}

const helloWorld = n;

console.log(helloWorld());