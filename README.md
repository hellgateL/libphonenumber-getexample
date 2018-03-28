# libphonenumber-getexample

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/libphonenumber-getexample)

A smaller realization of Google `libphonenumber` getExampleNumber function:

* Tiny footprint: ~15 kilobytes minified and `~5kb gzipped`

## Install

via [npm](https://npmjs.org/)

```sh
$ npm install libphonenumber-getexample
```

## Use

### es6 modules

```js
import { getExampleNumber } from 'libphonenumber-getexample'

const phoneNumber = getExampleNumber('us') // || 'US'

phoneNumber.formatNational() === '(213) 373-4253'
phoneNumber.formatInternational() === '+1 213 373 4253'
```

### browser

```js
$(document).ready(function() {
    const { getExampleNumber } = window.libphonenumberGetexample

    // etc
})
```


## Examples

### ReactJS

```js
import React from 'react'
import { getExampleNumber } from 'libphonenumber-getexample'

export class ExampleForm extends React.Component {
  state = {
    phonePlaceholder: getExampleNumber(this.props.userCountry).formatInternational()
  }

  render = () => (
    <form>
      <label>Phone number</label>
      <input type="text" palceholder={this.state.phonePlaceholder} />
    </form>
  )
}
```

## License

[MIT](LICENSE)
