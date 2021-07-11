let Discord = require("discord.js");
let fs = require("fs")
let db = require("quick.db")
const economy = new db.table('economy')

let client = new Discord.Client();
client.commands = new Discord.Collection();
const config = require("./config.js")
const it = require("./items.js")
client.status = config.status;
var te = it.Living.Animals
console.log(te)
fs.readdir("./cmds/admin/", (err, files) => {
    if (err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("No commands found...")
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./cmds/admin/${f}`)
        console.log(`${f} loaded`)
        client.commands.set(props.help.name, props);
    })
})
fs.readdir("./cmds/", (err, files) => {
    if (err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("No commands found...")
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`)
        console.log(`${f} loaded`)
        client.commands.set(props.help.name, props);
    })
})
fs.readdir("./cmds/basic/", (err, files) => {
    if (err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("No commands found...")
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./cmds/basic/${f}`)
        console.log(`${f} loaded`)
        client.commands.set(props.help.name, props);
    })
})
client.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let prefix = config.PREFIX;
  if (message.author.bot || !message.content.startsWith(prefix)) return;
  if (economy.get(`Banned_${message.author.id}`)) {
      return message.channel.send("You are banned from using Veconomy")
  }
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let args = messageArray.slice(1)
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client, message, args);
})
client.on("ready", () =>{
    client.user.setPresence({
        status: 'online',
        activity: {
            name: config.status,
            type: 'WATCHING',
            url: 'https://www.twitch.tv/'
        }
    })
 });
 
client.login(config.TOKEN)

