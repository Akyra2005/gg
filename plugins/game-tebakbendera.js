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

โBendera Apakah Ini?
โฑ๏ธTimeout *${(timeout / 1000).toFixed(2)} Detik*
๐Ketik ${usedPrefix}tebe Untuk Bantuan
๐Hadiah ${poin} EXP
    `.trim()
  conn.tebakbendera[id] = [
    await conn.sendButtonImg(m.chat, json.img, caption, wm3, '๐๐๐ก๐ง', '.tebe', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakbendera[id]) await conn.sendBut(m.chat, `*โฑ๏ธWAKTU HABIS!*\nJawabannya Adalah *${json.name}*`, '', '๐๐จ๐๐ฆ๐ฆ ๐ง๐๐ ๐๐๐๐', '.tebakbendera', conn.tebakbendera[id][0])
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
