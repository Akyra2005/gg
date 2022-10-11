let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `

   *🛍️ SEWA BOT*
    • Lowest: 5K/Grup (1 minggu)
    • Intermediate: 20K/Grup (1 bulan)
    • Highest: 35K/Grup (2 bulan)
    • Best: 45K/Grup (4 bulan)                                                      
    • Matchless: 90K/Grup (12 bulan)
    
    
   *💳 PAYMENT*
    Dana, Ovo, Gopay, Saweria & Pulsa Telkom ( +5K )
    
    Contact:
    wa.me/6281347927862

    '
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler
