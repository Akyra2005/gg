let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = global.botwm

let lgocraft = `
*REPAIR*`

  let caption = `
⛏️ Pickaxe 
⚔️ Sword
🎣Fishingrod

*RECIPE*
⛏️Pickaxe
- 50 Kayu
- 30 Batu
- 30 Iron
- 10 Diamond

⚔️Sword 
- 50 Kayu
- 90 Iron
- 10 Diamond

🥼Armor
- 150 Iron
- 30 Diamond
`
const sections = [
   {
	title: "REPAIR A TOOLS",
	rows: [
	    {title: "⚔️ SWORD", rowId: ".repair sword", description: "Repair Sword"},
	    {title: "⛏️ PICKAXE", rowId: ".repair pickaxe", description: "Repair Pickaxe"},
	    {title: "🥼 ARMOR", rowId: ".repair armor", description: "Repair Armor"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "R E P A I R",
  sections
}

  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return m.reply('*Pickaxe Belum Memiliki Kerusakan*')
          if (user.pickaxe == 0) return m.reply('*Kamu Belum Memilik Pickaxe*')
            if(user.diamond < 10 || user.rock < 30 || user.wood < 50 || user.iron < 30 ) return m.reply(`*Bahan Tidak Cukup.*`)
             user.rock -= 30
             user.wood -= 50
             user.iron -= 30
             user.diamond -= 1
             user.pickaxedurability = 100
            m.reply("*Sukses Memperbaiki.*")
            break
          case 'sword':
          if (user.sworddurability > 99) return m.reply('*Sword Belum Memiliki Kerusakan*')
          if (user.sword == 0) return m.reply('*Kamu Belum Memilik Sword*')
            if(user.diamond < 10 || user.wood < 50 || user.iron < 90 ) return m.reply(`*Bahan Tidak Cukup*`)
             user.wood -= 50
             user.iron -= 90
             user.diamond -= 10
             user.sworddurability = 100
            m.reply("*Sukses Memperbaiki*")
            break
            case 'armor':
          if (user.armordurability > 99) return m.reply('*Armor Belum Memiliki Kerusakan*')
          if (user.armor == 0) return m.reply('*Kamu Belum Memilik Armor*')
            if(user.diamond < 30 || user.iron < 150 ) return m.reply(`*Bahan Tidak Cukup*`)
             user.iron -= 150
             user.diamond -= 30
             user.armordurability = 100
            m.reply("*Sukses Memperbaiki*")
            break
          default:
            return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ MENU`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['repair']
handler.tags = ['rpg']
handler.command = /^(repair)/i

export default handler