addGreeting(function(user, response) {
  response.sendText('Welome. I\'m a demo for botler');
  response.startScript('echo');
});