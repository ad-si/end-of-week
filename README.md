# End of Week

Get the last day of a week (Sunday) according to UTC

[![build status](https://img.shields.io/travis/adius/end-of-week.svg)](https://travis-ci.org/adius/end-of-week)


## Installation

```shell
npm install --save end-of-week
```


## Usage

```js
const endOfWeek = require('end-of-week')
const date = new Date('2016-06-21')

console.log(endOfWeek(date))
// => new Date('2016-06-26')
```
