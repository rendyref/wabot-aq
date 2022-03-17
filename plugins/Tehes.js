let handler = async (m, { command }) => {
  m.reply(`
{\__/}
( • . • )
/ > 🍹Nih banh
`.trim())
}
handler.help = ['ts']
handler.command = /^ts$/i

module.exports = handler
