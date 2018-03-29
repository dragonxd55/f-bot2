const Discord = require("discord.js");
module.exports.run = async (bot, message) => {
      let args = message.content.split(" ").slice(1);
       if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }
        if(!message.guild.member(bot.user).hasPermission('MANAGE_ROLES') || !message.guild.member(bot.user).hasPermission('ADMINISTRATOR')){
            return message.reply(`I don't have the permissions to do that!`)
        }
    message.guild.members.forEach(m =>{
       var role = message.guild.roles.find("name",args);
        if(!role){
            message.reply(" *I can't find a role!**");
            return;
        }
        m.addRole(role);
    });
}
module.exports.config = {
  command: "roleall"
}
