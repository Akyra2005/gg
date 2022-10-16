const items = {
    buy: {
        limit: {
            money: 5999
        },
        potion: {
            money: 10000
        },
        trash: {
            money: 300
        },
        wood: {
            money: 9000
        },
        rock: {
            money: 11000
        },
        string: {
            money: 10000
        },
        iron: { 
        	money: 15000
        },
        gold: { 
        	money: 17000
        },
        diamond: { 
        	money: 19000
        },
        emerald: { 
        	money: 22000
        },
        common: { 
        	money: 4900
        },
        uncommon: { 
        	money: 6900
        },
        mythic: { 
        	money: 9900
        },
        legendary: { 
        	money: 11500
        },
        superior: { 
        	money: 15600
        },
        bibitpisang: { 
        	money: 500
        },
        bibitanggur: { 
        	money: 500
        },
        bibitjeruk: { 
        	money: 500
        },
        bibitmangga: { 
        	money: 500
        },
        bibitapel: { 
        	money: 500
        },
        pet: { 
        	money: 55000
        }
    },
    sell: {
        potion: {
            money: 450
        },
        trash: {
            money: 10
        },
        wood: {
            money: 400
        },
        rock: {
            money: 500
        },
        string: {
            money: 450
        },
        iron: {
            money: 700
        },
        gold: {
            money: 800
        },
        diamond: {
            money: 900
        },
        emerald: {
            money: 1050
        },
        common: { 
        	money: 200
        },
        uncommon: { 
        	money: 300
        },
        mythic: { 
        	money: 400
        },
        legendary: { 
        	money: 500
        },
        superior: { 
        	money: 7500
        },
        pisang: { 
        	money: 500
        },
        anggur: { 
        	money: 1300
        },
        jeruk: { 
        	money: 1400
        },
        mangga: { 
        	money: 1500
        },
        apel: { 
        	money: 1400
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