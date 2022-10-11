import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
	let title = `*S H O R T E D   U R L*`
    let caption = 'Choose the URL Type'
const sections = [
   {
	title: "TYPE URL",
	rows: [
	    {title: "TinyUrl (Error)", rowId: ".short " + args[0] + " tinyurl"},
	    {title: "LinkPoi", rowId: ".short " + args[0] + " linkpoi"},
	    {title: "Bitly (Error)", rowId: ".short " + args[0] + " bitly"},
	    {title: "OuO", rowId: ".short " + args[0] + " ouo"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: null,
  title: title,
  buttonText: "Shorted Link",
  sections
}

if (!args[0]) return m.reply('*Masukkan URL Setelah Command*')
if (!args[0].startsWith('https://')) throw 'Masukan URL Dengan Awalan *https://*'
if (!args[1]) return conn.sendMessage(m.chat, listMessage, { quoted: m })

let tesk = '*🌐 LINK:* '
let pros = '*Shortening the Link...*'
//TINY
if (args[1] == "tinyurl") {
	let tiny = await (await fetch(`https://hardianto.xyz/api/short/tinyurl?url=${args[0]}&apikey=hardianto`)).json()
m.reply(pros).then(_ => conn.reply(m.chat, `${tesk}${tiny.result}`,m))
}
//--------------

//LINKPOI
if (args[1] == "linkpoi") {
	let poi = await(await fetch(`https://linkpoi.ga/api.php?url=${args[0]}`)).json()
	m.reply(pros).then(_=> conn.reply(m.chat, `${tesk}${poi.shorturl.replace('\/','/')}`,m))
}
//------------

//BITLY
if (args[1] == "bitly") {
	let bit = await (await fetch(`https://api.xteam.xyz/shorturl/bitly?url=${args[0]}&APIKEY=ebb6251cc00f9c63`)).json()
	m.reply(pros).then(_=> conn.reply(m.chat, `${tesk}${bit.result.link}`,m))
}
//------------

//OuO
if (args[1] == "ouo") {
	let ouo = await (await fetch(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=KitsuneOFC&url=${args[0]}`)).json()
	m.reply(pros).then(_=> conn.reply(m.chat, `${tesk}${ouo.result}`,m))
	}
}
handler.help = ['short <url> <type>']
handler.tags = ['internet']
handler.command = /^(short(url)?)$/i
handler.limit = true
export default handler
