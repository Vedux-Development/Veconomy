const Discord = module.require('discord.js');
let db = require("quick.db")
const items = require('../../items')
module.exports.run = async (client, message, args) => {
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }
    var Items = new db.table('items')
    var economy = new db.table('economy')
    var fetchMoney = economy.get(`money_${message.author.id}`)
    let sell;
    var search2 = args[0]
    var amount = args[1]

    if(!search2) {
        message.channel.send("You must add something you want to sell")
    }
    var search1 = search2.toLowerCase()
    var search = search1.capitalize()

    if(search === "Common-fish") {
        sell = items.Living.Fish[0]["Common-fish"][0].sell
    }
    if(search === "Rare-fish") {
        sell = items.Living.Fish[0]["Rare-fish"][0].sell
    }
    if(search === "Ledgendary-fish") {
        sell = items.Living.Fish[0]["Ledgendary-fish"][0].sell
    }
    if(search === "Jellyfish") {
        sell = items.Living.Fish[0].Jellyfish[0].sell
    }
    if(search === "Shark") {
        sell = items.Living.Fish[0].Shark[0].sell
    }
    if(search === "Duck") {
        sell = items.Living.Animals[0].Duck[0].sell
    }
    if(search === "Deer") {
        sell = items.Living.Animals[0].Deer[0].sell
    }
    if(search === "Bear") {
        sell = items.Living.Animals[0].Bear[0].sell
    }
    if(search === "Cow") {
        sell = items.Living.Animals[0].Cow[0].sell
    }
    if(search === "Chicken") {
        sell = items.Living.Animals[0].Chicken[0].sell
    }
    if(search===undefined) {
        message.channel.send("Must sell a valid item!")
        return
    }

    if(!amount) {
        message.channel.send("How much do you wish to sell? ```Amount``` ```all```")
    }

    var yeher = Items.get(`${search}_${message.author.id}`)

    if(amount==="all") {
        amount = yeher
    }
    if(yeher===null) {
        message.channel.send(`You cant sell an item you dont have!`)
    }

    if(yeher<amount) {
        message.channel.send("You are trying to sell more than what you have!")
    }

    if(yeher>=amount) {
        var yessir = sell * amount

        Items.subtract(`${search}_${message.author.id}`, amount)
        economy.add(`money_${message.author.id}`, yessir)

        var LL = new Discord.MessageEmbed()
        .setTitle("Sold")
        .setColor("RANDOM")
        .setDescription(`You sold ${amount} ${search} and gained $${yessir} `);

    message.channel.send(LL)
    return;
    }
}
module.exports.help = {
  name: 'sell'
}
