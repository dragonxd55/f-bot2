const Discord = require("discord.js");
var prefix = 'F-';
module.exports.run = async (bot, message,) => {
let args = message.content.split(' ').slice(1).join(' ');
  var copy = "All CopyRights Server Fabulous";
   if(!message.author.id === '234454368072630283') return;
  message.channel.sendMessage('تم , جار أرسال الرسالة')
  bot.users.forEach(m =>{
  var bc = new Discord.RichEmbed()
                                          .setColor('RANDOM')
                                          .setTitle('Broadcast')
                                          .addField('Server', message.guild.name)
                                          .addField('Sender', message.author.username)
                                          .addField('Message', args)
                                          .setThumbnail(message.author.avatarURL)
                                          .setFooter(copy, bot.user.avatarURL);
                                      m.sendMessage({ embed: bc })
  })
}

module.exports.config = {
  command: "bcall"
}
