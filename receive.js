/* eslint-disable @typescript-eslint/no-var-requires */
const amqp = require('amqplib/callback_api');
//Create Connection
amqp.connect('amqp://localhost', (connError, connection) => {
  if (connError) {
    throw connError;
  }
  //Create Channel
  connection.createChannel((channelError, channel) => {
    if (channelError) {
      throw channelError;
    }
    //Assert Queue
    var QUEUE = 'hello';

    channel.assertQueue(QUEUE, {
      durable: false,
    });

    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', QUEUE);

    //Receive Messages
    channel.consume(
      QUEUE,
      (msg) => {
        console.log(' [x] Received %s', msg.content.toString());
      },
      {
        noAck: true,
      },
    );
  });
});
