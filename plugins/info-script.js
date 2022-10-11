//Credits Jangan Dihapus
//Thanks To Jarot 
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*PADAHAL SCRIPT BOT INI PASARAN, MASIH AJA NYARI DISINI. CARI DI YT SANA KONTOL BADJINGAN MEMEK LU BANGSADT.*`
let wibu = `https://hadi-api.herokuapp.com/api/loli` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Terima Kasih Hinaan-nya','Cok', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://chat.whatsapp.com/L8aLHaH7lM0FBuKiNFDjYT",
    title: '⌬ Felicia-MD',
    body: '么 Kitsuneee',
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i
handler.register = true
handler.limit = 100
export default handler
