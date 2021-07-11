const Discord = module.require('discord.js');
let db = require("quick.db")
var chance = require('chance').Chance();
const ms = require('ms')
module.exports.run = async (client, message, args) => {
    var economy = new db.table('economy')
    var items = new db.table('items')
    let user = message.mentions.members.first();
    var fetchMoney = economy.get(`money_${message.author.id}`)
    let cooldown1 = 120000; //30 min in ms
    let robDaily = await economy.fetch(`robDaily_${message.author.id}`); // Fetching the time when rob is available.

    if (!items.get(`gun_${message.author.id}`)) {
        message.reply("You dont own a gun!")
        return
    }


    if (economy.get(`money_${message.author.id}`) >= 100) {
        let timeObj = (cooldown1 - (Date.now() - robDaily)) // Left

        if (robDaily !== null && cooldown1 - (Date.now() - robDaily) > 0) {
            /* If already worked */

            message.channel.send('You can rob someone in ' + ms(timeObj, { long: true }));
            return;
        }
        var fetchOtherMoney = economy.get(`money_${user.id}`)

        const Username = await client.users.fetch(user.id);
        if (fetchOtherMoney > 5000) {
            /* 50000 Robber outfit */
            if (items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 70) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(LL)
                    return;
                } else if (Winlose > 70) {
                    var LoseOutfit = chance.integer({
                        min: 0,
                        max: 100
                    })
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    if (LoseOutfit <= 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)

                        var WW = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(WW)
                        return;
                    } else if (LoseOutfit > 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)
                        items.delete(`ROutfit_${message.author.id}`)

                        var LL = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(LL)
                        return;
                    }
                }
            }
            /*End of 50000 Robber outfit */

            /* Start of 50000 Normal */
            if (!items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 40) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var WW = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(WW)
                    return;
                } else if (Winlose > 40) {
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                    economy.subtract(`money_${message.author.id}`, Lostamount)
                    economy.add(`money_${user.id}`, Lostamount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Caught")
                        .setColor("RANDOM")
                        .setDescription(`You were caught! You payed ${Username.username} $${Lostamount}`);

                    message.channel.send(LL)
                    return;
                }
            }

            /* End of 50000 normal */
        } else if (fetchOtherMoney > 2000) {
            /* 40000 Robber outfit */
            if (items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 70) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(LL)
                    return;
                } else if (Winlose > 70) {
                    var LoseOutfit = chance.integer({
                        min: 0,
                        max: 100
                    })
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    if (LoseOutfit <= 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)

                        var WW = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(WW)
                        return;
                    } else if (LoseOutfit > 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)
                        items.delete(`ROutfit_${message.author.id}`)

                        var LL = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(LL)
                        return;
                    }
                }
            }
            /*End of 40000 Robber outfit */

            /* Start of 40000 Normal */
            if (!items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 40) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var WW = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(WW)
                    return;
                } else if (Winlose > 40) {
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                    economy.subtract(`money_${message.author.id}`, Lostamount)
                    economy.add(`money_${user.id}`, Lostamount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Caught")
                        .setColor("RANDOM")
                        .setDescription(`You were caught! You payed ${Username.username} $${Lostamount}`);

                    message.channel.send(LL)
                    return;
                }
            }

            /* End of 40000 normal */


        } else if (fetchOtherMoney > 1000) {
            /* 30000 Robber outfit */
            if (items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 70) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(LL)
                    return;
                } else if (Winlose > 70) {
                    var LoseOutfit = chance.integer({
                        min: 0,
                        max: 100
                    })
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    if (LoseOutfit <= 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)

                        var WW = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(WW)
                        return;
                    } else if (LoseOutfit > 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)
                        items.delete(`ROutfit_${message.author.id}`)

                        var LL = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(LL)
                        return;
                    }
                }
            }
            /*End of 30000 Robber outfit */

            /* Start of 30000 Normal */
            if (!items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 40) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var WW = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(WW)
                    return;
                } else if (Winlose > 40) {
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                    economy.subtract(`money_${message.author.id}`, Lostamount)
                    economy.add(`money_${user.id}`, Lostamount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Caught")
                        .setColor("RANDOM")
                        .setDescription(`You were caught! You payed ${Username.username} $${Lostamount}`);

                    message.channel.send(LL)
                    return;
                }
            }

            /* End of 30000 normal */

        } else if (fetchOtherMoney > 500) {
            /* 20000 Robber outfit */
            if (items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 70) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(LL)
                    return;
                } else if (Winlose > 70) {
                    var LoseOutfit = chance.integer({
                        min: 0,
                        max: 100
                    })
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    if (LoseOutfit <= 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)

                        var WW = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(WW)
                        return;
                    } else if (LoseOutfit > 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)
                        items.delete(`ROutfit_${message.author.id}`)

                        var LL = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(LL)
                        return;
                    }
                }
            }
            /*End of 20000 Robber outfit */

            /* Start of 20000 Normal */
            if (!items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 40) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var WW = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(WW)
                    return;
                } else if (Winlose > 40) {
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                    economy.subtract(`money_${message.author.id}`, Lostamount)
                    economy.add(`money_${user.id}`, Lostamount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Caught")
                        .setColor("RANDOM")
                        .setDescription(`You were caught! You payed ${Username.username} $${Lostamount}`);

                    message.channel.send(LL)
                    return;
                }
            }

            /* End of 20000 normal */

        } else if (fetchOtherMoney > 100) {
            /* 10000 Robber outfit */
            if (items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 70) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(LL)
                    return;
                } else if (Winlose > 70) {
                    var LoseOutfit = chance.integer({
                        min: 0,
                        max: 100
                    })
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    if (LoseOutfit <= 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)

                        var WW = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(WW)
                        return;
                    } else if (LoseOutfit > 80) {
                        economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                        economy.subtract(`money_${message.author.id}`, Lostamount)
                        economy.add(`money_${user.id}`, Lostamount)
                        items.delete(`ROutfit_${message.author.id}`)

                        var LL = new Discord.MessageEmbed()
                            .setTitle("Caught")
                            .setColor("RANDOM")
                            .setDescription(`You were caught! You payed ${Username.username} $${Lostamount} and lost your Robber outfit. :(`);

                        message.channel.send(LL)
                        return;
                    }
                }
            }
            /*End of 10000 Robber outfit */

            /* Start of 10000 Normal */
            if (!items.get(`ROutfit_${message.author.id}`)) {
                var Winlose = chance.integer({
                    min: 0,
                    max: 100
                })
                var WinAmount = chance.integer({
                    min: 0,
                    max: fetchOtherMoney * 0.5
                })

                if (Winlose <= 40) {
                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time
                    economy.add(`money_${message.author.id}`, WinAmount)
                    economy.subtract(`money_${user.id}`, WinAmount)

                    var WW = new Discord.MessageEmbed()
                        .setTitle("Win")
                        .setColor("RANDOM")
                        .setDescription(`You succesfully robbed ${Username.username}, For ${WinAmount}!`);

                    message.channel.send(WW)
                    return;
                } else if (Winlose > 40) {
                    var Lostamount = chance.integer({
                        min: 1000,
                        max: 5500
                    })

                    economy.set(`robDaily_${message.author.id}`, Date.now()); // Now time

                    economy.subtract(`money_${message.author.id}`, Lostamount)
                    economy.add(`money_${user.id}`, Lostamount)

                    var LL = new Discord.MessageEmbed()
                        .setTitle("Caught")
                        .setColor("RANDOM")
                        .setDescription(`You were caught! You payed ${Username.username} $${Lostamount}`);

                    message.channel.send(LL)
                    return;
                }
            }

            /* End of 10000 normal */

        } else {
            message.channel.send(`${Username.username} is to poor to be robbed! Too bad for them to be honest`)
        }
    }
    else {
        message.channel.send("You need atleast 200 to rob someone!")
    }
}
module.exports.help = {
    name: 'rob'
}