# password-generator

A password generator with over 1.75e possible combinations

A random password generated by the algorith: `^7?9S7[2b_#<"D62F?QjlSd`
Time given by the worlds's best password strength tester: `10 billion trillion trillion years`

# Example

This example is given assuming you have downloded index.js and and stored it in a file named `PasswordGenerator`
```js
const Password = require("./PasswordGenerator/index.js")
const pass = new Password(25).generate()
console.log(pass) // => ^7?9S7[2b_#<"D62F?QjlSd
```

