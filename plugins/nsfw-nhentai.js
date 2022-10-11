import fetch from 'node-fetch'
import { extractImageThumb } from '@adiwajshing/baileys'

let handler = async (m, { conn, args }) => {
	let code = (args[0] || '').replace(/\D/g, '')
	if (!code) throw '*Format: #nhentai code*' 
	await m.reply('*In Process, Please Wait...*')
	let res = await fetch('https://expressjs-akkun.up.railway.app/nhentai?code=' + code)
	if (!res.ok) throw await res.statusText
	let json = await res.json()
	let buffer = await (await fetch('https://external-content.duckduckgo.com/iu/?u=' + json.result.pages[0])).buffer()
	let jpegThumbnail = await extractImageThumb(buffer)
	conn.sendMessage(m.chat, { document: { url: 'https://expressjs-akkun.up.railway.app/nhentai/' + code }, jpegThumbnail, fileName: json.result.title + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
}
handler.help = ['nhentai']
handler.tags = ['nsfw']
handler.command = /^(nhentai)$/i
handler.premium = true
handler.limit = true

export default handler
