import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let jarot = `*INFORMATION ABOUT BOT*

Bot Name: *⌬ Felicia-MD*
Bot Version: *38.00.md*
Bot Owner: *么 Kitsuneee*
Bot Language: *NodeJS*
Bot Cloud Platform: *Heroku*
Release Bot: *27 November 2021*


*COMMUNITY BRANCH*

WhatsApp Community Groups
*• https://chat.whatsapp.com/L8aLHaH7lM0FBuKiNFDjYT*

Telegram Community Groups
*• https://t.me/fbf_c*

Telegram Bot Information Channel
*• https://t.me/fbi_ofc*
`
conn.sendButtonDoc(m.chat, jarot, wm, 'Thank you for the information','You', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/katyhusaclara",
    mediaType: "VIDEO",
    description: "https://Instagram.com/katyhusaclara", 
    title: '⌬ Felicia-MD',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
}
} })
        }
handler.help = ['infobot','rate']
handler.tags = ['main','info']
handler.command = /^(infobot|rate)$/i
export default handler
