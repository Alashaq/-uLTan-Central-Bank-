const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});

client.on('message',function(message) {
    
    if(message.content.startsWith("<@481969532509093898>")) {
        message.channel.send('مرحبا انا البنك المركزي للسيد سلطان ')

    }
});
client.login(process.env.TOKEN);
