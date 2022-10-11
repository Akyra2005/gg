let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendButton(m.chat, '*Liu Liu Liu Liu Liu We Heard That There Is A Lolicon Here*', author, global.API('https://some-random-api.ml', '/canvas/lolice', {
        avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), [['𝗟𝗢𝗟𝗜𝗖𝗘 𝗔𝗚𝗔𝗜𝗡', `${usedprefix}lolice`]], m)
}

handler.help = ['lolice']
handler.tags = ['maker']
handler.register = true
handler.limit = true
handler.command = /^(lolice)$/i

export default handler