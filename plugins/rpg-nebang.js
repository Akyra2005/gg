let handler = async (m, { 
conn, usedPrefix
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastlumber)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers) 
    let penebang = await conn.getName(m.sender)
    
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${usedPrefix}eat`)
    if (user.lastlumber > 10800000) throw m.reply(`Kamu masih kelelahan\nHarap tunggu ${timers} lagi`)
    
    let rndm1 = `${Math.floor(Math.random() * 10)}`
		let rndm2 = `${Math.floor(Math.random() * 8000)}`
		let rndm3 = `${Math.floor(Math.random() * 2500)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10)
let ran3 = (rndm3 * 10)

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`
let hmsil3 = `${ran3}`

let jln = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

✔️ ${penebang} Mencari area....
`

let jln2 = `
⬛⬛⬛⬛⬛⬛🚶⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

➕ ${penebang} Hampir sampai....
`

let jln3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛🚶
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

➕ ${penebang} Mulai menebang....
`

let jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️ 🏘️ 🚶

➕ ${penebang}
💹 Menerima hasil....
`

let hsl = `
*RESULTS OF CHOOTING TREES*

 *🌲 = ${hmsil1}Kayu*
 *💵 = ${hmsil2} Money*
 *✨ = ${hmsil3} Exp*
 
 Stamina Anda Berkurang -20
`

user.axedurability -= 5
user.stamina -= 20
user.money += hmsil2
user.kayu += hmsil1
user.exp += hmsil3
	
setTimeout(() => {
                     conn.sendButton(m.chat, hsl, wm, null, [
		['Inventory', '/inv']
	], m)
                     }, 27000) 
               
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, jln4, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                      }, 25000)
                
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, jln3, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 20000) 
                        
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, jln2, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 15000) 
                    
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, jln, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 10000) 
                     
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, `🔍 ${penebang} Mencari Area nebang.....`, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 0) 
  user.lastlumber = new Date * 1
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang|menebang)$/i
handler.group = true
export default handler
handler.level = 1
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days* ', h, ' *Hours* ', m, ' *Minute* ', s, ' *Second* '].map(v => v.toString().padStart(2, 0)).join('')
}
