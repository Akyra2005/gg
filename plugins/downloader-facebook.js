import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `- Format: *${usedPrefix}${command} tautan vidio fb*\n- Contoh: *${usedPrefix}${command} https://fb.watch/azFEBmFRcy/*`
    const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🌐 URL: *${url}*`, m)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler
