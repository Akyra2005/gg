import crypto from 'crypto'

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 'Premium 7 Hari',
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw '*Tidak Bisa Menggunakan Kode Referal*'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw '*Kode Referal Tidak Valid*'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
*SELAMAT*
+${xp_first_time} EXP ✨
`.trim())
    m.reply(`
Seseorang Telah Menggunakan Kode Referal Kamu
*+${xp_link_creator + extra} EXP ✨*
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Dapatkan ${xp_first_time} EXP Untuk Yang Menggunakan Link/Kode Referal Dibawah Ini

- Referal Code: ${code}


Salin Link Di Bawah & Share Ke Teman Kamu

${botdate}
`.trim()
    m.reply(`
*SYARAT & KETENTUAN*
    

Dapatkan ${xp_link_creator} XP untuk setiap pengguna baru yang menggunakan kode referal kamu
${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

- Referal Code: ${code}

Bagikan link kepada teman mu yang belum pernah menggunakan
Bot ini.
Jika anda mengirimkan Code ke orang yg sudah pernah menggunakan Bot ini
maka referal tidak akan bisa di gunakan.
`.trim())
conn.sendHydrated(m.chat, bottime, share_text, null, 'https://www.whatsapp.com/otp/copy/'+'https://wa.me/' + command_link, "Salin Code", null,null, [['INVENTORY','.inv'],['PUSH EXP','.listexp']], m)
}
}
handler.help = ['ref']
handler.tags = ['main', 'xp']

handler.command = ['ref']

handler.register = true

export default handler