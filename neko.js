require('./db/config')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, MessageType } = require("@whiskeysockets/baileys")
const fs = require('fs')
let defaultMarkupPercentage = 0;
const util = require('util')
const canvafy = require("canvafy");
const { InfoCardBuilder } = require("discord-card-canvas")
const chalk = require('chalk')
const os = require('os')
const { MongoClient } = require('mongodb');
const clientDB = new MongoClient(uri);
clientDB.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');
  }
});
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const jsonFilePath = './db/custom_commands.json';
const { exec, spawn, execSync } = require("child_process")
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture, generateUniqueRefID, connect } = require('./lib/myfunc')
module.exports = client = async (client, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
// Initialize global.db


    var prefix = "."
    const hariini = moment.tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY');

    const isCmd = body.startsWith(prefix)
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const text = q = args.join(" ")
    const { type, quotedMsg, mentioned, now, fromMe } = m
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const from = mek.key.remoteJid
    const botNumber = await client.decodeJid(client.user.id)
    const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isGroup = m.key.remoteJid.endsWith('@g.us')
    const content = JSON.stringify(m.message)
    const isImage = (type == 'imageMessage')
    const isQuotedMsg = (type == 'extendedTextMessage')
    const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
    const isVideo = (type == 'videoMessage')
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
    const time1 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
    if (time1 < "23:59:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "19:00:00") {
      var ucapanWaktu1 = 'Malam'
    }
    if (time1 < "18:00:00") {
      var ucapanWaktu1 = 'Sore'
    }
    if (time1 < "15:00:00") {
      var ucapanWaktu1 = 'Siang'
    }
    if (time1 < "10:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "05:00:00") {
      var ucapanWaktu1 = 'Pagi'
    }
    if (time1 < "03:00:00") {
      var ucapanWaktu1 = 'Malam'
    }

 
    const fdocc = {
      key: {
        participant: '0@s.whatsapp.net',
        ...(m.chat ? {
          remoteJid: `status@broadcast`
        } : {})
      },
      message: {
        documentMessage: {
          title: `*Selamat ${ucapanWaktu1} ${pushname}*`,
          jpegThumbnail: m,
        }
      }
    }
    const sendContact = (jid, numbers, name, quoted, mn) => {
      let number = numbers.replace(/[^0-9]/g, '')
      const vcard = 'BEGIN:VCARD\n' +
        'VERSION:3.0\n' +
        'FN:' + name + '\n' +
        'ORG:;\n' +
        'TEL;type=CELL;type=VOICE;waid=' + global.owner + ':+' + global.owner + '\n' +
        'END:VCARD'
      return client.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions: mn ? mn : [] }, { quoted: quoted })
    }
    const owned = `${global.nomerOwner}@s.whatsapp.net`
    const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
    const kiw = sender.split("@")[0]

    const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
    const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
    if (!client.public) {
      if (!m.key.fromMe) return
    }
    async function downloadAndSaveMediaMessage (type_file, path_file) {
if (type_file === 'image') {
var stream = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
fs.writeFileSync(path_file, buffer)
return path_file } }
 
      
    function readCustomCommands() {
      try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        return JSON.parse(data);
      } catch (error) {
        return {};
      }
    }
    function saveCustomCommands(commands) {
      fs.writeFileSync(jsonFilePath, JSON.stringify(commands, null, 2), 'utf8');
    }
    function addCustomCommand(groupID, command, response) {
      const customCommands = readCustomCommands();
      if (!customCommands[groupID]) {
        customCommands[groupID] = {};
      }
      customCommands[groupID][command] = response;
      saveCustomCommands(customCommands);
    }
    function handleCustomCommands(groupID, command, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const customResponse = customCommands[groupID][command.toUpperCase()];
        if (customResponse) {
          m.reply(customResponse);
        }
      }
    }
    if (isGroup && !isCmd) {
      const groupID = from;
      const customCommand = body.trim().toLowerCase();
      handleCustomCommands(groupID, customCommand, m.reply);
    }
    function listCustomCommands(groupID, reply) {
      const customCommands = readCustomCommands();
      if (customCommands[groupID]) {
        const commands = Object.keys(customCommands[groupID]);
        if (commands.length > 0) {
          let responseText =
            `📆 ${hariini}
⏰ ${time1}
Untuk Melihat List
Ketik List Dibawah ini
--------------------------------------\n`;
          commands.forEach((command, index) => {
            responseText += `${command}\n`;
          });
          m.reply(responseText)
        } else {
          m.reply("Custom Command belum ditambah di group ini");
        }
      } else {
        m.reply("Custom Command belum ditambah di group ini");
      }
    }
      
      
    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
      
     
      

for (let jid of mentionUser) {
    
  const userCollection = clientDB.db(dbName).collection(collectionUser);
  const user = await userCollection.findOne({ nomor : jid });

  if (user) {
      

 m.reply(`Maaf ${pushname}, Orang yang kamu sebut sedang ${user.afkReason} atau AFK`)
  } 
}

if (isGroup) {
    const userCollection = clientDB.db(dbName).collection(collectionUser);
    const user = await userCollection.findOne({ nomor: m.sender });

    if (user) {
      m.reply(
        `Telah Kembali Dari AFK Selama ${clockString(new Date() - user.afkTime)}
      `.trim());

      await userCollection.deleteOne({ nomor: m.sender });
    }
  }

    switch (command) {
       
       case 'afk': {
  const userCollection = clientDB.db(dbName).collection(collectionUsers);
  const afkUserCollection = clientDB.db(dbName).collection(collectionUser);
  const user = await userCollection.findOne({ nomor: sender.split("@")[0] });
const reason = args.join(' ');

  if (user) {
    await afkUserCollection.updateOne({ nomor: sender }, {
      $set: {
        afkTime: new Date(),
        afkReason: reason,
      },
    }, { upsert: true });
    m.reply(`Sukses Set Afk Dengan Alasan ${reason}`);
  } else {
    m.reply('Kamu belum terdaftar, silahkan ketik : *Daftar* untuk bisa menggunakan perintah ini');
  }
}
break;

            
      case 'ping':
      case 'bot': {
    const randomAudioIndex = Math.floor(Math.random() * 3) + 1; 
    const audioPath = `./db/ara${randomAudioIndex}.mp3`;

    client.sendMessage(from, { audio: { url: audioPath }, mimetype: 'audio/mpeg', ptt: true });
  }
          break;
case 'sticker': case 's': case 'stiker':{
if (/image/.test(mime)) {
let media = await downloadAndSaveMediaMessage('image', `./db/stiker/${time1}.jpg`)
m.reply('loading...')
client.sendImageAsSticker(from, media, m, { packname: `${global.botName}`, author: `${global.ownerName}`})
} 
}
break
            

      case 'menu':
      case 'help': {
        const capt =
          `━━━━━[ *NEKO PROJECT V 5.5* ]━━━━━


『 𝗗𝗔𝗧𝗔 𝗕𝗢𝗧 』
» Dev : wa.me/62895360841074
» Bot Name : ${global.botName}
» Owner Name : ${global.ownerName} 

『 𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨 』
» order
» profile
» list
» listdigi
» depo
» daftar
» info
» leaderboard

『 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 』
» join
» kick
» getip
» tambahsaldo
» kurangsaldo
» ubahrole
» daftarmember
» setmargin
» marginlist
» addpay

『 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 』
» addlist
» dellist
» updatelist
» linkgc
» hidetag
» open
» close
» cekml
» cekff

© _Putra_`
        client.sendMessage(m.chat, {
          text: capt,
          contextInfo: {
            externalAdReply: {
              title: `${global.botName}`,
              thumbnailUrl: `${poster1}`,
              sourceUrl: `${linkGC}`,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: fdocc })
      }
      break
        
            
      case 'leaderboard': {
    const db = clientDB.db(dbName);
    const transactionCollection = db.collection(collectionTrx);

    try {
        const leaderboard = await transactionCollection.aggregate([
            { $group: { _id: "$nomor", count: { $sum: 1 }, totalSaldo: { $sum: "$harga" } } },
            { $sort: { totalSaldo: -1 } },
            { $limit: 10 },
        ]).toArray();

        if (leaderboard.length === 0) {
            m.reply('Tidak ada data transaksi untuk leaderboard saat ini.');
            return;
        }

        let leaderboardMessage = '🏆 *Top 10 Leaderboard* 🏆\n\n';
        leaderboard.forEach((entry, index) => {
            const censoredNomor = `${entry._id.substring(0, 5)}*****${entry._id.substring(entry._id.length - 4)}`;
leaderboardMessage += `*${index + 1}.* _${censoredNomor}_, ${entry.count} Transaksi, Rp. ${entry.totalSaldo.toLocaleString()}\n`;

        });

        // Find the most purchased product
        const mostPurchasedProduct = await transactionCollection.aggregate([
            { $group: { _id: "$item", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 1 },
        ]).next();

        leaderboardMessage += `\n🛍️ Produk Paling Banyak Dibeli adalah *${mostPurchasedProduct._id}* dibeli sebanyak ${mostPurchasedProduct.count}`;

        m.reply(leaderboardMessage);
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan dalam mengambil data leaderboard. Silakan coba lagi.');
    }
}
break;
      
      case 'setmargin': {
        if (!isOwner) return
        const validRoles = ['bronze', 'silver', 'gold'];
        const targetRole = args[0]?.toLowerCase();
        if (!targetRole) return m.reply('Format, setmargin <role> <margin>\nContoh, setmargin bronze 5')
        if (!validRoles.includes(targetRole)) {
          return m.reply('Invalid role\nRole yang Tersedia: bronze, silver, gold.');
        }
        const markupPercentage = parseFloat(args[1]) / 100;
        if (isNaN(markupPercentage) || markupPercentage < 0 || markupPercentage > 1) {
          return m.reply('Nilai Margin Invalid');
        }
        const db = clientDB.db(dbName);
        const markupCollection = db.collection(collectionMarkup);
        const result = await markupCollection.updateOne({ role: targetRole.toUpperCase() }, { $set: { percentage: markupPercentage } }, { upsert: true });
        m.reply(`${targetRole.toUpperCase()} Telah diset ${args[1]}%`);
      }
      break;
      case 'marginlist': {
        if (!isOwner) return;
        const db = clientDB.db(dbName);
        const markupCollection = db.collection(collectionMarkup);
        const markupList = await markupCollection.find({}).toArray();
        if (markupList.length === 0) {
          return m.reply('Belom ada role yang di Margin');
        }
        let markupMessage = '─────〔 *Markup Percentages* 〕─────\n\n';
        markupList.forEach(markup => {
          markupMessage += `» *Role*: ${markup.role.toUpperCase()}\n`;
          markupMessage += `» *Percentage*: ${markup.percentage}%\n\n`;
        });
        m.reply(markupMessage);
      }
      break;
      case 'daftar': {
        const target = sender.split("@")[0];
        const db = clientDB.db(dbName);
        const collection = db.collection(collectionUsers);
        const existingUser = await collection.findOne({ nomor: target });
        if (existingUser) {
          return m.reply('Kamu Sudah Terdaftar');
        }
        const defaultRole = 'BRONZE';
        const newUser = {
          nomor: target,
          saldo: 0,
          role: defaultRole,
        };
        await collection.insertOne(newUser);
        return m.reply(`─────〔 *REGISTRASI SUKSES* 〕─────\n\n*» Nomer :* ${target}\n*» Saldo :* 0\n*» Role :* BRONZE\n\nSilahkah melakukan deposit untuk transaksi`)
      }
      break
      case 'addpay': {
        if (!isOwner) return;
        const nama = args[0];
        const nomer = args[1];
        if (!nama || !nomer) {
          return m.reply(`.addew <E-wallet/Bank> <Nomer>`);
        }
        const db = clientDB.db(dbName);
        const paymentMethodCollection = db.collection(collectionEw);
        const newPaymentMethod = {
          nama,
          nomer,
        };
        await paymentMethodCollection.insertOne(newPaymentMethod);
        m.reply(`Sukses Menambahkan Metode Pembayaran`);
      }
      break;
      case 'depo':
      case 'deposit': {
        const canvasInfo = await new InfoCardBuilder({
          backgroundColor: { background: '#070d19', waves: '#0ca7ff' },
          mainText: { content: 'DEPOSIT' },
        }).build();
        const imageBuffer = await canvasInfo.toBuffer();
        const capt = `*Opsi Deposit*\n\n» QRIS (Otomatis) .depoauto <nominal>\n» E-Wallet/Bank (Manual) .depomanual\n\n\n*OTOMATIS*\n» Deposit diproses Otomatis 1-3 Menit\n» Deposit akan ditambah Rp. 750 + 0.70%\n» Minimal 1.000\n» Hanya untuk member role Silver ke atas\n\n*MANUAL*\n» Deposit akan dicek manual Admin\n» Minimal 10.000\n» Untuk semua Role`
        client.sendMessage(m.chat, { image: imageBuffer, caption: capt, })
      }
      break
      case 'depomanual': {
        const canvasInfo = await new InfoCardBuilder({
          backgroundColor: { background: '#070d19', waves: '#0ca7ff' },
          mainText: { content: 'MANUAL' },
        }).build();
        const imageBuffer = await canvasInfo.toBuffer();
        const db = clientDB.db(dbName);
        const paymentMethodCollection = db.collection(collectionEw);
        const paymentMethods = await paymentMethodCollection.find().toArray();
        if (paymentMethods.length === 0) {
          return m.reply('Payment E-Wallet belum ditambahkan');
        }
        let formattedResponse = `*Panduan Deposit*\n» Bayar Melalui Metode Pembayaran dibawah\n» Kirim Bukti Transfer ke Owner\n» Deposit akan diproses oleh Owner\n\n*Metode Pembayaran*`
        paymentMethods.forEach((method, index) => {
          formattedResponse += `\n» ${method.nama.toUpperCase()} : ${method.nomer}`;
        });
        client.sendMessage(m.chat, { image: imageBuffer, caption: formattedResponse, })
      }
      break;
      case 'depoauto': {
        if (!isOwner) return
        const nomor = sender.split("@")[0];
        const jumlah = args[0];
        if (!jumlah || isNaN(jumlah) || parseInt(jumlah) <= 999) {
          return m.reply(`Minimum Deposit adalah 1000. \nNilai deposit tidak boleh mengandung titik atau koma, hanya angka.`);
        }
        const db = clientDB.db(dbName);
        const userCollection = db.collection(collectionUsers);
        const userProfile = await userCollection.findOne({ nomor });
        if (!userProfile || !['SILVER', 'GOLD'].includes(userProfile.role)) {
          return m.reply('Deposit Otomatis Hanya Untuk Role Silver Keatas');
        }
        if (!userProfile) {
          return m.reply('User not registered. Please use *Daftar* to register.');
        }
        const merchant_ref = generateUniqueRefID()
        const formatSaldo = (amount) => `${amount.toLocaleString()}`;
        var expiry = parseInt(Math.floor(new Date().getTime() / 1000) + (60 * 60)); // 60 minutes
        var order_items = [
          {
            name: 'depo',
            price: jumlah,
            quantity: 1
    }
];
        const signature = crypto.createHmac('sha256', privateKeyPG)
          .update(kodePG + merchant_ref + jumlah)
          .digest('hex');
        const config = {
          headers: {
            "Authorization": 'Bearer ' + apiKeyPG,
          }
        };
        const dataToSend = {
          method: 'QRIS',
          merchant_ref: merchant_ref,
          amount: jumlah,
          customer_name: pushname,
          customer_email: 'sedo31149@gmail.com',
          order_items: order_items,
          expired_time: expiry,
          signature: signature
        };
        const depoCollection = db.collection(collectionDepo);
        const existingDepo = await depoCollection.findOne({ nomor });
        if (existingDepo) {
          return m.reply(`Maaf, kamu sudah memiliki deposit yang sedang diproses...`);
        }
        const userDepoInfo = {
          nomor: nomor,
          amount_received: jumlah
        };
        await depoCollection.insertOne(userDepoInfo);
        axios.post(trxUrl, dataToSend, config)
          .then(async (response) => {
            const data = await response.data.data;
            const capt = `─────〔 *OTOMATIS* 〕─────\n\n*» Ref ID :* ${data.merchant_ref}\n*» Metode Pembayaran :* ${data.payment_method}\n*» Username Deposit :* ${pushname}\n*» Jumlah Deposit :* ${formatSaldo(data.amount)}\n\n*${data.status}*\n\nSilahkan transfer Ke QRIS diatas sebesar _*${formatSaldo(data.amount)}*_\nDeposit di cek otomatis dan akan langsung masuk ke saldo kalian, Batas waktu transfer adalah 3 Menit`
            client.sendMessage(m.chat, { image: { url: `${data.qr_url}` }, caption: capt, })
            let noref = data.reference
            let dataStatus = data.status;
            const startTime = new Date().getTime();
            while (dataStatus !== "PAID") {
              await sleep(10000);
              const config = {
                method: "GET",
                headers: {
                  "Authorization": 'Bearer ' + apiKeyPG,
                },
              }
              const MemecLutz = await fetch(
                `${statusUrl}?reference=${noref}`,
                config
              );
              const memecData = await MemecLutz.json();
              dataStatus = memecData.data.status;
              console.log(dataStatus);
              const currentTime = new Date().getTime();
              const elapsedTime = (currentTime - startTime) / 1000;
              if (elapsedTime >= 150) {
                m.reply(`─────〔 *GAGAL* 〕─────\n\n*» Ref ID :* ${noref}\n*» Metode Pembayaran :* ${data.payment_method}\n*» Username Deposit :* ${pushname}\n*» Jumlah Deposit :* ${formatSaldo(data.amount)}\n\n*TIME OUT*\n\nSesi Deposit Expired, Silahkan Deposit Ulang`);
                await depoCollection.deleteOne({ nomor });
                break;
              }
              if (dataStatus === "PAID") {
                const dep = memecData.data.amount_received
                const capt = `─────〔 *CIHUYYY* 〕─────\n\n*» Ref ID :* ${noref}\n*» Metode Pembayaran :* ${memecData.data.payment_method}\n*» Nomer User :* ${nomor}\n*» Waktu :* ${hariini}, ${time1} WIB\n\n*${memecData.data.status}*\n\nSaldo sebesar *${formatSaldo(memecData.data.amount_received)}* Telah ditambah ke Akun Anda King 👑\n© _${global.botName}_`
                m.reply(capt)
                const updatedUserProfile = await userCollection.findOne({ nomor });
                const updatedSaldo = updatedUserProfile.saldo + dep;
                await userCollection.updateOne({ nomor }, { $set: { saldo: updatedSaldo } });
                await depoCollection.deleteOne({ nomor });
                break
              } else if (["EXPIRED", "FAILED", "REFUND"].includes(dataStatus)) {
                await depoCollection.deleteOne({ nomor });
                const capt = `─────〔 *GAGAL* 〕─────\n\n*» Ref ID :* ${noref}\n*» Metode Pembayaran :* ${memecData.data.payment_method}\n*» Username Deposit :* ${pushname}\n*» Jumlah Deposit :* ${formatSaldo(memecData.data.amount)}\n\n*${memecData.data.status}*`
                m.reply(capt);
                break;
              }
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
      break
      case 'listdigi': {
        const productData = JSON.parse(
          fs.readFileSync('./db/datadigi.json', 'utf8')
        );
        if (args.length === 0) {
          const listdigi = Array.from(new Set(productData.map(item => item.category))).sort();
          const capt = `📆 ${hariini}\n⏰ ${time1}\nUntuk Melihat List\nContoh » .listdigi games\n--------------------------------------\n${listdigi.join('\n')}`;
          m.reply(capt);
          return;
        }
        else {
          const requestedCategory = args.join(" ").toLowerCase();
          const listdigi = [...new Set(productData
            .filter(item => item.category.toLowerCase() === requestedCategory)
            .map(item => item.brand))];
          if (listdigi.length > 0) {
            const capt = `📆 ${hariini}\n⏰ ${time1}\nUntuk Melihat List\nContoh » .get mobile legends\n--------------------------------------\n${listdigi.join('\n')}`;
            m.reply(capt);
          }
        }
      }
      break;
      case 'show':
      case 'get': {
        const nomor = sender.split("@")[0];
        const productData = JSON.parse(fs.readFileSync('./db/datadigi.json', 'utf8'));
        const db = clientDB.db(dbName);
        const userCollection = db.collection(collectionUsers);
        const markupCollection = db.collection(collectionMarkup);
        const userProfile = await userCollection.findOne({ nomor });
        if (!userProfile) {
          return m.reply(`Kamu belum terdaftar, silahkan ketik : *Daftar* untuk bisa mengakses`);
        }
        const userRole = await markupCollection.findOne({ role: userProfile.role.toUpperCase() });
        const requestedBrand = args.join(" ").toLowerCase();
        if (!requestedBrand) {
          return;
        }
        const matchingProducts = productData.filter(item => item.brand.toLowerCase() === requestedBrand);
        matchingProducts.sort((a, b) => a.price - b.price);
        let formattedResponse = `📆 ${hariini}\n⏰ ${time1}\n\`\`\`.order <id> <tujuan>\`\`\` | Untuk Membeli Produk\n\`\`\`.info <id>\`\`\` | Untuk Melihat Detail Produk\n------------------------------------------------------\n`;
        matchingProducts.forEach(product => {
          const originalPrice = parseFloat(product.price);
          let markupPercentage = defaultMarkupPercentage;
          if (userRole) {
            markupPercentage = userRole.percentage;
          }
          const increasedPrice = originalPrice * (1 + markupPercentage);
          const adjustedPrice = Math.round(increasedPrice / 100) * 100;
          const formatSaldo = (amount) => `${amount.toLocaleString()}`;
          formattedResponse += `ID: ${product.buyer_sku_code}\n${product.product_name}\nRp. ${formatSaldo(adjustedPrice)}\n\n`;
        });
        client.sendMessage(sender, {
          text: formattedResponse,
        });
      }
      break;
      case 'info':
      case 'detail': {
        const productData = JSON.parse(
          fs.readFileSync('./db/datadigi.json', 'utf8')
        );
        const requestedBuyerSkuCode = args.join(" ");
        if (!requestedBuyerSkuCode) return;
        const db = clientDB.db(dbName);
        const markupCollection = db.collection(collectionMarkup);
        const product = productData.find(item => item.buyer_sku_code.toLowerCase() === requestedBuyerSkuCode.toLowerCase());
        if (!product) return
        const bronzeMarkupData = await markupCollection.findOne({ role: 'BRONZE' });
        const silverMarkupData = await markupCollection.findOne({ role: 'SILVER' });
        const goldMarkupData = await markupCollection.findOne({ role: 'GOLD' });
        const bronzeMarkup = bronzeMarkupData ? bronzeMarkupData.percentage : 0.07;
        const silverMarkup = silverMarkupData ? silverMarkupData.percentage : 0.05;
        const goldMarkup = goldMarkupData ? goldMarkupData.percentage : 0.02;
        const originalPrice = parseFloat(product.price);
        const bronzePrice = originalPrice * (1 + bronzeMarkup);
        const silverPrice = originalPrice * (1 + silverMarkup);
        const goldPrice = originalPrice * (1 + goldMarkup);
        const formattedBronzePrice = Math.round(bronzePrice / 100) * 100;
        const formattedSilverPrice = Math.round(silverPrice / 100) * 100;
        const formattedGoldPrice = Math.round(goldPrice / 100) * 100;
        const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
        const formattedResponse = `─────〔 *${product.brand}* 〕─────\n\n» *Kode Produk* : ${product.buyer_sku_code}\n» *Item* : ${product.product_name}\n» *Kategori* : ${product.category}\n» *Brand* : ${product.brand}\n» *Tipe* : ${product.type}\n» *Harga Bronze* : ${formatSaldo(formattedBronzePrice)}\n» *Harga Silver* : ${formatSaldo(formattedSilverPrice)}\n» *Harga Gold* : ${formatSaldo(formattedGoldPrice)}\n» *Waktu Cut Off* : ${product.start_cut_off} Sampai ${product.end_cut_off}\n» *Deskripsi* : ${product.desc}\n\n\`\`\`.order ${product.brand} <tujuan>\`\`\`\nUntuk Membeli ${product.product_name}`;
        m.reply(formattedResponse);
      }
      break;
      case 'daftarmember':
      case 'listuser':
      case 'listusers': {
        if (!isOwner) return;
        const db = clientDB.db(dbName);
        const userCollection = db.collection(collectionUsers);
        const userData = await userCollection.find().toArray();
        if (userData.length === 0) {
          m.reply('Belum ada member yang terdaftar');
          return;
        }
        const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
        let userList = `─────〔 *Daftar Member* 〕─────\n\n`;
        userData.forEach(user => {
          userList += `» *Nomer :* ${user.nomor}\n`;
          userList += `» *Saldo :* ${formatSaldo(user.saldo)}\n`;
          userList += `» *Role :* ${user.role}\n\n`;
        });
        m.reply(userList);
      }
      break;
      case 'kurangsaldo':
      case 'removersaldo': {
        if (!isOwner) return;
        const target = args[0];
        const amountToSubtract = parseFloat(args[1]);
        if (!target || isNaN(amountToSubtract) || amountToSubtract <= 0) {
          return m.reply('Invalid input.');
        }
        const db = clientDB.db(dbName);
        const userCollection = db.collection(collectionUsers);
        const targetUser = await userCollection.findOne({ nomor: target });
        if (!targetUser) {
          return m.reply(`${target} not registered.`);
        }
        const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
        const sebelum = targetUser.saldo;
        const akhir = targetUser.saldo - amountToSubtract;
        await userCollection.updateOne({ nomor: target }, { $set: { saldo: akhir } });
        m.reply(`─────〔 *Update Saldo* 〕─────\n\n*Nomor :* ${target}\n*Saldo Terkahir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`);
      }
      break;
      case 'addsaldo':
      case 'tambahsaldo': {
        if (!isOwner) return;
        const target = args[0];
        const amountToAdd = parseFloat(args[1]);
        if (!target || isNaN(amountToAdd) || amountToAdd <= 0) {
          return m.reply('Invalid input.');
        }
        const db = clientDB.db(dbName);
        const userCollection = db.collection(collectionUsers);
        const targetUser = await userCollection.findOne({ nomor: target });
        if (!targetUser) {
          return m.reply(`${target} not registered.`);
        }
        const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
        const sebelum = targetUser.saldo;
        const akhir = targetUser.saldo + amountToAdd;
        await userCollection.updateOne({ nomor: target }, { $set: { saldo: akhir } });
        m.reply(`─────〔 *Update Saldo* 〕─────\n\n*Nomor :* ${target}\n*Saldo Terkahir :* Rp. ${formatSaldo(sebelum)}\n*Saldo Sekarang :* Rp. ${formatSaldo(akhir)}\n*Waktu :* ${hariini}, ${time1} WIB`);
      }
      break;
      case 'ubahrole':
      case 'changerole': {
        if (!isOwner) return;
        const target = args[0];
        const kiwi = `${target}@s.whatsapp.net`;
        if (!target) return m.reply('Orangnya Mana?');
        const newRole = args[1];
        if (!newRole) return m.reply('Rolenya Mana?');
        if (!['gold', 'silver', 'owner', 'bronze'].includes(newRole.toLowerCase())) {
          return m.reply(`Role ${newRole} is not available\nAvailable roles: BRONZE, SILVER, and GOLD`);
        }
        const db = clientDB.db(dbName);
        const userCollection = db.collection(collectionUsers);
        const targetUser = await userCollection.findOne({ nomor: target });
        if (!targetUser) {
          return m.reply(`${target} is not registered`);
        }
        const awal = targetUser.role;
        targetUser.role = newRole.toUpperCase();
        await userCollection.updateOne({ nomor: target }, { $set: { role: targetUser.role } });
        m.reply(`─────〔 *UPDATE ROLE* 〕─────\n\nRole Lama: ${awal}\nRole Baru: ${targetUser.role}`);
      }
      break;
      case 'profile':
      case 'profil':
      case 'saldo': {
        const userNomor = sender.split("@")[0];
        const db = clientDB.db(dbName);
        const userCollection = db.collection(collectionUsers);
        const userProfile = await userCollection.findOne({ nomor: userNomor });
        if (!userProfile) return m.reply('Please register first');
        const { nomor, saldo, role } = userProfile;
        const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
        const profileMessage = `─────〔 *Profile* 〕─────\n\n*Username*: ${pushname}\n*Nomor:* ${nomor}\n*Saldo:* ${formatSaldo(saldo)}\n*Role:* ${role}`;
        m.reply(profileMessage);
      }
      break;
      case 'order': {
        const nomor = sender.split("@")[0];
        if (args.length < 2) {
          return m.reply(`Format Salah\nFormat yang benar adalah : \`\`\`order [id] [tujuan]\`\`\``);
        }  
        const db = clientDB.db(dbName);
        const userCollection = db.collection(collectionUsers);
        const markupCollection = db.collection(collectionMarkup);
        const userData = await userCollection.findOne({ nomor });
        if (!userData) {
          return m.reply(`Kamu belum terdaftar, silahkan ketik : *Daftar* untuk bisa mengakses`);
        }  
        const userRole = await markupCollection.findOne({ role: userData.role.toUpperCase() });
        const buyer_sku_code = args[0];
        const customer_no = args[1];
        const productData = JSON.parse(
          fs.readFileSync('./db/datadigi.json', 'utf8')
        );
        const product = productData.find((prod) => prod.buyer_sku_code.toLowerCase() === buyer_sku_code.toLowerCase());
        if (!product) {
          return m.reply(`Layanan ${buyer_sku_code} Tidak ditemukan`);
        }
        const originalPrice = parseFloat(product.price);
        let markupPercentage = defaultMarkupPercentage;
        if (userRole) {
          markupPercentage = userRole.percentage;
        }
        const adjustedPrice = originalPrice + originalPrice * markupPercentage;
        const roundedAdjustedPrice = Math.round(adjustedPrice / 100) * 100;
        if (userData.saldo < roundedAdjustedPrice) {
          m.reply(`Saldo kamu tidak cukup untuk melakukan transaksi ${product.product_name}`);
          return;
        }
        const kur = userData.saldo -= roundedAdjustedPrice;
        await userCollection.updateOne({ nomor }, { $set: { saldo: kur } });
        const ref_id = generateUniqueRefID();
        const signature = crypto.createHash("md5").update(username + apiKey + ref_id).digest("hex");
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            buyer_sku_code: buyer_sku_code,
            customer_no: customer_no,
            ref_id: ref_id,
            sign: signature,
          }),
        };
        fetch("https://api.digiflazz.com/v1/transaction", config)
          .then(async (response) => {
            const data = await response.json();
            m.reply(`Silahkan ditunggu, pesanan kamu sedang diproses...`);
            let dataStatus = data.data.status;
            while (dataStatus !== "Sukses") {
              await sleep(1000);
              const MemecLutz = await fetch("https://api.digiflazz.com/v1/transaction", config);
              const memecData = await MemecLutz.json();
              dataStatus = memecData.data.status;
              console.log(dataStatus);
              if (dataStatus === "Gagal") {
                const capt = `─────〔 *TRANSAKSI GAGAL* 〕─────\n\n» *Status* : ${memecData.data.status}\n» *Invoice* : \`\`\`${memecData.data.ref_id}\`\`\`\n» *Tujuan* : ${customer_no}\n» *Item* : ${product.product_name}\n» *Message* : ${memecData.data.message}\n» *Waktu* : ${hariini}, ${time1} WIB`;
                m.reply(capt)
                const tam = userData.saldo += roundedAdjustedPrice;
                await userCollection.updateOne({ nomor }, { $set: { saldo: tam } })
                break;
              } else if (dataStatus === "Sukses") {
                const capt = `─────〔 *TRANSAKSI SUKSES* 〕─────\n\n» *Status* : ${
                memecData.data.status
              }\n» *Invoice* : ${memecData.data.ref_id}\n» *Item* : ${product.product_name}\n» *Tujuan* : ${customer_no}\n» *Waktu* : ${hariini}, ${time1} WIB\n\n─────〔 *Serial Number* 〕─────\n${
                memecData.data.sn
              }`;
                m.reply(capt);
                const newTransaction = {
                  nomor: nomor,
                  status: memecData.data.status,
                  invoice: memecData.data.ref_id,
                  item: product.product_name,
                  rc: memecData.data.rc,
                  tujuan: customer_no,
                  harga: roundedAdjustedPrice,
                  waktu: hariini,
                };
                const transactionCollection = db.collection(collectionTrx);
                await transactionCollection.insertOne(newTransaction);
                const toUser = `Kamu telah melakukan topup sebesar ${roundedAdjustedPrice}, Saldo kamu tersisa ${userData.saldo}`;
       client.sendMessage(sender, { text: toUser, })
                const toOwn = `*» Nama :* ${pushname}\n*» Nomor :* ${
                m.sender.split("@")[0]
              }\n*» Produk :* ${product.product_name}\n*» Harga Pokok :* ${originalPrice}\n*» Harga Jual :* ${roundedAdjustedPrice}\n*» Sisa Saldo :* ${userData.saldo}\n*» Waktu :* ${hariini}, ${time1} WIB`;
        client.sendMessage(owned, { text: toOwn, }) 
                break;
              }
            }
          });
      }
      break;
      case 'getlayanan':
      case 'updatelayanan': {
        if (!isOwner) return;
        const productData = './db/datadigi.json';
        const cmd = 'prepaid';
        const combinedString = username + apiKey + cmd;
        const signature = crypto.createHash('md5').update(combinedString).digest('hex');
        const endPoint = "https://api.digiflazz.com/v1/price-list";
        const postData = {
          cmd,
          username,
          sign: signature,
        };
        const apiResponse = await connect(endPoint, postData);
        if (apiResponse && apiResponse.data) {
          fs.writeFileSync(productData, JSON.stringify(apiResponse.data, null, 2));
          m.reply(`Layanan Berhasil di Update`);
        }
      }
      break;
      case 'dashboard': {
        if (!isOwner) return
        if (isGroup) return
        const combinedString = username + apiKey + "depo";
        const signature = crypto.createHash('md5').update(combinedString).digest('hex');
        const endPoint = "https://api.digiflazz.com/v1/cek-saldo";
        const postData = {
          cmd: "deposit",
          username: username,
          sign: signature,
        };
        connect(endPoint, postData)
          .then((apiResponse) => {
            if (apiResponse && apiResponse.data) {
              const profile = apiResponse.data;
              const formatSaldo = (amount) => `Rp. ${amount.toLocaleString()}`;
              const ngen = `─────〔 *PROFIE* 〕─────\n\n» *Username* : ${username}\n» *Nama Bot* : ${botName}\n» *Saldo* : ${formatSaldo(profile.deposit)}\n» *Status* : Aktif`
              m.reply(ngen)
            } else {
              console.log("Failed to get API data.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            console.log("Failed to make API request.");
          });
      }
      break
      case 'list': {
        if (isGroup) {
          const groupID = from; // Use the group ID as a unique identifier
          listCustomCommands(groupID, m.reply);
        } else {
          m.reply("Command ini hanya bisa digunakan di Group");
        }
      }
      break
      case 'kbr': case 'event': case 'promosi': case 'ads' :{
        if (!m.isGroup) return
        const capt = `> *Kick Battle Royale*
Bener cuy, kalian ngga salah denger. Gua bakal ngadain Battle Royale tapi di WhatsApp 

> *Informasi Tentang Event Ini*
Sesuai Namanya ini event dimana kalian akan ngekick satu sama lain, dan yang terakhir masih di group akan menang.

> *Cara Mainnya*
Kick member lain menggunakan command Bot

_.kick @tag_

> *Hadiah*
Mobile Weekly Diamond Pass (bisa berubah)

> *Cara Ikutan*
Gabung ke Group: https://chat.whatsapp.com/HBz7ZUWicTYKr9XoSxhRIY`
        
          
          client.sendMessage(m.chat, { 
              image: { url: `https://telegra.ph/file/edddc4cd124a0c6f4fe72.jpg` },
     caption: capt,
    mentions: participants.map(a => a.id)
          }, { quoted: fdocc })
      }
      break     
      case 'hidetag':
      case 'h': {
        if (!m.isGroup) return
        if (!isAdmins) return
        client.sendMessage(m.chat, {
          text: text ? text : '',
          mentions: participants.map(a => a.id)
        }, { quoted: fdocc })
      }
      break
      case 'join': {
        if (!isOwner) return
        if (!text) return m.reply(`Link Groupnya Mana?`)
        var ini_urrrl = text.split('https://chat.whatsapp.com/')[1]
        var data = await client.groupAcceptInvite(ini_urrrl).then((res) => m.reply(`Berhasil Join ke grup...`)).catch((err) => m.reply(`Eror.. Munkin bot telah di kick Dari grup tersebut`))
      }
      break
      case 'getip': {
        if (!isOwner) return
        var http = require('http')
        http.get({
          'host': 'api.ipify.org',
          'port': 80,
          'path': '/'
        }, function(resp) {
          resp.on('data', function(ip) {
            m.reply("IP : " + ip);
          })
        })
      }
      break
      case 'kick': {
        if (!m.isGroup) return
        if (!isAdmins && !isOwner) return
        if (!isBotAdmins) return
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(`${users} telah di kick...`)).catch((err) => m.reply('hmmm gagal kick dia'))
      }
      break
      case 'linkgroup':
      case 'linkgrup':
      case 'linkgc': {
        if (!m.isGroup) return
        if (!isAdmins && !isOwner) return
        if (!isBotAdmins) return
        let response = await client.groupInviteCode(m.chat)
        client.sendText(m.chat, `『 *INFO LINK GROUP 』*\n\n» *Nama Grup :* ${groupMetadata.subject}\n» *Owner Grup :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Tidak diketahui'}\n» *ID Grup:* ${groupMetadata.id}\n» *Link Grup :* https://chat.whatsapp.com/${response}\n» *Member :* ${groupMetadata.participants.length}\n`, m, {
          detectLink: true
        })
        console.log(groupMetadata)
      }
      break
      case 'updatelist':
      case 'addlist':
      case 'tambahlist': {
        if (!m.isGroup) return
        if (!isAdmins) return
        const groupID = from;
        const addlistCommand = body.slice(8).trim();
        const delimiterIndex = addlistCommand.indexOf('||');
        if (delimiterIndex !== -1) {
          const customCommand = addlistCommand.slice(0, delimiterIndex).trim().toUpperCase();
          const customResponse = addlistCommand.slice(delimiterIndex + 2).trim();
          if (customCommand && customResponse) {
            addCustomCommand(groupID, customCommand, customResponse);
            m.reply(`Sukses Set List Message\nKata Kunci : *${customCommand}*`);
          } else {
            m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
          }
        } else {
          m.reply(`Gunakan dengan cara *${command} key||response*\n\nContoh: \`\`\`${command} tes||apa\`\`\``);
        }
      }
      break;
      case 'dellist':
      case 'hapuslist': {
        const groupID = from;
        const dellistCommand = body.slice(8).trim().toUpperCase();
        const customCommands = readCustomCommands();
        if (customCommands[groupID] && customCommands[groupID][dellistCommand]) {
          delete customCommands[groupID][dellistCommand];
          saveCustomCommands(customCommands);
          m.reply(`Sukses Delete List Message\nKata Kunci : *${dellistCommand}*`);
        } else {
          m.reply(`Gunakan dengan cara *${command} key*\n\nContoh: \`\`\`${command} tes\`\`\``);
        }
      }
      break;
      case 'close': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya = `─────〔 *GROUP CLOSE* 〕─────

*Group Telah Di Tutup Oleh* @${sender.split("@")[0]}

\`\`\`📆 ${hariini}
⏰ ${time1} WIB\`\`\``
        await client.groupSettingUpdate(m.chat, 'announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break
      case 'open': {
        if (!m.isGroup) return
        if (!isAdmins) return
        if (!isBotAdmins) return
        const menu_nya =
          `─────〔 *GROUP OPEN* 〕─────

*Group Telah Di Buka Oleh* @${sender.split("@")[0]}

\`\`\`📆 ${hariini}
⏰ ${time1} WIB\`\`\``
        await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => client.sendMessage(from, { text: menu_nya, contextInfo: { mentionedJid: [sender, owned] } }))
      }
      break
      case 'cekml': {
        if (args.length !== 1) {
          m.reply('Usage: cek <user id>');
          return;
        }
        const user_id = args[0];
        const apiUrl = `https://v1.apigames.id/merchant/M230425QHPN8447LU/cek-username/mobilelegends?user_id=${user_id}&signature=c721d1cd01f5d2c363cda5551cc4b403`;
        axios.get(apiUrl)
          .then((response) => {
            const responseData = response.data;
            if (responseData.status === 1) {
              m.reply(
                `「 *ID DITEMUKAN* 」

*› Username:* \`\`\`${responseData.data.username}\`\`\`
*› ID:* \`\`\`${user_id}\`\`\``
              );
            } else {
              m.reply(`「 *ID SALAH* 」
*› Gabungkan User ID dan Server ID*`);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            m.reply('Failed to check username. Please try again later.');
          });
      }
      break
      case 'cekff': {
        if (args.length !== 1) {
          m.reply('Usage: cek <user id>');
          return;
        }
        const user_id = args[0];
        const apiUrl = `https://v1.apigames.id/merchant/M230425QHPN8447LU/cek-username/freefire?user_id=${user_id}&signature=c721d1cd01f5d2c363cda5551cc4b403`;
        axios.get(apiUrl)
          .then((response) => {
            const responseData = response.data;
            if (responseData.status === 1) {
              m.reply(
                `「 *ID DITEMUKAN* 」
        
*› Username:* \`\`\`${responseData.data.username}\`\`\`
*› ID:* \`\`\`${user_id}\`\`\``
              );
            } else {
              m.reply(`「 *ID SALAH* 」
*› Gabungkan User ID dan Server ID*`);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            m.reply('Failed to check username. Please try again later.');
          });
      }
      break
      default:
    }
  } catch (err) {
    console.log(err)
  }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})