const Discord = module.require('discord.js');
let db = require("quick.db")
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    let user = message.mentions.members.first();
    var fetchMoney = economy.get(`money_${message.author.id}`)
    var fetchBank = economy.get(`bank_${message.author.id}`)
    var fetchBankMax = economy.get(`bankMax_${message.author.id}`)

    if(fetchBank == null) {
        var fetchBank = 0
    }
    if(fetchMoney == null) {
        var fetchMoney = 0
    }
    if(fetchBankMax == null) {
        var fetchBankMax = 0
    }
    if(user) {
        Usermoneyget = economy.get(`money_${user.id}`)
        Userbankget = economy.get(`bank_${user.id}`)
        Userbankmaxget = economy.get(`bankMax_${user.id}`)
        if(Userbankget == null) {
            var Userbankget = 0.00
        }
        if(Userbankmaxget == null) {
            var Userbankmaxget = 0.00
        }
        if(Usermoneyget == null) {
            var Usermoneyget = 0.00
        }

        let Username = await client.users.fetch(user.id);
        var Bal = new Discord.MessageEmbed()
        .setTitle(`${Username.username}'s balance`)
        .setColor('RANDOM')
        .setDescription(`**Cash: **${Usermoneyget} \n**Bank: **${Userbankget}/${Userbankmaxget}`)
        message.channel.send(Bal)
        return;
    }

    let Username = await client.users.fetch(message.author.id);
    var Bal = new Discord.MessageEmbed()
    .setTitle(`${Username.username}'s balance`)
    .setColor('RANDOM')
    .setDescription(`**Cash: **${fetchMoney} \n**Bank: **${fetchBank}/${fetchBankMax}`)
    message.channel.send(Bal)
    return;
}
module.exports.help = {
  name: 'bal'
}
