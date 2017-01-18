newScript('profile')
  .match('general', 'help', function(incoming, response, stop) {
    response.sendText('this is a helpfully specific help message');
  }).force
  .addDialog(function(incoming, response, stop) {
    incoming.user.profile = {};
    response.sendText('Hi! What is your name?');
  })
  .expect(messageType.text, function(incoming, response, stop) {
    incoming.user.profile.name = incoming.message.text;
  })
  .addDialog(function(incoming, response, stop) {
    response.sendText('What\'s your email address?');
  })
  .expect(messageType.text, function(incoming, response, stop) {
    if (isValidEmail(incoming.message.text) === false) {
      stop();
    }
    incoming.user.profile.email = incoming.message.text;
  })
  .catch(function(incoming, response, stop) {
    response.sendText('I don\'t think that\'s a correct email');
  })


function isValidEmail(email) {
  if (email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
    return false;
  }
  return true;
}
