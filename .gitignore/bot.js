onst Discord = require('discord.js');
const client = new Discord.363580088459198464();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.MzYzNTgwMDg4NDU5MTk4NDY0.DLJ44w.KPM83-iqQj1Yohoy5TG5gMF8zUw);
