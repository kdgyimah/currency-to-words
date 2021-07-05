## Currency To Words

## Introduction

Converts Currency Numbers (including decimal points) into words.


## Samples
* 1 --> one dollar
* 25.1 --> twenty-five dollars and ten cents
* 0.01 --> zero dollars and one cent
* 25.1 --> twenty-five cedis and ten pesewas


### Install

```js
npm install currency-to-words --save
```

### Usage

```js
import { CurrencyToWords } from 'currency-to-words'
```

```js
const words = CurrencyToWords({ value: 0.01 });
const customCurrency = CurrencyToWords({ value: 0.01, bigCurrency: 'dollar', lowCurrency: 'cent' });
```

OR

```js
const words = CurrencyToWords({ value: '105' });

const customCurrency = CurrencyToWords({ value: '105', bigCurrency: 'cedi', lowCurrency: 'pesewa' });
```

## Options
* `value: oneOfType([number, string])`
* `bigCurrency?: string`
* `lowCurrency?: string`

## Default
* `bigCurrency: 'Ghana Cedi'`
* `lowCurrency: 'pesewa'`


# TODO
- [x] Supporting other languages



**Meisam Malekzadeh**
