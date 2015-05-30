# cline-parser

Mac/Linux | Windows
---- | ----
  [![Build Status](https://travis-ci.org/maboiteaspam/cline-parser.svg?branch=master)](https://travis-ci.org/maboiteaspam/cline-parser) 
| 
  [![Windows Build status](http://img.shields.io/appveyor/ci/maboiteaspam/cline-parser.svg)](https://ci.appveyor.com/project/maboiteaspam/cline-parser/branch/master)


A library to parse command line.

# Install

```npm i cline-parser```

# Usage

```js

    var parser = require('cline-parser');
    
    var cmd = parser('ls "some path / \\"with /spaces"');
    
    require('child_process').spawn(cmd.prg,{},cmd.args);
    
    cmd.prg == 'ls';
    
    cmd.args == [
        'some path / \\"with /spaces'
    ];
    
```