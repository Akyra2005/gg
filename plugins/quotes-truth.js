import { truth } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, await truth(), author, [
    ['𝗧𝗥𝗨𝗧𝗛', `${usedPrefix}truth`],
    ['𝗗𝗔𝗥𝗘', `${usedPrefix}dare`]
], m)

handler.help = ['truth']
handler.tags = ['quotes', 'fun']
handler.command = /^(truth)$/i
handler.register = true
export default handler