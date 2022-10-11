let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '15'
let sn = '25'
let ss = '35'
let sp = '40'
let sv = '75'
//premium
let ph = '10'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '75'
let info = `
*RENT AND PREMIUM*


*🛍️ SEWA BOT*
 • Lowest: 5K/Grup (1 minggu)
 • Intermediate: 20K/Grup (1 bulan)
 • Highest: 35K/Grup (2 bulan)
 • Best: 45K/Grup (4 bulan)                                                      
 • Matchless: 90K/Grup (12 bulan)

*🛍️ PREMIUM USER*
 • Thousands: 4K (1 minggu)
 • Hundreds: 15K (1 bulan)
 • Millionaire: 29 (2 bulan)
 • Billionaire: 38K (4 bulan)                                                      
 • Trillionaire: 70K (12 bulan)

*💳 PAYMENT*
 Dana, Ovo, Gopay, Saweria & Pulsa Telkom ( +5K )
    
 Contact:
 wa.me/6281347927862

*🏷️ Mahal? Bisa Ditawar.*
`
const sections = [
   {
	title: `S E W A   B O T`,
	rows: [
	    {title: "🏷️ 𝗟𝗼𝘄𝗲𝘀𝘁", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: 5K (1 Minggu)' },
	    {title: "🏷️ 𝗜𝗻𝘁𝗲𝗿𝗺𝗲𝗱𝗶𝗮𝘁𝗲", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: 20K (1 Bulan)' },
	{title: "🏷️ 𝗛𝗶𝗴𝗵𝗲𝘀𝘁", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: 35K (2 Bulan)' },
	{title: "🏷️ 𝗕𝗲𝘀𝘁", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: 45K (4 Bulan)' },
	{title: "🏷️ 𝗠𝗮𝘁𝗰𝗵𝗹𝗲𝘀𝘀", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: 90K (12 Bulan)' },
	]
    }, {
    title: `P R E M I U M   U S E R`,
	rows: [
	    {title: "⭐ 𝗧𝗵𝗼𝘂𝘀𝗮𝗻𝗱𝘀", rowId: '.order *Paket:* HEMAT • Premium', description: 'PRICE: 4K (1 Minggu)' },
	    {title: "⭐ 𝗛𝘂𝗻𝗱𝗿𝗲𝗱𝘀", rowId: '.order *Paket:* NORMAL • Premium', description: 'PRICE:15K (1 Bulan)' },
	{title: "⭐ 𝗠𝗶𝗹𝗹𝗶𝗼𝗻𝗮𝗶𝗿𝗲", rowId: '.order *Paket:* PRO • Premium', description: 'PRICE: 29K (2 Bulan)' },
	{title: "⭐ 𝗕𝗶𝗹𝗹𝗶𝗼𝗻𝗮𝗶𝗿𝗲", rowId: '.order *Paket:* VIP • Premium', description: 'PRICE: 38K (4 Bulan)' },
	{title: "⭐ 𝗧𝗿𝗶𝗹𝗹𝗶𝗼𝗻𝗮𝗶𝗿𝗲", rowId: '.order *Paket:* PERMANENT • Premium', description: 'PRICE: 70K (12 Bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Order Here",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
