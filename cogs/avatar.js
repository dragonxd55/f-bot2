const Discord = require("discord.js");
  var copy = "All CopyRights Server Fabulous";
  var link = "https://discord.gg/e9Ba7GK";
  var img = "https://media.discordapp.net/attachments/374950872679186433/428733385964388353/image.jpg?width=498&height=486";
  var idc = "428733432731009024";
  var vr = 'Version  : 1.0.0'
  let prefix = "F-";
module.exports.run = async (bot, message, args) => {
 var mentionned = message.mentions.users.first();
    var bot;
      if(mentionned){
          var bot = mentionned;
      } else {
          var bot = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${bot.avatarURL}`)
      message.channel.sendEmbed(embed);;
  }
module.exports.config = {
  command: "avatar"
}
