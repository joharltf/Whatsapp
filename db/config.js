const fs = require('fs')
const chalk = require('chalk')

//OWNER
global.owner = ['ジョハル']
global.nomerOwner = '+14069981601' 
global.botName = 'Sinx'
global.ownerName = 'Johar Lutfi'
global.sessionName = 'nyan~' //JANGAN DI GANTI

//DIGIFLAZZ 
username = 'josshop'
apiKey = ''

// TRIPAY
kodePG = ''
apiKeyPG = ''
privateKeyPG = ''
trxUrl = 'https://tripay.co.id/api/transaction/create' //Janagn diganti 
statusUrl = 'https://tripay.co.id/api/transaction/detail' //Jangan diganti

//MONGODB 
uri = 'mongodb+srv://Putra:putra@bam.phk7k.mongodb.net' // Ganti url kalian jika ada
dbName = 'Josshop'// isi nama db, bebas
collectionUsers = 'users'//jangan diganti
collectionUser = 'user'//jangan diganti
collectionDepo = 'depo'//jangan diganti 
collectionTrx = 'trx'//jangan diganti
collectionMarkup = 'markup'//jangan diganti
collectionEw = 'ewallet'//jangan diganti 
collectionCommands = 'cmd'//jangan diganti

//EMBED
linkGC = 'https://chat.whatsapp.com/LaTwWvxQboz5GyYwT59xYS'// Ganti Link GC lu
poster1 = 'https://i.ibb.co/31SGJqK/Banner-Jualan.jpg'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
