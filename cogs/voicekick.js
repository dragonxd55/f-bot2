module.exports.run = async (bot, message, args) => {
       if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }
        if(message.guild.member(bot.user).hasPermission('MOVE_MEMBERS') && !message.guild.member(bot.user).hasPermission('ADMINISTRATOR')){
            return message.reply(`I don't have the permissions to do that!`)
        }
        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }
    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
        
      message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(0);
                });
            });
            message.reply(' has been successfullly kicked from voice.');
 };
module.exports.config = {
  command: "voikik"
}
