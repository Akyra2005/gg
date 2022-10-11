import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
    if (!/video|audio/.test(mime)) throw `Reply Video/VN Yang Ingin Diubah Formatnya Ke Audio (MP3) Dengan Perintah *${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '*Tidak Dapat Mengunduh Media*'
    let audio = await toAudio(media, 'mp4')
    if (!audio.data) throw '*Tidak Dapat Mengonversi Media Ke MP3*'
    conn.sendFile(m.chat, audio.data, 'audio.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']

handler.command = /^to(mp3|a(udio)?)$/i
handler.register = true
handler.limit = true
export default handler