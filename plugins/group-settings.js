let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'Tutup': 'not_announcement',
        'Buka': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*Format Anda Salah*

*- ${usedPrefix + command} Tutup*
*- ${usedPrefix + command} Buka*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *Buka/Tutup*']
handler.tags = ['group']
handler.command = /^(group)$/i
handler.register = true
handler.admin = true
handler.botAdmin = true

export default handler
