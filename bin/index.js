#!/usr/bin/env node

var example = require('../src/index.js'),
    program = require('commander');
    

program  
  .option('-d, --debug', "Option X example")

program.parse(process.argv);

const options = program.opts();

if (options.debug) {
  example.exampleTask();
}