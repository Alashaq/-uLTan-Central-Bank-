const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'
client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});

client.on('message', message => {
 if(message.content.startsWith(prefix + "come")) {
message.member.voiceChannel.join();
}
});


client.login(process.env.BOT_TOKEN);
