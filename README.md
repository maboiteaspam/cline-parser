# cline-parser

A library to parse command line.

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