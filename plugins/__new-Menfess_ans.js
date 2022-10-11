const delay = time => new Promise(res => setTimeout(res, time))
export async function before(m) {
	if (!m.chat.endsWith('@s.whatsapp.net')) return !0;
	this.menfess = this.menfess ? this.menfess : {}
	let mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender)
	if (!mf) return !0
	if ((m.text === 'Mau Balas? Ketik Teksnya ' || m.text === '') && m.quoted.mtype == 'buttonsMessage') return m.reply("*Silahkan Kirim Pesan Balasan Kamu.*");
	let txt = `*👋 Hai Kak @${mf.dari.split('@')[0]}*\nKamu Menerima Balasan.\n\n✉️ Pesan Yang Kamu Kirim Sebelumnya:\n*${mf.pesan}*\n\n📩 Pesan Balasannya:\n*${m.text}*\n`.trim();
	await this.reply(mf.dari, txt, null).then(() => {
		m.reply('*Berhasil Mengirim Balasan.*')
		delay(2000)
		delete this.menfess[mf.id]
		return !0
	})
}
