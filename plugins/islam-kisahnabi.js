import fetch from 'node-fetch'

let handler = async (m, {conn, text, usedPrefix, command }) => {
     if (!text) throw `*Masukan Nama Nabi*\nExample: ${usedPrefix + command} adam`
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") throw "*Tidak Ditemukan, Coba Jangan Pakai Huruf Kapital*"
     
     let hasil = `*ð³ É´á´ÊÉª:* ${kisah.name}
*ð á´á´É´É¢É¢á´Ê Êá´ÊÉªÊ:* ${kisah.thn_kelahiran}
 *ð á´á´á´á´á´á´ Êá´ÊÉªÊ:* ${kisah.tmp}
*ð á´sÉªá´:* ${kisah.usia}

*â â â â â â â â [ K I S A H ] â â â â â â â â*

${kisah.description}`

     conn.reply(m.chat, hasil, m)

     }
handler.help = ['kisahnabi <name>']
handler.tags = ['islami']
handler.command = /^kisahnabi$/i
handler.register = false
handler.limit = true

export default handler