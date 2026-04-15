# @untitltedq/password-utilities

> A small JavaScript utility library for generating and validating passwords.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Development](#development)
- [License](#license)

## Overview

This package currently exposes two password utilities:

- `generateStrongPassword(length)`: generates a random password string from uppercase letters, lowercase letters, digits, and special characters.
- `isStrongPassword(password)`: checks whether a password meets the implemented strength rules.

Implemented strength rules:

- at least 8 characters long
- contains at least one uppercase letter
- contains at least one lowercase letter
- contains at least one digit
- contains at least one special character from `!@#$%^&*()_+`

Important note:

`generateStrongPassword()` uses the allowed character set above, but it does not guarantee that every generated password satisfies all strength rules. Because the characters are chosen randomly, you should validate the result with `isStrongPassword()` if you need to enforce those rules.

## Installation

Install dependencies for local development:

```bash
npm install
```

If you want to use the package as a dependency:

```bash
npm install @untitltedq/password-utilities
```

## Usage

Example:

```js
const {
  generateStrongPassword,
  isStrongPassword,
} = require("@untitltedq/password-utilities");

const password = generateStrongPassword(16);

console.log(password);
console.log(isStrongPassword(password));
```

Example with validation:

```js
const {
  generateStrongPassword,
  isStrongPassword,
} = require("@untitltedq/password-utilities");

let password;

do {
  password = generateStrongPassword(12);
} while (!isStrongPassword(password));

console.log(password);
```

## API

### `generateStrongPassword(length = 12)`

Generates a random password string with the requested length.

Behavior:

- default length is `12`
- uses uppercase letters, lowercase letters, digits, and special characters
- returns a string with exactly the requested length
- does not guarantee that the result passes `isStrongPassword()`

Example:

```js
const { generateStrongPassword } = require("@untitltedq/password-utilities");

const password = generateStrongPassword(20);
console.log(password);
```

### `isStrongPassword(password)`

Checks whether a password matches the library's strength criteria.

Returns `true` only if the password:

- has at least 8 characters
- contains at least one uppercase letter
- contains at least one lowercase letter
- contains at least one digit
- contains at least one special character from `!@#$%^&*()_+`

Example:

```js
const { isStrongPassword } = require("@untitltedq/password-utilities");

isStrongPassword("Abcdef1!");
// true

isStrongPassword("password");
// false
```

## Development

Run the test suite with:

```bash
npm test
```

Current tests cover:

- generating a password with the requested length
- validating a generated password with the strength checker

## License

This project is licensed under the [MIT License](./LICENSE.md).
