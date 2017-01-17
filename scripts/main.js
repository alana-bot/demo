 newScript()
    .begin((incoming, response, stop) => {
      response.sendText('This is the main menu');
      stop();
    })
    .match('weather', (incoming, response, stop) => {
      response.startScript('weather');
    })
    .addDialog((incoming, response, stop) => {
      response.sendText('I am confused');
      stop();
    });