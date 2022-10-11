import { tebakgambar } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.sendButton(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', author, null, buttons, conn.tebakgambar[id][0])
        throw false
    }
    let json = await tebakgambar()
    // if (!json.status) throw json
    let caption = `
*GUESS PICTURE GAME*

⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}hint Untuk Bantuan
🎁Hadiah ${poin} EXP
    `.trim()
    conn.tebakgambar[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakgambar[id]) conn.sendButton(m.chat, `*⏱️WAKTU HABIS!*\nJawabannya Adalah *${json.jawaban}*`, author, null, [
                ['𝗚𝗨𝗘𝗦𝗦 𝗧𝗛𝗘 𝗣𝗜𝗖𝗧𝗨𝗥𝗘', '/tebakgambar']
            ], conn.tebakgambar[id][0])
            delete conn.tebakgambar[id]
        }, timeout)
    ]
}
handler.help = ['tebakgambar']
handler.tags = ['game']
handler.command = /^tebakgambar/i
handler.register = true
handler.limit = true
export default handler

const buttons = [
    ['hint', '/hint'],
    ['nyerah', 'menyerah']
]
