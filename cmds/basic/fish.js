const Discord = module.require('discord.js');
let db = require("quick.db")
var chance = require('chance').Chance();
const ms = require('ms')
const Items = require("../../items")
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var items = new db.table('items')
    let fishDaily = await economy.fetch(`fishDaily_${message.author.id}`); // Fetching the time when beg is available.
    let cooldown1 = 60000; //30 min in m

    if(!items.get(`fishingRod_${message.author.id}`)) {
        message.reply("How are you gonna fish without a fishing rod!")
        return
    }
      let timeObj = (cooldown1 - (Date.now() - fishDaily)) // Left
      if (fishDaily !== null && cooldown1 - (Date.now() - fishDaily) > 0) { /* If already worked */

        message.channel.send('You got to put your bait on. You can fish in ' + ms(timeObj, { long: true }) );
        return;
      } 


        var Winlose = chance.integer({ min: 0, max: 100 })

        if(Winlose>50) {
            let Win1 = Items.Itemsnames.Fish[Math.floor(Math.random() * Items.Itemsnames.Fish.length)];

            if(Win1==="Shark") {
                var What = chance.integer({ min: 0, max: 100 })

                if(What<=10) {

                }

                else if(What>10) {
                    Win1 = "Rare-fish"
                } 
            }

            if(Win1==="Jellyfish") {
                var What = chance.integer({ min: 0, max: 100 })

                if(What<=30) {

                }

                else if(What>30) {
                    Win1 = "Common-fish"
                } 
            }

            if(Win1==="Ledgendary-fish") {
                var What = chance.integer({ min: 0, max: 100 })

                if(What<=40) {

                }

                else if(What>40) {
                    Win1 = "Common-fish"
                } 
            }
            items.add(`${Win1}_${message.author.id}`, 1)
            economy.set(`fishDaily_${message.author.id}`, Date.now()); // Now time
            var test = items.get(`${Win1}_${message.author.id}`)

            var Succ = new Discord.MessageEmbed()
            .setTitle(`Fishing`)
            .setColor('GREEN')
            .setDescription(`You went fishing and reeled in a ${Win1}`)
            message.channel.send(Succ)
            return
        }

        if(Winlose<50) {
            economy.set(`fishDaily_${message.author.id}`, Date.now()); // Now time
            let Win1 = Items.Itemsnames.Fish[Math.floor(Math.random() * Items.Itemsnames.Fish.length)];

            var Succ = new Discord.MessageEmbed()
            .setTitle(`Fishing`)
            .setColor('RED')
            .setDescription(`:x: You had a ${Win1} on your line, but the fish broke the line.`)
            message.channel.send(Succ)
            return
        }

}
module.exports.help = {
  name: 'fish'
}