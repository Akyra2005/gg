let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
*DONATE TO SUPPORT BOT*

*💳PAYMENT*
Pulsa : *0822-5347-9547*
Dana : *0822-5347-9547*
Ovo : *0822-5347-9547*
Gopay : *0822-5347-9547*
Saweria :
*https://saweria.co/kitsunee928*

`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
