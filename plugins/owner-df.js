import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `uhm.. where the text?\n\nexample:\n${usedPrefix + command} info`
    if (!ar1.includes(args[0])) return m.reply(`*PLUGINS NOT FOUND*\n==================================\n\n${ar1.map(v => ' ' + v).join`\n`}`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `*Succes Deleted "plugins/${args[0]}.js"*`, m)
    
}
handler.help = ['df']
handler.tags = ['owner']
handler.command = /^(df)$/i

handler.rowner = true

export default handler
