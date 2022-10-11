let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'where\'s message?'
    if (m.quoted.mtype !== 'viewOnceMessage') throw '*Itu Bukan Pesan ViewOnce*'
    const msg = await conn.loadMessage(m.quoted.id)
    if (!msg) throw '*Tidak Dapat Membuka Pesan*'
    await conn.copyNForward(m.chat, msg, true, { readViewOnce: true })
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^readviewonce/i
handler.register = true
export default handler