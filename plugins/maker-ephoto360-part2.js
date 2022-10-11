import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*Masukkan Teks Setelah Perintah.*'
  m.reply('*Making, Please Wait...*')
  let res = `https://api.violetics.pw/api/ephoto360/${command}?apikey=1290-0463-b5e6&text=${response[0]}`
    conn.sendFile(m.chat, res, 'logo.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['graffiti-text5', 'green-brush', 'green-fireworks', 'greenskin-snake', 'greeting-cards', 'greetingcard-birthday', 'greetingcard-birthday2', 'halloween-fire', 'halloween-frankenstain', 'halloween-text', 'halloween-text2', 'halloween-videocard', 'hand-love', 'hand-love2', 'handwritten-foggyglass', 'happynewyear-firework', 'heart-cup', 'heart-flashlight', 'heart-wings', 'holographic-effect', 'horror-gift', 'icecream-chocolate', 'jean-text-effect', 'jewel-effect', 'joker', 'kahlii-arena-of-valor', 'kaisa-league-of-legends', 'leaves-text', 'lend-effect', 'light-effect', 'light-neonsign', 'lightfuturistic-technology', 'lightning-pubg-video', 'lol-fiora', 'lol-master-yi', 'lol-notice', 'lol-zed', 'luxury-gold', 'magic-effect', 'matrix', 'metal-darkgold', 'metal-eagle', 'metal-effect', 'metal-headshot', 'metal-lion', 'metal-logo', 'metal-star', 'metal-text', 'metallic-text', 'mganga-league-of-kings', 'minimal-logomaker', 'mobile-legends', 'modern-gold3', 'modern-gold4', 'modern-gold5', 'modern-goldgreen', 'modern-goldpurple', 'modern-goldred', 'modern-goldred2', 'modern-goldsliver', 'my-love', 'name-football', 'neon-brightblue', 'neon-devilwing', 'neon-satin', 'neon-valentine', 'neonlight-galaxy', 'newyear-greeting', 'newyear-greeting2', 'newyear-greeting3', 'ninja-mascot', 'orangeskin-snake', 'paper-cutou', 'paperclip-quote', 'papercut-effect', 'personalized-christmas', 'personalized-queen', 'pikachu', 'project-yasuo', 'pubg-birthdaycake', 'pubg-maker', 'pubg-maker2', 'pubg-maker3', 'pubg-maker4', 'purple-effect', 'rainbow-glow', 'realistic-cloud', 'realistic-embroidery', 'redhot-metal', 'redhot-metal2', 'resht-league-of-kings', 'road-paint', 'romantic-valentine', 'rooster', 'round-thunder', 'sandsummer-beach	', 'sandsummer-beach2', 'signature', 'skull-videomaker', 'snake-text', 'snow-text', 'stars-night', 'status-life', 'status-life2', 'status-life3', 'status-love', 'status-love2', 'status-mood', 'status-mood2', 'status-mood3', 'status-mood4', 'storm-trooper', 'summerysand', 'sunflower-birthdaycake', 'sunlight-shadow', 'tattoo-body', 'tattoo-body2', 'tattoo-girl', 'tattoo-hand2', 'text-christmas', 'text-effectcolor', 'text-leaves', 'text-party', 'text-rain', 'text-wall', 'tiger', 'traveling-bear', 'typography-leaves', 'typography-leavesautumn', 'typography-maker', 'typography-maker2', 'typography-maker3', 'underwater-text', 'valentine-day', 'video-greeting-cards', 'violet-league-of-kings'].map(v => v + ' <teks>')
handler.tags = ['logo']
handler.command = /^(graffiti-text5|green-brush|green-fireworks|greenskin-snake|greeting-cards|greetingcard-birthday|greetingcard-birthday2|halloween-fire|halloween-frankenstain|halloween-text|halloween-text2|halloween-videocard|hand-love|hand-love2|handwritten-foggyglass|happynewyear-firework|heart-cup|heart-flashlight|heart-wings|holographic-effect|horror-gift|icecream-chocolate|jean-text-effect|jewel-effect|joker|kahlii-arena-of-valor|kaisa-league-of-legends|leaves-text|lend-effect|light-effect|light-neonsign|lightfuturistic-technology|lightning-pubg-video|lol-fiora|lol-master-yi|lol-notice|lol-zed|luxury-gold|magic-effect|matrix|metal-darkgold|metal-eagle|metal-effect|metal-headshot|metal-lion|metal-logo|metal-star|metal-text|metallic-text|mganga-league-of-kings|minimal-logomaker|mobile-legends|modern-gold3|modern-gold4|modern-gold5|modern-goldgreen|modern-goldpurple|modern-goldred|modern-goldred2|modern-goldsliver|my-love|name-football|neon-brightblue|neon-devilwing|neon-satin|neon-valentine|neonlight-galaxy|newyear-greeting|newyear-greeting2|newyear-greeting3|ninja-mascot|orangeskin-snake|paper-cutou|paperclip-quote|papercut-effect|personalized-christmas|personalized-queen|pikachu|project-yasuo|pubg-birthdaycake|pubg-maker|pubg-maker2|pubg-maker3|pubg-maker4|purple-effect|rainbow-glow|realistic-cloud|realistic-embroidery|redhot-metal|redhot-metal2|resht-league-of-kings|road-paint|romantic-valentine|rooster|round-thunder|sandsummer-beach	|sandsummer-beach2|signature|skull-videomaker|snake-text|snow-text|stars-night|status-life|status-life2|status-life3|status-love|status-love2|status-mood|status-mood2|status-mood3|status-mood4|storm-trooper|summerysand|sunflower-birthdaycake|sunlight-shadow|tattoo-body|tattoo-body2|tattoo-girl|tattoo-hand2|text-christmas|text-effectcolor|text-leaves|text-party|text-rain|text-wall|tiger|traveling-bear|typography-leaves|typography-leavesautumn|typography-maker|typography-maker2|typography-maker3|underwater-text|valentine-day|video-greeting-cards|violet-league-of-kings)$/i
handler.register = true
handler.limit = true
export default handler
