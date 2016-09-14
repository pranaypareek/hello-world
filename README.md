[![Build Status](https://travis-ci.org/pranaypareek/hello-world.svg?branch=master)](https://travis-ci.org/pranaypareek/hello-world)

# Rapid Prototyping and Lean Engineering

*To run the program:*

`node main.js`

-------

*A note on unit-testing*:

The project uses the [Vows](http://vowsjs.org/) framework for creating unit tests and they are specified in the **tests** folder.

The default command to run tests for nodejs projects is `npm test`. We can configure NPM to run our test suite by adding the following to the package.json file:

```
  "scripts": {
    "test": "vows --spec"
  }
```
