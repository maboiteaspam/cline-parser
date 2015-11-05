# cline-parser

Mac/Linux | Windows
---- | ----
  [![Build Status](https://travis-ci.org/maboiteaspam/cline-parser.svg?branch=master)](https://travis-ci.org/maboiteaspam/cline-parser) 
| 
  [![Windows Build status](http://img.shields.io/appveyor/ci/maboiteaspam/cline-parser.svg)](https://ci.appveyor.com/project/maboiteaspam/cline-parser/branch/master)


A library to parse a string command line into an array usable by child_process.spawn

# Install

```npm i cline-parser --save```

# Usage

```js

    var parser = require('cline-parser');
    
    var cmdStr = 'ls "some path / \\"with /spaces" -args';
    var cmd = parser(cmdStr);
    
    // this is what you could actually do.
    require('child_process').spawn(cmd.prg,cmd.args);
    
    // quick insights.
    cmd.prg == 'ls';
    cmd.args == [
        'some path / \\"with /spaces',
        '-args'
    ];
    
```