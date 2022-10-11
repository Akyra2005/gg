import { format } from 'util'
// let path = require('path')
import { spawn } from 'child_process'

// Font By Jarot
let fontPath = 'src/font/Zahraaa.ttf'
let handler = async (m, { conn, args }) => {
    if (!global.support.convert &&
        !global.support.magick &&
        !global.support.gm) return handler.disabled = true // Disable if doesnt support
    let inputPath = 'src/kertas/magernulis1.jpg'
    let d = new Date
    let tgl = d.toLocaleDateString('id-Id')
    let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
    let teks = args.join` `
    // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks}), m)
    let bufs = []
    const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
        'convert',
        inputPath,
        '-font',
        fontPath,
        '-fill',
        'red',
        '-size',
        '1024x784',
        '-pointsize',
        '20',
        '-interline-spacing',
        '1',
        '-annotate',
        '+806+78',
        hari,
        '-font',
        fontPath,
        '-fill',
        'red',
        '-size',
        '1024x784',
        '-pointsize',
        '18',
        '-interline-spacing',
        '1',
        '-annotate',
        '+806+102',
        tgl,
        '-font',
        fontPath,
        '-fill',
        'red',
        '-size',
        '1024x784',
        '-pointsize',
        '15',
        '-interline-spacing',
        '-7.5',
        '-annotate',
        '+344+142',
        teks,
        'jpg:-'
    ]
    spawn(_spawnprocess, _spawnargs)
        .on('error', e => m.reply(format(e)))
        .on('close', () => {
            conn.sendFile(m.chat, Buffer.concat(bufs), 'nulis.jpg', '*Tulisan Bot Lebih Bagus Daripada Tulisanmu*', m)
        })
        .stdout.on('data', chunk => bufs.push(chunk))
}
handler.help = ['n'].map(v => v + 'ulismerah <teks>')
handler.tags = ['nulis','tools']
handler.command = /^nulismerah$/i
handler.register = true
handler.limit = true
export default handler

// BY MFARELS
// https://GitHub.com/MFarelS/