const Discord = require("discord.js");
  var copy = "All CopyRights Server Fabulous";
  var link = "https://discord.gg/e9Ba7GK";
  var img = "https://media.discordapp.net/attachments/374950872679186433/428733009458495488/image.jpg?width=498&height=486";
  var idc = "428733432731009024";
  var vr = 'Version  : 1.2.0';
module.exports.run = async (bot, message, args) => {
          if(!message.channel.guild) return message.reply('**انتا تبغا توقف البوت ولا تستهبل رح السيرفر تشتغل قفطتك هاه يا ذكي**');
         var embed  = new Discord.RichEmbed()
         .addField("``علامة البوت :``",`&`)
         .addField("``مجموع سيرفرات البوت :``", bot.guilds.size,true)
         .addField("``مجموع القنوات :``", bot.channels.size,true)
         .addField("`` الرام المستخدم للجافا : ``",`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,true)
         .addField("``عدد المستخدمين الحاليين``",`${bot.guilds.reduce((mem, g) => mem += g.memberCount, 0)}`,true)
         .addField("``اصداري :``", `${vr}`,true)
         .addField("``Fabulous 💎 ID :``", "ID : ``428733432731009024`` ",true)
         .addField("``لايمكن الاعتماد عليها``",` سرعة الاستجابة! \`${Date.now() - message.createdTimestamp} ms\``,true)
         .addField("add " , link)
         .setColor('RANDOM')
		            .setFooter(copy,img)
         message.channel.sendEmbed(embed)
}

module.exports.config = {
  command: "info"
}
