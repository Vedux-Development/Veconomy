const Discord = module.require('discord.js');
let db = require("quick.db")
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var items = new db.table('items')
    var amount = args[0]
    var fetchBank = items.get(`items_${message.author.id}`)
    var fetchMoney = economy.get(`money_${message.author.id}`)
    var fetchBank = economy.get(`bank_${message.author.id}`)
    var fetchBankMax = economy.get(`bankMax_${message.author.id}`)

    if(!items.get(`Bank_${message.author.id}`)) {
        message.reply("You dont own a bank!")
        return
    }

    if(fetchBank == null) {
        var fetchBank = 0
    }
    if(fetchBankMax == null) {
        var fetchBankMax = 0
        message.channel.send("You dont have any Bankspace run b!upgradebank for help")
        return
    }
    if(fetchMoney == null) {
        var fetchMoney = 0
    }

    if(!args[0]) {
        message.channel.send("You need to add how much you want to withdraw")
        return;
    }

    if(amount>fetchBank) {
        message.channel.send("You only have $" + fetchBank + " in your bank")
        return
    }

    if(amount<=fetchBank) {
        economy.subtract(`bank_${message.author.id}`, amount)
        economy.add(`money_${message.author.id}`, amount)

        var Amountof = economy.get(`money_${message.author.id}`)
        var Added = new Discord.MessageEmbed()
        .setTitle("Bank")
        .setColor("RANDOM")
        .setDescription(`You now have $${Amountof} in your wallet!`);

        message.channel.send(Added)
        return;
    }
    else {
        message.channel.send("An error has occured while trying to process your request")
    }
}
module.exports.help = {
  name: 'with'
}
