import { tebakkata } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (id in conn.tebakkata) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakkata[id][0])
        throw false
    }
    const json = await tebakkata()
    let caption = `
*GUESS WORD GAME*

*${json.soal}*

β±οΈTimeout *${(timeout / 1000).toFixed(2)} Detik*
πKetik ${usedPrefix}teka Untuk Bantuan
πHadiah ${poin} EXP
`.trim()
    conn.tebakkata[id] = [
        await conn.sendButton(m.chat, caption, author, ['πππ‘π§', `${usedPrefix}teka`], m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.sendButton(m.chat, `*β±οΈWAKTU HABIS!*\nJawabannya Adalah *${json.jawaban}*`, author, ['ππ¨ππ¦π¦ π§ππ πͺπ’π₯π', `${usedPrefix}tebakkata`], conn.tebakkata[id][0])
            delete conn.tebakkata[id]
        }, timeout)
    ]
}
handler.help = ['tebakkata']
handler.tags = ['game']
handler.command = /^tebakkata/i
handler.register = true
handler.limit = true
export default handler
