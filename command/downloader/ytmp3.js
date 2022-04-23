const { ytIdRegex, yta } = require("../../lib/scrape/y2mate")

module.exports = {
   name: 'ytmp3',
   alias: ['yta','ytaudio'],
   category: 'downloader',
   desc: 'Download audio youtube',
   use: '<link youtube> <resolusi>',
   async exec(msg, sock, args) {
      if (!ytIdRegex.test(args[0])) throw "Pastikan link yang kamu input adalah link youtube!"
      try {
        const resol = args[1] ? args[1] : "128kbps"
        const res = await yta(args[0], resol)
        const { dl_link, thumb, title, filesizeF, filesize } = res
        sock.sendFileFromUrl(msg.from, thumb, `Youtube Audio\n\n${title}\n${filesize}`)
        sock.sendMessage(msg.from, { audio: { url: dl_link }, ptt: false })
      } catch (e) {
          msg.reply(e.message)
      }
   }
}