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
    {title: "π΅ π¦πΌππ»π± 0", rowId: ".soundultah"},
	{title: "π΅ π¦πΌππ»π± 1", rowId: ".sound1"},
    {title: "π΅ π¦πΌππ»π± 2", rowId: ".sound2"},
	{title: "π΅ π¦πΌππ»π± 3", rowId: ".sound3"},
	{title: "π΅ π¦πΌππ»π± 4", rowId: ".sound4"},
	{title: "π΅ π¦πΌππ»π± 5", rowId: ".sound5"},
	{title: "π΅ π¦πΌππ»π± 6", rowId: ".sound6"},
	{title: "π΅ π¦πΌππ»π± 7", rowId: ".sound7"},
	{title: "π΅ π¦πΌππ»π± 8", rowId: ".sound8"},
	{title: "π΅ π¦πΌππ»π± 9", rowId: ".sound9"},
	{title: "π΅ π¦πΌππ»π± 10", rowId: ".sound10"},
	{title: "π΅ π¦πΌππ»π± 11", rowId: ".sound11"},
	{title: "π΅ π¦πΌππ»π± 12", rowId: ".sound12"},
	{title: "π΅ π¦πΌππ»π± 13", rowId: ".sound13"},
	{title: "π΅ π¦πΌππ»π± 14", rowId: ".sound14"},
	{title: "π΅ π¦πΌππ»π± 15", rowId: ".sound15"},
	{title: "π΅ π¦πΌππ»π± 16", rowId: ".sound16"},
	{title: "π΅ π¦πΌππ»π± 17", rowId: ".sound17"},
	{title: "π΅ π¦πΌππ»π± 18", rowId: ".sound18"},
	{title: "π΅ π¦πΌππ»π± 19", rowId: ".sound19"},
    {title: "π΅ π¦πΌππ»π± 20", rowId: ".sound20"},
	{title: "π΅ π¦πΌππ»π± 21", rowId: ".sound21"},
    {title: "π΅ π¦πΌππ»π± 22", rowId: ".sound22"},
	{title: "π΅ π¦πΌππ»π± 23", rowId: ".sound23"},
	{title: "π΅ π¦πΌππ»π± 24", rowId: ".sound24"},
	{title: "π΅ π¦πΌππ»π± 25", rowId: ".sound25"},
	{title: "π΅ π¦πΌππ»π± 26", rowId: ".sound26"},
	{title: "π΅ π¦πΌππ»π± 27", rowId: ".sound27"},
	{title: "π΅ π¦πΌππ»π± 28", rowId: ".sound28"},
	{title: "π΅ π¦πΌππ»π± 29", rowId: ".sound29"},
	{title: "π΅ π¦πΌππ»π± 30", rowId: ".sound30"},
	{title: "π΅ π¦πΌππ»π± 31", rowId: ".sound31"},
	{title: "π΅ π¦πΌππ»π± 32", rowId: ".sound32"},
	{title: "π΅ π¦πΌππ»π± 33", rowId: ".sound33"},
	{title: "π΅ π¦πΌππ»π± 34", rowId: ".sound34"},
	{title: "π΅ π¦πΌππ»π± 35", rowId: ".sound35"},
	{title: "π΅ π¦πΌππ»π± 36", rowId: ".sound36"},
	{title: "π΅ π¦πΌππ»π± 37", rowId: ".sound37"},
	{title: "π΅ π¦πΌππ»π± 38", rowId: ".sound38"},
	{title: "π΅ π¦πΌππ»π± 39", rowId: ".sound39"},
    {title: "π΅ π¦πΌππ»π± 40", rowId: ".sound40"},
	{title: "π΅ π¦πΌππ»π± 41", rowId: ".sound41"},
    {title: "π΅ π¦πΌππ»π± 42", rowId: ".sound42"},
	{title: "π΅ π¦πΌππ»π± 43", rowId: ".sound43"},
	{title: "π΅ π¦πΌππ»π± 44", rowId: ".sound44"},
	{title: "π΅ π¦πΌππ»π± 45", rowId: ".sound45"},
	{title: "π΅ π¦πΌππ»π± 46", rowId: ".sound46"},
	{title: "π΅ π¦πΌππ»π± 47", rowId: ".sound47"},
	{title: "π΅ π¦πΌππ»π± 48", rowId: ".sound48"},
	{title: "π΅ π¦πΌππ»π± 49", rowId: ".sound49"},
	{title: "π΅ π¦πΌππ»π± 50", rowId: ".sound50"},
	{title: "π΅ π¦πΌππ»π± 51", rowId: ".sound51"},
	{title: "π΅ π¦πΌππ»π± 52", rowId: ".sound52"},
	{title: "π΅ π¦πΌππ»π± 53", rowId: ".sound53"},
	{title: "π΅ π¦πΌππ»π± 54", rowId: ".sound54"},
	{title: "π΅ π¦πΌππ»π± 55", rowId: ".sound55"},
	{title: "π΅ π¦πΌππ»π± 56", rowId: ".sound56"},
	{title: "π΅ π¦πΌππ»π± 57", rowId: ".sound57"},
	{title: "π΅ π¦πΌππ»π± 58", rowId: ".sound58"},
	{title: "π΅ π¦πΌππ»π± 59", rowId: ".sound59"},
    {title: "π΅ π¦πΌππ»π± 60", rowId: ".sound60"},
	{title: "π΅ π¦πΌππ»π± 61", rowId: ".sound61"},
    {title: "π΅ π¦πΌππ»π± 62", rowId: ".sound62"},
	{title: "π΅ π¦πΌππ»π± 63", rowId: ".sound63"},
	{title: "π΅ π¦πΌππ»π± 64", rowId: ".sound64"},
	{title: "π΅ π¦πΌππ»π± 65", rowId: ".sound65"},
	{title: "π΅ π¦πΌππ»π± 66", rowId: ".sound66"},
	{title: "π΅ π¦πΌππ»π± 67", rowId: ".sound67"},
	{title: "π΅ π¦πΌππ»π± 68", rowId: ".sound68"},
	{title: "π΅ π¦πΌππ»π± 69", rowId: ".sound69"},
	{title: "π΅ π¦πΌππ»π± 70", rowId: ".sound70"},
	{title: "π΅ π¦πΌππ»π± 71", rowId: ".sound71"},
	{title: "π΅ π¦πΌππ»π± 72", rowId: ".sound72"},
	{title: "π΅ π¦πΌππ»π± 73", rowId: ".sound73"},
	{title: "π΅ π¦πΌππ»π± 74", rowId: ".sound74"},
	{title: "π΅ π¦πΌππ»π± 75", rowId: ".sound75"},
	{title: "π΅ π¦πΌππ»π± 76", rowId: ".sound76"},
	{title: "π΅ π¦πΌππ»π± 77", rowId: ".sound77"},
	{title: "π΅ π¦πΌππ»π± 78", rowId: ".sound78"},
	{title: "π΅ π¦πΌππ»π± 79", rowId: ".sound79"},
    {title: "π΅ π¦πΌππ»π± 80", rowId: ".sound80"},
	{title: "π΅ π¦πΌππ»π± 81", rowId: ".sound81"},
    {title: "π΅ π¦πΌππ»π± 82", rowId: ".sound82"},
	{title: "π΅ π¦πΌππ»π± 83", rowId: ".sound83"},
	{title: "π΅ π¦πΌππ»π± 84", rowId: ".sound84"},
	{title: "π΅ π¦πΌππ»π± 85", rowId: ".sound85"},
	{title: "π΅ π¦πΌππ»π± 86", rowId: ".sound86"},
	{title: "π΅ π¦πΌππ»π± 87", rowId: ".sound87"},
	{title: "π΅ π¦πΌππ»π± 88", rowId: ".sound88"},
	{title: "π΅ π¦πΌππ»π± 89", rowId: ".sound89"},
	{title: "π΅ π¦πΌππ»π± 90", rowId: ".sound90"},
	{title: "π΅ π¦πΌππ»π± 91", rowId: ".sound91"},
	{title: "π΅ π¦πΌππ»π± 92", rowId: ".sound92"},
	{title: "π΅ π¦πΌππ»π± 93", rowId: ".sound93"},
	{title: "π΅ π¦πΌππ»π± 94", rowId: ".sound94"},
	{title: "π΅ π¦πΌππ»π± 95", rowId: ".sound95"},
	{title: "π΅ π¦πΌππ»π± 96", rowId: ".sound96"},
	{title: "π΅ π¦πΌππ»π± 97", rowId: ".sound97"},
	{title: "π΅ π¦πΌππ»π± 98", rowId: ".sound98"},
	{title: "π΅ π¦πΌππ»π± 99", rowId: ".sound99"},
    {title: "π΅ π¦πΌππ»π± 100", rowId: ".sound100"},
	{title: "π΅ π¦πΌππ»π± 101", rowId: ".sound101"},
    {title: "π΅ π¦πΌππ»π± 102", rowId: ".sound102"},
	{title: "π΅ π¦πΌππ»π± 103", rowId: ".sound103"},
	{title: "π΅ π¦πΌππ»π± 104", rowId: ".sound104"},
	{title: "π΅ π¦πΌππ»π± 105", rowId: ".sound105"},
	{title: "π΅ π¦πΌππ»π± 106", rowId: ".sound106"},
	{title: "π΅ π¦πΌππ»π± 107", rowId: ".sound107"},
	{title: "π΅ π¦πΌππ»π± 108", rowId: ".sound108"},
	{title: "π΅ π¦πΌππ»π± 109", rowId: ".sound109"},
	{title: "π΅ π¦πΌππ»π± 110", rowId: ".sound110"},
	{title: "π΅ π¦πΌππ»π± 111", rowId: ".sound111"},
	{title: "π΅ π¦πΌππ»π± 112", rowId: ".sound112"},
	{title: "π΅ π¦πΌππ»π± 113", rowId: ".sound113"},
	{title: "π΅ π¦πΌππ»π± 114", rowId: ".sound114"},
	{title: "π΅ π¦πΌππ»π± 115", rowId: ".sound115"},
	{title: "π΅ π¦πΌππ»π± 116", rowId: ".sound116"},
	{title: "π΅ π¦πΌππ»π± 117", rowId: ".sound117"},
	{title: "π΅ π¦πΌππ»π± 118", rowId: ".sound118"},
	{title: "π΅ π¦πΌππ»π± 119", rowId: ".sound119"},
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
          return conn.sendButton( m.chat, caption, wm, null, [`β?β° Menu`, `.menu`], m)
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
