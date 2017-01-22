describe('greeting', function() {
  it('basic', function() {
    const prom = newTest()
      .expectText('Welome. I\'m a demo for botler')
      .expectText('What\'s your name?')
      .run()
    return prom;
  });
});
