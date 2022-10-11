let handler = async m => m.reply(`
*FITUR MENULIS*

Option:
#nulishitam
#nulisbiru
#nulishijau
#nulismerah

`.trim()) // Tambah sendiri kalo mau
handler.help = ['nulis','menulis']
handler.tags = ['nulis','tools']
handler.command = /^nulis|menulis$/i
handler.limit = true
handler.register = true
export default handler 
