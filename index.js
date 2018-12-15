var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1631308823,
  channelSecret: e49c17e8512f087ef0e86af200422e10,
  channelAccessToken: dg0tRYFjXWaxI7h6jYw/kIY80i1G2WnafieQM6Wn3QLSQmAHcsiE++Wf+V6ZH/cW0bvPFcS0zX4x+BSB0OD0h5I/SqL0NpXBmLomnJNHY6BkAHQmr6/LGmVyoZEY9ZclVJT92ekp7Lb5TgOksCrrgwdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
    if (event.message.type = 'text') {
      var msg = event.message.text;
      event.reply(msg).then(function(data) {
        // success 
        console.log(msg);
      }).catch(function(error) {
        // error 
        console.log('error');
      });
    }
  });
  
  const app = express();
  const linebotParser = bot.parser();
  app.post('/', linebotParser);
  
  //因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
  var server = app.listen(process.env.PORT || 1337, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
