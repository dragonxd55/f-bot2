const Discord = require("discord.js");
  var copy = "All CopyRights Server";
  var link = "https://discord.gg/e9Ba7GK";
  var img = "https://media.discordapp.net/attachments/374950872679186433/428733009458495488/image.jpg?width=498&height=486";
  var idc = "428733432731009024";
  var vr = 'Version  : 1.0.0'
  let prefix = "F-";
module.exports.run = async (bot, message, args) => {
  if(!message.channel.guild) return message.reply('** This command only for servers **');

        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite => {

        const em1 = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
        .setDescription(`هاذا الشخص طلب رابط, \n 
        الرابط: \`${invite.url}\``)
   .setFooter(message.guild.name, message.guild.iconURL);
      bot.channels.get(idc).sendEmbed(em1);
        message.author.sendMessage(invite.url)
        message.author.sendMessage("هاذا الرابط لمستخدم واخد فقط")
      return;
    });
    
      	    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(copy,"تم ارسالك في الخاص",img)
   .setFooter(message.guild.name, message.guild.iconURL);
      message.channel.sendEmbed(embed);
    }
module.exports.config = {
  command: "link"
}
