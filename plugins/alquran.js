import {alquran} from '@bochilteam/scraper'
let handler = async (m, { args, usedPrefix, command }) => {
    if (!(args[0] || args[1])) throw `- Format: *${usedPrefix + command} Surah Ayat*\n- Contoh: *${usedPrefix + command} 1 2*\n\nHasilnya Adalah Surah Al-Fatihah Ayat 2 Beserta Audionya & Ayatnya 1 Saja`
    if (isNaN(args[0]) || isNaN(args[1])) throw `- Format: *${usedPrefix + command} Surah Ayat*\n- Contoh: *${usedPrefix + command} 1 2*\n\nHasilnya Adalah Surah Al-Fatihah Ayat 2 Beserta Audionya & Ayatnya 1 Saja`
    let api = await alquran()
    let mes = `
${api[args[0] - 1].ayahs[args[1] - 1].text.ar}
    
${api[args[0] - 1].ayahs[args[1] - 1].translation.id}
*( Q.S ${api[args[0] - 1 ].asma.id.short} : ${api[args[0] - 1].ayahs[args[1] - 1].number.insurah} )*
`.trim()
    m.reply(mes)
    conn.sendFile(m.chat, api[args[0] - 1].ayahs[args[1] - 1].audio.url, '', '', m)
}

handler.command = ['alquran']
handler.help = ['alquran']
handler.tags = ['quran']
handler.limit = true
handler.register = true
export default handler
