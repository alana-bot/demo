describe('greeting', function() {
  it('basic', function() {
    const prom = newTest()
      .expectTextResponse('Welome. I\'m a demo for botler')
      .expectTextResponse('What\'s your name?')
      .run()
    return prom;
  });
});