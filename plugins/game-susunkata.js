import fetch from 'node-fetch'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.susunkata = conn.susunkata ? conn.susunkata : {}
    let id = m.chat
    if (id in conn.susunkata) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.susunkata[id][0])
        throw false
    }
    let res = await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')
    if (!res.ok) throw eror
    let data = await res.json()
    let json = data[Math.floor(Math.random() * data.length)]
    let caption = `
*WORD GAMES*

*${json.soal}*

📦Tipe: ${json.tipe}
⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}suka Untuk Bantuan
🎁Hadiah: ${poin} EXP
`.trim()
    conn.susunkata[id] = [
        await conn.sendBut(m.chat, caption, wm, '𝗛𝗜𝗡𝗧', '.suka'),
        json, poin,
        setTimeout(async () => {
            if (conn.susunkata[id]) await conn.sendBut(m.chat, `*⏱️WAKTU HABIS!*\nJawabannya Adalah *${json.jawaban}*`, wm, '𝗖𝗢𝗠𝗣𝗟𝗘𝗧𝗘 𝗪𝗢𝗥𝗗', '.susunkata')
            delete conn.susunkata[id]
        }, timeout)
    ]
}
handler.help = ['susunkata']
handler.tags = ['game']
handler.command = /^susunkata/i
handler.register = true
handler.limit = true
export default handler
