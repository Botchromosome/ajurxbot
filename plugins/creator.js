let handler = function (m) {
  // this.sendContact(m.chat, '6281804832728', 'Ajur', m)
  this.sendContact(m.chat, '6281804832728', 'Ajurあ', m)
  m.reply('wa.me/6281804832728')
}
handler.help = ['owner', 'creator', 'pemilikbot']
handler.tags = ['info']

handler.command = /^(owner|creator|pemilikbot)$/i

module.exports = handler
