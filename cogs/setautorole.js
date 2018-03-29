const Discord = require("discord.js");
var db = require("quick.db");
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('you dont hasPermission <ADMINISTRATOR>')
    if (!args.join(" ")) return message.channel.send('Please enter arguments. `setAutoRole <role name>`')
    db.set(`autoRole_${message.guild.id}`, args.join(" ").trim()).then(i => {
        message.channel.send('successfully changed autoRole to: ' + i.text);
    })
}
module.exports.config = {
  command: "setAutoRole"
}
