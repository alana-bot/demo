 newScript()
    .begin((incoming, response, stop) => {
      response.sendText('This is the main menu');
      response.createButtons()
        .text('You can select on of the buttons below')
        .addButton('postback', 'postback', 'specific-payload')
        .addButton('postback', 'postback', 'a-payload')
        .addButton('url', 'url', 'http://google.com')
        .send();
      stop();
    })
    // .button.always(['specific-payload', 'a-payload'], (incoming, response, stop) => {

    // })
    .intent('weather', (incoming, response, stop) => {
      response.startScript('weather');
    })
    .button('specific-payload', (incoming, response, stop) =>{
      // catch a specific postback
    })
    .button((incoming, response, stop) => {
      // catch all postbacks
      console.log('check buttons');
    })
    .dialog((session, response, stop) => {
      response.sendText('I am confused'); 
      stop();
    });