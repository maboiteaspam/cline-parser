
var us = require('underscore.string');
var pkg = require('./package.json');
var debug = require('debug')(pkg.name);

module.exports = function(cmdStr){
  debug(cmdStr);
  var prgm = cmdStr;
  var args = [];

  if (cmdStr.match(/\s/) ){
    cmdStr = cmdStr.match(/^([^ ]+)(.+)/);

    prgm = cmdStr[1];
    cmdStr = us.trim(cmdStr[2]);

    var isQuote = false;
    cmdStr.split(' ').forEach(function (part){
      if (part.match(/^['"]/) ){
        args.push(part + ' ');
        isQuote = true;
      }else if (part.match(/['"]$/) && !part.match(/\\['"]$/) ){
        args[args.length - 1] += '' + part + ' ';
        isQuote = false;
      }else {

        if (isQuote){
          args[args.length - 1] += '' + part + ' ';
        } else {
          args.push(part);
        }
      }
    });
    args.forEach(function(arg, i){
      var m = arg.match(/^\s*["'](.+)["']\s*$/);
      if (m){
        args[i] = m[1];
      }
    });
    args[args.length - 1] = us.trim(args[args.length - 1]);
  }

  return {
    prg: prgm,
    args: args
  };
};
