let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`β${pickRandom(global.ganteng)}β`, m)
}
handler.help = ['gantengcek']
handler.tags = ['game']
handler.command = /^(gantengcek)$/i
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

global.ganteng = [
'*π¦ Ganteng Level : 4%*\n\nINI MUKA ATAU SAMPAH?!',
'*π¦ Ganteng Level : 7%*\n\nSerius ya Bro,, Lu ampir mirip kayak Monyet!',
'*π¦ Ganteng Level : 12%*\n\nMakin lama liat muka lo gw bisa muntah!',
'*π¦ Ganteng Level : 22%*\n\nMungkin karna lo sering liat berbuat maksiatπ',
'*π¦ Ganteng Level : 27%*\n\nKeknya bakal susah dapet jodoh lu,, berdoa aja',
'*π¦ Ganteng Level : 35%*\n\nYang sabar ya ayang',
'*π¦ Ganteng Level : 41%*\n\nSemoga diberkati mendapat jodoh',
'*π¦ Ganteng Level : 48%*\n\nDijamin cewek susah deketin lo',
'*π¦ Ganteng Level : 56%*\n\nLu Setengah Ganteng :v',
'*π¦ Ganteng Level : 64%*\n\nCukuplah',
'*π¦ Ganteng Level : 71%*\n\nLumayan Ganteng juga lu ya',
'*π¦ Ganteng Level : 1%*\n\nAWOAKAK BURIQQQ!!!',
'*π¦ Ganteng Level : 1%*\n\nAWOAKAK BURIQQQ!!!',
'*π¦ Ganteng Level : 1%*\n\nAWOAKAK BURIQQQ!!!',
'*π¦ Ganteng Level : 1%*\n\nAWOAKAK BURIQQQ!!!',
'*π¦ Ganteng Level : 77%*\n\nGak akan Salah Lagi dah Om',
'*π¦ Ganteng Level : 83%*\n\nDijamin Cewek gak akan kecewa Om',
'*π¦ Ganteng Level : 89%*\n\nCewek2 pasti bakalan pingsan klo ngeliat lo!',
'*π¦ Ganteng Level : 94%*\n\nAARRGGHHH!!!',
'*π¦ Ganteng Level : 100%*\n\nLU EMANG COWOK TERGANTENG, KAYA OWNER FANGZ BOT',
]