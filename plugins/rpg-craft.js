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
*CRAFT ITEMS*`

  let caption = `
⛏️ Pickaxe
⚔️ Sword
🎣 Fishingrod 

*RECIPE*
⛏️Pickaxe
- 100 Kayu
- 50 Batu
- 50 Iron
- 200 String

⚔️ Sword
- 100 Kayu
- 150 Iron

🎣 Fishingrod
- 100 Kayu
- 20 Iron
- 200 String

🥼 Armor
- 30 Iron
- 10 Emerald
- 50 Diamond

💳 Atm
- 30 Emerald
- 60 Diamond
- 100K Money
`
const sections = [
   {
	title: "CRAFT A TOOLS",
	rows: [
	    {title: "⚔️SWORD", rowId: ".craft sword", description: "Digunakan Untuk Petualangan"},
	    {title: "⛏️PICKAXE", rowId: ".craft pickaxe", description: "Digunakan Untuk Menambang"},
	    {title: "🎣FISHINGROD", rowId: ".craft fishingrod", description: "Digunakan Untuk Memancing"},
	    {title: "🥼ARMOR", rowId: ".craft armor", description: "Digunakan Untuk Mengurangi Kerusakan"},
	    {title: "💳ATM ", rowId: ".craft atm", description: "Digunakan Untuk Menabung (ilegal)"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: " C R A F T ",
  sections
}

  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxe > 0) return m.reply('Kamu Sudah Memilik Ini')
            if(user.rock < 50 || user.wood < 100 || user.iron < 50 || user.string < 200) return m.reply(`Barang tidak cukup!\nUntuk membuat pickaxe. Kamu memerlukan : \n100 kayu🪵 \n50 iron⛓\n200 String🕸️\n50 Batu 🪨`)
            global.db.data.users[m.sender].wood -= 100
            global.db.data.users[m.sender].iron -= 50
            user.rock -= 50
            global.db.data.users[m.sender].string -= 200
            global.db.data.users[m.sender].pickaxe += 1
            user.pickaxedurability = 40
            m.reply("Sukses membuat 1 pickaxe 🔨")
            break
          case 'sword':
          if (user.sword > 0) return m.reply('Kamu sudah memilik ini')
            if(user.wood < 100 || user.iron < 150) return m.reply(`Barang tidak cukup!\nUntuk membuat sword. Kamu memerlukan :\n100 kayu🪵\n150 iron⛓️`)
            global.db.data.users[m.sender].wood -= 100
            global.db.data.users[m.sender].iron -= 150
            global.db.data.users[m.sender].sword += 1
            user.sworddurability = 40
            m.reply("Sukses membuat 1 sword 🗡️")
            break
          case 'fishingrod':
          if (user.fishingrod > 0) return m.reply('Kamu sudah memilik ini')
            if(user.wood < 200 || user.iron < 50 || user.string < 200) return m.reply(`Barang tidak cukup!\nUntuk membuat pancingan. Kamu memerlukan :\n100 kayu🪵\n50 iron⛓\n200 String🕸️`)
            global.db.data.users[m.sender].wood -= 100
            global.db.data.users[m.sender].iron -= 20
            global.db.data.users[m.sender].string -= 200
            global.db.data.users[m.sender].fishingrod += 1
            user.fishingroddurability = 40
            m.reply("Sukses membuat 1 Pancingan 🎣")
            break
          case 'armor':
          if (user.armor > 0) return m.reply('Kamu sudah memilik ini')
            if(user.iron < 300 || user.emerald < 10 || user.diamond < 50) return m.reply(`Barang tidak cukup!\nUntuk membuat armor. Kamu memerlukan :\n300 Iron ⛓️\n10 Emerald ❇️\n50 Diamond 💎`)
            global.db.data.users[m.sender].emerald -= 10
            global.db.data.users[m.sender].iron -= 300
            global.db.data.users[m.sender].diamond -= 50
            global.db.data.users[m.sender].armor += 1
            user.armordurability = 50
            m.reply("Sukses membuat 1 Armor 🥼")
            break
            case 'atm':
          if (user.atm > 0) return m.reply('Kamu sudah memilik ini')
            if(user.emerald < 30 || user.money < 100000 || user.diamond < 60) return m.reply(`Barang tidak cukup!\nUntuk membuat atm. Kamu memerlukan :\n100K Money 💵\n30 Emerald ❇️\n60 Diamond 💎`)
            global.db.data.users[m.sender].emerald -= 30
            global.db.data.users[m.sender].money -= 100000
            global.db.data.users[m.sender].diamond -= 60
            global.db.data.users[m.sender].atm += 1
            global.db.data.users[m.sender].fullatm = 5000000
            m.reply("Sukses membuat 1 Atm 💳")
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

handler.help = ['craft']
handler.tags = ['rpg']
handler.command = /^(craft|crafting|chant)/i
handler.register = true
handler.limit = true
export default handler