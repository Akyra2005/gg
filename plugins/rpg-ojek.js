
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngojek)
    let _timers = (3600000 - __timers)
    let order = global.db.data.users[m.sender].ojekk
    let timers = clockString(_timers) 
    let name = await conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${usedPrefix}eat8`)
    if (user.lastngojek > 3600000) throw m.reply(`Kamu masih kelelahan\nHarap tunggu ${timers} lagi`)
    
     if (new Date - global.db.data.users[m.sender].lastngojek > 3600000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 7000)}`
let randomaku5 = `${Math.floor(Math.random() * 8000)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 10)
let rbrb4 = (randomaku4 * 10)
let rbrb5 = (randomaku5 * 10)

var zero1 = `${rbrb1}`
var zero2 = `${rbrb2}`
var zero3 = `${rbrb3}`
var zero4 = `${rbrb4}`
var zero5 = `${rbrb5}`

var dimas = `
πΆβ¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
ποΈποΈποΈποΈπ³  π³ ποΈ       π΅
βοΈ Mendapatkan orderan....
`

var dimas2 = `
πΆπ΅β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
ποΈποΈποΈποΈπ³  π³ ποΈ       
β Mengantar Ke Tujuan....
`

var dimas3 = `
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬π΅β¬β¬
ποΈποΈποΈποΈπ³  π³ ποΈ       
β Sampai Di Tujuan....
`

var dimas4 = `
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬β¬β¬β¬
β¬β¬β¬β¬β¬β¬β¬π΅β¬β¬
ποΈποΈποΈποΈπ³  π³ ποΈ πΆ  
β πΉMenerima Gaji....
`

var hsl = `
*JEEK RESULTS ${name}*

π΅ Uang: *${zero4}*
β¨ Exp: *${zero5}*		 
π₯ Order Selesai: *1*
π¨ Total Order Sebelumnya: *${order}*
`


global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1


setTimeout(() => {
                     conn.sendHydrated(m.chat, hsl, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 27000) 
               
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, dimas4, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                      }, 25000)
                
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, dimas3, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 20000) 
                        
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, dimas2, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 15000) 
                    
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, dimas, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 10000) 
                     
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, `*π ${name} Mencari Pelanggan...*`, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 0) 
  user.lastngojek = new Date * 1
    } else conn.sendButton(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu Sekitar\nπ *${timers}*`, wm, null, [['inventory', '.inv']], m )
}
handler.help = ['ojek']
handler.tags = ['rpg']
handler.command = /^(ojek|ngojek|gojek|jadiojek)$/i
handler.register = true
handler.group = true
handler.level = 2
export default handler


function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days* ', h, ' *Hours* ', m, ' *Minute* ', s, ' *Second* '].map(v => v.toString().padStart(2, 0)).join('')
}