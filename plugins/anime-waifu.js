import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '*The Website is Error*'
    conn.sendButton(m.chat, '*Results From Waifu*', author, json.url, [['𝗡𝗘𝗫𝗧 ▶️', `${usedPrefix}waifu`]], m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.limit = true
handler.register = true
handler.command = /^(waifu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
