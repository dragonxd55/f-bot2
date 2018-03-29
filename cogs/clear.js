const Discord = require("discord.js");
  var copy = "All CopyRights Server Fabulous";
  var link = "https://media.discordapp.net/attachments/374950872679186433/428733009458495488/image.jpg?width=498&height=486";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "428733432731009024";
  var vr = 'Version  : 1.0.0'
  let prefix = "F-";
 const msg = parseInt();
module.exports.run = async (bot, message, args) => {
var per = "You Don\'t Have Permission ";
            
            
                                if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(per + 'MANAGE_MESSAGES');
	  if(!message.channel.guild) return message.reply('** هاذا الامر يخص طاقم اعضاء الاداره ياظريف وغير مسموح استخدامه في الخاص **');
 if (!args[1]) {
message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
var jedol3 = new Discord.RichEmbed()
.setColor("#008000")
.addField(':customs:', ' تم clear الشات ', true)
.addField('تم بواسطة :put_litter_in_its_place: :', `${message.author.username}#${message.author.discriminator}`, true)
.addField(':pencil2: عدد الرسائل الممسوحة ',args[1], true )
.setFooter(copy,img)
message.channel.send(jedol3).then(msg => {msg.delete(5000)});
bot.channels.get(idc).sendEmbed(jedol3);
} else {
  let messagecount = parseInt(args[1]);
message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
let jedol44 = new Discord.RichEmbed()
.setColor("#008000")
.addField(':customs:', ' تم حذف الشات  ', true)
.addField('تم بواسطة :put_litter_in_its_place: :', `${message.author.username}#${message.author.discriminator}`, true)
.addField(':pencil2: عدد الرسائل المحذوفة ',    args[1], true )
.setFooter(copy,img)
message.delete("..");
message.channel.sendEmbed(jedol44).then(msg => {msg.delete(5000)});
bot.channels.get(idc).sendEmbed(jedol44);
 }

 }
module.exports.config = {
  command: "clear"
}
