    const Discord = require("discord.js");
const prefix = "F-";
    module.exports.run = async (bot, message,) => {
            let command = message.content.toLowerCase().split(" ")[0].slice(prefix.length)
            if (!message.content.startsWith(prefix)) return;
            var per = "You Don\'t Have Permission ";
                                var args = message.content.split(" ")[2]
                                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(per + 'Manage_Channels');
                                var men = message.mentions.members.first();
                                if (!men) return message.reply('**سوي منشن للشخص المراد اعطائه ميوت**');
             if(!args) return message.reply(`**قم بوضع وقت لمدة الميوت**
            Ex : \`\`$$mute @DARK KNIGHT ⚘#8733  1\`\``)
                                    await message.channel.overwritePermissions(men.id, {
                                        SEND_MESSAGES: false
                                    });
                                    setTimeout(async s => {
                                        await message.channel.overwritePermissions(men.id, {
                                            SEND_MESSAGES : true
                                        })
                                        message.channel.send(`<@${men.id}> **UnMuted !**`)
                                    }, args*60000);
            message.channel.send(`<@${men.id}> **Muted For ${args} Minutes :zipper_mouth: **`)
            
                                }
    module.exports.config = {
      command: "mute"
    }


