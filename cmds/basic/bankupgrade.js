const Discord = module.require('discord.js');
let db = require("quick.db")
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var items = new db.table('items')
    var fetchMoney = economy.get(`money_${message.author.id}`)
    var fetchBank = economy.get(`bank_${message.author.id}`)
    var fetchBankMax = economy.get(`bankMax_${message.author.id}`)
    const amount = args[0]


    if(!items.get(`Bank_${message.author.id}`)) {
        message.reply("You dont own a bank!")
        return
    }
    if(fetchBank == null) {
        var fetchBank = 0
    }
    if(fetchBankMax == null) {
        var fetchBankMax = 0
    }
    if(fetchMoney == null) {
        var fetchMoney = 0
    }
    if(!args[0]) {
        message.reply("You need to add an amount!")
        return;
    }

    if(isNaN(amount)) {
        message.channel.send("Amount must be a number")
    }
    if(amount<=1) {
        message.channel.send("Amount must be a whole number greater than 1")
        return;
    }
    if(amount>fetchMoney) {
        message.reply("You cant add more bank space if you dont even have the money to do so. Noob")
        return;
    }
    var Mathamount1 = amount * 2
    var Mathamount = parseInt(Mathamount1)
    if(Mathamount<=0) {
        message.channel.send("An error has occured")
        return;
    }
    if(amount<fetchMoney) {
        economy.subtract(`money_${message.author.id}`, amount)
        economy.add(`bankMax_${message.author.id}`, Mathamount)

        var Upgrade = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}'s balance`)
        .setColor('RANDOM')
        .setDescription(`You have increased your Bankspace by $${Mathamount}`)
        message.channel.send(Upgrade)
    }

}
module.exports.help = {
  name: 'upgradebank'
}
