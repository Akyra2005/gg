import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999

let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkimia = conn.tebakkimia ? conn.tebakkimia : {}
    let id = m.chat
    if (id in conn.tebakkimia) return conn.reply(m.chat, '*Masih Ada Soal Yang Belum Diselesaikan*', conn.tebakkimia[id][0])
    let res = await fetch(API('lol', '/api/tebak/unsurkimia', {}, 'apikey'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
*CHEMICAL GUESS GAME*

βNama Unsur Dari Lambang *${json.result.lambang}* Adalah...

β±οΈTimeout *${(timeout / 1000).toFixed(2)} Detik*
πKetik ${usedPrefix}teki Untuk Bantuan
πHadiah ${poin} EXP
`.trim()
    conn.tebakkimia[id] = [
        await conn.sendBut(m.chat, caption, wm, 'πππ‘π§', '.teki', m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkimia[id]) conn.sendBut(m.chat, `*WAKTU HABIS!*\nJawabannya Adalah *${json.result.nama}*`, wm, 'ππ¨ππ¦π¦ ππππ ππ¦π§π₯π¬', '.tebakkimia', conn.tebakkimia[id][0])
            delete conn.tebakkimia[id]
        }, timeout)
    ]
}
handler.help = ['tebakkimia']
handler.tags = ['game']
handler.command = /^tebakkimia/i
handler.register = true
handler.game = true
handler.limit = true

export default handler