const Discord = module.require('discord.js');
let db = require("quick.db")
var chance = require('chance').Chance();
const ms = require('ms')
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var suggestion = args[0]
    let cooldown1 = 8.64e+7; //30 min in ms
    let suggestDaily = await economy.fetch(`suggestDaily_${message.author.id}`); // Fetching the time when beg is available.


        let timeObj = (cooldown1 - (Date.now() - suggestDaily)) // Left
        
        if (suggestDaily !== null && cooldown1 - (Date.now() - suggestDaily) > 0) { /* If already worked */

          message.channel.send('You can leave another suggestion in ' + ms(timeObj) );
          return;
    }

    if(!suggestion) {
        message.channel.send("You must add a suggestion :x:")
    }
    else if(suggestion) {
        economy.set(`suggestDaily_${message.author.id}`, Date.now()); // Now time
        
        var Sugg = new Discord.MessageEmbed() 
        .setTitle(`Suggestion by ${message.author.tag}`)
        .setColor('RANDOM')
        .setDescription(suggestion)
        .setFooter(message.author.id)
        client.channels.cache.get('861918418792873985').send(Sugg);
    }
}
module.exports.help = {
  name: 'suggest'
}