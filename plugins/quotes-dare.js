import { dare } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, await dare(), author, [
    ['𝗗𝗔𝗥𝗘', `${usedPrefix}dare`], 
    ['𝗧𝗥𝗨𝗧𝗛', `${usedPrefix}truth`]
], m)

handler.help = ['dare']
handler.tags = ['quotes', 'fun']
handler.command = /^(dare)$/i
handler.register = true
export default handler
