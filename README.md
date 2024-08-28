# split-arabic-text

split-arabic-text is a library that allows you to correctly split Arabic text, handling various positional forms and diacritical marks with precision.
## Installation

Install the package using npm:

```

npm install split-arabic-text

```

Import the splitText function and use it to split Arabic text:

```js

const splitText = require('split-arabic-text');

console.log(splitText("مرحبا", "rtl")); // "rtl" is the default value
//this will return an array of all the chars
//it accepts a string and the direction 

```
## Features

1. Correctly splits Arabic text considering positional forms.
2. Handles diacritical marks
 

## License

This project is licensed under the MIT License.

