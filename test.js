var Botler = require('botler');
var Request = require('request-promise');
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var Mocha = require('mocha');
var Promise = require('bluebird');

Promise.config({
  // Enable warnings
  warnings: true,
  // Enable long stack traces
  longStackTraces: true,
  // Enable cancellation
  cancellation: true,
  // Enable monitoring
  monitoring: true,
  warnings: {
    wForgottenReturn: true
  }
});

global._ = _;
global.messageType  = Botler.MessageTypes;

const theBot = new Botler.default();
global.bot = theBot;
global.request = Request;
global.addGreeting = theBot.addGreeting.bind(theBot);
global.newScript = theBot.newScript.bind(theBot);
global.getScript = theBot.getScript.bind(theBot);

// theBot.turnOnDebug();

function extension(element) {
  var extName = path.extname(element);
  return extName === '.js'; 
};
var listing = fs.readdirSync('./scripts');
listing
  .filter(extension)
  .map(file => './scripts/'+file)
  .forEach(file => {
    require(file);
  });

var Testing = require('botler-platform-testing');
var tester = new Testing.Platform(bot);
global.newTest = tester.newTest.bind(tester);
bot.addPlatform(tester);


process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log('one of the scripts failed')
})

bot.start();

var mocha = new Mocha();
fs.readdirSync('./tests')
  .filter(extension)
  .map(file => './tests/'+file)
  .forEach(file => {
    mocha.addFile(file);
  });

mocha.reporter('list').ui('tdd').run();