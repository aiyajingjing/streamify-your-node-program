const stream = require('stream')

const euro = new Buffer([0xE2, 0x82, 0xAC])
const cent = new Buffer([0xC2, 0xA2])

const source = Buffer.concat([euro, cent])

const readable = stream.Readable({ encoding: 'utf8' })
readable.push(source.slice(0, 2))
readable.push(source.slice(2, 4))
readable.push(source.slice(4, 6))
readable.push(null)

readable.on('data', data => console.log(data))

