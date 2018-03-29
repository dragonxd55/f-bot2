//-------------start require ---------//
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const ms = require('ms');
const dateFormat = require('dateformat');
const moment = require('moment');
moment().format();
const colors = require("colors");
const embed = require('embed');
const fs = require('fs');
const pretty = require("pretty-ms");
const rn = require("random-number");
const done = {};
const msg = parseInt();
const prefix = "F-";
//------------end require ----------//

//-----------strat var global -------------//
var Commandslist = fs.readFileSync('Data/Commands.txt', 'utf8');
bot.commands = new Discord.Collection();

//comand handler

function loadCmds() {
fs.readdir('./cogs/', (err, files) => {
  if(err) console.error(err);

    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsfiles.length <= 0) { return console.log('No Cogs fuond....')}
    else { console.log(jsfiles.length + 'cogs found.') }

    jsfiles.forEach((f, i) => {
        delete require.cache[require.resolve(`./cogs/${f}`)];
        var cmds = require(`./cogs/${f}`);
        console.log(`cogs ${f} loading.....`);
        bot.commands.set(cmds.config.command, cmds);
    })

})

}
//comand handler

//-----------end var-----------------//


bot.on('ready', () => {
  console.log('bot launched....')
});



//---------------------------------------//

//function
loadCmds();
//listener
 bot.on('message', message => {



      if (!message.content.startsWith(prefix)) return;

  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 341511920953720832) return;

if (message.content.startsWith(prefix + 'setply')) {
  bot.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
} else

if (message.content.startsWith(prefix + 'stream')) {
  bot.user.setGame(argresult, "https://www.twitch.tv/Mishary00_");
    message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
} else

if (message.content.startsWith(prefix + 'name')) {
  bot.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
  return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
} else
if (message.content.startsWith(prefix + 'pic')) {
  bot.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
}
});
bot.on('message', message => {
    //var
    var sender = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.length).split(" ");
    var args = cont.slice(1);
    //end var


    if (!message.content.startsWith(prefix)) return;

    var cmd = bot.commands.get(cont[0]);
    if (cmd) cmd.run(bot, message, args);

    //reload load unload

    if (msg === prefix + 'RESTART') {
        message.channel.send({embed:{description: "All cogs restarted"}})
        message.channel.send('All cogs redtarted')
        loadCmds()
    }

    //end reload load unload
        //profanities


    //if conditnon
    if (sender.id === '419188357181079553') {
        return;
    }
    const Discord = require('discord.js');

    //Commands

    if (msg === prefix + 'HELPER') {
        message.channel.send(Commandslist)
    }

    //end Commands

   /** if (msg === prefix + 'PING') {
        message.channel.send('Pong!')
    }
    **/
    //user info
    // Score/Stats System

    // Score/Stats System
    //if conditnon
});



//consol log started bot
bot.on('ready', () => {
    console.log('bot launched....')
});

//the game

var UserBlocked = new Set(); // create a new set to save users id.

var aoasm =[
    {q:"ما عاصمة **افغانستان**",a:""},
    {q:"ما عاصمة ** البانيا**",a:"كابول"},
    {q:"ما عاصمة **الجزائر **",a:"تيرانا"},
    {q:"ما عاصمة ** **",a:"الجزائر"},
    {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
    {q:"ما عاصمة **انجولا**",a:"لواندا"},
    {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
    {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
    {q:"ما عاصمة **ارمينيا**",a:""},
    {q:"ما عاصمة ** **",a:"يريفان"},
    {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
    {q:"ما عاصمة **النمسا**",a:"فيينا"},
    {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
    {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
    {q:"ما عاصمة **البحرين**",a:"المنامة"},
    {q:"ما عاصمة ** بنجلاديش**",a:"دكـا"},
    {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
    {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
    {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
    {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
    {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
    {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
    {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
    {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
    {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
    {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
    {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
    {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
    {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
    {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
    {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
    {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
    {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
    {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
    {q:"ما عاصمة **تشاد **",a:"نجامينا"},
    {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
    {q:"ما عاصمة **الصين **",a:"بكين"},
    {q:"ما عاصمة **جزر الُقمـــر **",a:""},
    {q:"ما عاصمة ** **",a:"مورونى"},
    {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
    {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
    {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
    {q:"ما عاصمة ** كوبا**",a:"هافانا"},
    {q:"ما عاصمة ** قبرص**",a:" "},
    {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
    {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
    {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
    {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
    {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
    {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
   ];
bot.on("message", async message => {
    if(message.content == prefix+"عاصمة"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
        message.channel.send(ask.q).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== bot.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == bot.user.id) return;
           if(result.content == "عاصمة") return
           if(result.content == ask.a){
                message.channel.sendMessage(`**${result.author.username}** الإجابة صحيحة`);                return;
           } else {
                message.channel.sendMessage(`**${result.author.username}** الإجابة خاطئة`);
           }
     });
  }
});

//end the game



bot.on('message', message => {
if(message.content.startsWith(prefix + 'bc')) {
if (message.author.bot) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "Test";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
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
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});






// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
