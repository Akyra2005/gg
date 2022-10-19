let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
  
Tag: *@${nomorown.split`@`[0]}*
Link: *wa.me/6281347927862*

*✉️NB: Ini Bukan Nomor Bot Tapi Owner*`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}

•╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍•
${htjava} *Real Name* : Clara
${htjava} *Code Name* : Kitsune
${htjava} *Birthday* : 12 September
${htjava} *Age* : 17 Years
${htjava} *Gender* : Non-Binary
${htjava} *Religion* : Islam
${htjava} *Class* : XI
${htjava} *Alamat* : Borneo Empire
•╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍•

`
  let teks = '*See Bot Creator Biodata Here.*'
const sections = [
   {
	title: `O W N E R`,
	rows: [
	    {title: "Nomor", rowId: ".owner nomor"},
	{title: "Biodata", rowId: ".owner bio"},
	]}]

const listMessage = {
  text: teks,
  footer: null,
  title: ` `,
  buttonText: "Choose Here",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['𝗦𝗘𝗪𝗔 𝗕𝗢𝗧', `${usedPrefix}sewa`],
                ['𝗠𝗘𝗡𝗨', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ 𝗠𝗘𝗡𝗨`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i
handler.register = true
export default handler
