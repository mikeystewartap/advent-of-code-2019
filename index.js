const fs = require("fs");
const day = process.argv[2];
const input = fs.readFileSync(`./src/${day}/input.txt`, "utf8");

const result = require(`./src/${day}`)(input);
console.log(`Result of ${day} is ${result}`);
