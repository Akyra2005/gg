
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngojek)
    let _timers = (3600000 - __timers)
    let order = global.db.data.users[m.sender].ojekk
    let timers = clockString(_timers) 
let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
     if (new Date - global.db.data.users[m.sender].lastngojek > 3600000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 10000)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10000)}`

.trim()

let rbrb1 = (randomaku1 * 10)
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
*✔️ Mendapatkan Pelanggan...*
`

var dimas2 = `
*🥵 Mulai Mengocok...*
`

var dimas3 = `     
🥵Ahhhh, Sakitttt!! >////<
 💦Crotttt.....
`

var dimas4 = `
🥵💦💦Ahhhhhh😫
`

var hsl = `
*SEX RESULTS ${name}*

💵 Uang: *${zero4}
✨ Exp: *${zero5}*
⚠️ Warn: *1*		 
📥 Order Selesai: *1*
📨 Total Order Sebelumnya: *${order}*

${wm}
`


global.db.data.users[m.sender].warn += 1
global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ojekk += 1


setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('*🔍 Mencari Pelanggan...*')
                     }, 0) 
  user.lastngojek = new Date * 1
    } else conn.sendButton(m.chat, `Sepertinya Anda Sudah Kecapekan Silahkan Istirahat Dulu Sekitar\n🕔 *${timers}*`, wm, 'inventory', '.inv', m )
}
handler.help = ['ngewe']
handler.tags = ['rpg']
handler.command = /^(ngewe|anu)$/i
handler.register = true
handler.premium = false
handler.level = 80

export default handler


function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
