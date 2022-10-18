const rewards = {
    common: {
        money: 2900,
        exp: 500,
        trash: 2,
        potion: [0, 1, 0, 1, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    uncommon: {
        money: 4900,
        exp: 700,
        trash: 10,
        potion: [0, 1, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rock: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        string: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    mythic: {
        money: 8800,
        exp: 850,
        trash: 20,
        potion: [0, 1, 0, 0, 0, 0],
        emerald: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rock: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        string: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    legendary: {
        money: 10000,
        exp: 1000,
        trash: 30,
        potion: [0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        emerald: [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        diamond: [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        gold: [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        iron: [0, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        common: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        uncommon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        mythic: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        legendary: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pet: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wood: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rock: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        string: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    pet: {
      horse: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        cat: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fox: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dog: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        robo: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        lion: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        rhinoceros: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        dragon: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        centaur: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        kyubi: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        griffin: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        wolf: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        phonix: [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
     }
}
let handler = async (m, { command, args, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let listCrate = Object.fromEntries(Object.entries(rewards).filter(([v]) => v && v in user))
    let info = `
*OPEN MYSTERY CRATE*

- Format: *${usedPrefix}${command} [crate] [count]*
- Contoh: *${usedPrefix}${command} common 10*

*Crate List:*
${Object.keys(listCrate).map((v) => `
${rpg.emoticon(v)}${v}
`.trim()).join('\n')}
`.trim()
    let type = (args[0] || '').toLowerCase()
    let count = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!(type in listCrate)) return m.reply(info)
    if (user[type] < count) return m.reply(`
*${rpg.emoticon(type)}${type} crate* Tidak Cukup, Kamu Hanya Punya ${user[type]} *${rpg.emoticon(type)}${type} crate*
Ketik *${usedPrefix}buy ${type} ${count - user[type]}* Untuk Membeli
`.trim())
    // TODO: add pet crate
    // if (type !== 'pet')
    let crateReward = {}
    for (let i = 0; i < count; i++)
        for (let [reward, value] of Object.entries(listCrate[type]))
            if (reward in user) {
                const total = value.getRandom()
                if (total) {
                    user[reward] += total * 1
                    crateReward[reward] = (crateReward[reward] || 0) + (total * 1)
                }
            }
    user[type] -= count * 1
    m.reply(`
Anda Telah Membuka *${count}* ${global.rpg.emoticon(type)}${type} Crate Dan Mendapat:
${Object.keys(crateReward).filter(v => v && crateReward[v] && !/legendary|pet|mythic|diamond|emerald/i.test(v)).map(reward => `
*${global.rpg.emoticon(reward)}${reward}:* ${crateReward[reward]}
`.trim()).join('\n')}
`.trim())
    let diamond = crateReward.diamond, mythic = crateReward.mythic, pet = crateReward.pet, legendary = crateReward.legendary, emerald = crateReward.emerald
    if (mythic || diamond) m.reply(`
Selamat Anda Mendapatkan Item Langka, Yaitu ${diamond ? `*${diamond}* ${rpg.emoticon('diamond')}diamond` : ''}${diamond && mythic ? 'And ' : ''}${mythic ? `*${mythic}* ${rpg.emoticon('mythic')}mythic` : ''}
`.trim())
    if (pet || legendary || emerald) m.reply(`
Selamat Anda Mendapatkan Item Epik, Yaitu ${pet ? `*${pet}* ${rpg.emoticon('pet')}pet` : ''}${pet && legendary && emerald ? ', ' : (pet && legendary || legendary && emerald || emerald && pet) ? 'And ' : ''}${legendary ? `*${legendary}* ${rpg.emoticon('legendary')}legendary` : ''}${pet && legendary && emerald ? 'And ' : ''}${emerald ? `*${emerald}* ${rpg.emoticon('emerald')}emerald` : ''}
`.trim())
}
handler.help = ['open', 'gacha'].map(v => v + ' [crate] [count]')
handler.tags = ['rpg']
handler.command = /^(open|buka|gacha)$/i
handler.register = true
export default handler

function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}