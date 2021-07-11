const Discord = module.require('discord.js');
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
    /* Item prices */
    const BankCost = 60;
    const GunCost = 320;
    const Robberoutfir = 50;
    const Violin = 110;
    const Phone = 250;
    const Fishingrod = 50;

    const items = new db.table('items')
    const yes = args[0]
    const economy = new db.table('economy')
    const fetchMoney = economy.get(`money_${message.author.id}`)
    var itemname = yes.toLowerCase();

    if(!args[0]) {
        message.chanel.send('Please type the ID of an item. Run v!shop to get item ID\'(s).')
    }

    if(itemname === "bank") {
        if(items.get(`Bank_${message.author.id}`) === true) {
            message.reply("You already own this item!")
            return;
        }
        if(fetchMoney >= BankCost) {
            economy.subtract(`money_${message.author.id}`, BankCost)
            items.set(`Bank_${message.author.id}`, true)

            var ownbank = new Discord.MessageEmbed()
            .setTitle("Bank")
            .setColor('RANDOM')
            .setDescription('You now own a bank.')
            .setFooter('v!help bank for help.')
            message.channel.send(ownbank)
            return;
        }
        else if(fetchMoney < BankCost) {
            Ansr = BankCost - fetchMoney
            message.channel.send(`You need $${Ansr} more dollhairs to buy a bank!`)
            return;
        }

    }

    if(itemname === "gun") {
        if(items.get(`gun_${message.author.id}`) === true) {
            message.reply("You already own this item!")
            return;
        }
        if(fetchMoney >= GunCost) {
            economy.subtract(`money_${message.author.id}`, GunCost)
            items.set(`gun_${message.author.id}`, true)

            var owngun = new Discord.MessageEmbed()
            .setTitle("Gun")
            .setColor('RANDOM')
            .setDescription('You now own a gun.')
            .setFooter('v!help gun for help.')
            message.channel.send(owngun)
            return
        }
        else if(fetchMoney < GunCost) {
            Ansr = GunCost - fetchMoney
            message.channel.send(`You need $${Ansr} more dollhairs to buy a gun!`)
        }

    }

    if(itemname === "robberoutfit") {
        const BankCost = 40000;
            if(items.get(`ROutfit_${message.author.id}`) === true) {
                message.reply("You already own this item!")
                return;
            }
            if(fetchMoney >= Robberoutfir) {
                economy.subtract(`money_${message.author.id}`, Robberoutfir)
                items.set(`ROutfit_${message.author.id}`, true)
    
                var Ownrob = new Discord.MessageEmbed()
                .setTitle("Robber outfit")
                .setColor('RANDOM')
                .setDescription('You now own a Robber outfit.')
                .setFooter('You now have a less likely chance of getting caught while robbing')
                message.channel.send(Ownrob)
                return
            }
            else if(fetchMoney < Robberoutfir) {
                Ansr = Robberoutfir - fetchMoney
                message.channel.send(`You need $${Ansr} more dollhairs to buy a Robber outfit!`)
            }
    
        }

        if(itemname === "violin") {
                if(items.get(`Violin_${message.author.id}`) === true) {
                    message.reply("You already own this item!")
                    return;
                }
                if(fetchMoney >= Violin) {
                    economy.subtract(`money_${message.author.id}`, Violin)
                    items.set(`Violin_${message.author.id}`, true)
        
                    var Ownviolin = new Discord.MessageEmbed()
                    .setTitle("Violin")
                    .setColor('RANDOM')
                    .setDescription('You now own a Violin.')
                    .setFooter('v!play violin to play the violin')
                    message.channel.send(Ownviolin)
                    return
                }
                else if(fetchMoney < Violin) {
                    Ansr = Violin - fetchMoney
                    message.channel.send(`You need $${Ansr} more dollhairs to buy a violin!`)
                }
        
            }

            if(itemname === "phone") {
                if(items.get(`Phone_${message.author.id}`) === true) {
                    message.reply("You already own this item!")
                    return;
                }
                if(fetchMoney >= Phone) {
                    economy.subtract(`money_${message.author.id}`, Phone)
                    items.set(`Phone_${message.author.id}`, true)
        
                    var Ownphone = new Discord.MessageEmbed()
                    .setTitle("Phone")
                    .setColor('RANDOM')
                    .setDescription('You now own a Phone.')
                    .setFooter('v!help phone to get help with the phone')
                    message.channel.send(Ownphone)
                    return
                }
                else if(fetchMoney < Phone) {
                    Ansr = Phone - fetchMoney
                    message.channel.send(`You need $${Ansr} more dollhairs to buy a phone!`)
                }
        
            }

            if(itemname === "fishingrod") {
                if(items.get(`fishingRod_${message.author.id}`) === true) {
                    message.reply("You already own this item!")
                    return;
                }
                if(fetchMoney >= Fishingrod) {
                    economy.subtract(`money_${message.author.id}`, Fishingrod)
                    items.set(`fishingRod_${message.author.id}`, true)
        
                    var Ownrod = new Discord.MessageEmbed()
                    .setTitle("Phone")
                    .setColor('RANDOM')
                    .setDescription('You now own a fishing rod.')
                    .setFooter('v!help fishing to learn how to fish')
                    message.channel.send(Ownrod)
                    return
                }
                else if(fetchMoney < Fishingrod) {
                    Ansr = Fishingrod - fetchMoney
                    message.channel.send(`You need $${Ansr} more dollhairs to buy a fishing rod!`)
                }
        
            }


}
module.exports.help = {
  name: 'buy'
}
