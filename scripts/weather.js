newScript('weather')
  .dialog((incoming, response, stop) => {
    response.sendText('getting you the weather');
    response.endScript();
  })
