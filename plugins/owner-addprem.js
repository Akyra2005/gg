let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `*Tag Or Mention Someone.*`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `where the number of days?`
    if (isNaN(txt)) return m.reply(`*ONLY NUMBER*\n\nExample: *${usedPrefix + command} @${m.sender.split`@`[0]} 7*`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
user.premium = true
    m.reply(`*Giving Premium Access*
- Name: *${user.name}*
- Days: *${txt} Days*
- Countdown: *${user.premiumTime - now}*`)
}
handler.help = ['addprem [@user] <days>']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.group = true
handler.rowner = true


export default handler
