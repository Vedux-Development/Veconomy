const Discord = module.require("discord.js");
let db = require("quick.db");
const items = require("../../items.js");
module.exports.run = async (client, message, args) => {
  var items1 = new db.table('items')
  if (!items1.get(`Phone_${message.author.id}`)) {
    message.reply("You must own a phone to search things!")
    return
}
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

  if(!args[0]) {
    message.channel.send("You must search something!")
    return
  }
  var search2 = args[0]
  var search1 = search2.toLowerCase()
  var search = search1.capitalize()
  let Sell;
  let Buy;
  if(search==="Bear") {
    Sell = items.Living.Animals[0].Bear[0].sell
    Buy = items.Living.Animals[0].Bear[0].buy
  }
  if(search==="Deer") {
    Sell = items.Living.Animals[0].Deer[0].sell
    Buy = items.Living.Animals[0].Deer[0].buy
  }
  if(search==="Duck") {
    Sell = items.Living.Animals[0].Duck[0].sell
    Buy = items.Living.Animals[0].Duck[0].buy
  }
  if(search==="Cow") {
    Sell = items.Living.Animals[0].Cow[0].sell
    Buy = items.Living.Animals[0].Cow[0].buy
  }
  if(search==="Chicken") {
    Sell = items.Living.Animals[0].Chicken[0].sell
    Buy = items.Living.Animals[0].Chicken[0].buy
  }

  if(search==="Common-fish") {
    Sell = items.Living.Fish[0]["Common-fish"][0].sell
    Buy = items.Living.Fish[0]["Common-fish"][0].buy
  }
  if(search==="Rare-fish") {
    Sell = items.Living.Fish[0]["Rare-fish"][0].sell
    Buy = items.Living.Fish[0]["Rare-fish"][0].buy
  }
  if(search==="Ledgendary-fish") {
    Sell = items.Fish[0]["Ledgendary-fish"][0].sell
    Buy = items.Fish[0]["Ledgendary-fish"][0].buy
  }
  if(search==="Jellyfish") {
    Sell = items.Fish[0].Jellyfish[0].sell
    Buy = items.Fish[0].Jellyfish[0].buy
  }
  if(search==="Shark") {
    Sell = items.Living.Fish[0].Shark[0].sell
    Buy = items.Living.Fish[0].Shark[0].buy
  }
  if(search==="Fish") {
    message.channel.send('`Common-fish`\n`Rare-fish`\n`Ledgendary-fish`\n`Jellyfish`\n`Shark`')
    return
  }
  if(search==="Animals") {
    message.channel.send('`Duck`\n`Deer`\n`Bear`\n`Cow`\n`Chicken`')
    return
  }

  if(Sell===undefined) {
    message.channel.send("Invalid search")
    return
  }
  const Embedsend = new Discord.MessageEmbed()
  .setTitle(search)
  .setColor('RANDOM')
  .addField("**__Buy__**", Buy)
  .addField("**__Sell__**", Sell)
  .setFooter('Veconomy')
  message.channel.send(Embedsend)
}
module.exports.help = {
  name: "search"
};
