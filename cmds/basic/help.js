const Discord = module.require("discord.js");
let db = require("quick.db");
const config = require("../../config");
module.exports.run = async (client, message, args) => {
  let command1 = args[0];

  if (!command1) {
    var LL = new Discord.MessageEmbed()
      .setTitle("Help")
      .setColor("RANDOM")
      .setDescription(
        'To use this command you can run ```v!help (Command name)``` If you want to get started using this bot you can run ```v!help started```'
      );

    message.channel.send(LL);
    return
  }
  var command = command1.toLowerCase();
  if(command === "bank") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Bank")
    .setColor("RANDOM")
    .setDescription('The bank allows you to securely store your money!')
    .addField('Increasing the amount of money your bank can hold!', '`v!upgradebank (amount)`, The amount you put here will be mutiplied by two! Make sure you have the money you put though.')
    .addField('Depositing money to your bank!', '`v!dep (amount)`, You cannot use this money when buying things! You must withdraw it!')
    .addField('Withdrawing money from yout bank!', '`v!with (amount)`, When doing this people can steal this money!')
  message.channel.send(LL);
  return
  }
  if(command === "beg") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Beg")
    .setColor("RANDOM")
    .setDescription('Begging allows you to make some quick money!')
    .addField('Begging!', '`v!beg`, You can run this every 45 seconds')
  message.channel.send(LL);
  return
  }
  if(command === "jobs") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Jobs")
    .setColor("RANDOM")
    .setDescription('gives you a list of all the jobs.')
    .addField('Getting a job!', '`v!jobs (jobname)`')
    .addField('Working!', '`v!work`, Depending on your job will decide how much money you can make and when you can work again!')
  message.channel.send(LL);
  return
  }
  if(command === "rob") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Rob")
    .setColor("RANDOM")
    .setDescription('Allows you to take money from people.')
    .addField('Upping chances to get a successfull robbery!', 'If you own a robber outfit your chances of successfully robbing someone!')
    .addField('Failing a robbery!', 'If you faill a robbery you will have to pay the person you robbed a fee!')
  message.channel.send(LL);
  return
  }
  if(command === "give") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Give")
    .setColor("RANDOM")
    .setDescription('Allows you to give money to your friends.')
    .addField('Params', '`v!give @user (amount)`' )
  message.channel.send(LL);
  return
  }
  if(command === "upgradebank") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Upgrading bank")
    .setColor("RANDOM")
    .setDescription('Allows you to add money to your bank storage.')
    .addField('Params', '`v!upgradebank (amount)`')
  message.channel.send(LL);
  return
  }
  if(command === "shop") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Shop")
    .setColor("RANDOM")
    .setDescription('Get a list of everything in the shop.')
    .addField('Params', '`v!shop`')
  message.channel.send(LL);
  return
  };
  if(command === "started") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Shop")
    .setColor("RANDOM")
    .setDescription('New to the bot? here are some starter commands!.')
    .addField('Getting a job', '`p!jobs`, to get a list of jobs and `v!jobs (JobName)` to get it')
    .addField('Working', 'After getting a job you can run `v!work` to work')
    .addField('Begging', 'Run `v!beg` to get some quick cash $')
    .addField('Shop', 'Run `v!shop` to get a list of items')
  message.channel.send(LL);
  return
  }
  if(command === "fishing") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Fishing")
    .setColor("RANDOM")
    .setDescription('How to fish!.')
    .addField('Fishing', '`v!fish`, to get a fish')
    .addField('Getting a list of fish', '`v!inv fish` will show you a list of all the fish you have')
  message.channel.send(LL);
  return
  }
  if(command === "phone") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Phone")
    .setColor("RANDOM")
    .setDescription('How to use the phone!.')
    .addField('Searching!', '`v!search {item}` When you search it will give you a desc of that item!')
    .addField('Getting a list of what you can search', '`v!search animals` or `v!search fish`')
  message.channel.send(LL);
  return
  }
  if(command === "gun") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Gun")
    .setColor("RANDOM")
    .setDescription('How to use the gun!.')
    .addField('Robbing people!', '`v!rob (@user)` you can also run `v!help rob` for more help')
    .addField('Hunting animals', '`v!hunt` will allow you to hunt animals! you can run `v!help hunt`')
  message.channel.send(LL);
  return
  }
  if(command === "hunt") {
    var LL = new Discord.MessageEmbed()
    .setTitle("Hunting")
    .setColor("RANDOM")
    .setDescription('How to hunt.')
    .addField('Hunting', '`v!hunt` allows you to hunt animals')
    .addField('Getting a list of the animals you have', '`v!inv animals` Will allow you to check how many animals you have hunted')
  message.channel.send(LL);
  return
  }
}
module.exports.help = {
  name: "help",
};
