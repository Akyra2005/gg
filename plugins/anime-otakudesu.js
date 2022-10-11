import { otakudesu } from 'hxz-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Use example ${usedPrefix}${command} Anime`
    let result = await otakudesu(text)
    let datathumb = await(await fetch(result.img)).buffer()
    let otaku = `
*OTAKUDESU*

*Title:* ${result.judul}
*Jepang:* ${result.jepang}
*Rate:* ${result.rate}
*Producer:* ${result.produser}
*Type:* ${result.tipe}
*Status:* ${result.status}
*Episode:* ${result.episode}
*Duration:* ${result.durasi}
*Release:* ${result.rilis}
*Studio:* ${result.studio}
*Genre:* ${result.genre}
*Desc:* ${result.desc}
*Batch:* ${result.batch}

*Batch SD:
* ${result.batchSD}

*Batch HD:
* ${result.batchHD}
`
await conn.sendButtonImg(m.chat, datathumb, otaku, wm, '𝗠𝗘𝗡𝗨', '.menu', m)
}

handler.help = ['otakudesu'].map(v => v + ' <Apa>')
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i
handler.register = true
handler.limit = true
export default handler
