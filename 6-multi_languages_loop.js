const messages = ["C is fun", "Python is cool", "JavaScript is amazing"];
let i = 0;
let output = "";

while (i < messages.length) {
  output += messages[i] + (i < messages.length - 1 ? "\n" : "");
  i++;
}

console.log(output);
