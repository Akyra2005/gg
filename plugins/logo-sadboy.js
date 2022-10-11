import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split('|')
  if (!args[0]) throw '*Format: #logosadboy Clara|KW*'
  m.reply('*Making SadBoy Logo...*')
  let res = `https://ziy.herokuapp.com/api/maker/sadboy?text1=${response[0]}&text2=${response[1]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `*Done Making SadBoy Logo.*`, m, false)
}
handler.help = ['sadboylogo'].map(v => v + ' <text|text>')
handler.tags = ['maker']
handler.command = /^(logosadboy)$/i
handler.register = true
handler.limit = true
export default handler
