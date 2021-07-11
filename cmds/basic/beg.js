const Discord = module.require('discord.js');
let db = require("quick.db")
var chance = require('chance').Chance();
const ms = require('ms')
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var fetchMoney = economy.get(`money_${message.author.id}`)
    let cooldown1 = 45000; //30 min in ms
    let begDaily = await economy.fetch(`begDaily_${message.author.id}`); // Fetching the time when beg is available.

    let Names = [
        "James charles",
        "Arina Grande",
        "Tazio",
        "Elon Musk",
        "Bill gates",
        "Cardi B",
        "Lil nas x",
        "Santa Clause",
        "Homeless dude",
        "Bill cosby",
        "Veconomy"
      ];

    let Denies = [
        "No money for you!",
        "How about no? :>",
        "I Decline!!",
        "GO AWAY!",
        "I dont have money right now, Sorry.",
        "I only have my credit card on me!",
        "Uno reverse",
        "How about you!?",
        "Your mom",
        "Denied",
        "Do i look like bill gates",
        "Give me some drugs then boy",
    ]

    let Accepts = [
        "Here you go :)",
        "Heres some moolah",
        "Here you go man",
        "Dont buy to much wine",
        "Dont buy to many druggies",
        "How much you need?",
    ]
        let timeObj = (cooldown1 - (Date.now() - begDaily)) // Left
        
        if (begDaily !== null && cooldown1 - (Date.now() - begDaily) > 0) { /* If already worked */

          message.channel.send('You can beg in ' + ms(timeObj, { long: true }) );
          return;
    }


        var Numbery = chance.integer({ min: 0, max: 100 })

        console.log(Numbery)
        if(Numbery > 50) {
            var MoneyAMT = chance.integer({ min: 10, max: 150})
            economy.add(`money_${message.author.id}`,MoneyAMT)
            economy.set(`begDaily_${message.author.id}`, Date.now()); // Now time
            
            let Name = Names[Math.floor(Math.random() * Names.length)];
            let Text = Accepts[Math.floor(Math.random() * Accepts.length)];
            let msgy = new Discord.MessageEmbed()
            .setTitle(Name)
            .setColor("RANDOM")
            .setDescription(`${Text}\nYou have recieved $${MoneyAMT}`);
          message.channel.send(msgy);
        }
        
        else if(Numbery < 50) {
            economy.set(`begDaily_${message.author.id}`, Date.now()); // Now time

            let Name = Names[Math.floor(Math.random() * Names.length)];
            let Text = Denies[Math.floor(Math.random() * Denies.length)];
            let msg = new Discord.MessageEmbed()
            .setTitle(Name)
            .setColor("RANDOM")
            .setDescription(`${Text}`);
          message.channel.send(msg);
        }
}
module.exports.help = {
  name: 'beg'
}