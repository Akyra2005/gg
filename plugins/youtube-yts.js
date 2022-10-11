import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw '*Format: #yts Whatsapp*'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
💬 *${v.title}* 
🌐 *${v.url}*
⏳ Duration: *${v.durationH}*
🔼 Uploaded *${v.publishedTime}*
👁️ *${v.view} Views*
      `.trim()
      case 'channel': return `
╭──────━• *CHANNEL*
│💬 *${v.channelName}* 
│🌐 *${v.url}*
│👥 *${v.subscriberH} Subscriber*
│🎥 *${v.videoCount} Video*
┗──────━•
`.trim()
    }
  }).filter(v => v).join('\n\n─────────────━─────────────\n\n')
  m.reply(`*${htki} SEARCH ${htka}*\n\n` + teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
handler.register = true
handler.limit = true
export default handler
