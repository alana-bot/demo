var Botler = require('botler');
var Request = require('request-promise');
var _ = require('lodash');
global._ = _;
global.messageType  = Botler.MessageTypes;

const theBot = new Botler.default();
global.bot = theBot;
global.request = Request;
global.addGreeting = theBot.addGreeting.bind(theBot);
global.newScript = theBot.newScript.bind(theBot);
global.getScript = theBot.getScript.bind(theBot);

// theBot.turnOnDebug();

require('./bot');

var shellInput = new Botler.Platforms.Console(bot);
var web = new Botler.Platforms.Web(bot);

bot.addPlatform(shellInput);
bot.addPlatform(web);

bot.start();
