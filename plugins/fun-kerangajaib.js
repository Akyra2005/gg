let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `*Cotnoh: ${usedPrefix}${command} aku manusia?*`
    m.reply(`*"${[
        'Mungkin suatu hari',
        'Tidak juga',
        'Tidak keduanya',
        'Kurasa tidak',
        'Ya',
        'Coba tanya lagi',
        'Tidak ada'
    ].getRandom()}."*`)
}
handler.help = ['kerang', 'kerangajaib'].map(v => v + ' <teks>')
handler.tags = ['kerang', 'fun']
handler.register = true
handler.command = /^(kulit)?kerang(ajaib)?$/i
handler.register = true 
export default handler
