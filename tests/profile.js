describe('profile', function() {
  it('success', function() {
    return newTest()
      .checkForTrailingDialogs(false)
      .expectTextResponse('Welome. I\'m a demo for botler')
      .expectTextResponse('What\'s your name?')
      .sendTextMessage('adam')
      .expectTextResponse(`Hello adam`)
      .expectTextResponse(`How old are you?`)
      .sendTextMessage('21')
      .expectTextResponse(`Ok adam you\'re 21 years old`)
      .expectTextResponse(`What\'s your email?`)
      .sendTextMessage('botler@ajuhasz.io')
      .expectTextResponse(`This is the main menu`)
      .run();
  });
  it('age failure', function() {
    return newTest()
      .expectTextResponse('Welome. I\'m a demo for botler')
      .expectTextResponse('What\'s your name?')
      .sendTextMessage('adam')
      .expectTextResponse(`Hello adam`)
      .expectTextResponse(`How old are you?`)
      .sendTextMessage('tr')
      .expectTextResponse(`I only understand numbers like 21 or 43. Try again`)
      .run();
  });
  it('email failure', function() {
    return newTest()
      .expectTextResponse('Welome. I\'m a demo for botler')
      .expectTextResponse('What\'s your name?')
      .sendTextMessage('adam')
      .expectTextResponse(`Hello adam`)
      .expectTextResponse(`How old are you?`)
      .sendTextMessage('21')
      .expectTextResponse(`Ok adam you\'re 21 years old`)
      .expectTextResponse(`What\'s your email?`)
      .sendTextMessage('botler')
      .expectTextResponse(`I don't think that's a correct email`)
      .run();
  });
});
