const cooldown = 6000000
let handler = async (m, { usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 80) return m.reply(`
Membutuhkan Setidaknya 80❤️ HP Untuk Petualangan
Silahkan Beli HP Dulu Dengan Mengetik *${usedPrefix}buy potion <quantity>*,
Dan Ketik *${usedPrefix}heal <quantity>* Untuk Menggunakan Potion
`.trim())
    if (new Date - user.lastadventure <= cooldown) return m.reply(`
You're already adventure!!, please wait *🕐${timers.toTimeString()}*
`.trim())
    const rewards = reward(user)
    let text = 'You\'ve Been Adventure And Lost'
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`
    }
    text += '\n\nAdventure Results'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`
    }
    m.reply(text.trim())
    user.lastadventure = new Date * 1
}
handler.help = ['adventure', 'petualang', 'berpetualang']
handler.tags = ['rpg']
handler.command = /^(adventure|(ber)?petualang(ang)?)$/i
handler.register = true
handler.limit = true
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 49999,
            exp: 99999,
            trash: 9999,
            potion: 4,
            rock: 4,
            wood: 8,
            string: 9,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 3, 0, 1, 40].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 5, 0, 10, 0, 1, 0, 0, 30].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 5, 0, 0, 10, 0, 2, 1, 0, 20].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 20, 0, 1, 0, 3],
            gold: [0, 0, 10, 0, 2, 1, 0],
            diamond: [0, 10, 0, 5, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4
        }
    }
    return rewards
}