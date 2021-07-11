const Discord = module.require('discord.js');
let db = require("quick.db")
var chance = require('chance').Chance();
const ms = require('ms')
const Items = require("../../items")
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var items = new db.table('items')
    const type1 = args[0]
    let Bear = await items.get(`Bear_${message.author.id}`)
    let Duck = await items.get(`Duck_${message.author.id}`);
    let Deer = await items.get(`Deer_${message.author.id}`);
    let Cow = await items.get(`Cow_${message.author.id}`);
    let Chicken = await items.get(`Chicken_${message.author.id}`);

    let Common = await items.get(`Common-fish_${message.author.id}`);
    let Rare = await items.get(`Rare-fish_${message.author.id}`);
    let Ledgendary = await items.get(`Ledgendary-fish_${message.author.id}`);
    let Jellyfish = await items.get(`Jellyfish_${message.author.id}`);
    let Shark = await items.get(`Shark_${message.author.id}`);


    if(items.get(`Bear_${message.author.id}`) === null) {
        Bear = 0
    }
    if(items.get(`Duck_${message.author.id}`) === null) {
        Duck =  0
    }
    if(items.get(`Deer_${message.author.id}`) === null) {
        Deer = 0
    }
    if(items.get(`Cow_${message.author.id}`) === null) {
        Cow = 0
    }
    if(items.get(`Chicken_${message.author.id}`) === null) {
        Chicken = 0
    }


    if(items.get(`Common-fish_${message.author.id}`) === null) {
        Common = 0
    }
    if(items.get(`Rare-fish_${message.author.id}`) === null) {
        Rare = 0
    }
    if(items.get(`Ledgendary-fish_${message.author.id}`) === null) {
        Ledgendary = 0
    }
    if(items.get(`Jellyfish_${message.author.id}`) === null) {
        Jellyfish = 0
    }
    if(items.get(`Shark_${message.author.id}`) === null) {
        Shark = 0
    }
    if(!type1) {
        message.channel.send("You must search a part of your inventory\n`animals`\n`fish`")
        return
    }
    var type = type1.toLowerCase()
    if(type === "animals") {
    var hunt = new Discord.MessageEmbed()
    .setTitle(`${message.author.username}'s inventory`)
    .setColor('RANDOM')
    .addField('Bears', Bear)
    .addField('Ducks', Duck)
    .addField('Deers', Deer)
    .addField('Cows', Cow)
    .addField('Chickens', Chicken)
    .setFooter('Inventory V.1')
    message.channel.send(hunt)
    return
    }
    else if(type === "fish") {
        var hunt = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}'s inventory`)
        .setColor('RANDOM')
        .addField('Common fish', Common)
        .addField('Rare fish', Rare)
        .addField('Ledgendary fish', Ledgendary)
        .addField('Jellyfish', Jellyfish)
        .addField('Shark', Shark)
        .setFooter('Inventory V.1')
        message.channel.send(hunt)
        return
    }
    else {
        message.channel.send("Must use a valid inventory type")
        return
    }
}
module.exports.help = {
  name: 'inv'
}