describe('profile', function() {
  it('success', function() {
    return newTest()
      // .checkForTrailingDialogs(false)
      .expectText('Welome. I\'m a demo for botler')
      .expectText('What\'s your name?')
      .sendText('adam')
      .expectText(`Hello adam`)
      .expectText(`How old are you?`)
      .sendText('21')
      .expectText(`Ok adam you\'re 21 years old`)
      .expectText(`What\'s your email?`)
      .sendText('botler@ajuhasz.io')
      .expectText(`This is the main menu`)
      .expectButtons('You can select on of the buttons below', [ 
        { type: 'postback', text: 'postback', payload: 'specific-payload' },
        { type: 'postback', text: 'postback', payload: 'a-payload' },
        { type: 'url', text: 'url', url: 'http://google.com' } ])
      .run();
  });
  it('age failure', function() {
    return newTest()
      .expectText('Welome. I\'m a demo for botler')
      .expectText('What\'s your name?')
      .sendText('adam')
      .expectText(`Hello adam`)
      .expectText(`How old are you?`)
      .sendText('tr')
      .expectText(`I only understand numbers like 21 or 43. Try again`)
      .run();
  });
  it('email failure', function() {
    return newTest()
      .expectText('Welome. I\'m a demo for botler')
      .expectText('What\'s your name?')
      .sendText('adam')
      .expectText(`Hello adam`)
      .expectText(`How old are you?`)
      .sendText('21')
      .expectText(`Ok adam you\'re 21 years old`)
      .expectText(`What\'s your email?`)
      .sendText('botler')
      .expectText(`I don't think that's a correct email`)
      .run();
  });
  it('quit script', function() {
    return newTest()
      .expectText('Welome. I\'m a demo for botler')
      .expectText('What\'s your name?')
      .sendText('quit')
      .expectText(`This is the main menu`)
      .expectButtons('You can select on of the buttons below', [ 
        { type: 'postback', text: 'postback', payload: 'specific-payload' },
        { type: 'postback', text: 'postback', payload: 'a-payload' },
        { type: 'url', text: 'url', url: 'http://google.com' } ])
      // .button()
      .run();
  });
});
