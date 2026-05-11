# End of Week

Get the last day of a week (Sunday, 23:59:59.999 UTC).

Written in TypeScript. **ESM-only** — requires Node.js ≥ 20 and a project
with `"type": "module"` (or use `.mjs`).


## Installation

```shell
npm install end-of-week
```


## Usage

```js
import endOfWeek from "end-of-week"

const date = new Date("2016-06-21")

console.log(endOfWeek(date))
// => new Date("2016-06-26T23:59:59.999Z")
```
