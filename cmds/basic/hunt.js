const Discord = module.require('discord.js');
let db = require("quick.db")
var chance = require('chance').Chance();
const ms = require('ms')
const Items = require("../../items")
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var items = new db.table('items')
    let huntDaily = await economy.fetch(`huntDaily_${message.author.id}`); // Fetching the time when beg is available.
    let cooldown1 = 60000; //30 min in m

    if(!items.get(`gun_${message.author.id}`)) {
        message.reply("How are you gonna hunt without a gun!")
        return
    }
      let timeObj = (cooldown1 - (Date.now() - huntDaily)) // Left
      if (huntDaily !== null && cooldown1 - (Date.now() - huntDaily) > 0) { /* If already worked */

        message.channel.send('You can hunt in ' + ms(timeObj, { long: true }) );
        return;
      } 


        var Winlose = chance.integer({ min: 0, max: 100 })

        if(Winlose>50) {
            let emoji;
            let Win1 = Items.Itemsnames.Animals[Math.floor(Math.random() * Items.Itemsnames.Animals.length)];

            if(Win1==="Bear") {
                var What = chance.integer({ min: 0, max: 100 })

                if(What>40) {
                    Win1 = "Deer"
                }

                if(What<40) {

                }
            }

            if(Win1==="Duck") {
                var What = chance.integer({ min: 0.00, max: 100.00 })

                if(What>99.99) {
                    
                }

                if(What<99) {
                    Win1 = "Cow"
                }
            }
            if(Win1==="Deer") {
                emoji = "🦌"
            }
            if(Win1==="Duck") {
                emoji = "🦆"
            }
            if(Win1==="Bear") {
                emoji = "🐻"
            }
            if(Win1==="Cow") {
                emoji = "🐮"
            }
            if(Win1==="Chicken") {
                emoji = "🐔"
            }
            
            items.add(`${Win1}_${message.author.id}`, 1)
            economy.set(`huntDaily_${message.author.id}`, Date.now()); // Now time
            var test = items.get(`${Win1}_${message.author.id}`)

            var Succ = new Discord.MessageEmbed()
            .setTitle(`Hunting`)
            .setColor('GREEN')
            .setDescription(`You went hunting and caught a ${Win1} ${emoji}`)
            message.channel.send(Succ)
            return
        }

        if(Winlose<50) {
            economy.set(`huntDaily_${message.author.id}`, Date.now()); // Now time

            var Succ = new Discord.MessageEmbed()
            .setTitle(`Hunting`)
            .setColor('RED')
            .setDescription(`You went hunting and caught... Nothing you noob :x:`)
            message.channel.send(Succ)
            return
        }

}
module.exports.help = {
  name: 'hunt'
}