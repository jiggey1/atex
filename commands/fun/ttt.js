const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const { tictactoe } = require('reconlx')

module.exports = {
    name: "tictactoe",
    category: "fun",
    aliases: ["ttt"],
    description: "TTT Command",
    run: async (client, message, args) => {

        const member = message.mentions.members.first()
        if(!member) {
            const errorEmbed = new MessageEmbed()
            .setTitle("Syntax Error!")
            .setDescription("Correct Usage : >tictactoe @someone")
            return message.channel.send(errorEmbed).then(m => ({ timeout: 10000}))
        }

        new tictactoe({
            player_two: member,
            message: message
        })

    }}