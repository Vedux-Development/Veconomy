const Discord = module.require('discord.js');
let db = require("quick.db")
var chance = require('chance').Chance();
const ms = require("ms")
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var items = new db.table('items')
    const yes = args[0]

    var fetchMoney = economy.get(`money_${message.author.id}`)
    let cooldown1 = 180000; //30 min in ms
    let playDaily = await economy.fetch(`playDaily_${message.author.id}`); // Fetching the time when beg is available.

  
    let timeObj = (cooldown1 - (Date.now() - playDaily)) // Left
    if(!args[0]) {
      message.channel.send("You must specify and instrument")
      return
    }
    var instrument = yes.toLowerCase();
    if (playDaily !== null && cooldown1 - (Date.now() - playDaily) > 0) { /* If already worked */

      message.channel.send('You just played music for 6 hours you can play again in ' + ms(timeObj, { long: true }) );
      return;
}
    if(instrument==="violin") {
      if(!items.get(`Violin_${message.author.id}`)) {
        message.reply("You dont own a violin!")
        return
    }
    if(items.get(`Violin_${message.author.id}`)) {
      economy.set(`playDaily_${message.author.id}`, Date.now()); // Now time

      var Winlose = chance.integer({ min: 0, max: 100 })
      if(Winlose<75) {
      var Howmuch = chance.integer({ min: 13, max: 250})

      economy.add(`money_${message.author.id}`, Howmuch)
      var Violin = new Discord.MessageEmbed()
      .setTitle(`Your cracked at the violin`)
      .setColor('RANDOM')
      .setDescription(`You made $${Howmuch} while playing the violin.`)
      message.channel.send(Violin)
      return
      }
      if(Winlose>75) {
        economy.set(`playDaily_${message.author.id}`, Date.now()); // Now time

        var Violin = new Discord.MessageEmbed()
        .setTitle(`Violin`)
        .setColor('RANDOM')
        .setDescription(`Youy played the violin for 6 hours and made nothing you shitter.`)
        message.channel.send(Violin)
        return
      }
      return
  }
    }
    else {
      message.channel.send("You did not specify an valid instrument!")
    }

}
module.exports.help = {
  name: 'play'
}
