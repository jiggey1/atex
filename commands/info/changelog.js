const { MessageEmbed} = require('discord.js')

module.exports = {
    name: "changes",
    category: "info",
    aliases: ["changes"],
    description: "Help Command",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setTitle("Changelog | Current Version: 1.1")
        .setColor('RANDOM')
        .addField("v1.1:", "- Brand New Help Menu \n- Disabled prefix command due to a formatting bug.\n- Cleaned Up My Code Behind The Scene.\n- Added this command and menu.\n- Changed Profile Pic (It means Atex in Japanese).")
        message.channel.send(embed).then(m => {m.delete({ timeout: 20000})})

    }}