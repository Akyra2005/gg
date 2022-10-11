import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `- Format: *${usedPrefix + command} tautan vidio fb\n- Contoh: *${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🌐 URL: *${url}*`, m)
  let info = `*Being Processed...*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, sig, '', null, null, [
['𝗠𝗘𝗡𝗨', '/menu'],
['𝗦𝗣𝗘𝗘𝗗', '/ping']
], m,)
}
handler.help = ['facebook2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook2|fb2)(downloder2|dl2)?)$/i
handler.register = true
handler.limit = true
export default handler
