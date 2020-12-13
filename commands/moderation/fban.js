const Discord = require('discord.js')
module.exports = {
    name: "fban",
    category: "moderation",
    description: "Force Ban Command",
    run: async (client, message, args) => {

    const user = message.mentions.users.first();
    
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send("There has been an error. Make sure you, and I have the right permissions to ban people. Also make sure its a valid ping and my role is NOT below the members.");
    }
        message.guild.members.ban(user);
        message.channel.send("User Has Been Banned.")
}}