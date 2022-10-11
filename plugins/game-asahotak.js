
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

⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}ao Untuk Bantuan
🎁Prize ${poin} EXP
    `.trim()
    conn.asahotak[id] = [
        await conn.sendBut(m.chat, caption, wm, '𝗛𝗜𝗡𝗧', '.ao', m),
        json, poin,
        setTimeout(async () => {
            if (conn.asahotak[id]) await conn.sendBut(m.chat, `*⏱️ WAKTU HABIS*\nJawabannya Adalah *${json.jawaban}*`, wm, '𝗕𝗥𝗔𝗜𝗡 𝗧𝗘𝗔𝗦𝗘𝗥', '.asahotak', conn.asahotak[id][0])
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
