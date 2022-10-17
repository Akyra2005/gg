const items = {
    buy: {
        limit: {
            money: 5999
        },
        potion: {
            money: 100000
        },
        trash: {
            money: 3000
        },
        wood: {
            money: 90000
        },
        rock: {
            money: 110000
        },
        string: {
            money: 100000
        },
        iron: { 
        	money: 150000
        },
        gold: { 
        	money: 170000
        },
        diamond: { 
        	money: 190000
        },
        emerald: { 
        	money: 220000
        },
        common: { 
        	money: 49000
        },
        uncommon: { 
        	money: 69000
        },
        mythic: { 
        	money: 99000
        },
        legendary: { 
        	money: 115000
        },
        superior: { 
        	money: 156000
        },
        bibitpisang: { 
        	money: 5000
        },
        bibitanggur: { 
        	money: 5000
        },
        bibitjeruk: { 
        	money: 5000
        },
        bibitmangga: { 
        	money: 5000
        },
        bibitapel: { 
        	money: 5000
        },
        pet: { 
        	money: 55000
        }
    },
    sell: {
        potion: {
            money: 45000
        },
        trash: {
            money: 100
        },
        wood: {
            money: 6000
        },
        rock: {
            money: 7000
        },
        string: {
            money: 6500
        },
        iron: {
            money: 70000
        },
        gold: {
            money: 80000
        },
        diamond: {
            money: 90000
        },
        emerald: {
            money: 105000
        },
        common: { 
        	money: 2000
        },
        uncommon: { 
        	money: 3000
        },
        mythic: { 
        	money: 4000
        },
        legendary: { 
        	money: 5000
        },
        superior: { 
        	money: 7500
        },
        pisang: { 
        	money: 5000
        },
        anggur: { 
        	money: 13000
        },
        jeruk: { 
        	money: 14000
        },
        mangga: { 
        	money: 15000
        },
        apel: { 
        	money: 14000
        },
        kaleng: { 
        	money: 1500
        },
        kardus: { 
        	money: 1500
        },
        botol: { 
        	money: 1500
        }
    }
}

let handler = async (m, { command, usedPrefix, args }) => {
    let user = global.db.data.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    const info = `
*RPG ITEM SHOP*

- Format: *${usedPrefix}${command} [crate] [count]*
- Contoh: *${usedPrefix}${command} potion 10*
    
*Item List:*
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `${global.rpg.emoticon(v)}${v} | ${listItems[v][paymentMethod]} ${global.rpg.emoticon(paymentMethod)}${paymentMethod}`.trim()
    }).join('\n')}
`.trim()
    const item = (args[0] || '').toLowerCase()
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(info)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`Anda Tidak Memiliki Cukup ${global.rpg.emoticon(paymentMethod)}${paymentMethod} Untuk Membeli *${total}* ${global.rpg.emoticon(item)}${item}. Anda Membutuhkan *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* Lagi ${paymentMethod} Untuk Dapat Membeli`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return m.reply(`Anda Membeli *${total}* ${global.rpg.emoticon(item)}${item}`)
    } else {
        if (user[item] < total) return m.reply(`Anda Tidak Punya Cukup *${global.rpg.emoticon(item)}${item}* Untuk Menjual, Anda Hanya Punya ${user[item]} Item`)
        user[item] -= total
        user.money += listItems[item].money * total
        return m.reply(`Anda Menjual *${total}* ${global.rpg.emoticon(item)}${item}`)
    }
}

handler.help = ['buy', 'sell'].map(v => v + ' [item] [count]')
handler.tags = ['rpg']
handler.command = /^(buy|sell)$/i
handler.register = true
handler.disabled = false

export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}