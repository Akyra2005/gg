let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!m.quoted) throw '*Reply Pesan Yang Ingin Dikunci*'
    if (!m.quoted.fileSha256) throw '*SHA256 Hash Missing*'
    let sticker = db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw '*Hash Tidak Ditemukan Dalam Basis Data*'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('*Success*')
} 
handler.help = ['un', ''].map(v => v + 'lockcmd')
handler.tags = ['database']
handler.command = /^(un)?lockcmd$/i
handler.premium = true

export default handler
