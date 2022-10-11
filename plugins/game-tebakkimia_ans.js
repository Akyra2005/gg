import similarity from 'similarity'
const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teki/i.test(m.quoted.contentText)) return !0
    this.tebakkimia = this.tebakkimia ? this.tebakkimia : {}
    if (!(id in this.tebakkimia)) return m.reply('*Tebak Kimia Telah Berakhir*')
    if (m.quoted.id == this.tebakkimia[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkimia[id][1]))
        if (['.teka', '𝗛𝗜𝗡𝗧', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.unsur.toLowerCase().trim()) {
            db.data.users[m.sender].exp += this.tebakkimia[id][2]
            await this.sendBut(m.chat, *✅ BENAR!* + ` +${this.tebakkimia[id][2]} XP`, wm, '𝗚𝗨𝗘𝗦𝗦 𝗖𝗛𝗘𝗠𝗜𝗦𝗧𝗥𝗬', '.tebakkimia', m)
            clearTimeout(this.tebakkimia[id][3])
            delete this.tebakkimia[id]
        } else if (similarity(m.text.toLowerCase(), json.unsur.toLowerCase().trim()) >= threshold) m.reply(*DIKIT LAGI!*)
        else m.reply(*SALAH!*)
    }
    return !0
}

export default handler
