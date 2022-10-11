let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Reply Gambar Dengan Perintah *${usedPrefix + command}*'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `Reply Gambar Dengan Perintah *${usedPrefix + command}*`
}
handler.help = ['setpp']
handler.tags = ['group']

handler.command = /^setpp$/i
handler.register = true
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
