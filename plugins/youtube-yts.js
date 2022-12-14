import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw '*Format: #yts Whatsapp*'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
š¬ *${v.title}* 
š *${v.url}*
ā³ Duration: *${v.durationH}*
š¼ Uploaded *${v.publishedTime}*
šļø *${v.view} Views*
      `.trim()
      case 'channel': return `
ā­āāāāāāāā¢ *CHANNEL*
āš¬ *${v.channelName}* 
āš *${v.url}*
āš„ *${v.subscriberH} Subscriber*
āš„ *${v.videoCount} Video*
āāāāāāāāā¢
`.trim()
    }
  }).filter(v => v).join('\n\nāāāāāāāāāāāāāāāāāāāāāāāāāāā\n\n')
  m.reply(`*${htki} SEARCH ${htka}*\n\n` + teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
handler.register = true
handler.limit = true
export default handler
