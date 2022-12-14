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

๐ฆTipe: ${json.tipe}
โฑ๏ธTimeout *${(timeout / 1000).toFixed(2)} Detik*
๐Ketik ${usedPrefix}suka Untuk Bantuan
๐Hadiah: ${poin} EXP
`.trim()
    conn.susunkata[id] = [
        await conn.sendBut(m.chat, caption, wm, '๐๐๐ก๐ง', '.suka'),
        json, poin,
        setTimeout(async () => {
            if (conn.susunkata[id]) await conn.sendBut(m.chat, `*โฑ๏ธWAKTU HABIS!*\nJawabannya Adalah *${json.jawaban}*`, wm, '๐๐ข๐ ๐ฃ๐๐๐ง๐ ๐ช๐ข๐ฅ๐', '.susunkata')
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
