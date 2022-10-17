let handler = async (m, { conn, text }) => {
    if (!text) throw '*Tags*'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*Tags*'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, '*Successfully Unbanned User*', m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban(user)?$/i
handler.owner = true

export default handler
