const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "faq",
    category: "info",
    description: "FaQ Command",
    run: async (client, message, args) => {

        if (message.guild.id !== '656987074196406303') {
            message.delete()
            return;
        }
        
        const embed = new MessageEmbed()
        .setTitle("Frequently Asked Questions (FaQ)")
        .setDescription("**My Torrent File Won't Download**\nMake sure you have uTorrent (or similar) installed, and try again. if the error persists, make a ticket!\n**The Site Won't Load**\nWe may be having some issues, please use [command disabled] to check the status of Snotrap.\n\n__More Coming Soon__")
        .setTimestamp()
        .setFooter("FaQ Menu || Crakken by jiggey#4704")
        message.channel.send(embed)
    }}