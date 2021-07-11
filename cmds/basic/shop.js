const Discord = module.require('discord.js');
let db = require("quick.db")
const ms = require("ms")

module.exports.run = async (client, message, args) => {
    var shop1 = new Discord.MessageEmbed() 
    .setTitle("Shop")
    .setColor('RANDOM')
    .setDescription('ID: `Gun`, This gun allows you too rob people, `$320`\n' +
    'ID: `Bank`: The bank allows you to store your money so others cant rob from it!, `$60`\n' +
    'ID: `Violin`, The violin allows you to play music for money, `$110`\n' +
    'ID: `Sword`, The sword allows you to fight with your friends for money!, `Not out`\n' +
    'ID: `RobberOutfit`, The robber outift decreases your chances of being caught while robbing, `$50`\n' +
    'ID: `Fishingrod`, The fishing rod allows you to fish lmao, `$50`\n' +
    'ID: `Phone`, You can use the phone to check prices of certain items that are not listed in the shop, `$250`')
    .setFooter('Page 1/1    v!buy (ID)')
    message.channel.send(shop1)
}
module.exports.help = {
  name: 'shop'
}
