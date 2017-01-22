 newScript('echo')
  .dialog((incoming, response) => {
    response.sendText('echo');
  })