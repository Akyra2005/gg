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

⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}teka Untuk Bantuan
🎁Hadiah ${poin} EXP
`.trim()
    conn.tebakkata[id] = [
        await conn.sendButton(m.chat, caption, author, ['𝗛𝗜𝗡𝗧', `${usedPrefix}teka`], m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakkata[id]) conn.sendButton(m.chat, `*⏱️WAKTU HABIS!*\nJawabannya Adalah *${json.jawaban}*`, author, ['𝗚𝗨𝗘𝗦𝗦 𝗧𝗛𝗘 𝗪𝗢𝗥𝗗', `${usedPrefix}tebakkata`], conn.tebakkata[id][0])
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
