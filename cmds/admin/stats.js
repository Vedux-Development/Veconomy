const Discord = module.require('discord.js');
let db = require("quick.db")
const config = require("../../config.js")
module.exports.run = async (client, message, args) => {
    console.log
    if (!config.Developers.includes(message.author.id))
    return message.reply("You are not a devevloper bud!");
    const economy = new db.table('economy')
    const items = new db.table('items')
    let user = message.mentions.members.first();
    let action = args[1];
    let amount1 = args[2];
    const Username = await client.users.fetch(user.id);
    let amount = parseInt(amount1)
    if(action=="money") {
        economy.set(`money_${user.id}`, amount)
        message.channel.send(`I have changed ${Username.username}'s money too $${amount}`)
        return
    }

    if(action=="bank") {
        if(!items.get(`bank_${user.id}`)) {
            items.set(`bank_${user.id}}`, true)
        }
        economy.set(`bank_${Username.id}`, amount)
        message.channel.send(`I added ${amount} to ${Username.username}'s bank max`)
        return
    }

    if(action=="Infinity") {
        economy.set(`money_${message.author.id}`, Number.MAX_SAFE_INTEGER)

        message.channel.send("Your money is now Infinite")
    }

    if(action=="bankMax") {
        if(!items.get(`bank_${user.id}`)) {
            items.set(`bank_${user.id}`, true)
        }
        economy.set(`bankMax_${user.id}`, amount)
        message.channel.send(`I added ${amount} to ${Username.username}'s bank`)
        return
    }
}
module.exports.help = {
  name: 'change'
}
