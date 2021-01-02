const { MessageEmbed} = require('discord.js')

module.exports = {
    name: "changes",
    category: "info",
    aliases: ["changes"],
    description: "Help Command",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setTitle("Changelog | Current Version: 1.1.5")
        .setColor('RANDOM')
        .addField("Maintenance", "Atex was undergoing maintenance. This did not add any commands, but instead improved stability and has left room for improvement in the near future. The blackjack and minesweeper commands have both been disabled. Soon Atex will be migrating to a locally hosted server.")
        .addField("v1.1.5:", "- Added Some More Games (8Ball, Blackjack and Minesweeper.). \n- Fixed some typing errors.\n- Cleaned Up My Code.\n")
        .addField("v1.1:", "- Brand New Help Menu \n- Disabled prefix command due to a formatting bug.\n- Cleaned Up My Code Behind The Scene.\n- Added this command and menu.\n- Changed Profile Pic (It means Atex in Japanese).")
        message.channel.send(embed).then(m => {m.delete({ timeout: 100000})})

    }}