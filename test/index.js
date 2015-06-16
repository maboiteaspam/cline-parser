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
  it('should parse string enclosed with double quotes', function(){
    parser('ls "some path / with /spaces"')
      .prg.should.eql('ls');
    parser('ls "some path / with /spaces"')
      .args.should.eql(['some path / with /spaces']);
  });
  it('should understand double quotes escape', function(){
    parser('ls "some path / \"with /spaces"')
      .prg.should.eql('ls');
    parser('ls "some path / \\"with /quotes"')
      .args.should.eql(['some path / \\"with /quotes']);
  });
  it('should parse string enclosed with single quote', function(){
    parser("ls 'some path / with /quotes'")
      .prg.should.eql('ls');
    parser("ls 'some path / with /quotes'")
      .args.should.eql(['some path / with /quotes']);
  });
  it('should understand single quote escape', function(){
    parser("ls 'some path / with /quotes'")
      .prg.should.eql('ls');
    parser("ls 'some path / \\'with /quotes'")
      .args.should.eql(["some path / \\'with /quotes"]);
  });
  it('demonstration', function(){
    parser("ls -alh some whatever -args")
      .prg.should.eql('ls');
    parser("ls -alh some whatever -args")
      .args.should.eql(['-alh', 'some', 'whatever', '-args']);
  });
});
