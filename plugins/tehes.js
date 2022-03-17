let handler = async (m, { conn }) => {
  m.reply(`
🍹nih banh
`.trim())
}
handler.help = ['ts']
handler.customPrefix = /^ts?$/i
handler.command = new RegExp

module.exports = handler
