let handler = async (m, { conn, text }) => {
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
  conn.reply(m.chat, tag, m, { contextInfo: { mentionedJid }})
}
handler.help = ['tagme']
handler.tags = ['group']
handler.command = /^tagme$/i
handler.register = true
handler.limit = true
handler.group = false

export default handler