const Discord = require("discord.js");
  var copy = "All CopyRights Reseaved For Luxury bot team";
  var link = "https://discord.gg/tjnFVzy";
  var img = "http://codeup.tk/s/do.php?img=26";
  var idc = "419258975650054145";
  var vr = 'Version  : 1.0.0'
  let prefix = "&";
module.exports.run = async (bot, message, args) => {
   var embed  = new Discord.RichEmbed()
      .addField("مميزات البوت :",`
        :white_check_mark: بوت عربي
        👨🚀 مبرمجين البوت 24 ساعه اونلاين يمكنك التواصل معاهم
        :wrench: تحديثات للبوت كل يوم تقريبا
        :radio_button: 24 ساعه اونلاين
        :money_with_wings: كل الخصائص مجانيه
      `)
	  .addField("اوامر الادارة :",`
	  **======================================**
**وضع الاوتو رولز** <معطل مؤقتا وجاري تطويره >
***ملحوظة وضع الاوتو رولز يحتاج الى برمشن ***
**manage roles permission**
**${prefix}imgwlc <id الروم او منشن الروم < : لتفعيل الترحيب  <تم تعطيله لتطويره وهناك مفاجئة قريبة تخص هاذا الامر**
       **======================================**
`)
	  
      .addField("اوامر السيرفرات :",`
      **======================================**
    **${prefix}server  : معلومات عن السيرفر**
    **${prefix}clear   : لحذف رسائل السيرفر**
    **<mute / <unmute : لأعطاء شخص ميوت / لألغاء الميوت من على الشخص**
    **${prefix}bc      : لأرسال رساله جماعيه فى مربع امبد**
    **======================================**
      `)
      .addField("اوامر الاشخاص :",`
      **======================================**
**${prefix}id : لأظهار ملف التعريف الخاص بك**
**${prefix}profile : لأظهار البروفايل الخاص فيك < جميع اوامر البروفايل معطله لتطويرها بفكرة ابداعية مختلفة< **
**${prefix}daily : لاخذ هديتك اليومية **
**${prefix}rep : لاعطاء لايك**
**${prefix}myinfo  : لمعرفه معلومات ال بلاينج و غيرو **
**${prefix}short   : لاختصار الروابط **
**${prefix}discrim : للبحث عن ديسكريم او رؤية من لديه نفس ديسركيمك تاقك **
**${prefix}icon : لعرض صورة السيرفر**
**${prefix}avatar : لعرض صورة المستخدم**
**${prefix}info or uptime : لمعرفة معلومات عن البوت**
**${prefix}link : للحصول على رابط السيرفر الذي انت به **
**${prefix}server : لمعرفة معلموات عن السيرفر**
**${prefix}time : لمعرفة الساعة الان **
**${prefix}tweet : لكتابة تغريدة داخل صورة**
  **======================================**
`)
.addField("الدعم الفني :",`
**======================================**
**${prefix}support  : سيرفر الدعم الخاص ب سيمبل بوت **
**${prefix}invite   : لأضافه سيمبل بوت الى سيرفرك   **
**${prefix}info     : للتعرف على البوت اكثر **
  **======================================**
`)
.addField("رابط دعوه luxury bot 💎 :",`
**======================================**
**https://discord.gg/tjnFVzy**
**======================================**
`)
.addField("رابط سيرفر  luxury bot 💎 :",`
**======================================**
**https://discord.gg/tjnFVzy**
**======================================**
`)
.setFooter(copy,img)
.setColor('RANDOM')
      message.author.send({embed})
      message.reply("الرجاء التأكد من الخاص :mailbox_with_mail: ");
      message.react('💜')
  }
module.exports.config = {
  command: "help"
}
