let timeout = 60000
let poin = 10000
let poin_lose = -20000
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*Selesaikan Suitmu Yang Sebelumnya*'
  if (!m.mentionedJid[0]) return m.reply(`*Siapa Yang Ingin Kamu Tantang?*\n-Contoh: *${usedPrefix}suit @${owner[1]}*`, m.chat, { contextInfo: { mentionedJid: [owner[1] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*Orang Yang Kamu Tantang Sedang Bermain Suit Bersama Orang Lain*`
  let id = 'suit_' + new Date() * 1
  let caption = `
*SUIT PvP 🤟*

@${m.sender.split`@`[0]} Menantang @${m.mentionedJid[0].split`@`[0]} Untuk Bermain Suit

Silahkan @${m.mentionedJid[0].split`@`[0]} 
`.trim()
  let footer = `• Ketik "terima/ok/gas" Untuk Memulai Suit\n• Ketik "tolak/gabisa/nanti" Untuk Menolak`
  conn.suit[id] = {
    chat: await conn.send2Button(m.chat, caption, footer, '𝗔𝗖𝗖𝗘𝗣𝗧', 'ok', '𝗥𝗘𝗝𝗘𝗖𝗧', 'tolak', m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `*Waktu Suit Habis*`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.tags = ['game']
handler.help = ['suitpvp', 'suit2'].map(v => v + ' @tag')
handler.command = /^suit(pvp|2)$/i
handler.limit = true
handler.group = true
handler.register = true
export default handler
