import { jadwalsholat } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `*Format: ${usedPrefix}${command} Jakarta*`
    const res = await jadwalsholat(text)
    m.reply(`
⏰ Jadwal sholat *${text}*

${Object.entries(res.today).map(([name, data]) => `*- Sholat ${name}:* ${data}`).join('\n').trim()}
`.trim())
}
handler.help = ['salat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i
handler.register = true
handler.limit = true
export default handler