PACKAGE-NAME
========

My favorite template to start building a new npm package

[![NPM](https://badge.fury.io/js/bellajs.svg)](https://badge.fury.io/js/bellajs)
![Travis](https://travis-ci.org/ndaidong/bellajs.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/ndaidong/bellajs/badge.svg?branch=master)](https://coveralls.io/github/ndaidong/bellajs?branch=master)
[![Dependency Status](https://www.versioneye.com/user/projects/561e51a036d0ab002100017f/badge.svg?style=flat)](https://www.versioneye.com/user/projects/561e51a036d0ab002100017f)
[![Known Vulnerabilities](https://snyk.io/test/npm/bellajs/badge.svg)](https://snyk.io/test/npm/bellajs)



# Contents

* [Setup](#setup)
* [APIs](#apis)
  - [getStorageSize()](#getStorageSize)
  - [anotherMethod()](#anotherMethod)
* [Test](#test)


## Setup


  ```
  npm install PACKAGE-NAME --save
  ```

Then, in program

```
let packageName = require('PACKAGE-NAME');
```


# APIs

### .getStorageSize()

Return storage size in MB.

```
let size = packageName.getStorageSize();
console.log(size);
```

### .anotherMethod()

Some description about this method.

```
let foo = packageName.anotherMethod();
console.log(foo);
```

# Test

```
git clone https://github.com/YOURNAME/REPOSITORY.git
cd REPOSITORY
npm install
npm test
```

# License

The MIT License (MIT)
