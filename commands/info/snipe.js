const { id } = require('common-tags');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const db = require('quick.db');

module.exports = {
    name: "snipe",
    category: "info",
    description: "Snipe Command",
    run: async (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.channel.send("You Have No Permissions To Run This Command. Permission Needed : \"MANAGE_MESSAGES\".")
        }
    let msg = db.get(`snipemsg_${message.channel.id}`)
    let senderid = db.get(`snipesender_${message.channel.id}`)
    if(!msg) {
        return message.channel.send(`Nothing To Snype..`)
    }

    let embed = new MessageEmbed()
    .setTitle('Sniped From : ' + client.users.cache.get(senderid).username)
    .setDescription(msg)
    .setColor("AQUA")
    .setTimestamp()
    message.channel.send(embed)
}
}