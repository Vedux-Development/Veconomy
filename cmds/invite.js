const Discord = module.require('discord.js');

module.exports.run = async (client, message, args) => {
  let inviteEmbed = new Discord.MessageEmbed()
    .setDescription("**[invite link](https://discord.com/api/oauth2/authorize?client_id=861874122190356511&permissions=339024&scope=bot)** for Veconomy.")
    .setColor(16752128)
    .setFooter("Veconomy | Invite Link")
    .setAuthor("Invite Link ", null, null)
  message.channel.send(inviteEmbed);
}
module.exports.help = {
  name: 'invite'
}
