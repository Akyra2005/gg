let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `nihil`
    if (text.length < 1 ) throw `Laporan Terlalu Pendek, Minimal 10 Karakter!`
    if (text.length > 1000) throw `Laporan Terlalu Panjang, Maksimal 1000 Karakter!`
    let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
    conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
    m.reply('*Pesanan Telah Dikirim, Harap Tunggu Konfirmasi Dari Owner...*')
}
handler.command = /^(order)$/i
export default handler