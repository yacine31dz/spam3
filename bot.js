const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543433690517340290")
setInterval(function() {
channel.send(`**Spam By Yacine MR3B#2227 Prisinier Server Wamlid na9ch ghba niksowata3 mh w nik mh  مزرعة كريدت**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
