let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Jika Kamu Menemukan Fitur Error, Silahkan Ikut Langkah Dibawah*\n\nContoh:\n- ${usedPrefix + command} Laporan Kamu`
    if (text.length < 10) throw `*Laporan Terlalu Pendek, Minimal 10 Karakter*`
    if (text.length > 1000) throw `*Laporan Terlalu Panjang, Maksimal 1000 Karakter*`
    let teks = `*${command.toUpperCase()}!*\n\n- Dari: *@${m.sender.split`@`[0]}*\n- Pesan: *${text}*\n`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply(`_Pesan Terkirim Kepemilik Bot, Jika ${command.toLowerCase()} Hanya Main-main Tidak Akan Ditanggapi._`)
}
handler.help = ['report', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.command = /^(report|request)$/i
handler.register = true
export default handler