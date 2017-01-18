describe('profile', function() {
  it('basic', function() {
    return newTest()
      .checkForTrailingDialogs(false)
      .expectTextResponse('Welome. I\'m a demo for botler')
      .expectTextResponse('What\'s your name?')
      .sendTextMessage('adam')
      .expectTextResponse(`Hello adam`)
      .run();
  });
});
