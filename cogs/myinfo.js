const Discord = require("discord.js");
const dateFormat = require('dateformat');
  var copy = "All CopyRights Server Fabulous";
  var link = "https://discord.gg/e9Ba7GK";
  var img = "https://media.discordapp.net/attachments/374950872679186433/428733009458495488/image.jpg?width=498&height=486";
  var idc = "428733432731009024";
  var vr = 'Version  : 1.0.0'
  let prefix = "F-";
module.exports.run = async (bot, message,) => {
                            	 if(!message.channel.guild) return message.reply('**انتا تبغا توقف البوت ولا تستهبل رح السيرفر تشتغل قفطتك هاه يا ذكي**');
    const millisCreated = new Date().getTime() - message.author.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;
         var embed  = new Discord.RichEmbed()
         .addField(":arrow_right: ``YOU ARE PLAYING :``",` ** [ ${(message.author.presence.game && message.author.presence.game && message.author.presence.game.name) || 'Not playing a game.'} ] ** `)
         .addField(":arrow_right: ``YOUR STATUS :``", message.author.presence.status)
         .addField(":arrow_right: `` YOUR NAME : ``", message.author.username)
         .addField(" CREATED AT ", ` ** [ ${dateFormat(message.author.createdAt)} ] ** ` )
         .setColor('RANDOM')
         .setFooter(copy,img)
         message.channel.sendEmbed(embed)
}
module.exports.config = {
  command: "myinfo"
}
