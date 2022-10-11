import { createHash } from 'crypto'
let handler = async function (m, { args }) {
  if (!args[0]) throw '*Unregister Membutuhkan SN*\n ? Dapatkan Di: *#ceksn*'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '*Unregister Membutuhkan SN*\n ? Dapatkan Di: *#ceksn*'
  user.registered = false
  m.reply('```Unregister Success```')
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['xp']

handler.command = /^unreg(ister)?$/i
handler.register = true

export default handler