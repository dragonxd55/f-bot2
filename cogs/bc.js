const Discord = require("discord.js");
var prefix = 'F-';
module.exports.run = async (bot, message,) => {

                   
             
var copy = "All CopyRights Reseaved For Luxury bot team";
var args = message.content.split(" ").join(" ").slice(2 + prefix.length);
if (message.author.bot) return;
if (!message.channel.type == `text`) return message.channel.send('هذا الأمر فقط للسيرفرات')
var per = "You Don\'t Have Permission ";
var request = `Requested By ${message.author.username}`;
if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(per + "Administrator");
if (!args) return message.reply('You Must Place An Argument To Do This Command');
if(message.content.startsWith(prefix + 'bc')) {
message.channel.send('هل انتا متاكد انك تريد ارسال الرسالة').then(msg => {
msg.react('✅')
msg.react('❌')
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`);
message.guild.members.forEach(m => {
var bc = new
   Discord.RichEmbed()
   .setColor('RANDOM')
   .setTitle('Broadcast')
   .addField('Server', message.guild.name)
   .addField('Sender', message.author.username)
   .addField('Message', args)
   .setThumbnail(message.author.avatarURL)
   .setFooter(copy, bot.user.avatarURL);
m.send({ embed: bc })
collector.stop();
});
})
reaction2.on("collect", r => {
message.channel.send(`Broadcast Canceled.`);
collector.stop();
})
});
}
}
module.exports.config = {
  command: "bc"
}
