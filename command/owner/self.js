const djs = require("@discordjs/collection")

module.exports = {
   name: 'self',
   desc: 'Change mode to self (Owner only)',
   category: 'owner',
   async exec(msg, sock, args) {
      if (!msg.key.fromMe) return msg.reply('Khusus owner!')
      if (djs.mode === "self") return msg.reply('Already in self mode!')
      djs.mode = "self"
      msg.replyAd('Successfully change mode to self', 'Self Mode', 'The bot can now only be used for the owner')
   }
} 
