import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import FormData from 'form-data'

let handler = async (m) => {
	let q = m.quoted ? m.quoted : m
	let mime = q.mediaType || ''
	if (/image|video|audio|sticker|document/.test(mime)) {
		let media = await q.download(true)
		let data = await uploadFile(media)
		let res = await fetch(`https://api.audd.io/?url=${data.url}&return=apple_music&api_token=945881d8079d620d74e93a218c42f8c6`)
  let json = await res.json()
  let x = json.result
 return m.reply(`đĻđĸđĄđ đ§đđ§đđ đđĸđ¨đĄđ\n\n*á´á´á´á´Ę* : ${x.title}\n*á´Ęá´ÉĒs* : ${x.artist}\n*Ęá´Ęá´Ę* : ${x.label}\n*á´ĘĘá´á´* : ${x.album}\n*ĘÉĒĘÉĒs* : ${x.release_date}\n*á´á´á´á´á´É´* : ${x.song_link}`)
	} else throw '*[â] Media Tidak Ditemukan*'
}
handler.help = ['judulmusic']
handler.tags = ['tools']
handler.register = true
handler.limit = true
handler.command = /^(judulmusic)$/i

export default handler

async function uploadFile(path) {
	let form = new FormData()
	form.append('file', fs.createReadStream(path))
	let res = await (await fetch('https://api.anonfiles.com/upload', {
		method: 'post',
		headers: {
			...form.getHeaders()
		},
		body: form
	})).json()
	await fs.promises.unlink(path)
	if (!res.status) throw res.error.message
	let data = await fetch(res.data.file.url.full)
	let $ = cheerio.load(await data.text())
	return {
		url: res.data.file.url.full
		url2: res.data.file.url.short
	}
}
