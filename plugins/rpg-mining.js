const cooldown = 3600000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastmining))
    if (user.health < 80) return m.reply(`
Membutuhkan Setidaknya 80 ❤️HP Untuk Menambang
Silahkan Beli ❤️HP Dulu Dengan Mengetik *${usedPrefix}buy potion <quantity>*,
Dan Ketik *${usedPrefix}heal <quantity>* Untuk Memakai Potion
`.trim())
    if (user.pickaxe == 0) return m.reply('*Kamu Belum Mempunyai Pickaxe⛏️*\nSilahkan Buat Di *#craft*')
    if (new Date - user.lastmining <= cooldown) return m.reply(`
Anda Sudah Menambang, Harap Tunggu *🕐${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = 'You\'ve Been Mining And Lost'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\nMining Results'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastmining= new Date * 1
}
handler.help = ['mining']
handler.tags = ['rpg']
handler.command = /^(mining)$/i
handler.register = true
handler.limit = true
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 59999,
            trash: 1010,
            string: 75,
            rock: 20,
            iron: 10,
            diamond: 10,
            emerald: 7,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 5, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 5, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 5],
            gold: [0, 5, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 40 - user.cat * 4,
            pickaxedurability: 10
        }
    }
    return rewards
}