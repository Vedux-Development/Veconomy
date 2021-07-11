const Discord = module.require('discord.js');
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    let user = message.mentions.members.first();
    const fetchMoney = economy.get(`money_${message.author.id}`)

    if(!args[0]) {
        message.channel.send("You must mention a user!")
        return;
    }
    if(!args[1]) {
        message.channel.send("You must mention an amount to give!")
        return;
    }
    
    if(args[1]) {
        if(args[1]>fetchMoney) {
            message.channel.send("You cant give more money than you have, silly!")
            return;
        }
        if(args[1]<=fetchMoney) {
            economy.subtract(`money_${message.author.id}`, args[1])
            economy.add(`money_${user.id}`, args[1])
            const Username = await client.users.fetch(user.id);
            var Give = new Discord.MessageEmbed()
            .setTitle(`Give succesful`)
            .setColor('GREEN')
            .setDescription(`You have given ${Username.username} $${args[1]}`)
            message.channel.send(Give)
        }
    }    
}
module.exports.help = {
  name: 'give'
}
