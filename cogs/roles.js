const Discord = require("discord.js");
  var copy = "All CopyRights Server Fabulous";
  var link = "https://discord.gg/e9Ba7GK";
  var img = "https://media.discordapp.net/attachments/374950872679186433/428733009458495488/image.jpg?width=498&height=486";
  var idc = "428733432731009024";
  var vr = 'Version  : 1.0.0'
  let prefix = "F-";
module.exports.run = async (bot, message,) => {
     if(!message.channel.guild) return;
    
      var roles = message.guild.roles.map(roles => `\n${roles.name} - (${roles.id})`).join('');
       message.channel.send(`
**\`\`Roles Count [${message.guild.roles.size}]\`\`**
\`\`\`autohotkey
${roles}
\`\`\``);
};

module.exports.config = {
  command: "roles"
}
