import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*Format: #logokaneki Clara*'
  m.reply('*Making Kaneki Logo...*')
  let res = `https://ziy.herokuapp.com/api/maker/kaneki?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `*Done Making Kaneki Logo.*`, m, false)
}
handler.help = ['logokaneki'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(logokaneki)$/i
handler.register = true
handler.limit = true
export default handler
