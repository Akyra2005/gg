import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*hint/i.test(m.quoted.text) || /.*hint/i.test(m.text))
        return !0
    this.tebakgambar = this.tebakgambar ? this.tebakgambar : {}
    if (!(id in this.tebakgambar))
        return conn.sendButton(m.chat, '*Soal Itu Telah Berakhir*', author, null, buttonTebakgambar, m)
    if (m.quoted.id == this.tebakgambar[id][0].id) {
        let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakgambar[id][3])
            delete this.tebakgambar[id]
            return conn.sendButton(m.chat, '*You Give Up.*', author, null, buttonTebakgambar, m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakgambar[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakgambar[id][2]
            conn.sendButton(m.chat, `*✅ BENAR!*\n+${this.tebakgambar[id][2]} XP`, author, null, buttonTebakgambar, m)
            clearTimeout(this.tebakgambar[id][3])
            delete this.tebakgambar[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*DIKIT LAGI!*`)
        else
            conn.sendButton(m.chat, `*SALAH!*`, author, null, [
                ['𝗛𝗜𝗡𝗧', '/hint'],
                ['𝗦𝗨𝗥𝗥𝗘𝗡𝗗', 'menyerah']
            ], m)
    }
    return !0
}
export const exp = 0

const buttonTebakgambar = [
    ['𝗚𝗨𝗘𝗦𝗦 𝗧𝗛𝗘 𝗣𝗜𝗖𝗧𝗨𝗥𝗘', '/tebakgambar']
]