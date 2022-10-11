import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
*📊 YOU HAVE LEVELED UP*

Selamat, Anda Telah Naik Level!
Level *${before}* Ke Level *${user.level}*

#profile *(Check Your Profile)*
#lb *(Check Leaderboard)*
	`.trim())
    }
}
export const disabled = true