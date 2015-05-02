require('should');

var parser = require('../index.js');

describe('cline-parse', function(){
  it('should parse', function(){
    parser('ls').prg.should.eql('ls');
    parser('ls').args.should.eql([]);
  });
  it('should parse arguments', function(){
    parser('ls -alh').prg.should.eql('ls');
    parser('ls -alh').args.should.eql(['-alh']);
  });
  it('should parse with quotes', function(){
    parser('ls "some path / with /spaces"')
      .prg.should.eql('ls');
    parser('ls "some path / with /spaces"')
      .args.should.eql(['some path / with /spaces']);
  });
  it('should parse with escape', function(){
    parser('ls "some path / \"with /spaces"')
      .prg.should.eql('ls');
    parser('ls "some path / \\"with /spaces"')
      .args.should.eql(['some path / \\"with /spaces']);
  });
});
