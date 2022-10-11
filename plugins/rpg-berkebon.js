const timeout = 1800000

                                     let handler = async (m, { conn, usedPrefix, text }) => {
	                                 let apelu = global.db.data.users[m.sender].bibitapel
                                     let angguru = global.db.data.users[m.sender].bibitanggur
                                     let manggau = global.db.data.users[m.sender].bibitmangga
                                     let pisangu = global.db.data.users[m.sender].bibitpisang
                                     let jeruku = global.db.data.users[m.sender].bibitjeruk 
	                                 let time = global.db.data.users[m.sender].lastberkebon + 1800000
                                     if (apelu == 0 || angguru == 0 || manggau == 0 || pisangu == 0 || jeruku == 0) return m.reply(`*Pastikan Kamu Memiliki Semua Bibit*\n*Seperti Bibit Apel, Bibit Mangga, Bibit Jeruk, Bibit Pisang, Bibit Anggur*\n\nKetik :\n${usedPrefix}buy bibitmangga 500\n\n*LIST*\nbibitmangga\nbibitanggur\nbibitpisang\nbibitjeruk\nbibitapel`)
                                     if (new Date - global.db.data.users[m.sender].lastberkebon< 1800000) throw `Anda Sudah Menanam\nMohon Tunggu Hasil Panenmu\nTunggu selama ${msToTime(time - new Date())} lagi`
                                     if (global.db.data.users[m.sender].bibitmangga > 499) {
                                 	if (global.db.data.users[m.sender].bibitapel > 499) {
                                 	if (global.db.data.users[m.sender].bibitpisang > 499) {
                                 	if (global.db.data.users[m.sender].bibitjeruk > 499) {
                                 	if (global.db.data.users[m.sender].bibitanggur > 499) {
                                     let pisangpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let anggurpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let manggapoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let jerukpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     let apelpoin = `${Math.floor(Math.random() * 500)}`.trim()
                                     global.db.data.users[m.sender].pisang += pisangpoin * 1
                                     global.db.data.users[m.sender].anggur += anggurpoin * 1
                                     global.db.data.users[m.sender].mangga += manggapoin * 1
                                     global.db.data.users[m.sender].jeruk += jerukpoin * 1
                                     global.db.data.users[m.sender].apel += apelpoin * 1
                                     global.db.data.users[m.sender].bibitpisang -= 500
                                     global.db.data.users[m.sender].bibitanggur -= 500
                                     global.db.data.users[m.sender].bibitmangga -= 500
                                     global.db.data.users[m.sender].bibitjeruk -= 500
                                     global.db.data.users[m.sender].bibitapel -= 500
                                     global.db.data.users[m.sender].lastberkebon = new Date * 1
                                     let hsl = `Selamat ${conn.getName(m.sender)}, Kamu Mendapatkan: \n*+${pisangpoin} Pisang 🍌*\n*+${manggapoin} Mangga 🥭*\n*+${anggurpoin} Anggur 🍇*\n*+${jerukpoin} Jeruk 🍋*\n*+${apelpoin} Apel 🍎*\n`
                                     conn.sendHydrated(m.chat, hsl, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                                     setTimeout(() => {
					                      conn.reply(m.chat, `*Waktunya Berkebon Lagi Kak*`, m)
					                  }, timeout)
                                  } else m.reply(`Pastikan Bibit Anggur Kamu *500* Untuk Bisa Berkebon`)
                              } else m.reply(`Pastikan Bibit Jeruk Kamu *500* Untuk Bisa Berkebon`)
                          } else m.reply(`Pastikan Bibit Pisang Kamu *500* Untuk Bisa Berkebon`)
                      } else m.reply(`Pastikan Bibit Apel Kamu *500* Untuk Bisa Berkebon`)
                  } else m.reply(`Pastikan Bibit Mangga Kamu *500* Untuk Bisa Berkebon`)
              }
handler.help = ['berkebon']
handler.tags = ['rpg']
handler.command = /^(berkebon)/i

handler.group = true
handler.limit = true

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}