    const Discord = require("discord.js");
    const prefix = "&";
    module.exports.run = async (bot, message,) => {
       
            let command = message.content.toLowerCase().split(" ")[0].slice(prefix.length)
            if (!message.content.startsWith(prefix)) return;

            var per = "You Don\'t Have Permission ";
            
                                var args = message.content.split(" ")[2]
                                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(per + 'Manage_Channels');
                                var men = message.mentions.members.first();
                                if (!men) return message.reply('**سوي منشن للشخص المراد اعطائه ميوت**');
                           
                                    message.channel.overwritePermissions(men.id, {
                                        SEND_MESSAGES: true
                                    });
                                }                   
    module.exports.config = {
      command: "unmute"
    }


