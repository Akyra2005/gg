let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`β${pickRandom(global.cantik)}β`, m)
}
handler.help = ['cantikcek']
handler.tags = ['game']
handler.command = /^(cantikcek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.cantik = [
'*π¦ Cantik Level : 4%*\n\nINI MUKA ATAU SAMPAH?!',
'*π¦ Cantik Level : 7%*\n\nSerius ya,, Lu ampir mirip kayak Monyet!',
'*π¦ Cantik Level : 12%*\n\nMakin lama liat muka lo gw bisa muntah!',
'*π¦ Cantik Level : 22%*\n\nMungkin karna lo sering liat berbuat maksiatπ',
'*π¦ Cantik Level : 27%*\n\nKeknya bakal susah dapet jodoh lu,, berdoa aja',
'*π¦ Cantik Level : 35%*\n\nYang sabar ya ayang',
'*π¦ Cantik Level : 41%*\n\nSemoga diberkati mendapat jodoh',
'*π¦ Cantik Level : 48%*\n\nDijamin cowok susah deketin lo',
'*π¦ Cantik Level : 56%*\n\nLu Setengah Cantik :v',
'*π¦ Cantik Level : 64%*\n\nCukuplah',
'*π¦ Cantik Level : 71%*\n\nLumayan cantik juga lu ya',
'*π¦ Cantik Level : 1%*\n\nAWOAKAK BURIQQQ!!!',
'*π¦ Cantik Level : 1%*\n\nAWOAKAK BURIQQQ!!!',
'*π¦ Cantik Level : 1%*\n\nAWOAKAK BURIQQQ!!!',
'*π¦ Cantik Level : 1%*\n\nAWOAKAK BURIQQQ!!!',
'*π¦ Cantik Level : 77%*\n\nGak akan Salah Lagi dah neng',
'*π¦ Cantik Level : 83%*\n\nDijamin cowok gak akan kecewa neng',
'*π¦ Cantik Level : 89%*\n\ncowok2 pasti auto salfok klo ngeliat lo!',
'*π¦ Cantik Level : 94%*\n\nMANTAP NIH DIEWE AJG!!!',
'*π¦ Cantik Level : 100%*\n\nLU EMANG CEWEK TERCANTIK YANG PERNAH GW LIAT!!!',
]
