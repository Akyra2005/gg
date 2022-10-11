import fs from 'fs'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `- Format: *${usedPrefix + command} <teks>*\nContoh: *${usedPrefix + command} plugins/menu.js*`
    if (!m.quoted.text) throw `*Reply to Messages You Want to Save*`
    let path = `${text}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`tersimpan di ${path}`)
}
handler.help = ['sf'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sf$/i

handler.rowner = true
export default handler