const Discord = module.require('discord.js');
const db = require("quick.db")
var chance = require('chance').Chance();

module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    const fetchMoney = economy.get(`money_${message.author.id}`)
    let bet = args[0]

    if (!bet) {
        message.channel.send("You must input an amount to bet!")
        return
    }

    if (fetchMoney < bet) {
        message.channel.send("You cant bet money that you cant have!")
        return
    }
    if (fetchMoney >= bet) {
        if (bet >= 100) {
            var Bot = chance.integer({
                min: 1,
                max: 12
            })
            var Player = chance.integer({
                min: 1,
                max: 12
            })
            if (Bot < Player) {
                economy.add(`money_${message.author.id}`, bet)
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle('You won')
                    .setDescription(`You won! $${bet}`)
                    .addFields({
                        name: '\u200B',
                        value: '\u200B'
                    }, {
                        name: 'You rolled',
                        value: `${Player}`,
                        inline: true
                    }, )
                    .addField('Bot rolled', `${Bot}`, true)

                message.channel.send(exampleEmbed);
            } else if (Bot > Player) {
                economy.subtract(`money_${message.author.id}`, bet)

                const exampleEmbed = new Discord.MessageEmbed()
                .setColor('RED')
                .setTitle('You lost')
                .setDescription(`You lost! $${bet}`)
                .addFields({
                    name: '\u200B',
                    value: '\u200B'
                }, {
                    name: 'You rolled',
                    value: `${Player}`,
                    inline: true
                }, )
                .addField('Bot rolled', `${Bot}`, true)

            message.channel.send(exampleEmbed);
            }
        } else if (bet < 100) {
            message.channel.send("You must bet more than $100")
        }
    }
}
module.exports.help = {
    name: 'gamble'
}