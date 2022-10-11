const rewards = {
  exp: 399999,
  money: 499999,
  potion: 39,
}
const cooldown = 604800000
let handler = async (m) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastweekly < cooldown) throw `Anda Telah Mengklaim Klaim Bulanan Ini, Tunggu *${((user.lastweekly + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,'*––––––『 WEEKLY 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Monthly', '.monthly']],m)
  user.lastweekly = new Date * 1
}
handler.help = ['weekly']
handler.tags = ['rpg']
handler.command = /^(weekly)$/i
handler.register = true
handler.limit = 30
handler.cooldown = cooldown

export default handler