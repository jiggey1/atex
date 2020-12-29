const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "invite",
    category: "info",
    description: "Sends Invite Link",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setTitle("Invite This Bot To Your Server Too!")
        .setDescription("https://discord.com/oauth2/authorize?client_id=785555552256262174&scope=bot&permissions=8")
        .setFooter("Permissions Required : Administrator")
        message.channel.send(embed).then(message => {message.delete({ timeout:20000})})
    }}