import { siapakahaku } from '@bochilteam/scraper'

let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (id in conn.siapakahaku) {
        conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.siapakahaku[id][0])
        throw false
    }
    const json = await siapakahaku()
    let caption = `
*THE GAME WHO AM I*

❓Siapakah Aku? 
*${json.soal}*

⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}who Untuk Bantuan
🎁Hadiah: ${poin} EXP
`.trim()
    conn.siapakahaku[id] = [
        await conn.sendButton(m.chat, caption, author, ['𝗛𝗜𝗡𝗧', `${usedPrefix}who`], m),
        json, poin,
        setTimeout(() => {
            if (conn.siapakahaku[id]) conn.sendButton(m.chat, `*⏱️WAKTU HABIS*\nJawabannya Adalah *${json.jawaban}*`, author, ['𝗪𝗛𝗢 𝗔𝗠 𝗜', '/siapakahaku'], conn.siapakahaku[id][0])
            delete conn.siapakahaku[id]
        }, timeout)
    ]
}
handler.help = ['siapakahaku']
handler.tags = ['game']
handler.command = /^siapa(kah)?aku/i
handler.register = true
handler.limit = true
export default handler
