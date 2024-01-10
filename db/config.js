const fs = require('fs')
const chalk = require('chalk')

//OWNER
global.owner = ['']
global.nomerOwner = '' 
global.botName = ''
global.ownerName = ''
global.sessionName = 'nyan~' //JANGAN DI GANTI

//DIGIFLAZZ 
username = ''
apiKey = ''

// TRIPAY
kodePG = ''
apiKeyPG = ''
privateKeyPG = ''
trxUrl = 'https://tripay.co.id/api/transaction/create' //Janagn diganti 
statusUrl = 'https://tripay.co.id/api/transaction/detail' //Jangan diganti

//MONGODB 
uri = 'mongodb+srv://Putra:putra@bam.phk7k.mongodb.net' // Ganti url kalian jika ada
dbName = ''// isi nama db, bebas
collectionUsers = 'users'//jangan diganti
collectionUser = 'user'//jangan diganti
collectionDepo = 'depo'//jangan diganti 
collectionTrx = 'trx'//jangan diganti
collectionMarkup = 'markup'//jangan diganti
collectionEw = 'ewallet'//jangan diganti 
collectionCommands = 'cmd'//jangan diganti

//EMBED
linkGC = ''// Ganti Link GC lu
poster1 = 'https://telegra.ph/file/267ad2a82db9bed8b5a2f.jpg'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})