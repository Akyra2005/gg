const cooldown = 3600000
let handler = async(m, { conn, text, usedPrefix, command }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let user = global.db.data.users[who]
  let dapat = (Math.floor(Math.random() * 3600000))
  if (!who) throw '*Tag Salah Satu Lah, Yang Kamu Ingin Berdagang Bareng*'
  let ctimer = (new Date - user.lastdagang)
let _ctimer = (cooldown - ctimer)
let timers = clockString(_ctimer)
  if (user.lastdagang < cooldown) {
  if (199999 > user.money) throw '*Target Tidak Memiliki Modal Harap Masukkan modal 100000*'
  if (199999 > user.money) throw '*Kamu Tidak Memiliki Modal Harap Masukkan modal 100000*'
  let caption = `*${htki} BERDAGANG ${htka}*\nMohon Tunggu...\n@${m.sender.split("@")[0]} Dan @${who.split("@")[0]} Sedang Berdagang...\n\n@${m.sender.split("@")[0]} Dan @${who.split("@")[0]} Meletakkan Modal -${dapat} 💵`
  
  let _caption = `Selamat @${m.sender.split("@")[0]} Dan @${who.split("@")[0]} Mendapatkan Money...\n\nPenghasilan Dagang @${m.sender.split("@")[0]} Didapatkan +125000 💵\n${user.money += 125000} Money 💵 @${m.sender.split("@")[0]}\n\nPenghasilan Dagang @${who.split("@")[0]} Didapatkan +125000 💵\n${user.money += 125000} Money @${who.split("@")[0]}`
  
  let __caption = `*${htki} SUKSES ${htka}*\nSelamat @${m.sender.split("@")[0]} Dan @${who.split("@")[0]} Mendapatkan Money...\n\nPenghasilan Dagang @${m.sender.split("@")[0]} Didapatkan +175000 💵\n${user.money += 175000} Money 💵 @${m.sender.split("@")[0]}\n\nPenghasilan Dagang @${who.split("@")[0]} Didapatkan +175000 💵\n${user.money += 175000} Money 💵 @${who.split("@")[0]}`
  
  conn.sendButton(m.chat, caption, clockString(60000), null, [
      ['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', `${usedPrefix}inv`], ['𝗣𝗥𝗢𝗙𝗜𝗟𝗘', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(caption) })
    
					setTimeout(() => {
			conn.sendButton(m.chat, __caption, `SUKSES`, null, [
      ['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', `${usedPrefix}inv`], ['𝗣𝗥𝗢𝗙𝗜𝗟𝗘', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(__caption) })
		}, 10800000)

		setTimeout(() => {
			conn.sendButton(m.chat, _caption, clockString(10800000), null, [
      ['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', `${usedPrefix}inv`], ['𝗣𝗥𝗢𝗙𝗜𝗟𝗘', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(_caption) })
		}, 7200000)

		setTimeout(() => {
			conn.sendButton(m.chat, _caption, clockString(7200000), null, [
      ['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', `${usedPrefix}inv`], ['𝗣𝗥𝗢𝗙𝗜𝗟𝗘', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(_caption) })
		}, 3600000)

		setTimeout(() => {
			conn.sendButton(m.chat, _caption, clockString(3600000), null, [
      ['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', `${usedPrefix}inv`], ['𝗣𝗥𝗢𝗙𝗜𝗟𝗘', `${usedPrefix}profile`]
    ], m, { mentions: conn.parseMention(_caption) })
		}, 60000)
					user.lastdagang = new Date * 1
} else conn.sendButton(m.chat, `*Anda Sudah Berdagang Tunggu*\n${timers} Lagi..`, botdate, null, [
      ['𝗜𝗡𝗩𝗘𝗡𝗧𝗢𝗥𝗬', `${usedPrefix}inv`], ['𝗣𝗥𝗢𝗙𝗜𝗟𝗘', `${usedPrefix}profile`]
    ], m)
}
handler.help = ['berdagang'].map(v => v + ' @[tag]')
handler.tags = ['rpg']
handler.command = /^(berdagang|dagang)$/i
handler.limit = true
handler.cooldown = cooldown
export default handler 

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days* ', h, ' *Hours* ', m, ' *Minute* ', s, ' *Second* '].map(v => v.toString().padStart(2, 0)).join('')
}