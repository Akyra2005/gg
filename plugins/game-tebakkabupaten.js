import fetch from 'node-fetch'
let timeout = 30000
let poin = 3999
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakkabupaten = conn.tebakkabupaten ? conn.tebakkabupaten : {}
  let id = m.chat
  if (id in conn.tebakkabupaten) {
    conn.reply(m.chat, '*Masih Ada Soal Belum Terjawab Di Chat Ini*', conn.tebakkabupaten[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
*DISTRICT GUESS GAME*

โKabupaten Apakah Ini?
โฑ๏ธTimeout *${(timeout / 1000).toFixed(2)} Detik*
๐Ketik ${usedPrefix}tebu Untuk Bantuan
๐Hadiah ${poin} EXP
    `.trim()
  conn.tebakkabupaten[id] = [
    await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), caption, '', '๐๐๐ก๐ง', '.tebu', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakkabupaten[id]) await conn.sendBut(m.chat, `*โฑ๏ธWAKTU HABIS!*\nJawabannya Adalah *${json.title}*`, '', '๐๐จ๐๐ฆ๐ฆ ๐๐๐ฆ๐ง๐ฅ๐๐๐ง', '.tebakkabupaten', conn.tebakkabupaten[id][0])
      delete conn.tebakkabupaten[id]
    }, timeout)
  ]
}
handler.help = ['tebakkabupaten']
handler.tags = ['game']
handler.command = /^tebakkabupaten/i
handler.register = true
handler.limit = true
export default handler
