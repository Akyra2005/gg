let handler = async (m, { conn, text }) => {
    if (!text) throw '*Tags*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*Tags*'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, '*Successfully Banned Users*', m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.owner = true

export default handler
