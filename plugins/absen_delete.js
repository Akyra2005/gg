let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.sendButton(m.chat, `*Tidak Ada Absen Berlangsung Digrup Ini*\n\n*• Tekan Tombol Dibawah Untuk Menghapus Absen*`, `${'𝐑𝐄𝐌𝐎𝐕𝐄 𝐀𝐁𝐒𝐄𝐍𝐓'}`, [
                ['𝐌𝐔𝐋𝐀𝐈 𝐀𝐁𝐒𝐄𝐍', `${usedPrefix}mulaiabsen`]
            ], m)
    delete conn.absen[id]
    m.reply(`*Absen Berhasil Dihapus*`)
}
handler.help = ['hapusabsen']
handler.tags = ['main','absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
export default handler
