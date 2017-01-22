newScript('full-profile')
  .intent.always('general', 'help', function(incoming, response, stop) {
    response.sendText('this is a helpfully specific help message');
  })
  .intent.always('general', 'stop', (incoming, response, stop) =>{
    response.startScript();
  })
  .dialog(function(incoming, response, stop) {
    incoming.user.profile = {};
    response.sendText('What\'s your name?');
  })
  .expect.text(function(incoming, response, stop) {
    incoming.user.profile.name = incoming.message.text;
    response.sendText(`Hello ${incoming.user.profile.name}`);
  })
  .dialog(function(incoming, response, stop) {
    response.sendText('How old are you?');
  })
  .expect.text(function(incoming, response, stop) {
    if (isNaN(parseInt(incoming.message.text, 10))) {
      stop();
    }
    incoming.user.profile.age = incoming.message.text;
    response.sendText(`Ok ${incoming.user.profile.name} you're ${incoming.user.profile.age} years old`);
  })
  .catch(function(incoming, response, stop) {
    response.sendText('I only understand numbers like 21 or 43. Try again');
  })
  .dialog(function(incoming, response, stop) {
    response.sendText('What\'s your email?');
  })
  .expect.text(function(incoming, response, stop) {
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
