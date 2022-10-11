import fetch from 'node-fetch'
let timeout = 60000
let poin = 4999
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
  let id = m.chat
  if (id in conn.tebakbendera) {
    conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Dichat Ini*', conn.tebakbendera[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
*GUESS THE FLAG GAME*

❓Bendera Apakah Ini?
⏱️Timeout *${(timeout / 1000).toFixed(2)} Detik*
🔎Ketik ${usedPrefix}tebe Untuk Bantuan
🎁Hadiah ${poin} EXP
    `.trim()
  conn.tebakbendera[id] = [
    await conn.sendButtonImg(m.chat, json.img, caption, wm3, '𝗛𝗜𝗡𝗧', '.tebe', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakbendera[id]) await conn.sendBut(m.chat, `*⏱️WAKTU HABIS!*\nJawabannya Adalah *${json.name}*`, '', '𝗚𝗨𝗘𝗦𝗦 𝗧𝗛𝗘 𝗙𝗟𝗔𝗚', '.tebakbendera', conn.tebakbendera[id][0])
      delete conn.tebakbendera[id]
    }, timeout)
  ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.register = true
handler.limit = true
export default handler
