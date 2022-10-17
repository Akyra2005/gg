import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => conn.decodeJid(u.id))
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  const msg = conn.cMod(m.chat,
    generateWAMessageFromContent(m.chat, {
      [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
        text: c || ''
      }
    }, {
      quoted: m,
      userJid: conn.user.id
    }),
    text || q.text, conn.user.jid, { mentions: users }
  )
  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['o-pengumuman', 'o-announce', 'o-hidetag'].map(v => v + ' [teks]')
handler.tags = ['owner']
handler.command = /^(o-pengumuman|o-announce|o-hiddentag|o-hidetag)$/i
handler.group = true
handler.owner = true

export default handler

