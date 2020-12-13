const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "sinfo",
    category: "info",
    aliases: ["serverinfo"],
    description: "Sends Server Information",
    run: async (client, message, args) => {

let embed = new MessageEmbed()
            .setColor("RANDOM")
            .addField("Server Info [Simple]", `${message.guild}'s Information`)
            .setImage(message.guild.iconURL)
            .addField("Owner", `The Server Owner Is: ${message.guild.owner}`)
            .addField("Member Count", `This Server Holds ${message.guild.memberCount} Members.`)
            .addField("Emoji Count", `This Server Holds ${message.guild.emojis.cache.size} Custom Emoji's.`)
            .addField("Roles Count", `This Server Holds ${message.guild.roles.cache.size} Roles.`)            

        message.channel.send(embed)

    }}