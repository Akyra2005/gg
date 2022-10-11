let handler = async (m, { conn }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (!(id in conn.tekateki)) throw 0
    let json = conn.tekateki[id][1]
    conn.reply(m.chat, '```' + json.bantuan + '```\nℹ️Balas Soalnya, Bukan Pesan Ini!', conn.tekateki[id][0])
}
handler.command = /^tete$/i

handler.limit = 1

export default handler