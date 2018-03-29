const Discord = require("discord.js");
  var copy = "All CopyRights Server Fabulous";
  var link = "https://discord.gg/e9Ba7GK";
  var img = "https://media.discordapp.net/attachments/374950872679186433/428733009458495488/image.jpg?width=498&height=486";
  var idc = "428733432731009024";
  var vr = 'Version  : 1.0.0';
module.exports.run = async (bot, message, args) => {
    if(!message.channel.guild) return;
  let ava = message.guild.iconURL
  let embed = {
      color:205254,
      description:"**This is "+message.guild.name+" icon**",
      image:{url:ava}
  }
  message.channel.send("", {embed});
  }


module.exports.config = {
  command: "icon"
}
