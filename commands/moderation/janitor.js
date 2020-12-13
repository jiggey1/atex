const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "janitor",
    category: "moderation",
    aliases: ["nuke", "purge", "bulkdelete"],
    description: "Nuke Command",
    run: async (client, message, args) => {

        if (message.deletable) {
            message.delete();
        }
        
        let mentionedUser = message.mentions.users.first() || message.author;
        
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You can't delete messages....");
        }
        
        
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Yeah, no. Please enter a valid number above 0. Because deleting 0 messages is pointless.");
        }
        
        
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Sorryy... I can't delete messages.");
        }
        
        let deleteAmount;
        
        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }
        
        const janitor = new MessageEmbed()
        .setTitle("Janitor")
        .setColor("RANDOM")
        .setDescription(`Whew! I just finished sweeping like, ${deleteAmount} messages. I need a coffee...`)
        .setTimestamp()
        message.delete
        
        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(janitor).then(message => message.delete({ timeout: 10000 })))
}}