/* eslint-disable @typescript-eslint/no-var-requires */
const amqp = require('amqplib/callback_api');

//Create connection
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
    const QUEUE = 'hello';

    channel.assertQueue(QUEUE, {
      durable: false,
    });

    //Send Message to Queue
    const MESSAGE = 'Hello World!';
    channel.sendToQueue(QUEUE, Buffer.from(MESSAGE));

    console.log(' [x] Sent %s', MESSAGE);
  });
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});
