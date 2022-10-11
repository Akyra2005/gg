import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    let whmods = `*${htki} GOOGLE IMAGE ${htka}*
    🔎 *Result:* ${text}
    🌎 *Source:* Google`
    //conn.sendFile(m.chat, link, '', whmods, m)
    conn.sendButton(m.chat, whmods, botdate, link, [['𝗡𝗘𝗫𝗧', `.image ${text}`]], m)
    /* conn.sendHydrated (m.chat,`
*${htki} GOOGLE IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* Google
`, wm, link, link, '🔗 URL', null, null, [['Next', `.image ${text}`],[null,null],[null,null]],m) */
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i
handler.register = true
handler.limit = true
export default handler
