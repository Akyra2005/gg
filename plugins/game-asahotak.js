
import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.asahotak = conn.asahotak ? conn.asahotak : {}
    let id = m.chat
    if (id in conn.asahotak) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.asahotak[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
*BRAIN TEACHING GAMES*

*${json.soal}*

β±οΈTimeout *${(timeout / 1000).toFixed(2)} Detik*
πKetik ${usedPrefix}ao Untuk Bantuan
πPrize ${poin} EXP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendBut(m.chat, caption, wm, 'πππ‘π§', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendBut(m.chat, `*β±οΈ WAKTU HABIS*\nJawabannya Adalah *${json.jawaban}*`, wm, 'ππ₯πππ‘ π§πππ¦ππ₯', '.asahotak', conn.asahotak[id][0])
            delete conn.asahotak[id]
        }, timeout)
    ]
}
handler.help = ['asahotak']
handler.tags = ['game']
handler.command = /^asahotak/i
handler.register = true
handler.limit = true
export default handler
