let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '15'
let info = `
`
const sections = [
   {
	title: `100% Trusted & Trustworthy Store`,
	rows: [
	    {title: "🛠️ Fix Features", rowId: '.order *Paket:* TutorJadibot', description: 'PRICE: Tergantung Fiturnya' },
	    {title: "➕ Adding Features", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: Tergantung Fiturnya' },]
    }
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Order Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['store']
handler.tags = ['main']
handler.command = /^(store)$/i
handler.register = true
export default handler
