import fs from 'fs'
let handler = async (m, { conn, text } ) => {
 let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])

 for (let id of groups) {
 let member = (await conn.groupMetadata(id)).participants.map(v => v.jid)
conn.sendButton(id, '*B R O A D C A S T*\n' + text, wm, fla + 'BROADCAST', [['𝗢𝗪𝗡𝗘𝗥', '.owner'],['𝗗𝗢𝗡𝗔𝗦𝗜', '.donasi']], false, { contextInfo: { externalAdReply: {title: namebot, body: bottime, sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg') }}})
  }
}
handler.command = ['bcgcb']
handler.tags = ['host']
handler.help = ['bcgcb']
handler.register = true
handler.limit = true
export default handler
