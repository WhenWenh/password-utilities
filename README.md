# @untitled/password-utilities

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

- `generateStrongPassword(length)`: generates a random strong password string from uppercase letters, lowercase letters, digits, and special characters.
- `isStrongPassword(password)`: checks whether a password meets the implemented strength rules.

Implemented strength rules:

- at least 8 characters long
- contains at least one uppercase letter
- contains at least one lowercase letter
- contains at least one digit
- contains at least one special character from `!@#$%^&*()_+`

`generateStrongPassword()` keeps generating passwords until the result satisfies all of the strength rules above.

## Installation

Install dependencies for local development:

```bash
npm install
```

If you want to use the package as a dependency:

```bash
npm install @untitledq/password-utilities
```

## Usage

Example:

```js
const {
  generateStrongPassword,
  isStrongPassword,
} = require("@untitledq/password-utilities");

const password = generateStrongPassword(16);

console.log(password);
console.log(isStrongPassword(password));
// true
```

Example with invalid length:

```js
const { generateStrongPassword } = require("@untitledq/password-utilities");

generateStrongPassword(6);
// throws Error: Password length must be at least 8 characters.
```

## API

### `generateStrongPassword(length = 12)`

Generates a random password string with the requested length.

Behavior:

- default length is `12`
- uses uppercase letters, lowercase letters, digits, and special characters
- returns a string with exactly the requested length
- always returns a password that passes `isStrongPassword()`
- throws an error if `length` is less than `8`

Example:

```js
const { generateStrongPassword } = require("@untitledq/password-utilities");

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
const { isStrongPassword } = require("@untitledq/password-utilities");

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
