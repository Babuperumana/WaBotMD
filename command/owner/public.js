const djs = require("@discordjs/collection")

module.exports = {
   name: 'public',
   desc: 'Change mode to public (for all users)',
   category: 'owner',
   async exec(msg, sock, args) {
      if (!msg.key.fromMe) return msg.reply('Khusus owner!')
      if (djs.mode === "public") return msg.reply('Already in public mode!')
      djs.mode = "public"
      msg.replyAd('Successfully changing the mode to public', 'Public Mode', 'Bot can now be used for all users')
   }
} 
