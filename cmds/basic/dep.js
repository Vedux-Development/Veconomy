const Discord = module.require('discord.js');
let db = require("quick.db")
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var items = new db.table('items')
    var amount1 = args[0]
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
        message.channel.send("You dont have any Bankspace run v!upgradebank for help")
        return
    }
    if(fetchMoney == null) {
        var fetchMoney = 0
    }

    if(args[0] === "all") {
        if(fetchMoney>fetchBankMax) {
            if(fetchBank === 0) {
            economy.add(`bank_${message.author.id}`, fetchBankMax)
            economy.subtract(`money_${message.author.id}`, fetchBankMax)

            var Amountof = economy.get(`bank_${message.author.id}`)
            var Added = new Discord.MessageEmbed()
            .setTitle("Bank")
            .setColor("RANDOM")
            .setDescription(`You now have $${Amountof} in your bank!`);

            message.channel.send(Added)
            return;
            }
        
        Yes = fetchBankMax - fetchBank
        if(Yes>0) {
            economy.add(`bank_${message.author.id}`, Yes)
            economy.subtract(`money_${message.author.id}`, Yes)

            var Amountof = economy.get(`bank_${message.author.id}`)
            var Added = new Discord.MessageEmbed()
            .setTitle("Bank")
            .setColor("RANDOM")
            .setDescription(`You now have $${Amountof} in your bank!`);

            message.channel.send(Added)
            return;
        }
        else if(Yes<=0) {
            message.reply(":x: Your bank is already maxed!")
            return
        }
        }
        if(fetchMoney<fetchBankMax) {
            if(fetchBank===fetchBankMax) {
                message.channel.send(":x: Your bank is full")
                return
            }

            let Diffrence = fetchBankMax - fetchBank
            if(fetchMoney>Diffrence) {
                economy.subtract(`money_${message.author.id}`, Diffrence)
                economy.add(`bank_${message.author.id}`, Diffrence)

                var Amountof = economy.get(`bank_${message.author.id}`)
                var Added = new Discord.MessageEmbed()
                .setTitle("Bank")
                .setColor("RANDOM")
                .setDescription(`You now have $${Amountof} in your bank!`);
    
                message.channel.send(Added)
                return;
            }

            else if(fetchMoney<Diffrence) {
                let amountR = economy.get(`money_${message.author.id}`)
                economy.subtract(`money_${message.author.id}`, amountR)
                economy.add(`bank_${message.author.id}`, amountR)

                var Amountof = economy.get(`bank_${message.author.id}`)
                var Added = new Discord.MessageEmbed()
                .setTitle("Bank")
                .setColor("RANDOM")
                .setDescription(`You now have $${Amountof} in your bank!`);
    
                message.channel.send(Added)
                return;
            }
        }

        if(fetchBank===fetchBankMax) {
            message.channel.send(":x: Your bank is full")
            return
        }
    }
    var amount = parseInt(amount1)
    if(amount>fetchMoney) {
        message.channel.send("You cant deposit more than what you have!")
        return
    }
    if(amount<=fetchMoney) {
        if(amount>fetchBankMax) {
            message.channel.send("You cant deposit more than what your bank can hold")
            return
        }
        var changeAmount = amount + fetchBank
        if(changeAmount>fetchBankMax) {
            message.channel.send("You cant deposit more than what your bank can store!")
        }
        if(changeAmount<=fetchBankMax) {
            economy.add(`bank_${message.author.id}`, amount)
            economy.subtract(`money_${message.author.id}`, amount)

            var Amountof = economy.get(`bank_${message.author.id}`)
            var Added = new Discord.MessageEmbed()
            .setTitle("Bank")
            .setColor("RANDOM")
            .setDescription(`You now have $${Amountof} in your bank!`);

            message.channel.send(Added)
            return;
        }
    }

}
module.exports.help = {
  name: 'dep'
}
