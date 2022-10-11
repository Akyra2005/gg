import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.contentText)) return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return m.reply('*Soal Itu Telah Berakhir*')
    if (m.quoted.id == this.asahotak[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
        if (['.ao', '𝗛𝗜𝗡𝗧', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.asahotak[id][2]
            await this.sendBut(m.chat, `*✅ BENAR* +${this.asahotak[id][2]} XP`, '', '𝗕𝗥𝗔𝗜𝗡 𝗧𝗘𝗔𝗦𝗘𝗥', '.asahotak', m)
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*DIKIT LAGI*`)
        else m.reply(`*SALAH*`)
    }
    return !0
}
handler.exp = 0

export default handler
