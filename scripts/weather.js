newScript('weather')
  .addDialog((incoming, response, stop) => {
    response.sendText('getting you the weather');
    response.endScript();
  })
