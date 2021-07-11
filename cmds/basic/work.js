const Discord = module.require('discord.js');
let db = require("quick.db")
const ms = require("ms")

module.exports.run = async (client, message, args) => {
  const economy = new db.table('economy')
  const fetchMoney = economy.get(`money_${message.author.id}`)

      let cooldown1 = 3.6e+6; //30 min in ms
      let cooldown2 = 7.2e+6; //30 min in m
      let cooldown3 = 8.64e+7; //30 min in ms
      let amount = Math.floor((Math.random() * 100) + 100); // Paid
      let workDaily = await economy.fetch(`workDaily_${message.author.id}`); // Fetching the time when work is available.

      if(economy.get(`job_${message.author.id}`)  === 1) {
        let timeObj = (cooldown1 - (Date.now() - workDaily)) // Left
        if (workDaily !== null && cooldown1 - (Date.now() - workDaily) > 0) { /* If already worked */

          message.channel.send('You can work in ' + ms(timeObj, { long: true }) );
          return;
        } 
          economy.add(`money_${message.author.id}`, 17)
          economy.set(`workDaily_${message.author.id}`, Date.now()); // Now time
          
          Finishwork = new Discord.MessageEmbed()
          .setTitle('Work')
          .setDescription('You made some burgers and got $17')

          message.channel.send(Finishwork)
          return;
      }

      if(economy.get(`job_${message.author.id}`)  === 2) {
        let timeObj = (cooldown2 - (Date.now() - workDaily)) // Left
        if (workDaily !== null && cooldown2 - (Date.now() - workDaily) > 0) { /* If already worked */

          message.channel.send('You can work in ' + ms(timeObj) );
          return;
        } 
        economy.add(`money_${message.author.id}`, 20)
        economy.set(`workDaily_${message.author.id}`, Date.now()); // Now time
        
        Finishwork = new Discord.MessageEmbed()
        .setTitle('Work')
        .setDescription('You moderated some kids and made $20')

        message.channel.send(Finishwork)
        return;
      }

      if(economy.get(`job_${message.author.id}`)  === 3) {
        let timeObj = (cooldown2 - (Date.now() - workDaily)) // Left
        if (workDaily !== null && cooldown2 - (Date.now() - workDaily) > 0) { /* If already worked */

          message.channel.send('You can work in ' + ms(timeObj) );
          return;
        } 
        economy.add(`money_${message.author.id}`, 265)
        economy.set(`workDaily_${message.author.id}`, Date.now()); // Now time
        
        Finishwork = new Discord.MessageEmbed()
        .setTitle('Work')
        .setDescription('You deliverd some mail and made $265')

        message.channel.send(Finishwork)
        return;
      }

      else {
        message.reply("You do not have a job run v!jobs to get one")
      }

}
module.exports.help = {
  name: 'work'
}
