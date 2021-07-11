const Discord = module.require('discord.js');
let db = require("quick.db")
const config = require("../../config.js")
module.exports.run = async (client, message, args) => {
    console.log
    if (!config.Developers.includes(message.author.id))
    return message.reply("You are not a devevloper bud!");
    const economy = new db.table('economy')
    const items = new db.table('items')
    let userID = args[0];

    if(userID) {
        economy.delete(`Banned_${userID}`)
        message.channel.send(`${userID} is now unbanned!`)

    }
}
module.exports.help = {
  name: 'unban'
}
