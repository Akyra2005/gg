import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/HasamiAini/wabot_takagisan/main/whatsapp%20bot%20takagisan/whatsapp%20bot%20takagisan/lib/memeindo.json')
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url.image)).buffer(), 'This Is Just a Real Meme', '⌬ Felicia-MD', '𝗙𝗨𝗡𝗡𝗬', m)
}
handler.command = /^(meme)$/i
handler.tags = ['internet']
handler.help = ['meme']
handler.register = true
handler.limit = true
export default handler
