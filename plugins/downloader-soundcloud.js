import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
try {
if (!text) throw '*Masukkan link*\n Example: https://soundcloud.com/prodkinka/snk'
let res = await axios('https://violetics.pw/api/downloader/soundcloud?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.url
	let row = Object.values(dapet).map((v, index) => ({
		title: htjava + '*ð¹ Ç«á´á´ÊÉªá´Ê:* ' + v.name,
		description: '\n*ð¤ Êá´sá´:* ' + json.result.hosting + '\n*ð¬ á´Éªá´Êá´:* ' + json.result.meta.title + '\n*ð¼ á´á´Êá´á´Éªá´É´:* ' + json.result.meta.duration + '\n*ð á´ÊÊ:* ' + v.url + '\n\n*ð á´Êá´Êá´Ê á´ÊÊ:* ' + json.result.player.url,
		rowId: usedPrefix + 'get ' + v.url
	}))
	let button = {
		buttonText: `${command} SEARCH RESULT ð`,
		description: `*Silahkan Hasil Pencarian ${command} Untuk:*\n*ð Hasil Pencarian:* ${text}\n\n`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
	} catch {
	if (!text) throw '*Masukkan link*\n Example: https://soundcloud.com/prodkinka/snk'
let res = await axios('https://violetics.pw/api/downloader/soundcloud?apikey=beta&url=' + text)
let json = res.data
let dapet = json.result.dlink
	conn.sendFile(m.chat, json.result.dlink, json.result.title + '.mp3', `
*${htki} YOUTUBE ${htka}*

*${htjava} á´Éªá´Êá´:* ${json.result.title}
`.trim(), m, null, { fileLength: fsizedoc, seconds: fsizedoc, mimetype: 'audio/mp4', contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: 'ð Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(json.result.thumb)).buffer(),
    sourceUrl: json.result.dlink
     }}
  })
	}
}
handler.help = ['soundcloud'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^s(oundcloud(d(own|l))?|cd(own|l))$/i

handler.exp = 0
handler.register = false
handler.limit = true


export default handler