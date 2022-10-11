import fetch from 'node-fetch'
let timeout = 120000
let poin = 500

let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) return conn.reply(m.chat, '*Masih Ada Soal Yang Belum Terjawab Dichat Ini*', conn.tekateki[id][0])
    let res = await fetch(API('amel', '/tekateki', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
*PUZZLE GAMES*

*${json.soal}*

⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}tete Untuk Bantuan
🎁Hadiah ${poin} EXP
`.trim()
    conn.tekateki[id] = [
        await conn.sendBut(m.chat, caption, wm, '𝗛𝗜𝗡𝗧', `.tete`, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.sendBut(m.chat, `*⏱️WAKTU HABIS!*\nJawabannya Adalah *${json.jawaban}*`, wm, '𝗣𝗨𝗭𝗭𝗟𝗘𝗦', `.tekateki`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^tekateki/i
handler.register = true
handler.limit = true
handler.game = true

export default handler