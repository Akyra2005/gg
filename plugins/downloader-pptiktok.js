import fetch from 'node-fetch'
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*Example: #pptiktok Onlyonegreat*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=KitsuneOFC`
conn.sendFile(m.chat, res, 'error.jpg', `*Sukses Mengambil Foto User ${text}*`, m, false)
}
handler.help = ['pptiktok'].map(v => v + ' <user>')
handler.tags = ['downloader']
handler.command = /^(p((rofilet(iktok|t)|pt(iktok|t))|ptik)|t(ik(tokp(rofile|p)|pp)|tp(rofile|p)))$/i
export default handler
