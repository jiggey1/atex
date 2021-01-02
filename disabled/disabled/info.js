const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "info",
    category: "disabled",
    description: "Gonner",
    run: async (client, message, args, fn) => {

        const infoEmbed = new MessageEmbed()
        .setTitle("Bot Is Unavailable  :warning:")
        .setColor("DARK_RED")
        .addField("Atex Maintenance", "Atex is undergoing severe maintenance.")
        .addField("Services Currently Unavailable", "All commands, services and moderation tools will be offline.")
        .setFooter("Severe Atex Maintenance.")
        message.channel.send(infoEmbed).then(m => (m.delete({timeout: 15000})))
    }}