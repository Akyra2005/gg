import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command }) => {
	let type = (args[1] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    if (!args[0]) return m.reply('*Format #cekapi APIMU*')
  
  let cek = '*Looking for ApiKey...*'
try {
    if (/cekapi(key)?|cekkey/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
       case 'xteam':
       if (type == 'xteam') {
         let xteam = await (await fetch(`https://api.xteam.xyz/cekey?APIKEY=${args[0]}`)).json().catch(v => 'error')
         await m.reply(cek)
         if (xteam == 'error') {
m.reply(`*Rest Api Tersebut Sedang Error*`)
} else { 
if (xteam.response == "Only alphanumeric!") return m.reply('Only alphanumeric!')
 if (xteam.response == "Apikey Tidak Ditemukan, Silahkan Daftar Atau Beli Ke Developer Untuk Mendapatkan Apikey Yang Valid!") return m.reply('ɪɴᴠᴀʟɪᴅ ᴀᴘɪᴋᴇʏ !')
conn.reply(m.chat, `• *TYPE:* XTEAM
• *APIKEY:* ${args[0]}

• *NAME:* ${xteam.response.name}
• *IP:* ${xteam.response.ip}
• *EMAIL:* ${xteam.response.email}
• *TOTAL HIT:* ${xteam.response.totalhit}
• *PREMIUM:* ${xteam.response.premium}

• *EXPIRED:* ${(xteam.response.expired).replace('Premium left:', '')}`, m)
}
}
            break
          case 'lolhuman': 
    let lol = await (await fetch(`https://api.lolhuman.xyz/api/checkapikey?apikey=${args[0]}`)).json()
    m.reply(cek)
    if (lol.message == 'success') {
    conn.reply(m.chat, `• *TYPE:* LOLHUMAN
• *APIKEY:* ${args[0]}

• *NAME:* ${lol.result.username}
• *TOTAL HIT:* ${lol.result.requests}
• *HIT TODAY:* ${lol.result.today}
• *ACCOUNT:* ${lol.result.account_type}

• *EXPIRED:* ${lol.result.expired}`, m)
} else m.reply('*Invalid ApiKey.*')
            break
          default:
            return conn.sendButton(m.chat, `*CEK APIKEY*`, 'Choose the Apikey Type Below', null, [['𝗫𝗧𝗘𝗔𝗠', `.cekapi ${args[0]} xteam`],['𝗟𝗢𝗟𝗛𝗨𝗠𝗔𝗡', `.cekapi ${args[0]} lolhuman`]],m)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, wm, wm, null, [`⋮☰ MENU`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}
handler.help = ['cekapikey']
handler.tags = ['internet', 'tools']
handler.command = /^(cek(key|api))$/i
handler.register = true
handler.limit = true
export default handler
