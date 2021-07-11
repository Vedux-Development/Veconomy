const Discord = module.require('discord.js');
let db = require("quick.db")
const economy = new db.table('economy')
module.exports.run = async (client, message, args) => {

    const fetchJob = economy.get(`job_${message.author.id}`)
    if(fetchJob) {
        message.channel.send("You already have a job!")
        return
    }

    if(!args[0]) {
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Job list')
	.setAuthor('Some name')
	.setDescription('v!jobs {Jobname}')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Drive-through-worker', value: '$17 H/'}, //Job 1
		{ name: 'Discord-mod', value: '$20 2H/'}, //Job 2
		{ name: 'Mailman', value: '$265  D/' }, // Job 3
	)
	.setTimestamp()
	.setFooter('Jobs');
    message.channel.send(exampleEmbed)
    return;
    }
    if(args[0] === "Drive-through-worker"){
        economy.set(`job_${message.author.id}`, 1)
        message.channel.send("You are now a Drive through worker! You can run v!work to get money")
        return;
    }
    if(args[0] === "Discord-mod"){
        economy.set(`job_${message.author.id}`, 2)
        message.channel.send("You are now a Discord mod! You can run v!work to get money")
        return;
    }
    if(args[0] === "Mailman"){
        economy.set(`job_${message.author.id}`, 3)
        message.channel.send("You are now a Mailman! You can run v!work to get money")
        return;
    }
}
module.exports.help = {
  name: 'jobs'
}
