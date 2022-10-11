let handler = async (m, { args, text, conn }) => {
    

     if (!args[0] || !args[1]) return m.reply("*Format: #expoint strength 1*")
     if(isNaN(args[1])) return m.reply("*Pakai Angka*")
    let human = ["strength", "mana", "stamina", "agility", "intelligence"]
    let hum = args[0].toLowerCase() // t

    if (!human.includes(hum)) return m.reply(`
*List Exchange Point Xp*
${human.map(hum => `› ${hum}`).join('\n')}`)

     let user = global.db.data.users[m.sender]
if (user.pointxp == 0) return m.reply(`your point xp not enough`)
user.hum += args[1]
user.pointxp -= args[1]

m.reply(`*Now Your ${hum} Is ${user.hum}*`)
}
handler.help = ['expoint *<type|jumlah>*']
handler.tags = ['rpg']
handler.command = /^(ex(change)?(point)?)$/i
handler.register = true
handler.limit = true
export default handler
