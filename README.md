# End of Week

Get the last day of a week (Sunday) according to UTC.

Written in TypeScript, distributed as ESM.


## Installation

```shell
npm install end-of-week
```


## Usage

```ts
import endOfWeek from "end-of-week"

const date = new Date("2016-06-21")

console.log(endOfWeek(date))
// => new Date("2016-06-26T23:59:59.999Z")
```
