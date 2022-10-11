let handler = async (m, { conn, text }) => {

let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw '- Format: *#spamwa nomor|teks|jumlah*\n- Contoh: *#spamwa 28276372827|nihil|99*'
if (!pesan) throw '- Format: *#spamwa nomor|teks|jumlah*\n- Contoh: *#spamwa 28276372827|nihil|99*'
if (jumlah && isNaN(jumlah)) throw '- Format: *#spamwa nomor|teks|jumlah*\n- Contoh: *#spamwa 28276372827|nihil|99*'

let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 50) throw '*Maks 50 Pesan*'
await m.reply(`*Spam Success To That Number*\nEstimated Sent All *${fixedJumlah}*`)
for (let i = fixedJumlah; i > 1; i--) {
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['tools']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = true
handler.private = true
handler.limit = false
export default handler
