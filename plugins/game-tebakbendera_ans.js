import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tebe/i.test(m.quoted.contentText)) return !0
  this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
  if (!(id in this.tebakbendera)) return m.reply('*Soal Itu Telah Berakhir*')
  if (m.quoted.id == this.tebakbendera[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
    if (['.tebe', '𝗛𝗜𝗡𝗧', ''].includes(m.text)) return !0
    if (m.text.toLowerCase() == json.name.toLowerCase()) {
      global.db.data.users[m.sender].exp += this.tebakbendera[id][2]
      await this.sendBut(m.chat, `*✅ BENAR!* +${this.tebakbendera[id][2]} XP`, '', '𝗚𝗨𝗘𝗦𝗦 𝗧𝗛𝗘 𝗙𝗟𝗔𝗚', '.tebakbendera', m)
      clearTimeout(this.tebakbendera[id][3])
      delete this.tebakbendera[id]
    } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*DIKIT LAGI!*`)
    else m.reply(`*SALAH!*`)
  }
  return !0
}
handler.exp = 0

export default handler
