const Discord = module.require('discord.js');
let db = require("quick.db")
const config = require("../../config.js")
module.exports.run = async (client, message, args) => {

    if (!config.Developers.includes(message.author.id))
    return message.reply("You are not a devevloper bud!");
    const economy = new db.table('economy')
    const items = new db.table('items')
    let userID = args[0];

    if(userID) {
        economy.delete(`money_${userID}`)
        economy.delete(`bank_${userID}`)
        economy.delete(`bankMax_${userID}`)
        economy.delete(`job_${userID}`)

        items.delete(`Bank_${userID}`)
        items.delete(`gun_${userID}`)
        items.delete(`ROutfit_${userID}`)
        items.delete(`Violin_${userID}`)
        items.delete(`Phone_${userID}`)

        economy.set(`Banned_${userID}`, true)
        message.channel.send(`${userID} is now banned!`)

    }
}
module.exports.help = {
  name: 'ban'
}
