const Discord = require('discord.js')
module.exports = {
    name: "fkick",
    category: "moderation",
    description: "Force Kick Command",
    run: async (client, message, args) => {

    const member = message.mentions.members.first();
    
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("There has been an error. Make sure you, and I have the right permissions to ban people. Also make sure its a valid ping and my role is NOT below the members.");
    }
        member.kick();
        message.channel.send("User Has Been Kicked.")
}}