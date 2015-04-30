
var _s = require('underscore.string');

module.exports = function(cmdStr){
  cmdStr = cmdStr.match(/^([^ ]+)(.+)/);
  var prgm = cmdStr[1];
  cmdStr = _s.trim(cmdStr[2]);
  var args = [];
  var isquote=false;
  cmdStr.split(" ").forEach(function (part){
    if(part.match(/^['"]/)){
      args.push(part+' ');
      isquote = true;
    }else if(part.match(/['"]$/) && !part.match(/\\['"]$/) ){
      args[args.length-1] += ''+part+' ';
      isquote = false;
    }else{

      if(isquote){
        args[args.length-1] += ''+part+' ';
      } else{
        args.push(part);
      }
    }
  });
  args.forEach(function(arg,i){
    var m = arg.match(/^\s*["'](.+)["']\s*$/);
    if( m ){
      args[i] = m[1]
    }
  });
  args[args.length-1] = _s.trim(args[args.length-1]);

  return {
    prg:prgm,
    args:args
  }
};