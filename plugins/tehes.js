let handler = async (m, { conn }) => {
  m.reply(`
{\__/}
( • . • )
/ > 🍹Nih banh
`.trim())
}
handler.help = ['ts']
handler.customPrefix = /^ts?$/i
handler.command = new RegExp

module.exports = handler
