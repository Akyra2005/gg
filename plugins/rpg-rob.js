let handler = async (m, { 
conn 
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastrob)
    let _timers = (10800000 - __timers)
    let timers = clockString(_timers) 
    
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan #eat`)
    if (user.lastrob > 10800000) throw m.reply(`Kamu masih kelelahan untuk bekerja\nHarap tunggu ${timers} lagi untuk rob`)

let rndm1 = `${Math.floor(Math.random() * 5000)}`
let rndm2 = `${Math.floor(Math.random() * 5000)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10) 

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`

let jln = `
๐๏ธ          ๐

โ๏ธ Mengincar Target...
`

let jln2 = `
๐๏ธ     ๐ถ

โ Memulai Aksi....
`

let jln3 = `
๐๏ธ

โ Merampok....
`

let jln4 = `
         ๐
         
         
         
๐๏ธ

๐ตBerhasil Kabur....
`

let hsl = `
*ROBBING RESULTS*

๐ต Uang: *${hmsil1}*
โจ Exp: *${hmsil2}*		 
๐ฅ Rob Selesai: *1*

โก Stamina Anda Berkurang -20
`
user.money += ran1
user.exp += ran2
user.stamina -= 20
	
setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${jln4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${jln3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${jln2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${jln}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply(`๐Mencari Rumah.....`)
                     }, 0) 
  user.lastrob = new Date * 1
}
handler.help = ['rob']
handler.tags = ['rpg']
handler.command = /^(rob|robery)$/i
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
