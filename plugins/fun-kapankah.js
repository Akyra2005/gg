let handler = async (m, { conn }) => conn.reply(m.chat, `
*FUN-KAPANKAH*

*Pertanyaan:* ${m.text}
*Jawaban:* ${(10).getRandom()} ${['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'windu', 'lustrum','dasawarsa','abad','milenium'].getRandom()} lagi ...
  `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
} : {})

handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['kerang', 'fun']
handler.customPrefix = /(\?$)/
handler.command = /^kapan(kah)?$/i
handler.register = true
export default handler