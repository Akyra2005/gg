
let handler = async (m, { conn, usedPrefix, text }) => {
	let user = global.db.data.users[m.sender]
	let ini_txt = `FRUIT WAREHOUSE\n\n`
	ini_txt += `🍌 ${user.pisang} Pisang\n`
	ini_txt += `🍇 ${user.anggur} Anggur\n`
	ini_txt += `🥭 ${user.mangga} Mangga\n`
	ini_txt += `🍊 ${user.jeruk} Jeruk\n`
	ini_txt += `🍎 ${user.apel} Apel\n\n`
	ini_txt += ` *${usedPrefix}sell* Untuk Menjual Buah.`
	m.reply(ini_txt)
}

handler.menufun = ['buah']
handler.tagsfun = ['rpg']
handler.command = /^((list)?(buah|fruits?))$/i

export default handler