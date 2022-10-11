import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `- Format: *${usedPrefix}${command} username ig*\n- Contoh: *${usedPrefix}${command} katyhusclara*`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
await conn.sendHydrated(m.chat, `${name} *(${username})*
https://instagram.com/${username.replace(/^@/, '')}
*${followersH}* ғᴏʟʟᴏᴡᴇʀs
*${followingH}* ғᴏʟʟᴏᴡɪɴɢ
*${postsH}* ᴘᴏsᴛ
*ʙɪᴏ:* ${description}
`.trim(), botdate, null, 'https://www.whatsapp.com/otp/copy/' + 'https://instagram.com/' +username.replace(/^@/, ''), 'C O P Y', nomorown, nameown, [
      ['𝗠𝗘𝗡𝗨', '/menu']
    ], null)
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.register = true
handler.limit = true
handler.command = /^(igstalk)$/i

export default handler