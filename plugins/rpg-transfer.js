const items = [
    'money', 'bank', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncommon', 'mythic', 'legendary', 'pet',
]
let confirmation = {}
async function handler(m, { conn, args, usedPrefix, command }) {
    if (confirmation[m.sender]) return m.reply('Kamu sedang melakukan transfer!')
    let user = global.db.data.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `*RPG ITEM TRANSFER*

- Format: *${usedPrefix}${command} [type] [value] [number]*
- Contoh: *${usedPrefix}${command} money 9999 @6282253479547*

*Item Yang Dapat Ditransfer:*
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return m.reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    if (!who) return m.reply('*Tag Orangnya / Ketik Nomornya*')
    if (!(who in global.db.data.users)) return m.reply(`*Pengguna ${who} Tidak Ada Di Database*`)
    if (user[type] * 1 < count) return m.reply(`*Milikmu *${rpg.emoticon(type)}${type}${special(type)}* Kurang *${count - user[type]}*`)
    let confirm = `
*ITEM TRANSFER*

*- Type:* ${type} ${rpg.emoticon(type)}${special(type)}
*- Count:* ${count} 
*- To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}

*⏱️ 60s Confirmation Countdown*
`.trim()
    let c = wm
    conn.sendButton(m.chat, confirm, c, null, [['✔️'], ['✖️']], m, { mentions: [who] })
    confirmation[m.sender] = {
        sender: m.sender,
        to: who,
        message: m,
        type,
        count,
        timeout: setTimeout(() => (m.reply('Timeout'), delete confirmation[m.sender]), 60 * 1000)
    }
}

handler.before = async m => {
    if (m.isBaileys) return
    if (!(m.sender in confirmation)) return
    if (!m.text) return
    let { timeout, sender, message, to, type, count } = confirmation[m.sender]
    if (m.id === message.id) return
    let user = global.db.data.users[sender]
    let _user = global.db.data.users[to]
    if (/(✖️|n(o)?)/g.test(m.text.toLowerCase())) {
        clearTimeout(timeout)
        delete confirmation[sender]
        return m.reply('Reject')
    }
    if (/(✔️|y(es)?)/g.test(m.text.toLowerCase())) {
        let previous = user[type] * 1
        let _previous = _user[type] * 1
        user[type] -= count * 1
        _user[type] += count * 1
        if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*ITEM TRANSFER*\n\n*- Status:* Succeed\n*- Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*- Count:* ${count}\n*- To:* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        else {
            user[type] = previous
            _user[type] = _previous
            m.reply(`*ITEM TRANSFER*\n\n*- Status:* Fail\n*- Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*- To:* @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
        }
        clearTimeout(timeout)
        delete confirmation[sender]
    }
}

handler.help = ['transfer', 'tf'].map(v => v + ' [type] [jumlah] [@tag]')
handler.tags = ['rpg']
handler.command = /^(transfer|tf)$/i
handler.register = true
handler.disabled = false

export default handler

function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}