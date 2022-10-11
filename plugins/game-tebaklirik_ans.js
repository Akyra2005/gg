import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teli/i.test(m.quoted.text)) return !0
    this.tebaklirik = this.tebaklirik ? this.tebaklirik : {}
    if (!(id in this.tebaklirik)) return m.reply('*Soal Itu Telah Berakhir*')
    if (m.quoted.id == this.tebaklirik[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebaklirik[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebaklirik[id][2]
            conn.sendBut(m.chat, `*✅ BENAR!*\n+${this.tebaklirik[id][2]} XP`, wm, '𝗚𝗨𝗘𝗦𝗦 𝗧𝗛𝗘 𝗟𝗬𝗥𝗜𝗖𝗦', '.tebaklirik', m)
            clearTimeout(this.tebaklirik[id][3])
            delete this.tebaklirik[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*DIKIT LAGI!*`)
        else m.reply(`*SALAH!*`)
    }
    return !0
}
handler.exp = 0

export default handler
