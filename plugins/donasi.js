let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa XL [081804832728]
│ • Pulsa Telkomsel [081318759394]
│ • Saweria https://saweria.co/kurrtod
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
