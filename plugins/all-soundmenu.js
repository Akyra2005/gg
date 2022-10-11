let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = ``
  let teksnomor = ``

  let teks = 'Select Sound Below.'
const sections = [
   {
	title: `SOUND MENU`,
	rows: [
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 0", rowId: ".soundultah"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 1", rowId: ".sound1"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 2", rowId: ".sound2"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 3", rowId: ".sound3"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 4", rowId: ".sound4"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 5", rowId: ".sound5"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 6", rowId: ".sound6"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 7", rowId: ".sound7"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 8", rowId: ".sound8"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 9", rowId: ".sound9"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 10", rowId: ".sound10"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 11", rowId: ".sound11"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 12", rowId: ".sound12"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 13", rowId: ".sound13"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 14", rowId: ".sound14"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 15", rowId: ".sound15"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 16", rowId: ".sound16"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 17", rowId: ".sound17"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 18", rowId: ".sound18"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 19", rowId: ".sound19"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 20", rowId: ".sound20"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 21", rowId: ".sound21"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 22", rowId: ".sound22"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 23", rowId: ".sound23"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 24", rowId: ".sound24"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 25", rowId: ".sound25"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 26", rowId: ".sound26"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 27", rowId: ".sound27"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 28", rowId: ".sound28"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 29", rowId: ".sound29"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 30", rowId: ".sound30"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 31", rowId: ".sound31"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 32", rowId: ".sound32"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 33", rowId: ".sound33"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 34", rowId: ".sound34"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 35", rowId: ".sound35"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 36", rowId: ".sound36"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 37", rowId: ".sound37"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 38", rowId: ".sound38"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 39", rowId: ".sound39"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 40", rowId: ".sound40"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 41", rowId: ".sound41"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 42", rowId: ".sound42"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 43", rowId: ".sound43"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 44", rowId: ".sound44"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 45", rowId: ".sound45"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 46", rowId: ".sound46"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 47", rowId: ".sound47"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 48", rowId: ".sound48"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 49", rowId: ".sound49"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 50", rowId: ".sound50"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 51", rowId: ".sound51"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 52", rowId: ".sound52"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 53", rowId: ".sound53"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 54", rowId: ".sound54"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 55", rowId: ".sound55"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 56", rowId: ".sound56"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 57", rowId: ".sound57"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 58", rowId: ".sound58"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 59", rowId: ".sound59"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 60", rowId: ".sound60"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 61", rowId: ".sound61"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 62", rowId: ".sound62"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 63", rowId: ".sound63"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 64", rowId: ".sound64"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 65", rowId: ".sound65"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 66", rowId: ".sound66"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 67", rowId: ".sound67"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 68", rowId: ".sound68"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 69", rowId: ".sound69"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 70", rowId: ".sound70"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 71", rowId: ".sound71"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 72", rowId: ".sound72"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 73", rowId: ".sound73"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 74", rowId: ".sound74"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 75", rowId: ".sound75"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 76", rowId: ".sound76"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 77", rowId: ".sound77"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 78", rowId: ".sound78"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 79", rowId: ".sound79"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 80", rowId: ".sound80"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 81", rowId: ".sound81"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 82", rowId: ".sound82"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 83", rowId: ".sound83"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 84", rowId: ".sound84"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 85", rowId: ".sound85"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 86", rowId: ".sound86"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 87", rowId: ".sound87"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 88", rowId: ".sound88"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 89", rowId: ".sound89"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 90", rowId: ".sound90"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 91", rowId: ".sound91"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 92", rowId: ".sound92"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 93", rowId: ".sound93"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 94", rowId: ".sound94"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 95", rowId: ".sound95"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 96", rowId: ".sound96"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 97", rowId: ".sound97"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 98", rowId: ".sound98"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 99", rowId: ".sound99"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 100", rowId: ".sound100"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 101", rowId: ".sound101"},
    {title: "🎵 𝗦𝗼𝘂𝗻𝗱 102", rowId: ".sound102"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 103", rowId: ".sound103"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 104", rowId: ".sound104"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 105", rowId: ".sound105"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 106", rowId: ".sound106"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 107", rowId: ".sound107"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 108", rowId: ".sound108"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 109", rowId: ".sound109"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 110", rowId: ".sound110"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 111", rowId: ".sound111"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 112", rowId: ".sound112"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 113", rowId: ".sound113"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 114", rowId: ".sound114"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 115", rowId: ".sound115"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 116", rowId: ".sound116"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 117", rowId: ".sound117"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 118", rowId: ".sound118"},
	{title: "🎵 𝗦𝗼𝘂𝗻𝗱 119", rowId: ".sound119"},
]
    }
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *SOUND MENU* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(soundmenu)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['soundmenu']
handler.tags = ['fun']
handler.command = /^(soundmenu)/i
handler.register = true
handler.limit = true

export default handler
